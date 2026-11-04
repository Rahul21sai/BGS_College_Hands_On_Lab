# Internship Tracker / Session 5

Build a useful feature on top of a working application. The three fictional companies are Aster Labs, Cedar Systems and Orbit Works. Each record has an application ID, company, role, ISO deadline and one of Saved, Applied, Interview, Offer or Closed.

## Local setup

Use Node.js 20 or later on a laptop and a modern browser. The Colab companion supports its preflighted Node.js 18.20+ runtime. Run `node --version` first. No packages, API keys, accounts or installation commands are required for this project.

Open a terminal in this folder:

```text
node --test tracker.test.js
node server.mjs
```

The fresh starter passes all **16 baseline tests**. Open http://127.0.0.1:8085 and keep that server terminal open. Use another terminal for checks. `npm test` and `npm start` are optional aliases; `npm install` is unnecessary. The server binds only to 127.0.0.1.

## Working baseline

Add a fictional application, reject missing fields/duplicate IDs/invalid dates, update an existing application to a known status, filter by status, and inspect total/per-status counts. Counts summarize the full list, including applications hidden by the current filter. Data lives in page memory: reloading restores the three examples. No real application is submitted; there is no login, email or backend.

## Student feature: company and role search

Add a labeled search input. Match a substring in company **or** role, ignore letter case, and trim surrounding whitespace. Combine search with the selected status. Blank search preserves the status filter. A missing match uses the empty state. Preserve add/update/validation/count behavior and literal text rendering.

Export `filterApplications(applications, {status = 'All', search = ''} = {})` from tracker.js and use it in app.js. Keep `filterByStatus` available. Reject a non-text search with a `Search must be text` message. The feature requirements and explicit checks are in search.feature-check.mjs; that file is deliberately outside the default baseline test command because search is new work.

Follow **inspect -> plan -> review the proposed feature diff -> apply -> tests -> preview -> save**. TASK_PROMPTS.md contains copyable prompts for an optional prepared coding assistant or browser assistant. Manual editing is equally valid. Record which route actually ran; this project calls no model.

After applying your reviewed change:

```text
node --test tracker.test.js search.feature-check.mjs
```

Expect **22 passes**: 16 unchanged baseline checks plus 6 search checks. Test the UI separately: search `DATA`, combine `intern` with Interview, try an empty result, clear the search, then add and update a fictional record. Test keyboard access. Node logic checks do not establish browser behavior.

## Evidence and timing

Save the proposed/reviewed diff, actual baseline and final output, observed UI checks, actual assistant route and one limitation. In Colab, the default Run All leaves the new feature **PENDING** and UI checkboxes unclaimed; edit the source proposal and explicitly apply it after review. Download the project ZIP and save a copy of the notebook before the temporary runtime ends. Rerunning setup preserves existing files. To start fresh, use an unused project-folder name in setup; never overwrite your only edited copy.

Suggested 75 minutes: 10 inspect/baseline/preview, 10 plan, 20 feature proposal and review, 15 apply/tests, 15 browser checks, 5 save/explain.
