// Run explicitly after applying the reviewed search feature; npm test runs the working baseline.
import test from 'node:test';
import assert from 'node:assert/strict';
import * as tracker from './tracker.js';
const rows = tracker.DEMO_APPLICATIONS.map(record => ({...record}));
function search(options) {
  assert.equal(typeof tracker.filterApplications, 'function', 'Export filterApplications(applications, {status, search}) for this new feature.');
  return tracker.filterApplications(rows, options);
}
test('search matches a company substring without case sensitivity', () => {
  assert.deepEqual(search({search: 'aStEr'}).map(record => record.id), ['APP-001']);
});
test('search also matches role text and trims outer whitespace', () => {
  assert.deepEqual(search({search: '  DATA  '}).map(record => record.id), ['APP-002']);
  assert.equal(search({search: 'intern'}).length, 3);
});
test('empty and whitespace search preserve the status filter', () => {
  assert.deepEqual(search({search: '', status: 'Applied'}).map(record => record.id), ['APP-002']);
  assert.equal(search({search: '   '}).length, 3);
});
test('search combines with status using both conditions', () => {
  assert.deepEqual(search({search: 'intern', status: 'Interview'}).map(record => record.id), ['APP-003']);
  assert.deepEqual(search({search: 'Cedar', status: 'Saved'}), []);
});
test('no match yields an empty list and search leaves input unchanged', () => {
  const before = JSON.stringify(rows);
  assert.deepEqual(search({search: 'no-such-company'}), []);
  assert.equal(JSON.stringify(rows), before);
});
test('search preserves invalid-status validation and rejects a non-text query', () => {
  assert.throws(() => search({status: 'Unknown', search: ''}), /known status filter/);
  assert.throws(() => search({search: 42}), /Search must be text/);
});
