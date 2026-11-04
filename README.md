# BGS College Hands-On AI Labs

Six guided Google Colab labs for fifth-semester computer science students. Start with a chatbot, then build agents, document retrieval, MCP tools, a coding workflow and an inspectable research agent.

Prepared by **Naga Sai Rahul Vudumula** for the BGS College workshop. Fork this repository, save your own notebooks and keep improving the projects after the workshop.

**Start here:** [Run a notebook](#open-the-labs) · [Fork and save your work](#fork-and-save-your-work) · [AI engineer roadmap](docs/AI_ENGINEER_ROADMAP.md) · [Assignment](assignments/README.md)

## Open the labs

Work through the sessions in order. Each notebook includes explanations above the code cells and comments beside useful lines.

| Session | What you build | Notebook | Run in Colab |
| --- | --- | --- | --- |
| 1 | **StudyBuddy**: prompts, conversation history and structured JSON output | [Session 1](notebooks/BGS_Session_01_Student.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_01_Student.ipynb) |
| 2 | **Campus food agent**: model-selected tools, validated cart operations, coupons and a checked bill | [Session 2](notebooks/BGS_Session_02_Student.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_02_Student.ipynb) |
| 3 | **PDF assistant**: extraction, chunks, embeddings, retrieval and answers with source pages | [Session 3](notebooks/BGS_Session_03_Student.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_03_Student.ipynb) |
| 4 | **MCP food server**: connect a real client, discover tools, read resources and retrieve prompts | [Session 4](notebooks/BGS_Session_04_Student.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_04_Student.ipynb) |
| 5 | **Coding with AI**: inspect a small app, repair its announced quantity defect and add a feature | [Session 5](notebooks/BGS_Session_05_Student.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_05_Student.ipynb) |
| 6 | **Research agent**: plan, approve, research, critique, revise and write with citations | [Session 6](notebooks/BGS_Session_06_Student.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/notebooks/BGS_Session_06_Student.ipynb) |

The buttons above open this repository's published notebooks. The original workshop Drive links remain available in [Lab links](docs/LAB_LINKS.md), so existing classroom QR codes continue to work.

## Fork and save your work

1. Sign in to GitHub and select **Fork** at the top of this repository.
2. Open [Google Colab](https://colab.research.google.com/), choose **File → Open notebook → GitHub**, and paste **your fork's URL**. Select a notebook from `notebooks/`.
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
- **Sessions 1, 2, 3 and 6:** use your own eligible Gemini API account. Create a key through [Google AI Studio](https://aistudio.google.com/apikey), add it in Colab's **Secrets** panel as `GEMINI_API_KEY`, and enable access for that notebook. Creating a client is not proof that a model request succeeded.
- **Session 4:** the core MCP exercises need no model key. Its optional Gemini bridge uses your own eligible account.
- **Session 5:** the Colab coding core needs Node.js 18.20 or later and no model key. Its setup checks the runtime. The optional laptop starter uses Node.js 20 or later; coding-assistant routes have their own account and hardware requirements.
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

These checks validate notebook structure, Python syntax, clean saved outputs, publication metadata and required assets. They do not execute notebook model calls or establish current provider availability. The GitHub workflow runs the same checks without an API key.

## Contributing and reuse

See [CONTRIBUTING.md](CONTRIBUTING.md) for small fixes and student extensions. Use an issue for a reproducible problem, omitting keys and personal data.

Original workshop material in this repository is available under the [MIT licence](LICENSE). Third-party tools, services and linked learning resources retain their own licences and terms. See [attribution](docs/ATTRIBUTION.md).

Prepared by [Naga Sai Rahul Vudumula](https://github.com/Rahul21sai).
