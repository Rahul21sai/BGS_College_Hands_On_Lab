# AI engineer career roadmap

From fifth semester to an entry-level AI role.

**BGS College student guide · Naga Sai Rahul Vudumula · 4 November 2026**

Build strong programming skills, learn how models work, and practise delivering useful AI applications. Each stage below pairs a learning resource with a practical task and a checkpoint. Aim for **three projects you can explain and improve**.

**Suggested pace:** 44 study weeks at **8–10 hours per week**, usually spread across **10–12 months**. Extend the plan around exams or if programming is new to you. The week numbers are a suggested schedule, not the course providers' duration estimates.

The linked learning material is publicly accessible. Certificates, hosting, API usage and compute can have separate terms or costs. Resource links were checked on **4 November 2026**; availability and implementation details can change.

## Choose a direction

Start with the shared foundations, then decide which work interests you most. Job titles and requirements vary between employers.

| Direction | What you do | Skills to deepen |
| --- | --- | --- |
| AI application engineer | Build software using existing models, APIs, retrieval, tools and evaluations. | Programming, application design, evaluation and deployment. |
| ML engineer | Build data and model pipelines, train or adapt models, and maintain inference systems. | Statistics, modelling and production engineering. |
| AI researcher | Study new methods through mathematics, papers and experiments. | Deeper mathematics, experimental design and research preparation. |

## The learning sequence

| Stage | Weeks | Focus | Evidence of progress |
| --- | --- | --- | --- |
| 1 | 1–6 | Python and developer tools | Clean a CSV with Python, query it with SQL and publish reproducible code. |
| 2 | 7–10 | Data and essential mathematics | Explain vectors, statistics and a simple prediction with a worked example. |
| 3 | 11–18 | Core machine learning | Compare a baseline and two models using held-out data. |
| 4 | 19–24 | Deep learning | Train or adapt a small model and inspect its mistakes. |
| 5 | 25–32 | LLMs and AI applications | Build a document assistant and evaluate its answers. |
| 6 | 33–38 | APIs and deployment | Package the application so another person can run it. |
| 7 | 39–44 | Portfolio and internships | Improve a capstone, practise explanations and apply. |

**Semester guide:** use fifth semester for foundations, sixth for ML and deep learning, and seventh for applications, deployment and internships. Continue projects and placement preparation in eighth semester. Adjust this mapping to your college schedule.

## Stage 1 · Python and developer tools

**Weeks 1–6.** If you already know Python, try the checkpoint first and revise your gaps. Beginners should allow extra time for the full course.

### Learn

