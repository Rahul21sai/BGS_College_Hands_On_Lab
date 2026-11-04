# Session 5 Colab companion

Open the Student notebook and save a copy in your Drive. Use a CPU runtime and work in pairs. The project checks require no API key. The notebook checks that Node.js 18.20 or later is available; ask the instructor if the runtime does not meet that prerequisite.

1. Prepare the embedded starter and run the original tests. On a fresh project, six pass and one quantity check fails.
2. In the inline preview, select two dosas and one tea. The starter incorrectly totals ₹60. Explain why the intended total is ₹100.
3. Read the synthetic project files and ask your chosen assistant for a small plan and focused patch. Apply the reviewed change in the cart-source cell.
4. Read the diff and run the same seven checks. Verify the original preview trigger again.
5. Add a Clear cart action through the app/HTML source cell. Check zero quantities, the empty message, ₹0 total, a cleared draft and keyboard access.
6. Record your actual tests, manual UI observations, assistant route and one limitation. Unchecked observations remain false.
7. Set `DOWNLOAD_NOW = True` in the final project cell for a Colab download. Save your notebook copy too; runtime files are temporary.

The inline preview bundles the current supplied files into a sandboxed frame. Run its cell again after editing. It does not rely on reaching a Colab localhost server from your browser, and it sends no order or payment.

For a laptop coding-agent route, extract the archive into a new workshop folder and read the included setup handout. Use a supported Node.js 20+ laptop runtime. Claude Code, Gemini CLI, OpenCode/Ollama and routers remain separate account/hardware setup exercises. The companion does not install them or claim those integrations passed.

The Instructor notebook contains answers and a feature implementation. Share the Student notebook with the class and keep the Instructor copy for teaching.
