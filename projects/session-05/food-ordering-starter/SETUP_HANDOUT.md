# Session 5 coding setup

Choose one preflighted route before the workshop. Use a new folder containing only the synthetic food project. A client, model and provider are different parts of the setup. A free client or gateway does not provide unlimited inference.

## Shared project setup

1. Install Node.js 20 or later through the official Node website or your college-approved route. Confirm `node --version` and `npm --version`.
2. Extract food-ordering-starter and open a terminal in that folder.
3. Run `npm test`. The expected announced baseline is six passing checks and one quantity check failing.
4. Run `npm start`. Open http://127.0.0.1:8085 in your browser. The development server binds only to your machine. Use a second terminal for your assistant and tests.
5. Use TASK_PROMPTS.md to inspect, plan, repair and verify. No `npm install` is needed for this starter because it has no package dependencies.

Keep credentials out of project files, instruction files, prompts and shared screenshots. Keep command approvals enabled. Do not use an employer repository or personal files for this exercise.

## Route A Gemini CLI with eligible access

Official instructions: https://geminicli.com/docs/get-started/installation/ and https://geminicli.com/docs/get-started/authentication/

Current source check on 31 October 2026: Google's pages say unpaid-tier and Google One consumer users moved to Antigravity CLI on 18 June 2026. They still document Gemini CLI installation and Gemini API-key/eligible account authentication. Check the route for your actual account before class rather than assuming an older free-sign-in video still applies. Ask the instructor for the preflighted alternative if your account follows the newer flow.

The documented Gemini CLI installation is:

```powershell
npm install -g @google/gemini-cli
gemini --version
```

In the workshop folder, start `gemini` and follow the current official authentication flow supported by your account. If using your own eligible Gemini API key, load it privately for this terminal:

```powershell
$workshopKey = Read-Host "Your Gemini API key" -AsSecureString
$env:GEMINI_API_KEY = [Net.NetworkCredential]::new("", $workshopKey).Password
gemini
```

Select the documented Gemini API-key option. Do not type the key into a code file. The chosen account's quota and billing apply. After closing the assistant, close the credential terminal or clear its temporary environment variable. Record the actual model and run the food project's edit/test cycle. A greeting alone is insufficient.

## Route B OpenCode with local Ollama

Official instructions: https://docs.ollama.com/integrations/opencode and https://opencode.ai/docs/providers/

Install Ollama and OpenCode from their own official instructions for your operating system. The official Ollama integration starts with:

```text
ollama launch opencode
```

Choose the instructor-tested, genuinely local, tool-capable model. Ollama's OpenCode guide requires 64K or higher context. Check the model licence, download size, memory use and speed on the actual laptop before class. Do not download several large models during the session.

Ollama also offers cloud models. Selecting one sends requests to its provider. A local terminal is not proof that inference is local. Colab localhost belongs to the cloud runtime, not your laptop's Ollama service. Keep this local coding project on the laptop.

If the local model is slow or unreliable with tool calls, use the prepared API or manual-patch route while retaining the same project and tests.

## Optional instructor route Claude Code through OmniRoute

OmniRoute is third-party community software. Anthropic does not endorse or audit the gateway and does not support routing Claude Code to non-Claude models. This is an optional compatibility demonstration, not a promise of free Claude inference or feature parity.

Reviewed source commit: `55ccad495c4a73eb64deaf094829fe5b90ded80c`.

- https://github.com/cheaper-inference/OmniRoute/blob/55ccad495c4a73eb64deaf094829fe5b90ded80c/docs/guides/CLI-INTEGRATIONS.md
- https://github.com/cheaper-inference/OmniRoute/blob/55ccad495c4a73eb64deaf094829fe5b90ded80c/docs/guides/CLAUDE-CODE-CONFIGURATION.md
- https://code.claude.com/docs/en/llm-gateway

Use the instructor-tested package version and official Claude Code installation. Before changing an existing client configuration, back up `~/.claude/settings.json` and `~/.claude.json` privately if present; do not include backups in the project or submission.

PowerShell, local-only server:

```powershell
npm install -g omniroute
$env:OMNIROUTE_SERVER_HOST = "127.0.0.1"
omniroute serve --port 20128 --no-open
```

Keep this server terminal open. In the printed local dashboard, connect one permitted provider, choose a tool-capable model and create a router inference key in Endpoints. The router key is different from the upstream provider key. Copy a real model ID from the live catalogue.

In a second terminal, load the router key privately, then launch the client:

```powershell
$routerKey = Read-Host "OmniRoute inference key" -AsSecureString
$env:OMNIROUTE_API_KEY = [Net.NetworkCredential]::new("", $routerKey).Password
omniroute run claude --model "LIVE_MODEL_ID" --api-key-env OMNIROUTE_API_KEY
```

Replace LIVE_MODEL_ID with the exact current catalogue identifier. The generic `run claude` launcher is current; the older `omniroute launch` remains a supported legacy command. The Claude gateway root has no manually appended `/v1` suffix; use the launcher's generated configuration instead of copying URL recipes between products.

Inspect Claude Code status and compare it with the router's actual upstream request record. A Sonnet-labelled slot can route to another model. Report that actual provider/model and perform a file edit plus the unchanged cart tests. Do not show keys or use account rotation to evade limits.

## Optional instructor route Claude Code through 9Router

9Router is a separate third-party gateway with its own configuration behavior. Use one router at a time; these examples share port 20128.

Reviewed source commit: `1fe586bb1cf35e1ed0cb2150a8ef7d1db040b21d`.

- https://github.com/decolua/9router/tree/1fe586bb1cf35e1ed0cb2150a8ef7d1db040b21d
- https://9router.github.io/en/
- https://github.com/decolua/9router/blob/1fe586bb1cf35e1ed0cb2150a8ef7d1db040b21d/cli/cli.js

Back up the same existing Claude configuration files privately before changing them. Start in the foreground with explicit loopback binding:

```powershell
npm install -g 9router
9router --host 127.0.0.1 --port 20128 --no-browser
```

Open http://127.0.0.1:20128/dashboard. Connect a permitted provider, verify model/tool support, map the Claude Code slots in CLI Tools and Apply. Reopen Claude Code. Check its status against the router/provider's actual request record and privately confirm the intended authentication route.

Apply can preserve an existing authentication token. Reset removes selected settings and does not reconstruct all previous values; use the private backups when restoring an earlier setup. The reviewed tray restart can omit the local-only host argument, so keep the foreground demo open until the selected release is rehearsed.

Do not copy OmniRoute's manual base-URL rule into 9Router. Use the project's generated settings and confirm behavior with the exact reviewed version. The same Anthropic non-Claude support limitation applies.

## One check for every route

Run the starter tests, reproduce the bug, request the minimal repair, inspect the actual diff, run the unchanged tests and repeat the UI trigger. The reviewed solution passes all seven checks; this validates the project exercise, not an unexecuted model or gateway integration.

If a provider returns an auth, quota or model error, stop and identify that layer. Do not claim unlimited credits or turn a canned response into a successful live run. Use the manual patch route when needed and name it in the evidence.

## Tutorial references

- Rahul's OmniRoute tutorial: https://www.youtube.com/watch?v=jNzXGJQ__Oo
- Rahul's 9Router tutorial: https://www.youtube.com/watch?v=vtryZ5J6rls

The videos provide workflow context. Current project documentation and source determine the commands. No coding client or router was installed or run while these materials were prepared; the instructor must rehearse the chosen version, provider and representative student laptop before class.
