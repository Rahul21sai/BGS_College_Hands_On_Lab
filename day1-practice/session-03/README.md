# Session 3 practice · Find evidence, then evaluate it

| Colab starter | Open |
| --- | --- |
| 03A Cited campus FAQ | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-03/03A_Cited_Campus_FAQ.ipynb) |
| 03B RAG evaluation and guards | [Open in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-03/03B_RAG_Evaluation_And_Guards.ipynb) |

Two independent student builds for a two-hour session. Save your own Colab copy, run the baseline, then make the three changes in each notebook. Both defaults use standard Python on a CPU runtime and need no key, package install, upload or network request.

| Project | Problem and observable result | Open |
| --- | --- | --- |
| **03A · Cited Campus FAQ** · 45–55 min | Extract inline fictional FAQ pages, preserve their source/page metadata, build real lexical TF-IDF retrieval, inspect ranked evidence and missing information, then optionally request an extractive Gemini answer with checked citations. | [Notebook](03A_Cited_Campus_FAQ.ipynb) · [Run in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-03/03A_Cited_Campus_FAQ.ipynb) |
| **03B · RAG Evaluation and Guards** · 45–55 min | Measure page recall and reciprocal rank, evaluate supported/unsupported answers and missing/invalid citations, distinguish accurate quotation from relevance, and test the limits of a small local prompt-injection filter. | [Notebook](03B_RAG_Evaluation_And_Guards.ipynb) · [Run in Colab](https://colab.research.google.com/github/Rahul21sai/BGS_College_Hands_On_Lab/blob/main/day1-practice/session-03/03B_RAG_Evaluation_And_Guards.ipynb) |

Allow 10 minutes to compare evidence and explain failures. Each notebook is self-contained; running 03A first is helpful but not required for 03B. These are additional practice builds alongside the original Session 3 PDF/embedding lab. This smaller corpus uses inline text and lexical TF-IDF, so it does not claim PDF extraction, neural embeddings, or a vector-database implementation.

## What counts as completion

The provided baseline is already working. Its passing checks test the harness; they do not complete the student tasks. The last cells deliberately show `PENDING` until you make the changes.

| Project | Your three changes | Evidence to save |
| --- | --- | --- |
| 03A | Compare smaller chunk windows; add one original fictional FAQ page; ask an unanswered bicycle-insurance question. | Three student `PASS` results, an actual retrieved source/page for your new page, and two sentences explaining chunking and missing information. |
| 03B | Add a new independently labelled retrieval case; repair a broken answer/citation object; extend the marker test and explain a remaining limitation. | Three student `PASS` results, the integrity/correctness comparison, and the observed false positive or other remaining limitation. |

Do not change gold labels to make incorrect output pass. Preserve the original fixtures for comparison. Clear optional live outputs before sharing a public notebook. The original club/course facts and local evaluation examples are fictional; these notebooks provide no complete solution to the separate library-policy assignment.

## Read the mode labels correctly

- **03A `RETRIEVAL_ONLY`:** Real TF-IDF cosine retrieval returns source excerpts. `answer=None` makes clear that no AI-generated answer is claimed. Empty retrieval is shown explicitly. A nonempty result can still be irrelevant or omit the requested fact.
- **03A optional `LIVE_LLM`:** Enable `USE_LIVE_MODEL=True` yourself. Its SDK cell pins `google-genai==2.12.0` while preserving the active Colab `google-auth` requirement. Add your own `GEMINI_API_KEY` through Colab Secrets and grant access. The key is read only at the first live request. `gemini-3.5-flash-lite` matches the original workshop setting; verify model/account availability before class. Provider access and quota are separate from notebook setup.
- **Live failures:** Incomplete, invalid or failed responses remain `pending` with `answer=None`. There is no fabricated fallback. Each question has a 60-second budget, request timeouts of at most 25 seconds, and at most one retry for a transient failure. A 429 or authentication/model-access error has no automatic retry. The same answerer instance permits at most six physical attempts, including failed ones.
- **03B `TEST_FIXTURE`:** Prepared candidate answers test the evaluator. The retrieval is real, but no model behavior, live robustness score, or provider performance is claimed. All injection strings stay local and are never executed or sent to a service.

The extractive answer validator verifies exact quotes and known chunk IDs. It cannot establish question relevance, completeness or document trust. The evaluation notebook demonstrates an accurately cited but irrelevant answer. The marker filter intentionally demonstrates a missed paraphrase and a harmless quotation that gets rejected; it is not a comprehensive prompt-injection defence.

## Sources and independent adaptation

The following public first-party repository paths and raw READMEs were read and verified with HTTP 200 on **2026-11-04**, using GitHub's public API/raw endpoints. Their teaching ideas informed this independent, smaller implementation; no upstream notebook, executable code, SDK installer or red-team service was run. No promptfoo dependency is installed. The fictional corpus, implementation and exercises were written for this pack.

| Inspiration | Exact reviewed sources | Used here |
| --- | --- | --- |
| Microsoft · *Generative AI for Beginners*, lesson 15 | [Lesson directory](https://github.com/microsoft/generative-ai-for-beginners/tree/main/15-rag-and-vector-databases) · [GitHub API listing](https://api.github.com/repos/microsoft/generative-ai-for-beginners/contents/15-rag-and-vector-databases?ref=main) · [Raw README](https://raw.githubusercontent.com/microsoft/generative-ai-for-beginners/main/15-rag-and-vector-databases/README.md) | Grounding, chunking, retrieval and evidence inspection. This pack's lexical index is explicitly different from semantic embeddings/vector databases. |
| promptfoo | [Repository](https://github.com/promptfoo/promptfoo) · [README API metadata](https://api.github.com/repos/promptfoo/promptfoo/contents/README.md?ref=main) · [Raw README](https://raw.githubusercontent.com/promptfoo/promptfoo/main/README.md) | Explicit evaluation cases, assertions and adversarial-test thinking, implemented as local Python fixtures. This is not a promptfoo tutorial or a claim to reproduce its security coverage. |

Source links are references for further learning. Read upstream dependencies and instructions before choosing to install anything outside this pack.
