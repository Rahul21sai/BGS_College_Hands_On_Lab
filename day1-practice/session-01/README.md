# Session 1 practice projects

| Colab starter | Open |
| --- | --- |
| 01A Mock interview coach | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-01/01A_Mock_Interview_Coach.ipynb) |
| 01B Support ticket to validated JSON | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-01/01B_Support_Ticket_JSON.ipynb) |

Two small Colab projects extend Session 1's system instructions, message history and structured JSON. Save a Drive copy and run top to bottom. Both start in `TEST_FIXTURE` mode: deterministic Python teaching behavior, **not AI results**. No account, secret, installation, model call or network request is needed for the baseline.

| Project | Problem and expected result | Time |
|---|---|---|
| [01A · Mock Interview Coach](01A_Mock_Interview_Coach.ipynb) | Build a coach that remembers completed answers, supplies a separate system instruction and clears conversation context. Expected fixture result: three labelled exchanges, six history messages and an inspectable five-message final request. A console record works without widgets. | 25–35 min |
| [01B · Support Ticket to Strict JSON](01B_Support_Ticket_JSON.ipynb) | Convert three fictional help-desk requests into category/priority/summary JSON for human review. Expected fixture proposals: network/high, billing/medium, account/low. Reject missing/extra fields, invalid enums, wrong types, overlong summaries and duplicate JSON keys. | 25–35 min |

## Run and prerequisites

- Baseline: Python 3.10+ in Colab or Jupyter; CPU runtime; standard library only. Every code cell has an explanation and expected behavior. Published outputs and execution counts are blank.
- Each notebook is self-contained; do not run one notebook to prepare the other. Run all, inspect the checkpoint, then complete one of its three student changes.
- Optional live engine: add your own `GEMINI_API_KEY` to Colab Secrets, grant notebook access, set `USE_LIVE_MODEL=True`, rerun setup and subsequent cells. Secrets are read only at the first live request. Do not put a key into source or output.
- The live setup pins `google-genai==2.12.0` and preserves Colab's active `google-auth` constraint. The model setting, `gemini-3.5-flash-lite`, matches the original Session 1 lab. Verify account/model access before class; quotas and billing vary. No live model access or model quality is claimed by fixture tests.
- Live mode makes distinct actual requests: one for each completed interview turn or ticket. Request attempts use at most 25 seconds each in a 60-second budget, at most one retry for a transient error, and an eight-attempt notebook cap. No automatic 429 or authentication retry occurs. Live errors/invalid output remain `pending` and `None`; a prepared answer never replaces a failed model response.

## Scope and checkpoints

01A stores successful user/model pairs, keeps full returned model content for the next live request, and leaves history unchanged when a turn fails. The clear control clears future request context and the pending message; it preserves the attempt budget. Previously printed outputs and provider-side records are separate and are not erased by that control. For a new three-turn record, rerun its console cell.

01B requests a strict JSON schema and independently parses/validates the result locally. Every ticket is independent. A valid object is a proposal for human review, not evidence that the category or priority is correct. The fixture deliberately fails on some negated phrases; students explain that limitation. The notebooks create no real ticket, account change, email, refund or other external action.

Submit a notebook copy with engine labels, the requested record/JSON, one rejected or pending example, and a short explanation of one limitation. Use fictional data and remove personal outputs before sharing.

## Source and adaptation notes

Ideas were reviewed in Microsoft's *Generative AI for Beginners*, revision `79a4334e158147d4f36c27d805e0cb163c1e445b`:

- [Prompt Engineering Fundamentals](https://github.com/microsoft/generative-ai-for-beginners/blob/79a4334e158147d4f36c27d805e0cb163c1e445b/04-prompt-engineering-fundamentals/README.md): prompt structure, roles, context and requested formats.
- [Building Chat Applications](https://github.com/microsoft/generative-ai-for-beginners/blob/79a4334e158147d4f36c27d805e0cb163c1e445b/07-building-chat-applications/README.md): system messages and conversation context management.
- [Text Generation Applications](https://github.com/microsoft/generative-ai-for-beginners/blob/79a4334e158147d4f36c27d805e0cb163c1e445b/06-text-generation-apps/README.md): application inputs and text-generation requests.

Exact raw URLs verified with HTTP 200 on 4 November 2026:

- https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/79a4334e158147d4f36c27d805e0cb163c1e445b/04-prompt-engineering-fundamentals/README.md
- https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/79a4334e158147d4f36c27d805e0cb163c1e445b/07-building-chat-applications/README.md
- https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/79a4334e158147d4f36c27d805e0cb163c1e445b/06-text-generation-apps/README.md

The classroom code and examples are independently written adaptations. No upstream code block, full copyrighted implementation or installation script is copied or executed. These sources teach the underlying concepts; they do not endorse this classroom adaptation or establish current Gemini availability.
