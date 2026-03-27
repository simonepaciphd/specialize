# PROJECT_MAP

## Purpose of the project

This project is building a system that makes people easier for AI agents to work with over time. The product scans a user's projects, workflows, prior interactions, and artifacts, then converts those into a portable, agent-native context package.

The package should help future agents:
- orient faster
- search less
- make fewer wrong assumptions
- reuse proven workflows
- preserve user-specific operating logic across tools

## The repo has five working zones

Because the repo may still be messy, treat these as **responsibility zones**, not guaranteed existing folders.

### 1. Product thinking
Where the product concept, layer boundaries, value proposition, and user narratives live.

Use for:
- positioning
- roadmap framing
- feature rationale
- cooperative and governance thinking

Primary docs:
- `PRODUCT_OVERVIEW.md`
- `DOMAIN_MODEL.md`
- `DECISIONS.md`

### 2. Implementation
Where actual code, app structure, services, schemas, and scripts live.

Use for:
- frontend pages
- backend services
- ingestion logic
- exports
- memory packaging

Primary docs:
- `ARCHITECTURE.md`
- `COMMANDS.md`
- `WORKFLOWS.md`

### 3. Experiments
Where Labs-related tests, prompt experiments, context architecture variants, and instrumentation ideas live.

Use for:
- comparative prompt tests
- intervention burden measurement
- skill experiments
- memory strategy comparisons

Primary docs:
- `PRODUCT_OVERVIEW.md`
- `WORKFLOWS.md`
- `SKILLS/EXPERIMENT_DESIGN.md`

### 4. Research notes
Where competitor scans, cooperative analogs, governance research, and product strategy memos live.

Use for:
- memo drafting
- competitor synthesis
- policy and governance research
- research-backed product decisions

Primary docs:
- `WORKFLOWS.md`
- `SKILLS/COMPETITOR_SYNTHESIS.md`
- `SKILLS/PRODUCT_MEMO_DRAFTING.md`

### 5. Agent operating system
Where the repo teaches agents how to work.

Use for:
- onboarding
- task routing
- planning
- validation
- handoffs
- anti-pattern prevention

Primary docs:
- `AGENTS.md`
- `ANTI_PATTERNS.md`
- `CHECKLISTS/`
- `SKILLS/`
- `PLANS/`
- `INTAKE/`

## What belongs at the root

Keep root files brief and high-signal.

- `README.md`: human-readable orientation
- `AGENTS.md`: minimal operating contract for agents
- `CLAUDE.md`: Claude-compatible entrypoint that points back to the same layered system

Do not put detailed workflows, domain logic, or long decision histories at the root.

## What belongs in docs/agent

`docs/agent/` is the durable control layer.

It should answer:
- what this product is
- how the repo is organized
- what is real vs provisional
- how agents should approach recurring tasks
- how to validate and hand off work

## Where future agents should look first

### If the task is product or strategy
1. `INTAKE/TASK_TRIAGE.md`
2. `PRODUCT_OVERVIEW.md`
3. `DOMAIN_MODEL.md`
4. relevant skill

### If the task is frontend implementation
1. `INTAKE/TASK_TRIAGE.md`
2. `ARCHITECTURE.md`
3. `COMMANDS.md`
4. `WORKFLOWS.md`
5. `SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`

### If the task is backend or systems
1. `INTAKE/TASK_TRIAGE.md`
2. `ARCHITECTURE.md`
3. `DOMAIN_MODEL.md`
4. `COMMANDS.md`
5. plan template

### If the task is research synthesis
1. `INTAKE/TASK_TRIAGE.md`
2. `WORKFLOWS.md`
3. relevant research skill
4. `DECISIONS.md` to avoid redoing settled framing

### If the task is repo cleanup or context engineering
1. `INTAKE/TASK_TRIAGE.md`
2. `PROJECT_MAP.md`
3. `ANTI_PATTERNS.md`
4. relevant skill

## Repo traversal rule

Agents should follow this sequence:

1. classify the task
2. load the smallest relevant context
3. decide whether a plan is needed
4. do the work
5. validate honestly
6. update decisions, docs, and handoff notes if the work changed future expectations
