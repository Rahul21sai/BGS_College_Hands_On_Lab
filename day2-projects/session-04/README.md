# Session 4 practical MCP builds

| Project | Open in Colab |
| --- | --- |
| 04A Campus data through MCP | [Open notebook](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-04/04A_Campus_Data_MCP.ipynb) |
| 04B GitHub project explorer through MCP | [Open notebook](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day2-projects/session-04/04B_GitHub_Project_Explorer_MCP.ipynb) |

Both projects use actual MCP server/client connections over an in-memory transport. The cores need no GPU, model subscription or API key. 04A explores structured SQLite data; 04B explores a bounded public HTTP source and clear cache provenance. 04B replaces the former Study Memory project.

## 04A Campus data through MCP
Students need to find affordable events for their department and save a shortlist. Build and inspect tools backed by a fictional SQLite event catalogue, plus a rules resource and a planning-prompt template.

- **Working baseline:** CSE events costing at most 100 INR return E101, E102, E104 and E105. A zero budget returns E101 and E104. Unknown event IDs return an explicit missing result.
- **Build task 1:** change the client department and budget and explain the result.
- **Build task 2:** add your own fictional event and show its effect through MCP.
- **Build task 3:** register `events_on_date(event_date)`, rediscover it and call it through the client.
- **Checkpoint:** show client arguments, SQL placeholders and actual returned rows. Explain the difference between a tool, resource and prompt.
- **Optional write:** the client saves a shortlist only after the student changes `CONFIRM_SAVE=True`. A local shortlist is not registration or payment.

Open [04A_Campus_Data_MCP.ipynb](04A_Campus_Data_MCP.ipynb). Allow about 40 minutes using the prepared starter. The data cell clearly labels its `RESET_DEMO` setting: `True` rebuilds only the dedicated event catalogue and shortlist; use `False` to preserve the existing demo state.

## 04B GitHub Project Explorer through MCP

A student wants to choose a public AI repository to study. Build a read-only MCP explorer over a reviewed catalogue: filter by topic, inspect a sourced project brief, read a bounded README excerpt, and compare two starting points.

- **Working baseline:** `mcp` returns `mcp-python`; `agents` returns `ai-engineering-hub` and `mini-swe-agent`. Real MCP discovery, four tool calls, a selection-checklist resource and a comparison-prompt template all run over an in-memory connection.
- **Build task 1:** add one reviewed public project and an accurate timestamped README/metadata snapshot, then read it through MCP.
- **Build task 2:** change the topic filter and implement `projects_by_language(language)`; rediscover and call the new tool through MCP with source evidence.
- **Build task 3:** compare a different pair and explain a choice for a concrete learning goal, citing source URL, fetch time and data mode.
- **Checkpoint:** distinguish a curated description, an upstream fact, a snapshot, a live HTTP result and an MCP protocol call. An unknown project or out-of-bounds README length returns an explicit validation error.
- **Default network behavior:** bundled `SNAPSHOT_CACHE` data after package setup; no GitHub login, model account, API key or GPU required. Optional `USE_LIVE_GITHUB=True` performs allowlisted, unauthenticated public GitHub GETs. Failures remain explicit; cached snapshots are never relabelled as live data.

Open [04B_GitHub_Project_Explorer_MCP.ipynb](04B_GitHub_Project_Explorer_MCP.ipynb). Allow about 40 minutes with the prepared starter and 11 explained code cells. The notebook does not clone repositories, install their applications, execute shell actions or call a model. Runtime live-cache data is in memory; bundled snapshots remain in the notebook. The default notebook contains no saved outputs or personal execution metadata.

## Running and submitting

1. Save a personal Colab copy and select a Python CPU runtime.
2. Run cells in order. Setup uses `fastmcp==2.14.5` and `mcp==1.30.0`.
3. Inspect the baseline, complete the student changes and show a real MCP result at the desk checkpoint.
4. Keep engine and data-source labels visible. A snapshot is not a current live result, and reading a prompt template does not execute another action.
5. Save the notebook and your observed evidence. Generated runtime files are temporary.

## Source and adaptation

04A is independently written and inspired by [LlamaIndex MCP](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/llamaindex-mcp), using parameterised filters instead of arbitrary SQL and omitting the separate model stack.

04B is an independently written classroom implementation informed by the official [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk/tree/af4c6f4db2cd207f44374cd324a12cfbee8d2da6) and [MCP quickstart resources](https://github.com/modelcontextprotocol/quickstart-resources/tree/d65842ea794b68684a6c92a0b72a61c39411eae3): structured tools expose a bounded public HTTP data source. The SDK's verified license is MIT. The quickstart repository's verified license notice describes a transition to Apache-2.0 for new code and CC-BY-4.0 for documentation, with original MIT contributions retaining that license where relicensing consent has not been granted. No quickstart code is copied. Four public repositories supply short attributed README excerpts and metadata; exact URLs, fetch times, blob hashes and MIT notices are recorded inside the notebook.

This project teaches different boundaries from 04A's SQLite events: public HTTP, an allowlisted catalogue, bounded reads, cache modes and source provenance. MCP means **Model Context Protocol**. A resource supplies context and a prompt supplies a template; retrieving either does not call a model or run another action.
