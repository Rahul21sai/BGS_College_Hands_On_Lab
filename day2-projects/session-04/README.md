# Session 4 practical MCP builds

| Project | Open in Colab |
| --- | --- |
| 04A Campus data through MCP | [Open notebook](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-04/04A_Campus_Data_MCP.ipynb) |
| 04B Study memory through MCP | [Open notebook](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-04/04B_Study_Memory_MCP.ipynb) |

Run the two small cores during the session, then finish the customisation tasks. Both notebooks are self-contained and use a real MCP server/client connection over an in-memory transport. No GPU, model subscription or API key is needed for the core.

## 04A Campus data through MCP

Students need to find affordable events for their department and save a shortlist. Build and inspect tools backed by a fictional SQLite event catalogue, plus a rules resource and a planning-prompt template.

- **Working baseline:** CSE events costing at most 100 INR return E101, E102, E104 and E105. A zero budget returns E101 and E104. Unknown event IDs return an explicit missing result.
- **Build task 1:** change the client department and budget and explain the result.
- **Build task 2:** add your own fictional event and show its effect through MCP.
- **Build task 3:** register `events_on_date(event_date)`, rediscover it and call it through the client.
- **Checkpoint:** show client arguments, SQL placeholders and actual returned rows. Explain the difference between a tool, resource and prompt.
- **Optional write:** the client saves a shortlist only after the student changes `CONFIRM_SAVE=True`. A local shortlist is not registration or payment.

Open [04A_Campus_Data_MCP.ipynb](04A_Campus_Data_MCP.ipynb). Allow about 40 minutes using the prepared starter. The data cell clearly labels its `RESET_DEMO` setting: `True` rebuilds only the dedicated event catalogue and shortlist; use `False` to preserve the existing demo state.

## 04B Study memory through MCP

A student wants to keep a project goal and learning notes between connections. Expose validated goal and note operations as MCP tools and store their results in a project-local SQLite file.

- **Working baseline:** a goal saved as complete and its note remain readable through a different server/client connected to the same file.
- **Build task 1:** save your own fictional project goal and topic.
- **Build task 2:** save two useful notes, reconnect and read them through MCP.
- **Build task 3:** register `reopen_goal(goal_id)` and prove that a known goal returns to planned while an unknown ID changes nothing.
- **Checkpoint:** explain the difference between Python object state, SQLite persistence and an MCP protocol call. Repeating an identical note must not duplicate it.

Open [04B_Study_Memory_MCP.ipynb](04B_Study_Memory_MCP.ipynb). Allow about 40 minutes using the prepared starter. Existing memory records are retained; there is no automatic reset. SQLite persistence across connections does not guarantee persistence after Colab deletes the runtime. Download the database yourself if you want to keep it.

## Running and submitting

1. Save your own Colab copy and select a Python CPU runtime.
2. Run the cells in order. The setup uses `fastmcp==2.14.5` and the MCP Python SDK `mcp==1.30.0`.
3. Run the working baseline, then make the three requested changes. Each code cell has an explanation above it.
4. Save your notebook, actual MCP output and a few sentences explaining your implementation. The final evidence distinguishes the baseline from an unfinished student extension.

The default source has no saved outputs or personal execution metadata. No model output is invented; these cores make zero model calls. Adding a model-powered interface is an optional later extension. No network listener, public tunnel, real event registration or multi-user authentication system is started.

## Source inspiration and adaptation

These notebooks are independently written classroom implementations inspired by two MIT-licensed examples in [AI Engineering Hub](https://github.com/patchy631/ai-engineering-hub) at commit `042aeb5067384981eeba6a07fa882f436bb1660d`:

- [LlamaIndex MCP](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/llamaindex-mcp): the idea of exposing SQLite data through MCP. The classroom version uses structured filters and SQL placeholders instead of accepting arbitrary SQL strings, and omits the LlamaIndex/model stack.
- [Agent with MCP Memory](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/agent-with-mcp-memory): the idea of putting memory behind MCP. The classroom version uses a small SQLite task store instead of Graphiti, a web-search provider and LLM orchestration.

MCP means **Model Context Protocol**. A resource provides context and a prompt provides a template; neither automatically executes an action. The notebooks use FastMCP's in-memory client/server transport and do not reproduce or claim the full upstream applications.
