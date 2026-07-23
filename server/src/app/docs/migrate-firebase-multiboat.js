#!/usr/bin/env node
const fs = require('fs');

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
  console.error('Usage: node migrate-firebase-multiboat.js input.json output.json');
  process.exit(1);
}

const source = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const out = JSON.parse(JSON.stringify(source));
const boatId = 'alegria';
const now = Date.now();
const languages = ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'];

const isObject = value => !!value && typeof value === 'object' && !Array.isArray(value);
const deepMerge = (target, patch) => {
  if (!isObject(patch)) return patch === undefined ? target : patch;
  const result = isObject(target) ? { ...target } : {};
  Object.keys(patch).forEach(key => {
    result[key] = isObject(patch[key]) ? deepMerge(result[key], patch[key]) : patch[key];
  });
  return result;
};
const looksLanguageFirst = value => isObject(value) && languages.some(lang => isObject(value[lang]));
const addIdentity = (value, fallback = {}) => ({
  ...(value || {}),
  boatId: value?.boatId || fallback.boatId || boatId,
  ownerId: value?.ownerId || fallback.ownerId || boatId,
});

out.bnFleet = out.bnFleet || {};
out.bnFleet[boatId] = {
  ...(out.bnFleet[boatId] || {}),
  boatId,
  ownerId: out.bnFleet[boatId]?.ownerId || boatId,
  defaultSkipperId: out.bnFleet[boatId]?.defaultSkipperId || 'alegria-default',
  extraServices: out.bnExtraServices || out.bnFleet[boatId]?.extraServices || {},
  modifiedTS: out.bnFleet[boatId]?.modifiedTS || now,
};

out.bnSkippers = out.bnSkippers || {};
out.bnSkippers['alegria-default'] = out.bnSkippers['alegria-default'] || {
  skipperId: 'alegria-default',
  ownerId: out.bnFleet[boatId].ownerId,
  displayName: 'Skipper à affecter',
  dailyRate: Number(out.bnPricingModel?.[boatId]?.skipperPrice || out.bnFleet[boatId]?.defaultSkipperPrice || 0),
  currency: out.bnFleet[boatId]?.currency || 'EUR',
  boatIds: { [boatId]: true },
  active: true,
  createdTS: now,
  modifiedTS: now,
};

const oldOutings = Array.isArray(out.bnOutings)
  ? out.bnOutings.filter(Boolean)
  : Object.values(out.bnOutings || {}).filter(value => value?.slug);
out.bnOutings = {
  [boatId]: oldOutings.reduce((acc, outing, index) => {
    const id = outing.slug || outing.id || `outing-${index + 1}`;
    acc[id] = addIdentity({ ...outing, id, slug: outing.slug || id });
    return acc;
  }, {}),
};

const legacySiteContent = looksLanguageFirst(out.siteContent) ? out.siteContent : (out.siteContent?.[boatId] || {});
out.siteContent = { [boatId]: JSON.parse(JSON.stringify(legacySiteContent || {})) };
languages.forEach(lang => { out.siteContent[boatId][lang] = out.siteContent[boatId][lang] || {}; });

const cms = out.cmsContent || {};
languages.forEach(lang => {
  const target = out.siteContent[boatId][lang];
  const homepage = cms.homepage?.i18n?.[lang];
  if (homepage) out.siteContent[boatId][lang] = deepMerge(target, homepage);
  const boat = cms.boat?.i18n?.[lang];
  if (boat) out.siteContent[boatId][lang].boatPage = deepMerge(out.siteContent[boatId][lang].boatPage, boat);
  const seaToys = cms.seaToys?.[lang] || cms.seaToys?.i18n?.[lang];
  if (seaToys) out.siteContent[boatId][lang].seaToys = deepMerge(out.siteContent[boatId][lang].seaToys, seaToys);
  const calendar = cms.calendar?.i18n?.[lang];
  if (calendar) out.siteContent[boatId][lang].adminCalendar = deepMerge(out.siteContent[boatId][lang].adminCalendar, calendar);
});
if (cms.boat) {
  const { i18n, ...technicalBoat } = cms.boat;
  out.bnFleet[boatId] = deepMerge(out.bnFleet[boatId], technicalBoat);
}

