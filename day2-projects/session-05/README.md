# Session 5 practical projects

| Project | Open in Colab |
| --- | --- |
| 05A Chat with your project code | [Open notebook](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-05/05A_Chat_With_Project_Code.ipynb) |
| 05B AI code test bench | [Open notebook](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-05/05B_AI_Code_Test_Bench.ipynb) |

Two small Colab projects turn AI coding into code you can inspect and test. Each has a working local baseline and a roughly 40-minute core. Work in pairs and swap the keyboard after the first checkpoint. Run on a Python CPU runtime; neither core needs packages, a model account, Docker or a web server.

## 05A Chat with your project code

**Problem statement:** A student club inherited a three-file event-registration project. Find the code controlling registrations, explain it with file and line references, then use a coding assistant or your own implementation to add a small status feature. Review the diff and prove existing behaviour still works.

- Notebook: [05A_Chat_With_Project_Code.ipynb](05A_Chat_With_Project_Code.ipynb).
- Baseline: eight registration checks pass. Source retrieval is explicitly RETRIEVAL_ONLY and never pretends to be an LLM answer.
- Student work: change the code question and verify references; prepare a grounded assistant request; review and apply status(); repeat the unchanged checks and add one of your own.
- Required status output after S001 takes one of two seats: capacity 2, registered_count 1, remaining 1. Reading status must not change registrations.
- Applying an edit and running the feature check are explicit choices. NOT_RUN is not a completed feature.
- The optional export contains only the synthetic project and evidence. Save it before a temporary runtime ends.

## 05B AI code test bench

**Problem statement:** Different coding suggestions can appear convincing while violating the function contract. Compare expense-splitting implementations with the same fixed checks, review an actual student candidate and report the evidence behind your choice.

- Notebook: [05B_AI_Code_Test_Bench.ipynb](05B_AI_Code_Test_Bench.ipynb).
- Supplied candidates are labelled SAMPLE_IMPLEMENTATION_A and SAMPLE_IMPLEMENTATION_B. They are original workshop examples, not outputs from named AI models.
- Baseline: sample A passes 3 of 10 checks; sample B passes 10 of 10. Failures are captured as scorecard results, so Run all completes normally.
- Expected example: Asha pays 120 INR and Bala 180 INR. Total 300 INR, equal share 100 INR; balances Asha +20, Bala +80, Charan -100. Code uses integer paise.
- Student work: explain two observed failures; obtain and review a candidate using an available assistant or a manual route; record actual provenance; add a new common edge case and a small balance-summary feature.
- The notebook never automatically executes generated text. Students run their own edited Python normally after review; workflow flags are not a security sandbox.

## Evidence to submit

Save your notebook, the code or reviewed diff, observed checks and a short explanation of one limitation. Do not claim a missing feature passed or a model request occurred when it did not. No extra service account is needed: students can use an existing browser assistant, a local coding client or a manual implementation.

## Inspiration and adaptation

Both notebooks were independently written for this BGS classroom exercise. The project patterns were selected from patchy631's [AI Engineering Hub](https://github.com/patchy631/ai-engineering-hub) at commit 042aeb5067384981eeba6a07fa882f436bb1660d:

- [Chat with Code](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/chat-with-code): retained the source-context and answer-verification idea; replaced the upstream vector database, orchestration and hosted-model integration with transparent local source retrieval and a manual assistant prompt.
- [Code Model Comparison](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/code-model-comparison): retained side-by-side comparison with a common evaluation contract; replaced hosted model calls and judge scores with explicitly labelled examples and direct behavioural tests.

The upstream repository is MIT licensed, copyright 2024 patchy631. Its software was read for project selection but was not installed or executed. Original workshop code follows this repository's licence. These notebooks do not establish a new live-provider rehearsal.
