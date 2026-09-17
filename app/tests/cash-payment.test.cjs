// Offline regression tests: execute the real TypeScript classes with mocked I/O.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function load(file, exportName) {
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, experimentalDecorators: true
  }}).outputText;
  const exports = {};
  const stub = new Proxy({}, { get: (_, name) => name === 'SITE_CONTENT' ? {} : () => () => {} });
  vm.runInNewContext(code, { exports, require: () => stub, Date, console, window: {} });
  return exports[exportName];
}
const Api = load('src/app/home/bookings/booking-api.service.ts', 'BookingApiService');
const Detail = load('src/app/home/booking-detail/booking-detail.component.ts', 'BookingDetailComponent');
function fixture(admin = false) {
  let record = { bookingId: 'test-booking', payments: { deposit: { paid: true, amount: 100 }, extraServices: { existing: { amount: 20 } } } };
  const requests = [];
  const http = { patch(url, patch) { requests.push({ url, patch }); return { toPromise: async () => {
    for (const [path, value] of Object.entries(patch)) {
      const keys = path.split('/'); let target = record;
      for (const key of keys.slice(0, -1)) target = target[key] ||= {};
      target[keys.at(-1)] = value;
    }
  }}; }};
  const api = new Api(http, {}, {}, {});
  const component = Object.create(Detail.prototype);
  Object.assign(component, { bookingApi: api, bookingId: 'test-booking', editMode: false,
    t: key => key, isCurrentUserAdmin: () => admin, error: '', actionMessage: '' });
  const refresh = async () => {
    component.vm = { bookingId: 'test-booking', display: JSON.parse(JSON.stringify(record)), isAdmin: admin,
      remainingAlegriaRevenue: 900 - (record.alegriaCashReceivedAmount || 0),
      remainingSkipperFee: 300 - (record.skipperCashReceivedAmount || 0),
      alegriaPaidAmount: 100 + (record.alegriaCashReceivedAmount || 0), skipperPaidAmount: record.skipperCashReceivedAmount || 0 };
  };
  component.loadBooking = refresh;
  refresh();
  return { component, api, requests, record, refresh };
}
for (const kind of ['Alegria', 'Skipper']) {
  test(`${kind}: cash persists at root, survives refresh, preserves other payments, calls no checkout`, async () => {
    const f = fixture();
    await f.component[`select${kind}Cash`]();
    assert.equal(f.requests.length, 1);
    assert.equal(f.requests[0].url, 'https://adn-dev-4d05d.firebaseio.com/bnBookings/test-booking.json');
    await f.refresh();
    assert.equal(f.component[`is${kind}CashSelected`](), true);
    assert.equal(f.record.payments.deposit.amount, 100);
    assert.equal(f.record.payments.extraServices.existing.amount, 20);
    assert.equal(f.record.payments[kind.toLowerCase()].status, 'cash_selected');
    assert.equal(f.record.payments[kind.toLowerCase()].paid, undefined);
    assert.equal(f.component[kind === 'Alegria' ? 'canConfirmAlegriaCashReceived' : 'canConfirmSkipperPaid'](), false);
    await f.component[`select${kind}Cash`]();
    assert.equal(f.requests.length, 1);
  });
  test(`${kind}: rejected write is not success and never falls through to Stripe`, async () => {
    const f = fixture(); f.api.http.patch = () => ({ toPromise: async () => { throw new Error('Permission denied'); } });
    await f.component[`select${kind}Cash`]();
    assert.equal(f.component.error, 'Permission denied');
    assert.equal(f.component.actionMessage, '');
    assert.equal(f.component[`is${kind}CashSelected`](), false);
    assert.equal(f.component[`selecting${kind}Cash`], false);
  });
  test(`${kind}: admin can confirm partial cash then the remainder after refresh`, async () => {
    const f = fixture(true); const c = f.component;
    const confirm = kind === 'Alegria' ? 'confirmAlegriaCashReceived' : 'confirmSkipperPaid';
    const canConfirm = kind === 'Alegria' ? 'canConfirmAlegriaCashReceived' : 'canConfirmSkipperPaid';
    const remaining = kind === 'Alegria' ? 'remainingAlegriaRevenue' : 'remainingSkipperFee';
    await c[`select${kind}Cash`]();
    c[`admin${kind}CashAmount`] = 50; await c[confirm]();
    assert.equal(c[canConfirm](), true);
    assert.equal(f.record.payments[kind.toLowerCase()].status, 'partially_paid');
    c[`admin${kind}CashAmount`] = c.vm[remaining]; await c[confirm]();
    assert.equal(c.vm[remaining], 0);
    assert.equal(c[canConfirm](), false);
    assert.equal(f.record.payments[kind.toLowerCase()].status, 'paid');
    assert.equal(f.record.payments[kind.toLowerCase()].amountDue, 0);
    assert.equal(f.record.payments.deposit.amount, 100);
  });
  test(`${kind}: customer cannot confirm receipt`, async () => {
    const f = fixture(); await f.component[`select${kind}Cash`]();
    await f.component[kind === 'Alegria' ? 'confirmAlegriaCashReceived' : 'confirmSkipperPaid']();
    assert.equal(f.requests.length, 1);
  });
  test(`${kind}: cash choice is blocked while card checkout is starting`, async () => {
    const f = fixture(); f.component[`paying${kind}`] = true;
    await f.component[`select${kind}Cash`](); assert.equal(f.requests.length, 0);
  });
}
test('cash PATCH does not replace the booking or payment parent', async () => {
  const f = fixture(); await f.component.selectAlegriaCash();
  const patch = f.requests[0].patch;
  assert.equal(patch.payments, undefined);
  assert.equal(patch['payments/alegria/status'], 'cash_selected');
  assert.equal(patch['payments/deposit/paid'], undefined);
});
test('invalid ids reject before any request', async () => {
  const f = fixture(); await assert.rejects(f.api.updateCashPayment('bad/id', {}));
  assert.equal(f.requests.length, 0);
});
const Financial = load('src/app/home/bookings/booking-financial.service.ts', 'BookingFinancialService');
test('cash confirmation does not count the existing deposit twice', async () => {
  const f = fixture(true);
  Object.assign(f.record, { source: 'direct', proposalBoatPrice: 1000, skipperCashAmount: 300, depositPaid: true, depositPaidAmount: 100 });
  await f.refresh(); await f.component.selectAlegriaCash();
  f.component.adminAlegriaCashAmount = 50; await f.component.confirmAlegriaCashReceived();
  assert.equal(f.record.payments.alegria.amountPaid, 50);
  assert.equal(f.record.balancePaidAmount, 50);
  const totals = new Financial().build(f.record);
  assert.equal(totals.alegriaPaid, 150);
  assert.equal(totals.alegriaRemaining, 850);
});
test('pending cash does not reduce financial balances', async () => {
  const f = fixture();
  Object.assign(f.record, { source: 'direct', proposalBoatPrice: 1000, skipperCashAmount: 300, depositPaid: true, depositPaidAmount: 100 });
  const before = new Financial().build(f.record);
  await f.refresh(); await f.component.selectAlegriaCash(); await f.component.selectSkipperCash();
  const after = new Financial().build(f.record);
  assert.equal(after.alegriaRemaining, before.alegriaRemaining);
  assert.equal(after.skipperRemaining, before.skipperRemaining);
  assert.equal(after.fullyPaid, false);
});