- **Main course:** [Harvard CS50's Introduction to Programming with Python](https://cs50.harvard.edu/python/). Prioritise functions, collections, exceptions, libraries, files, classes and unit tests. Attempt exercises before reading a solution. The full course has ten weeks of material; this stage is a refresh for students with prior programming experience.
- **Short SQL practice:** [SQLBolt](https://sqlbolt.com/). Complete introductory exercises on `SELECT`, `WHERE`, `JOIN`, `GROUP BY` and aggregates. Practise answering questions about data.
- **Tool reference:** [MIT Missing Semester](https://missing.csail.mit.edu/). Use the shell, version control and debugging lessons as needed. Learn to run a script, manage a project folder and commit changes to Git.

### Build

Read a public CSV, handle missing values, calculate useful summaries and save a report. Write five SQL queries over the same data using SQLite.

### Checkpoint

A classmate can run your code from the README. You can explain a function, fix a small error and change an input without asking AI to rewrite the whole program.

## Stage 2 · Data and essential mathematics

**Weeks 7–10.** Connect each mathematical idea to a small numerical example.

### Learn

- **Guided preparation:** [Google ML prerequisites and prework](https://developers.google.com/machine-learning/crash-course/prereqs-and-prework). Run the NumPy and pandas prework notebooks. Review the listed algebra, linear algebra and statistics prerequisites, plus derivatives and gradients as needed.
- **Visual companion:** [3Blue1Brown's Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab). Start with vectors, linear combinations, matrix transformations and dot products. Draw the ideas and calculate small examples in NumPy.

Practise these skills:

- Load tables, inspect types, find missing values, plot distributions and combine tables.
- Explain mean, variance, conditional probability, vectors, matrix multiplication, derivatives and gradients.

### Build

Explore the dataset you will use for your first ML project. Write five observations with supporting plots.

### Checkpoint

Explain what one row and one feature mean, identify the target to predict, and calculate a simple weighted prediction. Explain why fitting and evaluating on the same records can mislead you.

## Stage 3 · Core machine learning

**Weeks 11–18.** Learn regression, classification, train and test splits, cross-validation, pipelines, overfitting, data leakage and metric selection.

### Learn

**Main course:** [Inria's Machine learning in Python with scikit-learn](https://inria.github.io/scikit-learn-mooc/). Work through predictive modelling, preprocessing, model validation, linear models, trees and ensembles. The official course is free and includes exercises. Start after you can write Python functions and work with tables.

**Alternative or revision course:** [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course). Use it for loss, gradient descent, classification metrics and generalisation. You do not need to complete two full introductory ML courses.

Fit preprocessing on training data only. Save the final test set for the final evaluation.

### Portfolio project 1 · House price prediction

Use a suitable public dataset. Compare a simple median prediction with linear regression and a tree-based model. Report mean absolute error on held-out data and inspect the largest mistakes. Record the dataset source and licence.

### Checkpoint

Explain why your metric fits the task, whether the model beats the baseline, which inputs may leak the answer, and where predictions are weak. Report observed results rather than promising a target accuracy.

## Stage 4 · Deep learning

**Weeks 19–24.** Train or adapt a small model before considering large models. Understand what changes during training and what stays fixed during inference.

### Learn

**Main course:** [fast.ai Practical Deep Learning for Coders](https://course.fast.ai/). Start with Part 1 and practise on your own small dataset. Learn tensors, neural networks, loss, optimisation, transfer learning, and saving and reloading models. The course uses PyTorch and fastai.

The Part 1 recordings are from **2022**. Use current documentation when a setup command or API has changed.

### Portfolio project 2 · Small image classifier

Build a classifier for a few categories of recyclable objects or another small image task. Use your own or suitably licensed images, keep separate evaluation images, and inspect examples the model gets wrong. Treat it as a learning demo.

### Checkpoint

Explain the model input, output, training loss and validation result. Reload the saved model in a fresh session and reproduce a prediction. Check that near-duplicate images have not crossed your train and test split.

**Compute:** start data analysis and classical ML on a CPU. Keep deep learning experiments small. Optional GPU access and session limits depend on the platform; a paid GPU subscription is not a prerequisite for starting this roadmap.

## Stage 5 · LLMs and application design

**Weeks 25–32.** Learn tokens, context limits, prompts, structured outputs, embeddings, retrieval, RAG and tool calling. Use the workshop notebooks to practise application concepts alongside the course. Start with one model and understand the steps before adding frameworks.

### Learn

**Main course:** [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1). Begin with introductory chapters on transformers, tokenisation and using pretrained models. The course recommends good Python knowledge and introductory deep learning. Leave advanced fine-tuning and reasoning-model chapters for later study.

### Portfolio project 3 · College handbook assistant

Use approved public documents. Retrieve relevant passages, answer with source references, and say when the documents do not contain an answer. Keep API keys private and validate tool arguments in code.

Create a manually reviewed evaluation set of **20 questions**:

- 10 answerable from the documents.
- 5 whose answers are missing from the documents.
- 5 containing misleading or instruction-like text.

Record answer support, source correctness, failures and observed latency. Keep this set for comparisons when you change the app.

### Checkpoint

Explain the difference between retrieval and generation. Show a correct sourced answer, a refusal to invent missing information, and a readable response when a service is unavailable. A citation alone does not prove that an answer is supported.

## Stage 6 · Software engineering and deployment

**Weeks 33–38.** Use virtual environments, dependency files, automated checks, logs, timeouts and bounded retries. Separate secrets from source code. Measure request latency and usage instead of assuming a service is free or unlimited.

### Learn

- **Main guide:** [FastAPI Tutorial User Guide](https://fastapi.tiangolo.com/tutorial/). Study request and response models, validation, errors, dependencies and testing. Turn an existing project into a small API; learn HTTP and JSON while implementing it.
- **Packaging guide:** [Docker Get started](https://docs.docker.com/get-started/). Learn images, containers, dependencies and configuration. Package your API so setup is repeatable.
- **Optional deeper study:** [Full Stack LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/). These recordings are from **April 2023**. Use them for application design and production tradeoffs, and check current documentation for implementation.

### Build

Add a simple interface and API to the handbook assistant. Deploy within an explicit budget, or provide a reproducible local demo. Test empty input, unsupported questions, invalid files and an unavailable model service. If you save chat data, explain what is collected and why.

### Checkpoint

Another student can start the application from your instructions. Explain the path from a user request through retrieval and inference to the response, and show how failures are handled.

## Stage 7 · Portfolio and internship preparation

**Weeks 39–44.** Improve one capstone and prepare clear explanations. Begin applying for suitable internships as soon as you have a solid project you can demonstrate; you do not need to wait until week 44.

### Keep three strong projects

| Project | What a reviewer should see |
| --- | --- |
| Classical ML | A baseline, a justified split, a suitable metric, actual results and error analysis. |
| Deep learning | Your dataset choices, training or transfer learning, evaluation mistakes and a reloadable model. |
| AI application | A working interface or demo, sources where relevant, an evaluation set, API safety and readable failures. |

For every repository, explain the problem, data source and licence, setup, approach, results, limitations and your contribution. For the capstone, include an architecture diagram, a short demo and instructions that another student has tried.

Use your own measured results in your resume. Be ready to modify the project and explain why you made each major choice.

### Prepare for interviews

Practise Python, SQL, common data structures, complexity, ML evaluation, APIs and debugging. Review DBMS, operating systems and networking for campus placements. Follow each job description to choose what to deepen.

## A weekly routine you can sustain

This example totals nine hours per week.

| Hours | Activity |
| --- | --- |
| 3 | Follow the current course and complete its exercises. |
| 3 | Build or improve the current project. |
| 1 | Practise data structures and algorithms plus SQL. |
| 1 | Review errors, run checks and revise concepts. |
| 1 | Write documentation and explain your work to a peer. |

## Optional specialisations

Choose these after the shared foundation:

- **Agents:** [Hugging Face AI Agents Course](https://huggingface.co/learn/agents-course/en/unit0/introduction). Start after building and evaluating an LLM application. Practise bounded tool use, observations and permission checks.
- **AI security:** [PortSwigger Web LLM attacks](https://portswigger.net/web-security/llm-attacks). Learn prompt injection and unsafe tool access in the Academy's provided training environments. Add secure coding, web basics and threat modelling to your studies.

## Start this week

1. Choose a regular study time.
2. Create your learning repository.
3. Solve two Python exercises.
4. Make one Git commit.
5. Explain your code to a friend.

Use AI for hints, explanations and code review. Then explain, change and test the result yourself. Move to the next stage when you can complete its checkpoint, rather than when you have watched every video.
