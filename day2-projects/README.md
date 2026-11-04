# Day 2 hands-on project pack

[Original notes and materials in Google Drive](https://drive.google.com/drive/folders/1BUgG6tOR2yiJOENsBVOIAsnJTuqG26ij) · [All-session project guide](../docs/ALL_SESSION_PROJECTS.md)

Two guided projects for each of Sessions 4, 5 and 6. Start from a working notebook, make the student changes, and prove what changed with actual outputs. Each core has a suggested 40-minute build period; extensions are for faster teams or later practice.

**Start:** open a notebook, save your own copy, select a Python CPU runtime and run its setup cells in order. The default baselines do not require a model key. Session 6 optionally connects your own eligible Gemini account; its deterministic baseline is labelled separately from live model use.

| Session | Project and problem | Colab | Instructions |
| --- | --- | --- | --- |
| 04A | **Campus data through MCP** — Real MCP tools query a small SQLite event catalogue. | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-04/04A_Campus_Data_MCP.ipynb) | [Problem and tasks](session-04/README.md) |
| 04B | **GitHub project explorer through MCP** — Inspect and compare allowlisted public AI project repositories through MCP. | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-04/04B_GitHub_Project_Explorer_MCP.ipynb) | [Problem and tasks](session-04/README.md) |
| 05A | **Chat with your project code** — Retrieve code with file and line references, request a small change and run tests. | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-05/05A_Chat_With_Project_Code.ipynb) | [Problem and tasks](session-05/README.md) |
| 05B | **AI code test bench** — Compare reviewed implementations using the same fixed checks. | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-05/05B_AI_Code_Test_Bench.ipynb) | [Problem and tasks](session-05/README.md) |
| 06A | **Evidence-based research crew** — Approve a plan, inspect independent analyses and produce a source-backed brief. | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-06/06A_Evidence_Based_Research_Crew.ipynb) | [Problem and tasks](session-06/README.md) |
| 06B | **Project README writer** — Write and review documentation from project files and actual test evidence. | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-06/06B_Project_README_Writer.ipynb) | [Problem and tasks](session-06/README.md) |

## How to use the session

1. Work in pairs or groups of three and rotate driver, checker and explainer roles.
2. Run the working baseline once, then complete the listed student changes. A baseline run is different from finishing an extension.
3. Keep the changed input/code, observed result and relevant check. Explain one limitation.
4. Ask for a desk check when you reach a notebook checkpoint. Show a tool call, a test result or a source-backed answer.
5. Save your notebook in Drive or your GitHub fork. Download generated project files before a temporary runtime ends.

The root README explains [forking and saving](../README.md#fork-and-save-your-work). The Colab links above open the published originals; select your own fork in Colab to save there.

## Handout and trainer plan

- [Student and trainer Word handout](../resources/BGS_Day_2_Hands_On_Project_Pack.docx)
- [Two-hour teaching pattern and desk checkpoints](../docs/DAY_2_TEACHING_PLAN.md)
- [Selected hub projects, pinned source links and adaptation notes](../docs/DAY_2_SOURCE_SELECTION.md)

## Session QR codes

These open the session instructions and both notebook links. They are useful for a projector or printed handout.

| Session 4 | Session 5 | Session 6 |
| --- | --- | --- |
| ![Session 4 QR](session-04/session-04-qr.png) | ![Session 5 QR](session-05/session-05-qr.png) | ![Session 6 QR](session-06/session-06-qr.png) |

## Source and runtime notes

Most projects are independent classroom adaptations inspired by [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub). The replacement 4B uses official MCP SDK patterns for exploring public GitHub data. Original source projects have broader prerequisites; these starters focus on the parts students can build and check in class. Relevant attribution and the retained upstream MIT notice are linked in the source notes.

Local execution checks are recorded during preparation. They do not establish current model access or constitute a live Colab/provider rehearsal. If a live service is unavailable, retain the real pending status; do not turn it into a fabricated successful result.
