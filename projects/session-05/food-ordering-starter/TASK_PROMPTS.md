# Session 5 task prompts

Use one chosen coding route in the synthetic starter folder. Keep normal file/command approvals enabled. These prompts do not authorise unrelated project changes, credentials, external deployment or real ordering.

## Inspect and plan

Read the project instructions, cart.js and cart.test.js. Run the existing tests and inspect the quantity failure. Do not edit yet. Explain why two ₹40 dosas should produce an ₹80 subtotal, then propose a short minimal repair plan. Add no dependencies and keep existing validation and tests.

## Repair the announced bug

Apply the focused quantity repair in cart.js. Show the exact diff. Run npm test and report the result you actually observe. Do not remove tests or change expected values to make the result pass. Ask before changes outside this workshop folder.

## Review independently

Review the current diff against the requirement that each line totals unit price multiplied by quantity. Check that invalid quantities, unknown items and empty carts still behave as tested. Run npm test. Report concrete issues with file references and observed evidence; do not edit as part of this review.

## Add one small feature

After the baseline repair passes, add a Clear cart action to the page. It should set all quantities to zero, show the existing empty-cart message, set the total to ₹0 and clear the simulated-order draft. Keep keyboard access and existing checks. Describe how you will test the behavior before editing, then show the diff and run the checks you can actually perform. Add no dependency for this feature.

## Explain and document

Update the README with the feature, the exact start/test commands and the results you actually observed. Include one known limitation of this toy app. Do not claim that the project places real orders or that an unexecuted browser test passed.

## Manual browser-assistant route

If the coding client cannot run, paste only the supplied synthetic cart.js and tests into your browser assistant. Ask for a minimal unified diff that repairs quantity handling without changing tests or dependencies. Read the patch, apply it yourself in this workshop folder, then run npm test locally. Record that you applied the patch manually.

## Thirty-second explanation

Show the original failure, the changed multiplication, the same tests passing and a browser interaction with two dosas plus one tea. Explain why that totals ₹100. State the actual client/provider/model route without showing credentials.
