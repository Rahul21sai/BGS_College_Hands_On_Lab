# Day 2 hands-on teaching plan

Use this plan for Sessions 4, 5 and 6. Each two-hour session has two short guided projects. Students begin from a working starter, change it, and show evidence that their changes work.

## The two-hour pattern

| Minutes | Student activity | Trainer activity |
| --- | --- | --- |
| 0–8 | Open both notebooks, save copies and read the two outcomes. | Show what students will produce and confirm the setup. |
| 8–15 | Watch Project A run once; predict one output. | Demonstrate the result and the first small edit. |
| 15–55 | Run, customise and check Project A. Swap the keyboard halfway. | Visit desks and help groups at their current checkpoint. |
| 55–60 | Show one output and explain one changed line or rule. | Ask for evidence and resolve common blockers. |
| 60–67 | Watch Project B run once; identify what is different. | Show the second project's output and task list. |
| 67–107 | Run, customise and check Project B. Rotate roles. | Visit the groups not checked during the first build. |
| 107–115 | Show a test, tool trace or source-backed result. | Select two short demonstrations and discuss one useful limitation. |
| 115–120 | Save work and state the next improvement. | Take a short practical or career question and close with the next step. |

This allocates 80 minutes to building and 13 minutes to checkpoints and demonstrations by students. The time boxes are teaching targets, not a guarantee that every group finishes every extension.

## Organise the room

- Use pairs or groups of three. Assign driver, checker and explainer, rotating between projects.
- Keep a small group number visible on the notebook. Ask groups to show **ready**, **needs help** or **blocked** when you reach them.
- Visit about half the groups during the first build and the rest during the second. If the aisles are crowded, ask one representative to show the team's current cell or result.
- Spend the first minute of a desk check asking the student to change an input and predict the output. A completed Run all is not the whole learning goal.
- Let faster groups attempt the extension while others finish the core. Keep package installation, account setup and environment changes out of the explanation blocks where possible.

## Check learning through the work

**Session 4:** ask students to show tool discovery, a real MCP call, a resource or prompt response, and the data behind the result. For 4A, inspect the SQLite rows. For 4B, inspect the repository source, timestamp and snapshot/live label. A direct Python function call alone does not demonstrate the protocol.

**Session 5:** ask for a code location, the prompt/context supplied to an assistant, a reviewed edit and the same tests before and after the change. Provided sample candidates must remain labelled as samples.

**Session 6:** ask for an approved plan, independent role outputs, critic findings and source references. A deterministic baseline demonstrates workflow control; actual model use must be identified separately in the evidence.

## Before class

1. Open the six notebooks from the [Day 2 project index](../day2-projects/README.md) and save your own copies.
2. Run the core projects in a fresh runtime using the setup notes. Start with the documented baseline and test one student modification.
3. If you plan to demonstrate live Gemini calls, verify the configured model and your account before class. Keep the key in Colab Secrets. Do not share a trainer key across the class.
4. Have the deterministic workflow route available for checking the orchestration if a model service is unavailable. Label it clearly; do not present it as a live model result.
5. Ask students to save the notebook and their changed code. Runtime files are temporary, while a saved Drive or GitHub copy preserves the notebook.

## Evidence to collect

For each project, students should keep:

- the input or requirement they changed;
- the changed code, tool or prompt;
- the actual result and relevant check;
- a short explanation of what the result proves and one limitation.

The notebook task lists define the project-specific checkpoints. Use those for desk checks instead of adding a long written theory exercise.

For personal interview questions, share only experiences you actually had. Keep this segment short enough that students retain their build time.
