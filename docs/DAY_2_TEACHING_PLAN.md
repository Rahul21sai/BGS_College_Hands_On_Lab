# Day 2 hands-on teaching plan

Use this plan for Sessions 4, 5 and 6. Each two-hour session starts with its original class lab for 75 minutes, including setup, demonstration, student work and a checkpoint. The facilitator then chooses one of the two practice options for a 40-minute demonstration and hands-on slot, followed by 5 minutes to save and wrap up. Neither A nor B is preselected. The other option and extensions remain available for later practice.

## The two-hour pattern

| Minutes | Student activity | Trainer activity |
| --- | --- | --- |
| 0–10 | Open the original class notebook, save a copy and complete setup. | Confirm the runtime and show the session outcome. |
| 10–20 | Watch the original class lab run; predict one output. | Demonstrate the main result and first small edit. |
| 20–70 | Run, customise and check the original class lab. Rotate roles. | Visit desks and help groups at their current checkpoint. |
| 70–75 | Show one result and explain a changed line or rule. | Ask for evidence and resolve common blockers. |
| 75–82 | Open the facilitator's chosen practice option, save a copy and watch its baseline. | Demonstrate the chosen option and its task list. |
| 82–115 | Run, customise and check the chosen practice. Rotate roles. | Visit groups and check a tool trace, test or source-backed result. |
| 115–120 | Save work and state the next improvement. | Take a short practical or career question and close with the next step. |

The allocation is **75 minutes for the class lab + 40 minutes for one chosen practice + 5 minutes to wrap up = 120 minutes**. Students have 50 minutes of main-lab work and 33 minutes of practice work within those slots. The time boxes are teaching targets; extra options and extensions are homework or later practice.

## Organise the room

- Use pairs or groups of three. Assign driver, checker and explainer, rotating between the class lab and chosen practice.
- Keep a small group number visible on the notebook. Ask groups to show **ready**, **needs help** or **blocked** when you reach them.
- Visit about half the groups during the class lab and the rest during the practice slot. If the aisles are crowded, ask one representative to show the team's current cell or result.
- Spend the first minute of a desk check asking the student to change an input and predict the output. A completed Run all is not the whole learning goal.
- Let faster groups attempt an extension while others finish the core. Keep package installation, account setup and environment changes within the setup time where possible.

## Check learning through the work

**Session 4:** in the original MCP food-server lab, ask students to show tool discovery, a real MCP call, a resource or prompt response, and the data behind the result. If the facilitator chooses 4A, inspect the SQLite rows. If the facilitator chooses 4B, inspect the repository source, timestamp and snapshot/live label. A direct Python function call alone does not demonstrate the protocol.

**Session 5:** in the original coding lab, ask for the announced quantity failure, the prompt/context supplied to an assistant, a reviewed edit and the same tests before and after the change. In chosen practice 5A, inspect file and line references; in 5B, keep provided candidates labelled as samples. Record the assistant or manual route actually used.

**Session 6:** in the original research-agent lab, ask for an approved plan, independent role outputs, critic findings and citations from the actual Gemini/LangGraph/MCP workflow. Practices 6A and 6B start with deterministic baselines and offer optional Gemini calls. A deterministic run demonstrates workflow control; actual model use must be identified separately in the evidence.

## Before class

1. Open the original Session 4–6 notebooks from the [session groups](../README.md#open-the-labs), review both practice options in the [Day 2 project pack](../day2-projects/README.md), and choose one practice per session. Save your own copies.
2. Run each original class lab and the selected practice in fresh runtimes using their setup notes. Start with the documented baseline and check one student modification. Session 5 intentionally begins with one failing quantity test.
3. Verify the original Session 6 Gemini route, model and your eligible account before class. Verify any optional model route you choose to demonstrate. Keep the key in Colab Secrets; do not share a trainer key across the class.
4. For practice 6A or 6B, keep its labelled deterministic route available for checking orchestration if a model service is unavailable. Do not describe it as a live model result or as a substitute result from the original Session 6 notebook.
5. Ask students to save the notebook and their changed code. Runtime files are temporary, while a saved Drive or GitHub copy preserves the notebook. Download generated project files before the runtime ends.

## Evidence to collect

For the original class lab and chosen practice, students should keep:

- the input or requirement they changed;
- the changed code, tool or prompt;
- the actual result and relevant check;
- a short explanation of what the result proves and one limitation.

The notebook task lists define the project-specific checkpoints. Use those for desk checks instead of adding a long written theory exercise. Keep the unchosen practice and extension tasks available for students to continue after class.

For personal interview questions, share only experiences you actually had. Keep this segment short enough that students retain their build time.
