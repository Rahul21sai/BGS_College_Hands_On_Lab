# BGS Food Lab

A small local food-cart app for Session 5. The menu and orders are fictional. Nothing is submitted or paid.

## Before the session

Use Node.js 20 or later, a modern browser and one instructor-preflighted coding-assistant route. This project has no npm dependencies; `npm install` is not required.

Run `node --version`, then open a terminal in this starter folder.

## Run the app and baseline

```text
npm test
npm start
```

Open http://127.0.0.1:8085. Keep the app terminal open; use a second terminal for tests or the coding assistant. The development server binds only to 127.0.0.1.

The starter intentionally has one announced quantity bug. Expected baseline: six checks pass and the quantity-total check fails. Select two dosas in the app: the intended subtotal is ₹80.

## Guided task

1. Reproduce the failing test and browser behavior.
2. Read AGENTS.md and ask the assistant for a short plan.
3. Request a minimal repair in cart.js, preserving validation and existing tests.
4. Read the actual diff, then run `npm test` again.
5. Repeat the original browser interaction. Two dosas plus one tea should total ₹100.
6. Add one small feature only after the baseline works. Suggested extension: a Clear cart action, with a checked empty-cart behavior.
7. Update this README with the feature and the checks you actually ran.

Use TASK_PROMPTS.md from the lab pack for copyable prompts. If you apply a browser assistant’s patch manually, record that route accurately.

## Evidence to save

Keep the reviewed diff, before/after test output, one checked UI interaction, a short explanation of price × quantity and your actual client/provider/model route. Do not include keys, login tokens or personal project files.

## Timing

10 minutes reproduce, 10 plan, 20 repair, 15 review/tests, 15 small feature/README, 5 save evidence. Installation belongs in pre-work.
