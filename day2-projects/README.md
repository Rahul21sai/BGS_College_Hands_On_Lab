# Day 2 class labs and practice options

[Original notes and materials in Google Drive](https://drive.google.com/drive/folders/1BUgG6tOR2yiJOENsBVOIAsnJTuqG26ij) · [Additional Practice in Drive](https://drive.google.com/drive/folders/1ogR4b749a5qSktxNClCzRedbhQFLJk-a) · [All-session project guide](../docs/ALL_SESSION_PROJECTS.md)

Each of Sessions 4, 5 and 6 has **one original class lab and two practice options**. Use the original class lab for **75 minutes**, including setup, demonstration, student work and a checkpoint. The facilitator will choose **one** practice option for a **40-minute demonstration and hands-on slot**, followed by **5 minutes to save and wrap up**. Neither A nor B is preselected. Keep the other option and extensions for later practice.

**Start:** open the class notebook, save your own copy, select a Python CPU runtime and run its setup cells in order. The original Session 6 lab uses your own eligible Gemini account; the original Session 4 and 5 cores need no model key. Practice baselines need no model key. The Session 6 practice notebooks label deterministic outputs separately from optional Gemini role calls.

The Colab links below open shared Drive notebooks. GitHub notebook links provide the source for forking and saving.

### Session 4 · MCP

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · Day 2 core | **MCP food server** — Connect a real FastMCP client, discover and call tools, read resources and retrieve prompts; the core needs no model key. | [Open class lab](https://colab.research.google.com/drive/1wzUF1pSawWzn0VnwYM1nuUyvcZRqn72b) | [GitHub notebook](../notebooks/BGS_Session_04_Student.ipynb) |
| Practice option A · 04A | **Campus data through MCP** — Query a small SQLite event catalogue through real MCP tools; no model key. | [Open practice](https://colab.research.google.com/drive/1gQkJOWdS0X4t8lQn_ozhzuvK8zcHK12Z) | [GitHub notebook](../day2-projects/session-04/04A_Campus_Data_MCP.ipynb) · [Tasks](../day2-projects/session-04/README.md) |
| Practice option B · 04B | **GitHub project explorer through MCP** — Inspect allowlisted public GitHub projects through real MCP; timestamped snapshots first, optional live reads. | [Open practice](https://colab.research.google.com/drive/19e0q1kH7MiaJe3ZWy73C5Xm2GzxBZaSa) | [GitHub notebook](../day2-projects/session-04/04B_GitHub_Project_Explorer_MCP.ipynb) · [Tasks](../day2-projects/session-04/README.md) |

### Session 5 · Coding with AI

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · Day 2 core | **Coding with AI** — Inspect a small Node.js food app, reproduce its announced quantity defect, review a repair and add a feature. | [Open class lab](https://colab.research.google.com/drive/1qiEkw8hqnnWDIY2R-aZ-ZleL5E-xtCK3) | [GitHub notebook](../notebooks/BGS_Session_05_Student.ipynb) |
| Practice option A · 05A | **Chat with your project code** — Retrieve code with file and line references, review a change and run tests; retrieval-only core. | [Open practice](https://colab.research.google.com/drive/1NLHEjWDfQIFDp6OM5tLPT-TaEZ0-VB0N) | [GitHub notebook](../day2-projects/session-05/05A_Chat_With_Project_Code.ipynb) · [Tasks](../day2-projects/session-05/README.md) |
| Practice option B · 05B | **AI code test bench** — Compare implementations with fixed tests; provided candidates are labelled samples, not live model outputs. | [Open practice](https://colab.research.google.com/drive/1FlwCo-fE52rGgP5XLxzPf8juzR_21YJs) | [GitHub notebook](../day2-projects/session-05/05B_AI_Code_Test_Bench.ipynb) · [Tasks](../day2-projects/session-05/README.md) |

### Session 6 · Research workflows

| Role | Project | Open Colab | Source |
| --- | --- | --- | --- |
| Class lab · Day 2 core | **Research agent** — Use Gemini, LangGraph and real in-memory MCP to plan, approve, research, critique, revise and write with citations. | [Open class lab](https://colab.research.google.com/drive/1-suAdNQENTSZdrY8w-UMOSsL2hi-_FSf) | [GitHub notebook](../notebooks/BGS_Session_06_Student.ipynb) |
| Practice option A · 06A | **Evidence-based research crew** — Approve a plan, inspect role analyses and create a cited brief; deterministic baseline, optional Gemini role calls. | [Open practice](https://colab.research.google.com/drive/1APu6TPk4QVtUtX0eaCNu47CtkiXhdAp1) | [GitHub notebook](../day2-projects/session-06/06A_Evidence_Based_Research_Crew.ipynb) · [Tasks](../day2-projects/session-06/README.md) |
| Practice option B · 06B | **Project README writer** — Draft and review a README from project files and actual tests; deterministic baseline, optional Gemini role calls. | [Open practice](https://colab.research.google.com/drive/1EP6A58NzOUHhpVyagOZRl8iRL4L363g_) | [GitHub notebook](../day2-projects/session-06/06B_Project_README_Writer.ipynb) · [Tasks](../day2-projects/session-06/README.md) |

## How to use the session

1. Work in pairs or groups of three and rotate driver, checker and explainer roles.
2. Complete the original class lab, then open the practice option chosen by the facilitator. Run its working baseline once and complete the listed student changes. A baseline run is different from finishing an extension.
3. Keep the changed input/code, observed result and relevant check. Explain one limitation.
4. Ask for a desk check when you reach a notebook checkpoint. Show a tool call, a test result or a source-backed answer.
5. Save your notebook in Drive or your GitHub fork. Download generated project files before a temporary runtime ends. Continue with the other practice option after class.

The root README explains [forking and saving](../README.md#fork-and-save-your-work). Select your own fork in Colab when saving to GitHub.

## Handout and teaching plan

- [Practice pack Word handout with both options](../resources/BGS_Day_2_Hands_On_Project_Pack.docx)
- [Two-hour teaching pattern and desk checkpoints](../docs/DAY_2_TEACHING_PLAN.md)
- [Selected hub projects, pinned source links and adaptation notes](../docs/DAY_2_SOURCE_SELECTION.md)

## Session QR codes

These open the session practice instructions and both practice notebook links. The facilitator identifies which option to use in class; the other remains available for later work.

| Session 4 | Session 5 | Session 6 |
| --- | --- | --- |
| ![Session 4 QR](session-04/session-04-qr.png) | ![Session 5 QR](session-05/session-05-qr.png) | ![Session 6 QR](session-06/session-06-qr.png) |

## Source and runtime notes

Most projects are independent classroom adaptations inspired by [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub). The replacement 4B uses official MCP SDK patterns for exploring public GitHub data. Original source projects have broader prerequisites; these starters focus on the parts students can build and check in class. Relevant attribution and the retained upstream MIT notice are linked in the source notes.

Local execution checks are recorded during preparation. They do not establish current model access or constitute a live Colab/provider rehearsal. If a live service is unavailable, retain the real pending status; do not turn it into a fabricated successful result.
