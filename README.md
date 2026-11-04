# BGS College Hands-On AI Labs

Six original class labs, each with two additional practice options, prepared for fifth-semester computer science students. Start with a chatbot, then build agents, document retrieval, MCP tools, a coding workflow and an inspectable research agent.

Prepared by **Naga Sai Rahul Vudumula** for the BGS College workshop. Fork this repository, save your own notebooks and keep improving the projects after the workshop.

**Start here:** [All-session project guide](docs/ALL_SESSION_PROJECTS.md) · [Original notes and materials in Drive](https://drive.google.com/drive/folders/1BUgG6tOR2yiJOENsBVOIAsnJTuqG26ij) · [Additional Practice in Drive](https://drive.google.com/drive/folders/1ogR4b749a5qSktxNClCzRedbhQFLJk-a) · [Day 1 practice](day1-practice/README.md) · [Day 2 projects](day2-projects/README.md) · [AI engineer roadmap](docs/AI_ENGINEER_ROADMAP.md)

## Open the labs

Each session below groups **one original class lab + two practice options**. The class labs for **Sessions 1–3 were completed on Day 1**; their practice options are available for follow-up work.

For **Sessions 4–6 on Day 2**, use the original class lab for **75 minutes**, including setup, demonstration, student work and a checkpoint. The facilitator will choose **one** of that session's two practice options for the next **40-minute demonstration and hands-on slot**, followed by **5 minutes to save and wrap up**. Neither A nor B is preselected. Keep the other option and extensions for later practice.

The Colab links open the shared Google Drive notebooks. Use the **GitHub notebook** links for source, forking and saving your own version. [Lab links](docs/LAB_LINKS.md) also retains the original classroom links and QR codes.

### Session 1 · LLM applications

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · completed on Day 1 | **StudyBuddy** — Use Gemini for role prompts, conversation history and locally validated JSON. | [Open class lab](https://colab.research.google.com/drive/1r886hRlH6J7TVzDWfmxzbohDI7yfCjFT) | [GitHub notebook](notebooks/BGS_Session_01_Student.ipynb) |
| Practice option A · 01A | **Mock interview coach** — Remember chat context and give interview feedback; labelled test fixture first, optional Gemini chat. | [Open practice](https://colab.research.google.com/drive/1p2kk7NjG1OZF0lN1zVn_lDjpP4sJJL3Q) | [GitHub notebook](day1-practice/session-01/01A_Mock_Interview_Coach.ipynb) · [Tasks](day1-practice/session-01/README.md) |
| Practice option B · 01B | **Support ticket to validated JSON** — Convert fictional requests to locally validated JSON; labelled test fixture first, optional Gemini output. | [Open practice](https://colab.research.google.com/drive/1g4rvYkva9igxUolktK1TSzCtyrx-K9xZ) | [GitHub notebook](day1-practice/session-01/01B_Support_Ticket_JSON.ipynb) · [Tasks](day1-practice/session-01/README.md) |

### Session 2 · Agents and tools

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · completed on Day 1 | **Campus food agent** — Use Gemini-selected tools with a validated simulated cart, coupons and a checked bill. | [Open class lab](https://colab.research.google.com/drive/1xSsWCmLuoqVxjaDT4VusVOQ--JFKXzUW) | [GitHub notebook](notebooks/BGS_Session_02_Student.ipynb) |
| Practice option A · 02A | **Campus expense agent** — Track simulated expenses with validated tools and a state trace; scripted decisions first, optional Gemini. | [Open practice](https://colab.research.google.com/drive/1Qgn2b55TtcDIvDFgX7Isj6X4k14QGcC9) | [GitHub notebook](day1-practice/session-02/02A_Campus_Expense_Agent.ipynb) · [Tasks](day1-practice/session-02/README.md) |
| Practice option B · 02B | **Event registration agent** — Check seats, register and cancel in a simulation; scripted decisions first, optional Gemini. | [Open practice](https://colab.research.google.com/drive/17DVWpn5ea6czzqYmNNPstCTlRwpc2DwK) | [GitHub notebook](day1-practice/session-02/02B_Event_Registration_Agent.ipynb) · [Tasks](day1-practice/session-02/README.md) |

### Session 3 · RAG and evaluation

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · completed on Day 1 | **PDF assistant** — Use real Gemini embeddings, Chroma retrieval and answers with source pages; inspect the announced citation-display exercise. | [Open class lab](https://colab.research.google.com/drive/1caHKlFQQIvlsxh5yAS-CSvlkpJTqjxsp) | [GitHub notebook](notebooks/BGS_Session_03_Student.ipynb) |
| Practice option A · 03A | **Cited campus FAQ** — Retrieve campus FAQ passages with source references; lexical retrieval first, optional model answer. | [Open practice](https://colab.research.google.com/drive/14TS_Uw5Ic738D6EW_umEahbAF0D5NW1Y) | [GitHub notebook](day1-practice/session-03/03A_Cited_Campus_FAQ.ipynb) · [Tasks](day1-practice/session-03/README.md) |
| Practice option B · 03B | **RAG evaluation and guards** — Measure evidence, citations and abstention using labelled fixtures and illustrative local guard checks. | [Open practice](https://colab.research.google.com/drive/1h4-8RjVUqND2ByDPrXpPcA623EvvhRfY) | [GitHub notebook](day1-practice/session-03/03B_RAG_Evaluation_And_Guards.ipynb) · [Tasks](day1-practice/session-03/README.md) |

### Session 4 · MCP

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · Day 2 core | **MCP food server** — Connect a real FastMCP client, discover and call tools, read resources and retrieve prompts; the core needs no model key. | [Open class lab](https://colab.research.google.com/drive/1wzUF1pSawWzn0VnwYM1nuUyvcZRqn72b) | [GitHub notebook](notebooks/BGS_Session_04_Student.ipynb) |
| Practice option A · 04A | **Campus data through MCP** — Query a small SQLite event catalogue through real MCP tools; no model key. | [Open practice](https://colab.research.google.com/drive/1gQkJOWdS0X4t8lQn_ozhzuvK8zcHK12Z) | [GitHub notebook](day2-projects/session-04/04A_Campus_Data_MCP.ipynb) · [Tasks](day2-projects/session-04/README.md) |
| Practice option B · 04B | **GitHub project explorer through MCP** — Inspect allowlisted public GitHub projects through real MCP; timestamped snapshots first, optional live reads. | [Open practice](https://colab.research.google.com/drive/19e0q1kH7MiaJe3ZWy73C5Xm2GzxBZaSa) | [GitHub notebook](day2-projects/session-04/04B_GitHub_Project_Explorer_MCP.ipynb) · [Tasks](day2-projects/session-04/README.md) |

### Session 5 · Coding with AI

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · Day 2 core | **Coding with AI** — Inspect a small Node.js food app, reproduce its announced quantity defect, review a repair and add a feature. | [Open class lab](https://colab.research.google.com/drive/1qiEkw8hqnnWDIY2R-aZ-ZleL5E-xtCK3) | [GitHub notebook](notebooks/BGS_Session_05_Student.ipynb) |
| Practice option A · 05A | **Chat with your project code** — Retrieve code with file and line references, review a change and run tests; retrieval-only core. | [Open practice](https://colab.research.google.com/drive/1NLHEjWDfQIFDp6OM5tLPT-TaEZ0-VB0N) | [GitHub notebook](day2-projects/session-05/05A_Chat_With_Project_Code.ipynb) · [Tasks](day2-projects/session-05/README.md) |
| Practice option B · 05B | **AI code test bench** — Compare implementations with fixed tests; provided candidates are labelled samples, not live model outputs. | [Open practice](https://colab.research.google.com/drive/1FlwCo-fE52rGgP5XLxzPf8juzR_21YJs) | [GitHub notebook](day2-projects/session-05/05B_AI_Code_Test_Bench.ipynb) · [Tasks](day2-projects/session-05/README.md) |

### Session 6 · Research workflows

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · Day 2 core | **Research agent** — Use Gemini, LangGraph and real in-memory MCP to plan, approve, research, critique, revise and write with citations. | [Open class lab](https://colab.research.google.com/drive/1-suAdNQENTSZdrY8w-UMOSsL2hi-_FSf) | [GitHub notebook](notebooks/BGS_Session_06_Student.ipynb) |
| Practice option A · 06A | **Evidence-based research crew** — Approve a plan, inspect role analyses and create a cited brief; deterministic baseline, optional Gemini role calls. | [Open practice](https://colab.research.google.com/drive/1APu6TPk4QVtUtX0eaCNu47CtkiXhdAp1) | [GitHub notebook](day2-projects/session-06/06A_Evidence_Based_Research_Crew.ipynb) · [Tasks](day2-projects/session-06/README.md) |
| Practice option B · 06B | **Project README writer** — Draft and review a README from project files and actual tests; deterministic baseline, optional Gemini role calls. | [Open practice](https://colab.research.google.com/drive/1EP6A58NzOUHhpVyagOZRl8iRL4L363g_) | [GitHub notebook](day2-projects/session-06/06B_Project_README_Writer.ipynb) · [Tasks](day2-projects/session-06/README.md) |

The [complete project guide](docs/ALL_SESSION_PROJECTS.md) includes tasks and evidence expectations; a [Word practice guide](resources/BGS_All_6_Sessions_Project_Practice_Guide.docx) is available for sharing. The [Day 2 project pack](day2-projects/README.md) includes both practice options and session QR codes, and the [teaching plan](docs/DAY_2_TEACHING_PLAN.md) explains the 75 + 40 + 5 minute pattern. These classroom adaptations draw on selected [AI Engineering Hub](https://github.com/patchy631/ai-engineering-hub) projects; [source notes](docs/DAY_2_SOURCE_SELECTION.md) record their scope and retained licence notice. Explore [further project repositories](docs/AI_PROJECT_SOURCE_DIRECTORY.md) after the workshop.

## Fork and save your work

1. Sign in to GitHub and select **Fork** at the top of this repository.
2. Open [Google Colab](https://colab.research.google.com/), choose **File → Open notebook → GitHub**, and paste **your fork's URL**. Select a class notebook from `notebooks/` or a practice notebook from `day1-practice/` or `day2-projects/`.
3. Connect to a Python CPU runtime. Run the setup cell, then continue from top to bottom. A GPU is not required for these workshop labs.
4. Save changes with **File → Save a copy in GitHub**, selecting your fork, branch and notebook path. If that option needs account access, complete Google's own consent flow yourself.
5. Alternatively, use **File → Save a copy in Drive** to practise privately. A Drive copy does not automatically update your GitHub fork or receive later repository changes.
6. After completing a session, save your explanation, observed results and one useful improvement. Use GitHub's **Sync fork** when you want upstream updates, reviewing any differences first.

You can also open a particular forked notebook with:

```text
https://colab.research.google.com/github/YOUR_GITHUB_USERNAME/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_01_Student.ipynb
```

Replace the username and, if necessary, the branch name. Opening a notebook does not execute its code; choose the runtime and run its cells explicitly.

## Before running

- **Python:** basic functions, dictionaries and reading a short error message will help. The notebooks install their own dependencies; start with the supplied setup cells.
- **Original class labs for Sessions 1, 2, 3 and 6:** use your own eligible Gemini API account. Create a key through [Google AI Studio](https://aistudio.google.com/apikey), add it in Colab's **Secrets** panel as `GEMINI_API_KEY`, and enable access for that notebook. Creating a client is not proof that a model request succeeded.
- **Session 4 class lab:** the core MCP exercises need no model key. Its optional Gemini bridge uses your own eligible account.
- **Session 5 class lab:** the Colab coding core needs Node.js 18.20 or later and no model key. Its setup checks the runtime. The optional laptop starter uses Node.js 20 or later; coding-assistant routes have their own account and hardware requirements.
- **Practice options:** the supplied baselines need no model key. Use the notebook's engine label to distinguish fixtures, scripted decisions, retrieval and deterministic workflows from any optional live model calls.
- Account eligibility, API quota, current model names and package behaviour can change. Course or client access does not imply free, unlimited inference. Review the notebook's `MODEL` settings, including helper-cell defaults where present, against your provider's current model catalogue if access fails.

Keep credentials in Secrets or the documented hidden input. Clear personal outputs before committing a notebook, and do not include credentials in screenshots or reports.

## What to expect during the exercises

- **Session 2 starts with correct quantity handling.** Its completed example is two dosas and one tea: subtotal 100 INR, STUDENT10 discount 10 INR and total 90 INR. Bill inspection is local and does not place another order.
- **Session 3 includes an announced citation-display exercise.** Compare the displayed page with the actual PDF page before trusting a citation. The practice PDF is embedded; an extra copy is available [here](assets/session-03/campus-study-guide.pdf).
- **Session 5 deliberately starts with six passing tests and one failing quantity test.** This is the coding exercise's expected baseline. Inspect the change and repeat the same checks after your repair.
- Food orders, tracking and library policies are fictional classroom examples. They do not submit orders, payments or real library changes.
- Session 6 keeps live source fetching behind the notebook's explicit approval controls. Read the plan before enabling them.

For an interrupted Session 2 order, inspect the pending status and use **Retry pending response** when appropriate. Resending the order can add items again. Reset is an explicit new simulation and does not restore provider quota. If a provider is unavailable, keep the real status rather than inventing a successful answer.

## Session 5 laptop project

The [food-ordering starter](projects/session-05/food-ordering-starter/) is also included for local coding practice. Read its `AGENTS.md` and [setup handout](projects/session-05/food-ordering-starter/SETUP_HANDOUT.md) before using a coding assistant.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/BGS_College_Hands_On_Lab.git
cd BGS_College_Hands_On_Lab/projects/session-05/food-ordering-starter
npm test
npm start
```

The first test run has the announced failing test. Open the local URL printed by the server, work through [TASK_PROMPTS.md](projects/session-05/food-ordering-starter/TASK_PROMPTS.md), and record the results you actually observe. No `npm install` is required for this dependency-free starter. Its tests run in a separate terminal from the app server.

[Colab companion guide](docs/SESSION_05_COLAB_GUIDE.md) explains the inline preview and how to download your edited project. Router examples in the setup handout are optional third-party compatibility demonstrations; they do not supply model subscriptions or inference credit.

## Keep learning after the workshop

Follow the [AI engineer career roadmap](docs/AI_ENGINEER_ROADMAP.md): **44 study weeks, usually 10–12 months at 8–10 hours per week**. It covers Python, SQL, essential maths, ML, deep learning, LLM applications, deployment and internship preparation, with courses, projects and checkpoints. A [Word copy](resources/BGS_AI_Engineer_Career_Roadmap.docx) is included for sharing.

Build three strong portfolio projects: a conventional ML model, a small deep-learning project and an evaluated AI application. Explain your choices, measure actual results and improve the same projects as your skills grow.

The [five-mark Sessions 2–3 assignment](assignments/README.md) adds new problems: a library borrowing agent and a library-policy RAG assistant. The supplied policy PDF is fictional practice data.

## Repository checks

```bash
python -m pip install "nbformat>=5.10,<6"
python tools/validate_notebooks.py
```

These checks validate the original labs and both practice packs: notebook structure, Python syntax, clean saved outputs, publication metadata and required assets. They do not execute notebook model calls or establish current provider availability. The GitHub workflow runs the same checks without an API key.

## Contributing and reuse

See [CONTRIBUTING.md](CONTRIBUTING.md) for small fixes and student extensions. Use an issue for a reproducible problem, omitting keys and personal data.

Original workshop material in this repository is available under the [MIT licence](LICENSE). Third-party tools, services and linked learning resources retain their own licences and terms. See [attribution](docs/ATTRIBUTION.md).

Prepared by [Naga Sai Rahul Vudumula](https://github.com/Rahul21sai).
