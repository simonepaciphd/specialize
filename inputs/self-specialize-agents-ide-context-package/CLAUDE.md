# CLAUDE.md

Claude-style entrypoint for this repo.

Use `AGENTS.md` as the primary operating contract. This file adds only Claude-specific loading guidance.

## First reads

1. `AGENTS.md`
2. `docs/agent/INTAKE/TASK_TRIAGE.md`
3. Only the smallest set of additional docs needed for the current task

## Working style for this repo

- Keep context windows lean. Load progressively.
- Prefer derived summaries, maps, and plans over raw note dumps.
- Separate what exists now from what is only intended.
- For major changes, create a plan file under `docs/agent/PLANS/`.
- Record durable choices in `docs/agent/DECISIONS.md`.

## Claude rules directory

See `.claude/rules/` for:
- loading discipline
- planning thresholds
- implementation and validation expectations

Do not duplicate those rules elsewhere.
