# Session 2 · Tool-using agents

| Colab starter | Open |
| --- | --- |
| 02A Campus expense agent | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-02/02A_Campus_Expense_Agent.ipynb) |
| 02B Event registration agent | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-02/02B_Event_Registration_Agent.ipynb) |

Two independent student projects reinforce model-selected tools, Python validation,
inspectable state and bounded recovery. Both are new practice projects; the original
Session 2 lab remains separate.

| Project | Student problem | Expected supplied baseline |
|---|---|---|
| [02A · Campus Expense Agent](02A_Campus_Expense_Agent.ipynb) | Record an expense and explain the remaining synthetic campus budget using tools. | ₹120 food + ₹40 transport + ₹80 food = ₹240 total; ₹260 remains from ₹500. Invalid categories, money and tools leave the ledger unchanged. |
| [02B · Event Registration Agent](02B_Event_Registration_Agent.ipynb) | Read availability and request registration/cancellation for known fake IDs, with client approval for each write. | AI_STUDIO has capacity 2, initially DEMO001. Approve DEMO002 → full; approve cancellation → one seat; decline DEMO003 → unchanged. |

Open either notebook in Colab and save a copy to your own Drive. **Run all first** with
`USE_LIVE_MODEL = False`. This `TEST_FIXTURE` baseline uses explicitly scripted tool
decisions, not AI. It needs no key, network, SDK installation or real student data.
Each notebook is self-contained; run them in separate notebook runtimes.

## Exercise checkpoints

1. Read the problem, strict Python contracts and tool declarations. Run the provided
   baseline; inspect tool arguments, observations and stored state independently
   of the fixture's labelled final sentence.
2. Run expected rejection cases. Explain how invalid inputs leave state unchanged.
   For the event agent, identify the separate client approval and final mutation.
3. Complete the **three student changes** in each notebook's extension section.
   Preserve the supplied baseline checks. Add a new tool-decision fixture and your
   own accepted/rejected tool cases with before/after state evidence.
4. Submit your notebook copy with the extension implementation, tool traces, state
   checks and a brief explanation of one validation rule. The supplied baseline
   receipt explicitly marks student extensions unfinished.

Expense extensions: `printing` category, validated `set_budget`, and validated
`remove_expense`. Event extensions: one-seat `ROBOTICS_LAB`, read-only student
schedule, and a consented waitlist that does not alter seat counts.

## Optional live experiment

After the baseline, use your own `GEMINI_API_KEY` in Colab Secrets and enable the
optional live setting. The live path lazily imports/installs `google-genai==2.12.0`
while preserving active Colab `google-auth` constraints. Verify the prepared
`gemini-3.5-flash-lite` setting and account access before class; offline verification
does not establish current provider availability.

Every physical request has a 60-second timeout. There is at most one automatic
retry for a transient generation failure and no automatic retry for quota/429 or
authentication/permission errors. A failure retains a pending turn, tool results
and counters. `resume()` continues that turn without replaying accepted writes;
no fabricated live answer is substituted. Limits stop tool loops and requests.
Event writes require a fresh client `CONFIRM` for each proposed write.

## Sources and independent adaptation

Public sources read on 4 November 2026:

- [Official OpenAI Agents Python README](https://github.com/openai/openai-agents-python/blob/main/README.md)
- [Official basic tools example](https://github.com/openai/openai-agents-python/blob/main/examples/basic/tools.py)
- [Official examples README](https://github.com/openai/openai-agents-python/blob/main/examples/README.md)

The pattern adapted is tool declaration → model choice → tool execution/result.
These notebooks contain independent implementations using manual Python dispatch
and optional Google Gen AI, not copied upstream code or an OpenAI SDK dependency.
Upstream source was inspected but not executed. All records, amounts, events and
student IDs are synthetic; no real banking or college registration service is used.
