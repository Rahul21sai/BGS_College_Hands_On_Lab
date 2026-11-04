# Session 5 / Feature-building prompts

Use only this fictional workshop project. An assistant is optional; manual editing follows the same workflow. Keep normal tool approvals enabled. Do not paste personal applications or credentials into a prompt.

## Inspect and plan

Read AGENTS.md, tracker.js, app.js, index.html, tracker.test.js and search.feature-check.mjs. Run the 16 baseline checks and describe the working add/status/filter/summary behavior. Do not edit yet. Plan one feature: case-insensitive, trimmed substring search across company OR role, combined with the status filter. Explain the files and checks needed. Add no dependencies.

## Propose the feature diff for review

Return a focused unified diff for tracker.js, app.js and index.html. Add/export filterApplications(applications, {status = 'All', search = ''} = {}), preserve filterByStatus, and reject non-text queries with a Search must be text message. Add a labeled search input, render on its input event and combine status and search. Keep user strings literal through textContent/createTextNode. Preserve all baseline features and tests. Do not apply the diff until I have reviewed it.

## Review independently

Review the proposed diff against the requirements without editing. Check company OR role matching, mixed case, whitespace, status AND search, no results, blank search, invalid query type, unchanged validation and full-list counts. Check selectors/labels and safe text rendering. Identify concrete issues with file references, or state the scope of the review.

## Apply and verify

Apply only the reviewed feature change. Show the actual diff and run node --test tracker.test.js search.feature-check.mjs. Report actual pass/fail counts and any command limitations. Do not delete tests or weaken assertions. Describe the browser interactions still to be performed, including keyboard operation.

## Browser assistant or manual route

If a coding client is unavailable, give a browser assistant only the fictional source and requirements above. Request a proposed diff, read it, apply it yourself with the notebook source editor or local editor, and run the checks yourself. No provider, router, account or API key is needed for manual work. Record the tool/provider/model only if actually used; say manual edit/no model otherwise.

## Explain and document

Update your README/evidence with the search feature, actual commands/results, checked browser behavior and a limitation. In thirty seconds, show the company match, role match, combination with status, unchanged baseline checks and your reviewed diff. Say which work you did and which route actually ran.
