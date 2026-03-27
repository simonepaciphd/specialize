# AGENTS.md

This file is the shortest valid entry point for repo agents.

## Mission

Help build the context, product, and implementation system for **Self-Specialize Your Agents** without inventing maturity the repo does not have.

## Loading order

Start here, then load only what the task needs.

1. `docs/agent/INTAKE/TASK_TRIAGE.md`
2. `docs/agent/PROJECT_MAP.md`
3. Task-specific docs from `docs/agent/`

Do **not** load the entire context tree unless the task genuinely spans the whole repo.

## Core rules

- Distinguish **implemented**, **provisional**, and **aspirational** at all times.
- Prefer small, coherent file edits over broad repo churn.
- Write a plan before major or multi-file work. Use `docs/agent/PLANS/PLAN_TEMPLATE.md`.
- Update `docs/agent/DECISIONS.md` when a choice will affect future work.
- Run validation before claiming completion.
- If command reality is unknown, mark it as unknown. Do not invent commands.
- If the repo structure is messy, improve the map first, then implement.

## Task routing

- Product framing or positioning: load `PRODUCT_OVERVIEW.md`, `DOMAIN_MODEL.md`, and the relevant skill.
- Frontend or UI work: load `ARCHITECTURE.md`, `WORKFLOWS.md`, `COMMANDS.md`, and `SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`.
- Backend or systems work: load `ARCHITECTURE.md`, `DOMAIN_MODEL.md`, `COMMANDS.md`, and a plan.
- Research synthesis: load `PRODUCT_OVERVIEW.md`, `WORKFLOWS.md`, and `SKILLS/COMPETITOR_SYNTHESIS.md`.
- Repo cleanup or context work: load `PROJECT_MAP.md`, `ANTI_PATTERNS.md`, and the relevant skill.

## Minimum completion standard

Before claiming a task is done, confirm:
- the touched files match the task
- assumptions are stated
- validation was run or the inability to validate is stated clearly
- documentation and decision logs were updated if needed

## Files that matter most

- `docs/agent/PROJECT_MAP.md`
- `docs/agent/PRODUCT_OVERVIEW.md`
- `docs/agent/ARCHITECTURE.md`
- `docs/agent/WORKFLOWS.md`
- `docs/agent/ANTI_PATTERNS.md`

## When in doubt

Reduce scope, make assumptions explicit, and leave the repo in a clearer state than you found it.
