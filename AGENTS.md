# AGENTS.md

Shortest valid entry point for any agent working in this repo.

## Mission

Build the context, product, and implementation system for **Self-Specialize Your Agents** without inventing maturity the repo does not have.

## Loading order

1. `CLAUDE.md` (or this file)
2. `docs/agent/TASK_TRIAGE.md`
3. Task-specific docs from `docs/agent/`

Do **not** load the entire context tree unless the task genuinely spans the whole repo.

## Core rules

- Distinguish **implemented**, **provisional**, and **aspirational** at all times.
- Prefer small, coherent file edits over broad repo churn.
- Write a plan before major or multi-file work. Use `docs/agent/PLANS/PLAN_TEMPLATE.md`.
- Update `docs/agent/DECISIONS.md` when a choice will affect future work.
- Run validation before claiming completion.
- If command reality is unknown, mark it as unknown. Do not invent commands.

## Task routing

| Task type | Load these docs |
|-----------|----------------|
| Product/strategy | `PRODUCT_OVERVIEW.md`, `DOMAIN_MODEL.md`, relevant skill |
| Frontend/UI | `ARCHITECTURE.md`, `WORKFLOWS.md`, `SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md` |
| Backend/systems | `ARCHITECTURE.md`, `DOMAIN_MODEL.md`, plan template |
| Research/memos | `WORKFLOWS.md`, `SKILLS/COMPETITOR_SYNTHESIS.md` or `PRODUCT_MEMO_DRAFTING.md` |
| Writing | appropriate protocol from `skills-library/` |
| Repo cleanup | `PROJECT_MAP.md`, `ANTI_PATTERNS.md` |

All doc paths are relative to `docs/agent/` unless otherwise noted.

## Completion standard

- Touched files match the task
- Assumptions are stated
- Validation was run or inability stated
- Docs and decision logs updated if needed

## When in doubt

Reduce scope, make assumptions explicit, leave the repo clearer than you found it.
