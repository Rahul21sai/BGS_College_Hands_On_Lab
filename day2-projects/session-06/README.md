# Session 6 practical projects

Two 40-minute guided projects turn the research-workflow lesson into things students can inspect, change and demonstrate. Use a CPU runtime. Each notebook contains its own source data, code, explanations and checks.

| Project | Open in Colab | What you produce |
| --- | --- | --- |
| [06A Evidence-based research crew](06A_Evidence_Based_Research_Crew.ipynb) | [Open 06A](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-06/06A_Evidence_Based_Research_Crew.ipynb) | A cited skill matrix and four-week preparation plan from fictional internship descriptions. |
| [06B Project README writer](06B_Project_README_Writer.ipynb) | [Open 06B](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-06/06B_Project_README_Writer.ipynb) | Markdown documentation grounded in a tiny supplied project and actual unit-test evidence. |

## Start here

1. Save your own notebook copy and run its configuration, setup and definition cells.
2. Keep `USE_LIVE_MODEL=False` for the first run. This is **DETERMINISTIC_WORKFLOW**, a labelled Python workflow. It is not an LLM-agent run and makes no account, model or network request.
3. Read the printed plan, set `APPROVE_PLAN=True` in the configuration cell, rerun that cell, then run the engine and workflow cells. Without approval, the notebook remains `awaiting_approval` and exports no final result.
4. Inspect the role outputs, make one of the student changes, rerun the relevant cells and show the result at the desk checkpoint.
5. Save your notebook and generated Markdown. Set `DOWNLOAD_NOW=True` only when you want the completed result downloaded from Colab.

## 06A problem statement

Students need to turn internship requirements into a preparation plan rather than collect unrelated courses. Build a supervised workflow that reads three saved, fictional role descriptions and a student skills profile, proposes work, waits for approval, produces two independent analyses, checks the workload and writes a source-backed four-week plan. The output must identify information that the sources do not provide.

### Build and demonstrate

- The skill analyst extracts requirements and cites `JD1`, `JD2` or `JD3`. The practice analyst independently reads the same original records and proposes work. It does not copy the other analyst's output.
- The critic checks source IDs and weekly hours. At most one revision can reduce the workload before the writer produces a report. A result that still breaks these checks remains `needs_review`.
- The records are synthetic practice data. They do not establish salary, interview rounds or currently open vacancies.

### Student changes

1. Add a fictional `JD4` requiring a new skill. Show that the skill matrix cites `JD4`.
2. Change `HOURS_PER_WEEK` to `4`, leaving `DRAFT_HOURS_PER_WEEK=8`. Show the critic's finding and one revision reducing the hours.
3. Add a check for an unsupported recommendation or source ID. Explain why a citation label alone does not prove a sentence is supported.

**Desk checkpoint:** show one recommendation, its source, the approved weekly workload and one honest unknown.

## 06B problem statement

A useful project needs documentation that matches what its code actually does. Build a supervised README-writing workflow that examines a tiny supplied Python project, runs its real unit tests and demo, separates code analysis from writing, critiques unsupported claims and saves a corrected Markdown README. Generated text must remain text; it must not be executed as a command.

### Build and demonstrate

- Inspect the three small source files and manifest before running them. The notebook materialises only those reviewed files in a temporary project folder.
- Capture the actual test output and exit code. The baseline has three passing tests and prints `Hello, BGS student!`.
- The analyst lists real source functions; the writer uses the manifest and actual evidence. The critic checks commands, file references, dependency claims and observed test count. At most one revision is allowed.
- A failing edited test remains a failure in the evidence and documentation. It must never be converted into a claimed pass.

### Student changes

1. Add a fourth genuine test, rerun the evidence and workflow, and show that the README reports the new observed count.
2. Change the project name and demo input. Show the corresponding changes in the generated README.
3. Add a critic rule for an unsupported deployment claim or missing setup instruction, and test that rule against an edited draft string.

**Desk checkpoint:** point to a source file, the command that actually ran, the observed test count and the README sentence justified by that evidence.

## Optional actual LLM route

The **LIVE_LLM** route makes separate Gemini requests for the role steps. It is optional for the account-free control-flow exercise and requires your own eligible model account.

- Add `GEMINI_API_KEY` in Colab Secrets and grant this notebook access. Never paste it into visible code or shared output.
- Set `USE_LIVE_MODEL=True`, review the configurable `MODEL` setting and rerun the setup and engine cells. The prepared model ID is a setting to verify for your account, not an access guarantee.
- The live setup uses `google-genai==2.12.0` and preserves active Colab `google-auth` constraints. A private client is created only when an approved role needs a response.
- Requests have a 60-second timeout, five-second start spacing and at most one retry for transient transport/server failures. Authentication, access and quota errors do not automatically retry. Each physical attempt counts toward the engine's eight-attempt budget.
- An unavailable role stays `pending`; successful earlier role outputs are cached. Rerun the workflow cell with the same engine to continue. Do not present a pending output as a finished report. Changing engine settings does not restore provider quota.
- Live wording can vary. Automatic contracts help identify incorrect references and data, but students must still review source support and the generated prose.

The trace labels deterministic processors, actual live calls and cached outputs separately. No live web search, paid search service, local model download, CrewAI installation or public server is required by these adaptations.

## What was verified

Sixteen offline regression checks cover approval, reference rejection, workload revision, actual toy-project test execution, a changed test count, honest failure reporting, bounded retries, quota handling, cached-role resume, the request cap and the one-revision limit. Both complete notebooks also execute in separate local Jupyter kernels after explicitly approving a private test copy.

The optional live route's control flow was checked using explicitly scripted model responses with real SDK configuration objects. No credential, real model request, Colab browser interaction or model-quality evaluation was part of those checks.

## Inspiration and attribution

These are independent classroom implementations inspired by AI Engineering Hub at revision `042aeb5067384981eeba6a07fa882f436bb1660d`:

- [Multi-Agent Deep Researcher](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/Multi-Agent-deep-researcher-mcp-windows-linux): the original combines a search service, CrewAI, a local model and a UI. This adaptation uses a small saved source pack and explicit role contracts.
- [Documentation Writer Flow](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/documentation-writer-flow): the original uses CrewAI, Ollama and an MCP host. This adaptation uses embedded reviewed source files, observed Python test results and a bounded documentation workflow.
- [Upstream MIT licence](https://github.com/patchy631/ai-engineering-hub/blob/042aeb5067384981eeba6a07fa882f436bb1660d/LICENSE), copyright 2024 patchy631. The original upstream install scripts and code are not executed by these notebooks.

Submit your notebook, changed inputs or code, observed checks and a short explanation of one limitation. Keep the engine label visible when showing your result.
