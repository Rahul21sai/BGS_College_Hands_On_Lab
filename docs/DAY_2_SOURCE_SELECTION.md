# Source selection and classroom adaptations

These projects take inspiration from [AI Engineering Hub by patchy631](https://github.com/patchy631/ai-engineering-hub), reviewed at commit [`042aeb5067384981eeba6a07fa882f436bb1660d`](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d) on 4 November 2026.

The hub contains broader applications with additional services and hardware requirements. We use smaller independent classroom implementations so a fifth-semester student can run a core example, make changes and check the result during a workshop. The adaptations are not claims that the original applications run unchanged in Colab.

| Session | Hub project | Classroom direction | What is reduced |
| --- | --- | --- | --- |
| 4A | [LlamaIndex MCP](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/llamaindex-mcp) | A campus-data MCP server with SQLite and a real client. | Use structured queries and the MCP SDK without a separate local model service. |
| 4B | [Agent with MCP memory](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/agent-with-mcp-memory) | Study goals and learning notes stored through MCP. | Use a project-local database instead of a graph database and external tracing/search services. |
| 5A | [Chat with code](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/chat-with-code) | Retrieve file/line context from a tiny project, then request and review a focused change. | Use a supplied codebase and a lightweight retrieval step. A retrieval-only result is labelled as such. |
| 5B | [Code model comparison](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/code-model-comparison) | Compare reviewed code candidates using the same executable checks. | Use fixed local tests and clearly labelled sample candidates; model provenance is recorded only for actual student runs. |
| 6A | [Multi-agent deep researcher](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/Multi-Agent-deep-researcher-mcp-windows-linux) | Produce a source-backed preparation brief with plan approval, independent analyses and review. | Use a small supplied source pack and bounded workflow. Live model calls are an explicit option. |
| 6B | [Documentation writer flow](https://github.com/patchy631/ai-engineering-hub/tree/042aeb5067384981eeba6a07fa882f436bb1660d/documentation-writer-flow) | Generate and review a README from project files and actual test evidence. | Use a small local project and download Markdown; no separate desktop host or local model download is needed for the baseline. |

## Protocol and engine labels

- MCP means **Model Context Protocol**. The Session 4 labs use a real MCP connection, even when a language model is not attached.
- Retrieval of code snippets is not itself an LLM-generated answer. The Session 5 handout distinguishes source retrieval, assistant suggestions and executable checks.
- The Session 6 account-free route is a deterministic workflow baseline. It is not presented as a live language-model agent run. Enabling the live route uses the student's own eligible provider account and records separate role outputs.

## Provenance and licence

Source READMEs and selected implementation files were inspected; original project installation scripts were not executed for these adaptations. The hub is a community repository, separate from the official documentation of the libraries it uses.

The upstream MIT notice is preserved in [THIRD_PARTY_LICENSES/ai-engineering-hub-MIT.txt](../THIRD_PARTY_LICENSES/ai-engineering-hub-MIT.txt). Original classroom code and materials are covered by this repository's MIT licence. Linked providers, model weights and hosted services retain their own terms.

After finishing a classroom core, students can explore the linked original project and review its current prerequisites before extending their work.
