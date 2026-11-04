# Contributing

Fork the repository and work on a branch in your fork. Keep each change focused: explain the problem, what you changed and the checks you ran.

## Good student contributions

- Improve an explanation with a small example.
- Add a test case or document a reproducible setup issue.
- Extend a project after completing its original checkpoints.
- Update a course link or provider setup instruction using its official documentation.

Keep the original teaching exercises and their baseline checks intact unless your change specifically proposes a revised lesson. Student solutions belong in your own fork; do not add teacher answer notebooks here.

## Before opening a pull request

1. Clear notebook outputs and execution counts. Remove transient Colab execution and widget metadata; retain the lesson source and stable cell IDs.
2. Keep credentials in Colab Secrets or private environment configuration. Include only synthetic or appropriately licensed data.
3. Run `python tools/validate_notebooks.py` after installing `nbformat`.
4. If you changed an original lab, update its SHA-256 in `LAB_INDEX.json` after clearing outputs. For a practice starter, update its record in `day1-practice/PROJECT_INDEX.json` or `day2-projects/PROJECT_INDEX.json`. Describe why the source changed.
5. State whether checks used a real provider or an explicitly labelled local test response. Do not claim an unexecuted API call or browser interaction passed.

For a bug report, include the session, relevant cell heading, runtime/package versions and a short error message. Remove tokens, account information and private content before sharing.
