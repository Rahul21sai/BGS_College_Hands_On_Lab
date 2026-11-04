# Optional coding-assistant routes

Use one route rehearsed for your account and laptop before the workshop. Work in a new folder containing only the synthetic [Internship Application Tracker](../projects/session-05/internship-tracker-starter/). Read its instructions, run the passing baseline, plan the company/role search with the status filter, review the change and run the checks again. The [Colab companion](SESSION_05_COLAB_GUIDE.md) supports the same feature-building workflow with a manual route when no coding assistant is available.

Node.js 18.20 or later is sufficient for the project, which needs no package dependencies or model key. Assistant clients can have different requirements. A client, model and provider are separate parts of a route; a free client or gateway does not supply unlimited inference. Use the current official documentation for installation and account setup. This guide does not install software.

Keep credentials out of source files, instructions, prompts, notebooks, screenshots and shared evidence. Keep command approvals enabled. Use the fictional workshop project; do not send employer code, personal files or real application data to a model or gateway.

## Official client and provider routes

**Gemini CLI:** Google's [installation guide](https://geminicli.com/docs/get-started/installation/) and [authentication guide](https://geminicli.com/docs/get-started/authentication/) define the supported account routes. The preparation source check on **31 October 2026** recorded that Google's pages moved unpaid-tier and Google One consumer users to Antigravity CLI on 18 June 2026 while continuing to document Gemini CLI and Gemini API-key/eligible-account authentication. This is a historical source note; verify the route for your actual account before class. Your provider's eligibility, quota and billing apply.

**OpenCode with local Ollama:** use the official [Ollama integration guide](https://docs.ollama.com/integrations/opencode) and [OpenCode provider guide](https://opencode.ai/docs/providers/). The preparation notes recorded a 64K-or-higher context requirement for that integration. Recheck the current requirements and rehearse a tool-capable model on the actual laptop. Check its licence, download size, memory use and speed before class.

Ollama also offers cloud models, which send requests to their provider. A local terminal does not establish that inference is local. Colab localhost is the cloud runtime, so a laptop's local model route belongs on the laptop. If a route is unavailable, continue with the manual change and the same project checks, recording that route accurately.

## Optional instructor gateway demonstrations

OmniRoute and 9Router are separate **third-party community gateways**. They are not first-party Anthropic tools; Anthropic does not endorse or audit these gateways and does not support routing Claude Code to non-Claude models. Compatibility, model tool support and provider permissions need their own rehearsal. These routes do not promise Claude inference, unlimited credit or feature parity.

The following are retained provenance references, not a claim that their current releases have been installed or verified:

| Route | Reviewed source | References |
| --- | --- | --- |
| OmniRoute | `55ccad495c4a73eb64deaf094829fe5b90ded80c` | [CLI integrations](https://github.com/cheaper-inference/OmniRoute/blob/55ccad495c4a73eb64deaf094829fe5b90ded80c/docs/guides/CLI-INTEGRATIONS.md) · [Claude Code configuration](https://github.com/cheaper-inference/OmniRoute/blob/55ccad495c4a73eb64deaf094829fe5b90ded80c/docs/guides/CLAUDE-CODE-CONFIGURATION.md) |
| 9Router | `1fe586bb1cf35e1ed0cb2150a8ef7d1db040b21d` | [Pinned repository](https://github.com/decolua/9router/tree/1fe586bb1cf35e1ed0cb2150a8ef7d1db040b21d) · [Pinned CLI source](https://github.com/decolua/9router/blob/1fe586bb1cf35e1ed0cb2150a8ef7d1db040b21d/cli/cli.js) · [Project documentation](https://9router.github.io/en/) |

Read Anthropic's [LLM gateway documentation](https://code.claude.com/docs/en/llm-gateway) for its supported gateway behavior. Use one gateway at a time and keep its server bound to your machine. Before changing an existing Claude configuration, back up `~/.claude/settings.json` and `~/.claude.json` privately if present; keep those backups out of the project and submission. Follow the chosen gateway's generated configuration and do not copy URL rules between the two products.

A router key differs from its upstream provider key. A client model label can differ from the actual upstream model. Check the request record and record the actual provider/model without exposing keys. The reviewed 9Router notes warn that Apply can retain an authentication token, Reset does not reconstruct all earlier settings, and a tray restart can omit the explicit local-only binding. Rehearse the exact version and keep the foreground demonstration open until those behaviors are confirmed.

For workflow context, Rahul's tutorials cover [OmniRoute](https://www.youtube.com/watch?v=jNzXGJQ__Oo) and [9Router](https://www.youtube.com/watch?v=vtryZ5J6rls). Current official documentation and the chosen source version determine setup; videos are not a compatibility guarantee.

## Evidence for any route

Record the actual route and provider/model, a focused feature plan, the reviewed diff, passing baseline checks, extension checks and observed search/status behavior. A greeting or a passing project test does not prove a gateway integration works. Keep the extension **PENDING** until the student change and evidence are reviewed. If authentication, quota or model support prevents a live run, preserve that result and name the manual route used to continue.
