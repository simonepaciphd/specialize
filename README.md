# Self-Specialize Your Agents

Portable personal context packages for AI agents.

## What this is

A system that converts a user's projects, workflows, habits, and prior agent interactions into reusable, reviewable, portable context artifacts. The goal is to make agents better collaborators over time — less re-explanation, fewer wrong assumptions, more continuity.

## Product layers

1. **Private self-specialization** — scan, extract, review, export your own context package
2. **Labs** — opt-in experimentation with context architectures and workflows
3. **Cooperative / governance** — future consent, pooling, and licensing (not in MVP)

## Repo structure

| Directory | Purpose |
|-----------|---------|
| `docs/agent/` | Agent operating system — task routing, skills, checklists, plans |
| `docs/product/` | Product memos, positioning, strategy |
| `docs/research/` | Competitor scans, governance research |
| `apps/api/` | Backend API |
| `apps/web/` | Frontend |
| `packages/domain/` | Core entities and enums |
| `packages/context-engine/` | Scan, extract, distill, export pipeline |
| `packages/labs/` | Experiments, metrics, reporting |
| `packages/governance/` | Consent and cooperative hooks |
| `schemas/` | JSON schema and package contracts |
| `skills-library/` | Reusable writing and project protocols |
| `content-startup-md/` | Source product briefs and strategic content |

## For agents

Start with `CLAUDE.md` or `AGENTS.md` at the root. Both route you to `docs/agent/TASK_TRIAGE.md` for task classification and progressive context loading.

## Current status

The repo contains product definition, agent context scaffolding, writing protocols, and strategic research. Implementation of the product itself (ingestion pipeline, frontend, API) is next.
