# Session 5 · Internship Application Tracker

Open the [Internship Application Tracker student notebook](https://colab.research.google.com/drive/1qiEkw8hqnnWDIY2R-aZ-ZleL5E-xtCK3) and save your own copy in Drive or your GitHub fork. Use a Python CPU runtime and work in pairs. The core needs Node.js 18.20 or later; the setup cell checks the runtime's actual version. No API key or package installation is needed for this dependency-free project.

The supplied tracker is a working baseline whose checks pass. Build a useful extension: **search by company or role and combine that search with the status filter**. Use only the fictional records supplied for this exercise. The tracker does not submit real job applications and has no login or backend.

The search should ignore case and surrounding whitespace, match part of a company or role, and combine with the selected status. A blank query keeps the status filter; no matches show an empty state. Preserve the working tracker and its full-list summary counts.

Run the notebook's eleven code cells in order:

| Cell ID | What to do |
| --- | --- |
| `setup` | Prepare the embedded project and confirm the runtime. |
| `baseline-tests` | Run the unchanged baseline checks and retain the actual result. |
| `preview-before` | Try the working tracker in the inline preview before extending it. |
| `inspect-context` | Read the project files, instructions and current behavior. |
| `feature-plan` | Define the search/status behavior, acceptance checks and a small implementation plan with your chosen assistant or manual route. |
| `edit-feature` | Preview the focused diff, review it, then explicitly enable the review/apply settings to write the change. |
| `verify-feature` | Run the original checks and the extension checks; inspect the actual results. |
| `preview-after` | Rerun the preview and manually check the completed interaction. |
| `evidence-checklist` | Record only observations you made, including keyboard use and combined filtering. |
| `save-evidence` | Save the plan, changed files, check results, assistant route and one limitation. |
| `download-project` | Use the archive link, or set `DOWNLOAD_NOW = True` for Colab's download prompt. Save your notebook copy too. |

A passing baseline does not complete the extension. The feature stays **PENDING** until the student change has been reviewed and its checks and UI observations are recorded. Do not mark an unobserved behavior as complete.

The inline preview bundles the current project files into a sandboxed frame. Run the preview cell again after editing. It does not require a full app server or a browser connection to Colab localhost. The preview and downloaded project use the same reviewed source files.

For laptop work, use the [Internship Application Tracker starter](../projects/session-05/internship-tracker-starter/) and its instructions with the recommended Node.js 20 or later. Run `npm test` and `npm start` from the project folder, then `npm run test:feature` after applying the reviewed extension. The optional [coding-assistant routes](CODING_ASSISTANT_ROUTES.md) have separate account, provider and hardware requirements. The core exercise also supports a manual route; no client or router integration is claimed as tested by running the project checks.

The Instructor notebook and solution are teaching materials. Share the Student notebook with the class and keep the Instructor copy private.
