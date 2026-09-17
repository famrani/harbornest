#!/usr/bin/env node
const fs = require('fs');

const [dumpPath] = process.argv.slice(2);
if (!dumpPath) {
  console.error('Usage: node validate-release105.js firebase-dump-release105-multiboat-stripe-fixed.json');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));
const removed = [
  'bnAdminOutings', 'bnBookingEvents', 'bnExtraServices', 'bnNotifications',
  'bnProposalEvents', 'cmsContent', 'cmsContentMeta', 'siteContentMeta',
  'translationAudit',
];
const required = [
  'backendcalendar', 'backendfeedbacks', 'backendpayments', 'backendusers',
  'bnBookings', 'bnFleet', 'bnOutings', 'bnPricingModel', 'bnProposals',
  'bnSkippers', 'emailBranding', 'guestInfo', 'proposalInfo', 'siteContent',
];
const errors = [];

required.forEach(key => {
  if (!data[key] || typeof data[key] !== 'object') errors.push(`Missing required root: ${key}`);
});
removed.forEach(key => {
  if (Object.prototype.hasOwnProperty.call(data, key)) errors.push(`Removed root still present: ${key}`);
});
Object.entries(data.bnBookings || {}).forEach(([id, value]) => {
  if (!value.boatId) errors.push(`Booking ${id} has no boatId`);
  if (!value.ownerId) errors.push(`Booking ${id} has no ownerId`);
});
Object.entries(data.bnProposals || {}).forEach(([id, value]) => {
  if (!value.boatId) errors.push(`Proposal ${id} has no boatId`);
  if (!value.ownerId) errors.push(`Proposal ${id} has no ownerId`);
});
Object.entries(data.backendpayments || {}).forEach(([id, value]) => {
  if (!value.boatId) errors.push(`Payment ${id} has no boatId`);
  if (!value.ownerId) errors.push(`Payment ${id} has no ownerId`);
});
Object.entries(data.backendcalendar || {}).forEach(([boatId, days]) => {
  Object.values(days || {}).forEach(day => Object.entries(day || {}).forEach(([id, value]) => {
    ['customerName', 'customerEmail', 'email', 'phone'].forEach(field => {
      if (value[field]) errors.push(`Calendar ${boatId}/${id} leaks ${field}`);
    });
  }));
});
if (Number(data.bnPricingModel?.alegria?.skipperPrice) !== 300) {
  errors.push('Alegria skipperPrice must be 300');
}

console.log(JSON.stringify({
  ok: errors.length === 0,
  errors,
  roots: Object.keys(data).sort(),
  boats: Object.keys(data.bnFleet || {}),
  skippers: Object.keys(data.bnSkippers || {}),
  bookings: Object.keys(data.bnBookings || {}).length,
  proposals: Object.keys(data.bnProposals || {}).length,
  payments: Object.keys(data.backendpayments || {}).length,
}, null, 2));
process.exit(errors.length ? 1 : 0);