['guestInfo', 'proposalInfo', 'emailBranding'].forEach(root => {
  if (out[root] && !out[root][boatId]) out[root] = { [boatId]: out[root] };
});

out.bnPricingModel = out.bnPricingModel || {};
if (out.bnPricingModel[boatId]) out.bnPricingModel[boatId] = addIdentity(out.bnPricingModel[boatId]);

out.bnBookings = out.bnBookings || {};
Object.keys(out.bnBookings).forEach(id => {
  const record = addIdentity(out.bnBookings[id]);
  record.bookingId = record.bookingId || id;
  record.skipperId = record.skipperId || out.bnFleet[record.boatId]?.defaultSkipperId || '';
  out.bnBookings[id] = record;
});

Object.entries(out.bnAdminOutings || {}).forEach(([id, operationalLog]) => {
  const existing = out.bnBookings[id] || {};
  out.bnBookings[id] = addIdentity({
    ...existing,
    bookingId: existing.bookingId || id,
    outingDate: existing.outingDate || operationalLog.departureDate || null,
    outingType: existing.outingType || operationalLog.outingType || 'Operational outing',
    operationalOnly: existing.customerName ? false : true,
    operationalLog: { ...operationalLog, outingId: operationalLog.outingId || id },
    createdTS: existing.createdTS || operationalLog.createdTS || now,
    modifiedTS: Math.max(existing.modifiedTS || 0, operationalLog.modifiedTS || 0, now),
  });
});

out.bnProposals = out.bnProposals || {};
Object.keys(out.bnProposals).forEach(id => {
  out.bnProposals[id] = addIdentity({ ...out.bnProposals[id], offerId: out.bnProposals[id].offerId || id });
  out.bnProposals[id].skipperId = out.bnProposals[id].skipperId || out.bnFleet[out.bnProposals[id].boatId]?.defaultSkipperId || '';
});

Object.entries(out.bnBookingEvents || {}).forEach(([bookingId, events]) => {
  if (!out.bnBookings[bookingId]) return;
  out.bnBookings[bookingId].events = deepMerge(out.bnBookings[bookingId].events, events);
});
Object.entries(out.bnProposalEvents || {}).forEach(([offerId, events]) => {
  if (!out.bnProposals[offerId]) return;
  out.bnProposals[offerId].events = deepMerge(out.bnProposals[offerId].events, events);
});
Object.entries(out.bnNotifications || {}).forEach(([eventId, event]) => {
  if (event.bookingId && out.bnBookings[event.bookingId]) {
    out.bnBookings[event.bookingId].events = deepMerge(out.bnBookings[event.bookingId].events, { [eventId]: event });
  } else if (event.offerId && out.bnProposals[event.offerId]) {
    out.bnProposals[event.offerId].events = deepMerge(out.bnProposals[event.offerId].events, { [eventId]: event });
  } else {
    out.bnFleet[boatId].events = deepMerge(out.bnFleet[boatId].events, { [eventId]: event });
  }
});

Object.keys(out.backendfeedbacks || {}).forEach(id => {
  const feedback = out.backendfeedbacks[id];
  const booking = out.bnBookings[feedback.bookingId] || {};
  out.backendfeedbacks[id] = addIdentity(feedback, booking);
});

[
  'bnAdminOutings', 'bnBookingEvents', 'bnExtraServices', 'bnNotifications',
  'bnProposalEvents', 'cmsContent', 'cmsContentMeta', 'siteContentMeta',
  'translationAudit',
].forEach(root => delete out[root]);

fs.writeFileSync(outputPath, JSON.stringify(out, null, 2) + '\n');
console.log(JSON.stringify({
  outputPath,
  roots: Object.keys(out),
  boats: Object.keys(out.bnFleet || {}),
  skippers: Object.keys(out.bnSkippers || {}),
  bookings: Object.keys(out.bnBookings || {}).length,
  proposals: Object.keys(out.bnProposals || {}).length,
}, null, 2));
