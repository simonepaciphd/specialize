# CLAUDE.md

You are working on **Self-Specialize Your Agents** — a system that converts a user's projects, workflows, habits, and prior agent interactions into portable, agent-native context packages.

## Product thesis

Most agent performance problems are context-structure problems, not model problems. The goal is to derive durable artifacts (skills, workflows, memory layers, project maps) that agents can reuse — not dump raw files into every session.

## Product layers

1. **Private self-specialization** (core) — user-owned scanning, extraction, review, export
2. **Labs** (opt-in experimentation) — compare context architectures, measure intervention burden
3. **Cooperative / governance** (future) — consent, pooling, licensing hooks. Not in MVP.

Status: Layer 1 is the build target. Layer 2 is strategically central but aspirational. Layer 3 is aspirational and policy-sensitive.

## Workspace layout

```
.claude/rules/          # Agent behavioral rules (loaded automatically)
docs/
  agent/                # Agent operating system — task routing, skills, checklists, plans
  product/              # Product memos, positioning, strategy
  research/             # Competitor scans, governance research, market analysis
apps/
  api/                  # Backend API
  web/                  # Frontend
packages/
  domain/               # Core entities and enums
  context-engine/       # Scan, extract, distill, export
  labs/                 # Experiments, metrics, reporting
  governance/           # Consent and cooperative hooks
schemas/                # JSON schema and package contracts
content-startup-md/     # Source product briefs and strategic content
skills-library/         # Reusable writing and project protocols
self-specialize-agents-ide-context-package/  # Reference context package (the product's own dogfood)
```

## How to work in this repo

### Loading discipline
- Start with this file, then `docs/agent/TASK_TRIAGE.md` for task routing.
- Load only what the current task needs. Do not ingest the whole tree.
- Prefer maps, overviews, and skills before raw implementation files.

### Task routing
- **Product/strategy**: `docs/agent/PRODUCT_OVERVIEW.md`, `docs/agent/DOMAIN_MODEL.md`, relevant skill
- **Frontend/UI**: `docs/agent/ARCHITECTURE.md`, `docs/agent/WORKFLOWS.md`, `docs/agent/SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`
- **Backend/systems**: `docs/agent/ARCHITECTURE.md`, `docs/agent/DOMAIN_MODEL.md`, plan template
- **Research/memos**: `docs/agent/WORKFLOWS.md`, `docs/agent/SKILLS/COMPETITOR_SYNTHESIS.md` or `PRODUCT_MEMO_DRAFTING.md`
- **Writing**: load the appropriate protocol from `skills-library/` (paper, op-ed, Atlantic ideas, pitch)
- **Repo cleanup/context**: `docs/agent/PROJECT_MAP.md`, `docs/agent/ANTI_PATTERNS.md`

### Planning threshold
Create a plan (`docs/agent/PLANS/`) before work that is multi-step, multi-file, architecture-shaping, or risky to roll back. Single-file edits and small fixes don't need one.

### Honesty discipline
- Distinguish **implemented**, **provisional**, and **aspirational** at all times.
- Do not invent commands, pretend aspirational components are built, or treat speculation as fact.
- If validation cannot be run, say so clearly.

## Available assets

### Skills library (`skills-library/`)
- `paper-writing-protocol.md` — scientific paper prose style
- `oped-writing-protocol.md` — newspaper guest essay (NYT-style)
- `atlantic-ideas-writing-protocol.md` — long-form ideas essay
- `altac-writing-pitch-protocol.md` — pitching Atlantic-style ideas
- `project-setup.md` — replication folder template for research projects

### Agent operating system (`docs/agent/`)
The `self-specialize-agents-ide-context-package/` directory is the reference copy of the layered agent context system. Key components have been seeded into `docs/agent/` for active use:
- Skills, checklists, plans, intake routing, examples, anti-patterns
- Domain model, architecture, workflows, decisions log

### Strategic content (`content-startup-md/`)
- Product definition and MVP scope
- Market research protocol and competitive landscape
- Labs governance addendum
- Agent context interview system
- Website/UI agent brief

## Completion standard

Before claiming a task is done:
- Touched files match the task scope
- Assumptions are stated explicitly
- Validation was run, or inability to validate is stated
- Docs and decision logs updated if the change affects future work
- No aspirational claims presented as implemented

## When in doubt

Reduce scope, make assumptions explicit, and leave the repo clearer than you found it.
