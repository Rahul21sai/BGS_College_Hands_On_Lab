export const STATUSES = Object.freeze(['Saved', 'Applied', 'Interview', 'Offer', 'Closed']);
export const DEMO_APPLICATIONS = Object.freeze([
  Object.freeze({id: 'APP-001', company: 'Aster Labs', role: 'Frontend Intern', deadline: '2027-01-15', status: 'Saved'}),
  Object.freeze({id: 'APP-002', company: 'Cedar Systems', role: 'Data Intern', deadline: '2027-01-20', status: 'Applied'}),
  Object.freeze({id: 'APP-003', company: 'Orbit Works', role: 'Software Intern', deadline: '2027-01-25', status: 'Interview'}),
]);

export function validateApplication(input) {
  if (!input || Array.isArray(input) || typeof input !== 'object') {
    throw new TypeError('Application must be an object.');
  }
  const record = {};
  for (const field of ['id', 'company', 'role', 'deadline', 'status']) {
    if (typeof input[field] !== 'string') throw new TypeError(`${field} must be text.`);
    record[field] = input[field].trim();
  }
  if (!/^[A-Z0-9][A-Z0-9-]{0,23}$/.test(record.id)) {
    throw new RangeError('ID must use 1 to 24 uppercase letters, digits or hyphens.');
  }
  for (const field of ['company', 'role']) {
    if (!record[field] || record[field].length > 80) {
      throw new RangeError(`${field} must contain 1 to 80 characters.`);
    }
  }
  const timestamp = Date.parse(record.deadline + 'T00:00:00Z');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.deadline) || !Number.isFinite(timestamp)
      || new Date(timestamp).toISOString().slice(0, 10) !== record.deadline) {
    throw new RangeError('Deadline must be a real date in YYYY-MM-DD format.');
  }
  if (!STATUSES.includes(record.status)) throw new RangeError('Choose a known status.');
  return record;
}

function readApplications(applications) {
  if (!Array.isArray(applications)) throw new TypeError('Applications must be an array.');
  const records = applications.map(validateApplication);
  if (new Set(records.map(record => record.id)).size !== records.length) {
    throw new RangeError('Application IDs must be unique.');
  }
  return records;
}

export function addApplication(applications, input) {
  const records = readApplications(applications);
  const record = validateApplication(input);
  if (records.some(existing => existing.id === record.id)) throw new RangeError('This application ID already exists.');
  return [...records, record];
}

export function updateApplicationStatus(applications, id, status) {
  const records = readApplications(applications);
  if (!STATUSES.includes(status)) throw new RangeError('Choose a known status.');
  if (!records.some(record => record.id === id)) throw new RangeError('Unknown application ID.');
  return records.map(record => record.id === id ? {...record, status} : record);
}

export function filterByStatus(applications, status = 'All') {
  const records = readApplications(applications);
  if (status !== 'All' && !STATUSES.includes(status)) throw new RangeError('Choose a known status filter.');
  return status === 'All' ? records : records.filter(record => record.status === status);
}

export function summarizeApplications(applications) {
  const records = readApplications(applications);
  const counts = Object.fromEntries(STATUSES.map(status => [status, 0]));
  for (const record of records) counts[record.status] += 1;
  return {total: records.length, counts};
}
