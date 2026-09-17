const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function load(pathname = '/', search = '', hash = '', defaultBoat) {
  const location = { pathname, search, hash };
  const window = { location, __BOAT_ID__: defaultBoat, history: {
    state: { retained: true }, replaceState(state, _, url) {
      assert.equal(state.retained, true);
      const parsed = new URL(url, 'https://test.local');
      Object.assign(location, { pathname: parsed.pathname, search: parsed.search, hash: parsed.hash });
    }
  }};
  const exports = {};
  const js = ts.transpileModule(fs.readFileSync('src/app/services/boat-routing.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  vm.runInNewContext(js, { exports, window, URLSearchParams });
  return { api: exports, window };
}
test('legacy deep links retain query, session placeholder and fragment', () => {
  const { api, window } = load('/offer/example', '?payment=success&session_id=cs_test', '#details');
  api.initializeBoatRouting();
  assert.equal(window.location.pathname, '/alegria/offer/example');
  assert.equal(window.location.search, '?payment=success&session_id=cs_test');
  assert.equal(window.location.hash, '#details');
  api.initializeBoatRouting();
  assert.equal(window.location.pathname, '/alegria/offer/example');
});
test('URL boat wins over deployment and legacy query settings', () => {
  const { api } = load('/aurora/bookings/123', '?boat=alegria', '', 'another-boat');
  assert.equal(api.activeBoatId(), 'aurora');
  assert.equal(api.boatBaseHref(), '/aurora');
  assert.equal(api.boatPath('/payment/123?x=1#section'), '/aurora/payment/123?x=1#section');
});
test('root defaults to Alegria; deployment and query remain supported on old URLs', () => {
  assert.equal(load().api.resolveBoatRoute('/').pathname, '/alegria/');
  assert.equal(load('/home', '', '', 'aurora').api.activeBoatId(), 'aurora');
  assert.equal(load('/home', '?boat=aurora').api.activeBoatId(), 'aurora');
});
test('every existing top-level route migrates as a legacy route', () => {
  const { api } = load();
  for (const file of ['src/app/home/home.router.module.ts', 'src/app/login/login.router.module.ts']) {
    for (const match of fs.readFileSync(file, 'utf8').matchAll(/path: '([^']+)'/g)) {
      const route = match[1].replace(/:[^/]+/g, 'test-id');
      assert.equal(api.resolveBoatRoute('/' + route).pathname, '/alegria/' + route);
    }
  }
});
test('invalid/reserved IDs cannot produce external URLs or collide with legacy routes', () => {
  const { api } = load();
  for (const id of ['admin', 'api', 'assets', '../x', '//evil.test', 'a?b', 'a#b', '', 'Boat']) {
    assert.equal(api.validBoatId(id), false);
    assert.throws(() => api.boatPath('/home', id));
  }
});
test('real Angular location strategy generates prefixed links, strips namespace and preserves back/forward', async () => {
  await import('@angular/compiler');
  const { PathLocationStrategy, Location } = await import('@angular/common');
  for (const boat of ['alegria', 'aurora']) {
    const listeners = [];
    const platform = { pathname: `/${boat}/admin/bookings/123`, search: '?x=1', hash: '#info',
      onPopState: cb => (listeners.push(cb), () => {}), onHashChange: () => () => {},
      pushState(_, __, url) { const parsed = new URL(url, 'https://test.local'); this.pathname = parsed.pathname; this.search = parsed.search; this.hash = parsed.hash; },
      replaceState(...args) { this.pushState(...args); }
    };
    const strategy = new PathLocationStrategy(platform, `/${boat}`);
    const location = new Location(strategy);
    assert.equal(location.path(true), '/admin/bookings/123?x=1#info');
    assert.equal(location.prepareExternalUrl('/offer/123'), `/${boat}/offer/123`);
    location.go('/my-bookings', 'view=customer');
    assert.equal(platform.pathname, `/${boat}/my-bookings`);
    assert.equal(platform.search, '?view=customer');
    let popped;
    location.subscribe(event => popped = event.url);
    platform.pathname = `/${boat}/home`; platform.search = ''; platform.hash = '';
    listeners[0]({ type: 'popstate', state: null });
    assert.equal(popped, '/home');
  }
});
test('actual boat context scopes data to the URL and reloads on a CMS boat switch', () => {
  const { api, window } = load('/aurora/admin/site-content', '?boat=alegria', '#pricing');
  let destination;
  window.location.assign = url => destination = url;
  const exports = {};
  const js = ts.transpileModule(fs.readFileSync('src/app/services/boat-context.service.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, experimentalDecorators: true }
  }).outputText;
  vm.runInNewContext(js, { exports, window, require: name => name === '@angular/core' ? { Injectable: () => value => value } : api });
  const context = new exports.BoatContextService();
  assert.equal(context.boatId, 'aurora');
  assert.equal(context.scopedPath('/bnOutings/', '/outing-1/'), 'bnOutings/aurora/outing-1');
  context.setBoatId('alegria');
  assert.equal(destination, '/alegria/admin/site-content?boat=alegria#pricing');
  // The old page keeps its old context until the new page bootstraps.
  assert.equal(context.boatId, 'aurora');
});
