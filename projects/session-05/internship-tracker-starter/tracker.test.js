import test from 'node:test';
import assert from 'node:assert/strict';
import {STATUSES, DEMO_APPLICATIONS, validateApplication, addApplication, updateApplicationStatus, filterByStatus, summarizeApplications} from './tracker.js';
const fresh = () => DEMO_APPLICATIONS.map(record => ({...record}));
const fourth = () => ({id: 'APP-004', company: 'Example Studio', role: 'Engineering Intern', deadline: '2027-02-10', status: 'Saved'});

test('starter has three fictional companies, distinct IDs and complete valid records', () => {
  assert.equal(DEMO_APPLICATIONS.length, 3);
  assert.deepEqual(DEMO_APPLICATIONS.map(record => record.company), ['Aster Labs', 'Cedar Systems', 'Orbit Works']);
  assert.equal(new Set(DEMO_APPLICATIONS.map(record => record.id)).size, 3);
  for (const record of DEMO_APPLICATIONS) assert.deepEqual(validateApplication(record), record);
});
test('validation trims fields without changing the input', () => {
  const input = {...fourth(), company: '  Example Studio  ', role: ' Engineering Intern '};
  assert.equal(validateApplication(input).company, 'Example Studio');
  assert.equal(validateApplication(input).role, 'Engineering Intern');
  assert.equal(input.company, '  Example Studio  ');
});
test('adding a valid application returns a new list and leaves the original unchanged', () => {
  const original = fresh();
  const result = addApplication(original, fourth());
  assert.equal(result.length, 4);
  assert.deepEqual(result[3], fourth());
  assert.equal(original.length, 3);
  result[0].company = 'Changed copy';
  assert.equal(original[0].company, 'Aster Labs');
});
test('duplicate application IDs are rejected, including padded IDs', () => {
  assert.throws(() => addApplication(fresh(), {...fourth(), id: ' APP-001 '}), /already exists/);
});
test('every required field must be text and company and role cannot be blank', () => {
  for (const field of ['id', 'company', 'role', 'deadline', 'status']) {
    for (const value of [undefined, null, 12]) assert.throws(() => validateApplication({...fourth(), [field]: value}), /must be text/);
  }
  for (const field of ['company', 'role']) {
    for (const value of ['', '   ', 'x'.repeat(81)]) assert.throws(() => validateApplication({...fourth(), [field]: value}), /1 to 80/);
  }
});
test('IDs reject spaces, lowercase, punctuation and excessive length', () => {
  for (const id of ['', 'app-004', 'APP 004', '<script>', 'A'.repeat(25)]) assert.throws(() => validateApplication({...fourth(), id}), /ID must/);
});
test('deadlines require an ISO calendar date and accept a real leap day', () => {
  for (const deadline of ['2027-02-29', '2027-04-31', '2027-13-01', '2027-01-00', '05/11/2027', '2027-1-05', 'tomorrow']) {
    assert.throws(() => validateApplication({...fourth(), deadline}), /real date/);
  }
  assert.equal(validateApplication({...fourth(), deadline: '2028-02-29'}).deadline, '2028-02-29');
});
test('application statuses must belong to the supplied vocabulary', () => {
  for (const status of ['Unknown', 'applied', 'All', '']) assert.throws(() => validateApplication({...fourth(), status}), /known status/);
  for (const status of STATUSES) assert.equal(validateApplication({...fourth(), status}).status, status);
});
test('updating a known ID changes only its status and preserves the original', () => {
  const original = fresh();
  const updated = updateApplicationStatus(original, 'APP-002', 'Offer');
  assert.deepEqual(updated[1], {...original[1], status: 'Offer'});
  assert.deepEqual(updated[0], original[0]);
  assert.equal(original[1].status, 'Applied');
});
test('updates reject an unknown ID or an unsupported status', () => {
  assert.throws(() => updateApplicationStatus(fresh(), 'MISSING', 'Saved'), /Unknown application ID/);
  assert.throws(() => updateApplicationStatus(fresh(), 'APP-001', 'Rejected'), /known status/);
});
test('All and every known status filter return the expected applications', () => {
  assert.deepEqual(filterByStatus(fresh()), fresh());
  for (const status of STATUSES) assert.deepEqual(filterByStatus(fresh(), status), fresh().filter(record => record.status === status));
  assert.throws(() => filterByStatus(fresh(), 'Anything'), /known status filter/);
});
test('filter results cannot mutate the source list', () => {
  const original = fresh();
  filterByStatus(original, 'Saved')[0].role = 'Changed copy';
  assert.equal(original[0].role, 'Frontend Intern');
});
test('summary counts all statuses and updates after add and status change', () => {
  assert.deepEqual(summarizeApplications(fresh()), {total: 3, counts: {Saved: 1, Applied: 1, Interview: 1, Offer: 0, Closed: 0}});
  const changed = updateApplicationStatus(addApplication(fresh(), fourth()), 'APP-004', 'Offer');
  assert.deepEqual(summarizeApplications(changed), {total: 4, counts: {Saved: 1, Applied: 1, Interview: 1, Offer: 1, Closed: 0}});
});
test('an empty list has empty filters and zero summary counts', () => {
  assert.deepEqual(filterByStatus([], 'All'), []);
  assert.deepEqual(summarizeApplications([]), {total: 0, counts: {Saved: 0, Applied: 0, Interview: 0, Offer: 0, Closed: 0}});
});
test('invalid records, list containers and existing duplicate IDs are rejected', () => {
  for (const value of [null, [], 'application', 1]) assert.throws(() => validateApplication(value), /Application must/);
  for (const value of [null, {}, 'list']) assert.throws(() => filterByStatus(value), /array/);
  assert.throws(() => summarizeApplications([DEMO_APPLICATIONS[0], DEMO_APPLICATIONS[0]]), /unique/);
});
test('user-provided text remains literal application data', () => {
  const input = {...fourth(), company: '<img src=x onerror=alert(1)>', role: 'A&B <Intern>'};
  const result = addApplication([], input);
  assert.equal(result[0].company, input.company);
  assert.equal(result[0].role, input.role);
});
