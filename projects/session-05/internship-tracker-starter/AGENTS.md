# Session 5 / Internship Tracker

This is a fictional career-practice app. It records invented applications on the current page. There are no real applications, messages, accounts or backend services.

- Work only in this workshop project folder. Use plain HTML, CSS, JavaScript and Node built-ins; add no package dependencies.
- The supplied add, validation, known-status update, status filter and summary features work. Preserve them and keep tracker.test.js unchanged.
- Build one new feature: search company OR role text, trimmed and case-insensitive, combined with the existing status filter. Empty search keeps all status-matching records. A missing match shows the existing empty state.
- Add/export filterApplications(applications, {status = 'All', search = ''} = {}) in tracker.js. Keep filterByStatus available. Reject non-text search with "Search must be text" in the message.
- Add a labeled search control in index.html. In app.js, connect its input event to rendering and use both filter values. Render user text with textContent or createTextNode.
- Workflow: inspect files and baseline -> brief plan -> propose a feature diff -> human reviews the exact diff -> apply -> run baseline plus new checks -> preview -> save evidence.
- Baseline: node --test tracker.test.js (or npm test), expected 16 passing tests. New search checks remain PENDING until the feature is explicitly applied; then run node --test tracker.test.js search.feature-check.mjs (or npm run test:feature), expected 22 passes.
- Laptop app: node server.mjs (or npm start), then http://127.0.0.1:8085. No npm install is needed.
- Report only observed tests and browser interactions. Record the actual assistant route, or say manual editing/no model used. No model/API key is needed for core work.
- Keep personal applications and credentials out of files, prompts, screenshots and evidence. Ask before changes outside this folder.
