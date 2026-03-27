# Loading discipline

## Objective

Keep context small and relevant.

## Rules

- Start with `CLAUDE.md` and `docs/agent/TASK_TRIAGE.md`.
- Load only the files required for the current task category.
- Do not ingest the whole `docs/agent/` tree by default.
- Prefer maps, overview docs, plans, and skills before reading raw implementation files.
- If a task becomes broader, expand context gradually.
- For writing tasks, load the specific protocol from `skills-library/` — do not load all of them.

## Failure modes

- Overloading context with every doc in the tree
- Skipping the intake/triage step
- Reading architecture before understanding the product layer split
- Loading all writing protocols when only one genre is needed
