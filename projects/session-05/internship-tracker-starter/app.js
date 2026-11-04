import {STATUSES, DEMO_APPLICATIONS, addApplication, updateApplicationStatus, filterByStatus, summarizeApplications} from './tracker.js';

let applications = DEMO_APPLICATIONS.map(record => ({...record}));
const form = document.querySelector('#application-form');
const list = document.querySelector('#application-list');
const filter = document.querySelector('#status-filter');
const summary = document.querySelector('#summary-counts');
const resultCount = document.querySelector('#result-count');
const message = document.querySelector('#message');

function option(value) {
  const item = document.createElement('option');
  item.value = value;
  item.textContent = value;
  return item;
}

filter.append(option('All'), ...STATUSES.map(option));
form.elements.namedItem('status').append(...STATUSES.map(option));

function render() {
  const totals = summarizeApplications(applications);
  summary.replaceChildren();
  for (const [label, count] of [['Total', totals.total], ...Object.entries(totals.counts)]) {
    const item = document.createElement('div');
    const number = document.createElement('strong');
    const text = document.createElement('span');
    number.textContent = String(count);
    text.textContent = label;
    item.append(number, text);
    summary.append(item);
  }
  const visible = filterByStatus(applications, filter.value);
  resultCount.textContent = `${visible.length} of ${applications.length} applications`;
  list.replaceChildren();
  if (!visible.length) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'No applications match this view. Choose another filter or add a fictional application.';
    list.append(empty);
  }
  for (const record of visible) {
    const card = document.createElement('article');
    card.className = 'application';
    card.dataset.applicationId = record.id;
    const details = document.createElement('div');
    const company = document.createElement('h3');
    const role = document.createElement('p');
    const meta = document.createElement('p');
    const deadline = document.createElement('time');
    company.textContent = record.company;
    role.className = 'role';
    role.textContent = record.role;
    meta.className = 'meta';
    meta.append(document.createTextNode(record.id + ' / Deadline '));
    deadline.dateTime = record.deadline;
    deadline.textContent = record.deadline;
    meta.append(deadline);
    details.append(company, role, meta);
    const label = document.createElement('label');
    label.className = 'status-control';
    const caption = document.createElement('span');
    caption.textContent = 'Status';
    const select = document.createElement('select');
    select.setAttribute('aria-label', `Status for ${record.id}`);
    select.append(...STATUSES.map(option));
    select.value = record.status;
    select.addEventListener('change', () => {
      applications = updateApplicationStatus(applications, record.id, select.value);
      message.textContent = `${record.id} status updated.`;
      message.className = 'success';
      render();
    });
    label.append(caption, select);
    card.append(details, label);
    list.append(card);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  try {
    const input = Object.fromEntries(new FormData(form).entries());
    applications = addApplication(applications, input);
    form.reset();
    message.className = 'success';
    message.textContent = 'Fictional application added. Choose All if your filter hides it.';
    render();
  } catch (problem) {
    message.className = 'error';
    message.textContent = problem.message;
  }
});
filter.addEventListener('change', render);
render();
