# Self-Specialize Agents IDE Context Package

This file consolidates the repo-ready markdown package into a single downloadable document.

## File map

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.claude/rules/00-loading-discipline.md`
- `.claude/rules/10-planning-threshold.md`
- `.claude/rules/20-implementation-standard.md`
- `docs/agent/ANTI_PATTERNS.md`
- `docs/agent/ARCHITECTURE.md`
- `docs/agent/COMMANDS.md`
- `docs/agent/CONTEXT_ARCHITECTURE.md`
- `docs/agent/DECISIONS.md`
- `docs/agent/DOMAIN_MODEL.md`
- `docs/agent/HIGHEST_PRIORITY_FILES.md`
- `docs/agent/IMPLEMENTATION_ORDER.md`
- `docs/agent/PRODUCT_OVERVIEW.md`
- `docs/agent/PROJECT_MAP.md`
- `docs/agent/WORKFLOWS.md`
- `docs/agent/CHECKLISTS/AGENT_HANDOFF.md`
- `docs/agent/CHECKLISTS/DONE_MEANS_DONE.md`
- `docs/agent/CHECKLISTS/FEATURE_PREFLIGHT.md`
- `docs/agent/CHECKLISTS/PLAN_QUALITY.md`
- `docs/agent/CHECKLISTS/RESEARCH_MEMO.md`
- `docs/agent/CHECKLISTS/REVIEW_PR.md`
- `docs/agent/EXAMPLES/ADD_GOVERNANCE_CONSENT_FLOWS.md`
- `docs/agent/EXAMPLES/DRAFT_LABS_FEATURE_ARCHITECTURE.md`
- `docs/agent/EXAMPLES/IMPLEMENT_LANDING_PAGE.md`
- `docs/agent/EXAMPLES/PREPARE_INVESTOR_MEMO.md`
- `docs/agent/EXAMPLES/RESEARCH_COOPERATIVE_ANALOGS.md`
- `docs/agent/EXAMPLES/UPDATE_POSITIONING_AFTER_COMPETITOR_SCAN.md`
- `docs/agent/INTAKE/README.md`
- `docs/agent/INTAKE/TASK_TRIAGE.md`
- `docs/agent/PLANS/PLAN_TEMPLATE.md`
- `docs/agent/PLANS/README.md`
- `docs/agent/SKILLS/AGENT_HANDOFF.md`
- `docs/agent/SKILLS/COMPETITOR_SYNTHESIS.md`
- `docs/agent/SKILLS/CONTEXT_COMPRESSION.md`
- `docs/agent/SKILLS/DECISION_LOGGING.md`
- `docs/agent/SKILLS/EXPERIMENT_DESIGN.md`
- `docs/agent/SKILLS/FILE_STRUCTURE_HYGIENE.md`
- `docs/agent/SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`
- `docs/agent/SKILLS/POSITIONING_AND_MESSAGING.md`
- `docs/agent/SKILLS/PRODUCT_MEMO_DRAFTING.md`
- `docs/agent/SKILLS/README.md`
- `docs/agent/SKILLS/REPO_ONBOARDING.md`
- `docs/agent/SKILLS/SKILL_TEMPLATE.md`


---

# File: `README.md`

# Self-Specialize Your Agents

Portable context infrastructure for agent-native work.

This repository is for building a product that helps a person turn their projects, workflows, prior agent interactions, and operating habits into a reusable context package that other agents can pick up quickly. The product is not just a prompt generator. It is a system for producing durable instructions, skills, memory layers, workflows, and exports that travel across tools.

## What this repo is trying to build

The project has three product layers:

1. **Private self-specialization**
   A user creates a private context package from their own materials and working style.

2. **Labs**
   A structured environment for collaborative experimentation on prompts, skills, workflows, memory architecture, and intervention burden.

3. **Cooperative layer**
   An optional member-governed layer for research participation and, later, possible licensing or pooling of approved bundles.

The order matters. Private utility comes first. Labs comes after a working private product loop. Governance comes after there is something worth governing.

## What this repo most needs

This repo should behave like an agent operating system, not like a startup scrapbook. The context package in `docs/agent/` is the main operational interface for coding agents, research agents, and product agents. Root files stay short. Specialized guidance lives below.

## Where to start

For humans:
- Read `docs/agent/PRODUCT_OVERVIEW.md`
- Then read `docs/agent/PROJECT_MAP.md`

For agents:
- Read `AGENTS.md`
- Then load the minimum additional files for the current task using `docs/agent/INTAKE/TASK_TRIAGE.md`

## Package layout

```text
/
  README.md
  AGENTS.md
  CLAUDE.md
  .claude/
    rules/
  docs/
    agent/
      PROJECT_MAP.md
      PRODUCT_OVERVIEW.md
      ARCHITECTURE.md
      DOMAIN_MODEL.md
      WORKFLOWS.md
      COMMANDS.md
      DECISIONS.md
      ANTI_PATTERNS.md
      CHECKLISTS/
      SKILLS/
      PLANS/
      INTAKE/
      EXAMPLES/
```

## Operating assumptions

- The repo may be early-stage or partially implemented.
- Some architecture is provisional.
- Product, research, and implementation work will coexist for a while.
- Agents should prefer derived context over loading raw notes by default.
- Large workstreams should start with a plan file.

## Standards for work in this repo

- Be explicit about what is real, what is provisional, and what is aspirational.
- Keep root instructions compact.
- Add decision records when a choice is likely to matter again.
- Do not claim completion without validation.
- Do not silently turn speculative concepts into code assumptions.
- Keep context layered. Do not create a single giant file.

## If time is limited

Create these first:
1. `AGENTS.md`
2. `docs/agent/PROJECT_MAP.md`
3. `docs/agent/PRODUCT_OVERVIEW.md`
4. `docs/agent/WORKFLOWS.md`
5. `docs/agent/SKILLS/REPO_ONBOARDING.md`

After that, add decision logs, anti-patterns, and checklists.

## Status convention

Use this language consistently:

- **Implemented**: exists in code or in a real workflow now
- **Provisional**: current working assumption, may change soon
- **Aspirational**: intended direction, not built yet

This repository should stay honest about which of those states each component is in.


---

# File: `AGENTS.md`

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


---

# File: `CLAUDE.md`

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


---

# File: `.claude/rules/00-loading-discipline.md`

# Loading discipline

## Objective

Keep context small and relevant.

## Rules

- Start with `AGENTS.md` and `docs/agent/INTAKE/TASK_TRIAGE.md`.
- Load only the files required for the current task category.
- Do not ingest the whole `docs/agent/` tree by default.
- Prefer maps, overview docs, plans, and skills before reading raw implementation files.
- If a task becomes broader, expand context gradually.

## Failure modes

- overloading context with every doc in the tree
- skipping the intake step
- reading architecture before understanding the product layer split


---

# File: `.claude/rules/10-planning-threshold.md`

# Planning threshold

Create a plan file before work that is:
- multi-step
- multi-file
- architecture-shaping
- risky to roll back
- unclear enough that assumptions need to be pinned down

Use `docs/agent/PLANS/PLAN_TEMPLATE.md`.

Small typo fixes, narrow edits, and single-file copy changes do not require a plan.


---

# File: `.claude/rules/20-implementation-standard.md`

# Implementation standard

Before claiming completion:

- list what changed
- note any assumptions
- run validation that is actually available
- state clearly if validation could not be run
- update docs if the change affects future agent behavior
- add a decision record if the choice is likely to recur

Never:
- pretend an aspirational component is implemented
- invent commands
- spread edits across unrelated files


---

# File: `docs/agent/ANTI_PATTERNS.md`

# ANTI_PATTERNS

This file exists to stop predictable agent mistakes.

## 1. Overloading root instructions

### Bad pattern
Putting long workflows, architecture details, and domain reasoning into `README.md` or `AGENTS.md`.

### Why it hurts
It increases startup cost and makes the most important files unreadable.

### Correct pattern
Keep root files short. Push detail into `docs/agent/`.

---

## 2. Inventing architecture details

### Bad pattern
Writing as if specific services, schemas, queues, jobs, or databases already exist when they have not been verified.

### Why it hurts
It contaminates future implementation with fake certainty.

### Correct pattern
Label assumptions as provisional and tie them to the current product stage.

---

## 3. Treating speculative ideas as implemented

### Bad pattern
UI copy, docs, or code paths that imply governance, experiments, or export flows already work.

### Why it hurts
It creates false product claims and implementation debt.

### Correct pattern
Mark features by status and keep aspirational flows visibly separate.

---

## 4. Editing too many unrelated files at once

### Bad pattern
Sweeping changes across docs, code, and strategy without a plan.

### Why it hurts
It makes validation weak and handoff difficult.

### Correct pattern
Use a plan for broad work. Keep changes coherent.

---

## 5. Claiming completion without validation

### Bad pattern
Saying a task is done without running checks or stating why checks could not be run.

### Why it hurts
It turns confidence into noise.

### Correct pattern
State exactly what was validated and what remains unverified.

---

## 6. Adding abstractions before repeated need exists

### Bad pattern
Creating complex framework layers, plugin systems, or schema hierarchies before a second real use case exists.

### Why it hurts
It slows iteration and makes the repo harder to reason about.

### Correct pattern
Keep structure simple until repeated patterns justify abstraction.

---

## 7. Hiding uncertainty

### Bad pattern
Smoothing over unknowns with generic prose.

### Why it hurts
Future agents cannot tell which assumptions are safe.

### Correct pattern
Name the unknown directly and record it where it matters.

---

## 8. Repeating prior mistakes because they were never recorded

### Bad pattern
Fixing the same ambiguity multiple times without updating docs or decisions.

### Why it hurts
The repo never compounds learning.

### Correct pattern
Record durable lessons in `DECISIONS.md`, skills, or checklists.

---

## 9. Building the cooperative layer too early

### Bad pattern
Spending early implementation effort on voting, licensing, or complex governance before private utility works.

### Why it hurts
It front-loads complexity and weakens the core product loop.

### Correct pattern
Use governance thinking to shape boundaries, not to dominate the build order.

---

## 10. Letting Labs bleed into the baseline product

### Bad pattern
Treating experimental variants as default behavior without documentation.

### Why it hurts
Results become uninterpretable and the product gets unstable.

### Correct pattern
Keep experimental paths explicit and reversible.

---

## 11. Using giant memory blobs as a substitute for structure

### Bad pattern
Stuffing everything into a long context file and calling it memory.

### Why it hurts
It destroys portability and precision.

### Correct pattern
Use layered artifacts: maps, skills, workflows, memory summaries, and exports.

---

## 12. Writing skills that are really slogans

### Bad pattern
A skill file that offers generic advice but no trigger, inputs, steps, or verification.

### Why it hurts
Agents cannot actually use it.

### Correct pattern
Every skill should act like an executable procedure in prose.


---

# File: `docs/agent/ARCHITECTURE.md`

# ARCHITECTURE

## Purpose

This is the working technical architecture reference for the repo. It should stay honest about maturity.

## Architecture stance

The system should be built as a **context production and export pipeline**, not as a single chat UI with hidden memory.

That implies four major layers:

1. ingestion
2. structuring
3. review and control
4. export and reuse

## Likely architecture slices

### 1. Ingestion layer
Collects and normalizes source materials.

Possible inputs:
- repositories
- local docs
- notes
- prior agent interactions
- manually entered workflows
- uploaded artifacts

Output:
- normalized source asset records
- metadata
- extraction candidates

**Status:** Provisional

### 2. Structuring layer
Turns raw materials into usable agent artifacts.

Likely outputs:
- project maps
- workflow specs
- skills
- memory summaries
- instruction layers
- handoff packages

This is where context compression should happen.

**Status:** Provisional but central

### 3. Review and control layer
Lets the user inspect and shape what becomes part of the package.

Likely capabilities:
- approve or reject artifacts
- edit generated drafts
- choose export targets
- define consent settings
- separate private artifacts from Labs or cooperative artifacts

**Status:** Aspirational to partial depending on repo stage

### 4. Export layer
Produces agent-facing outputs that can be used in different environments.

Possible exports:
- repo-local package files
- agent-specific root docs
- compact task bundles
- handoff packets

**Status:** Provisional and likely a first implementation target

## Recommended code architecture

Do not over-commit to exact folders if the repo is not there yet. Use this as a target shape.

```text
app/ or web/
  product UI surfaces
components/
  reusable UI
lib/
  domain logic, transforms, utilities
services/
  ingestion, generation, export services
schemas/
  typed domain models and validation
scripts/
  one-off maintenance, import, export, migrations
docs/
  human and agent docs
experiments/
  Labs-specific experiments, variants, instrumentation drafts
research/
  memos, scans, synthesis outputs
```

## Separation rules

### Product vs experiments
Experiment logic should not quietly shape default user behavior without being recorded.

### Private artifacts vs shared artifacts
Private baseline outputs should be separable from anything used for Labs or cooperative research.

### Concept docs vs implementation docs
Strategy and product reasoning belong in `docs/agent/`. Code comments and module docs belong near code.

## What to optimize for

- portability across agent environments
- inspectability
- low-context task startup
- modular evolution
- explicit review points
- recoverable handoffs

## What not to optimize for too early

- perfect ontology
- maximum automation
- deep abstraction before repeated patterns exist
- governance mechanics before core user loop works

## Eventual technical concerns

These are likely future concerns, not assumptions of present implementation:

- artifact versioning
- provenance tracking
- permissioning and consent enforcement
- export compatibility matrix by agent environment
- instrumentation for Labs
- evaluation of context effectiveness

## Validation expectations

Any architecture change should answer:
- what layer it touches
- whether it affects portability
- whether it changes consent or control boundaries
- whether docs and decision logs need updating


---

# File: `docs/agent/COMMANDS.md`

# COMMANDS

This file is the command truth source for agents. If a command is not verified, mark it as a placeholder.

## Current state

Repo command reality is **unknown from context alone**. Use this file to record actual commands once verified in the codebase.

## Expected command categories

### Development
```bash
# Placeholder
# Add the actual local dev command once confirmed
```

### Tests
```bash
# Placeholder
# Add the actual test command once confirmed
```

### Lint
```bash
# Placeholder
# Add the actual lint command once confirmed
```

### Format
```bash
# Placeholder
# Add the actual format command once confirmed
```

### Build
```bash
# Placeholder
# Add the actual build command once confirmed
```

### Preview or deployment preview
```bash
# Placeholder
# Add the actual preview command once confirmed
```

## How to update this file

When you confirm commands in the repo:
1. replace the relevant placeholder
2. note the package manager if relevant
3. specify whether the command runs from root or a subdirectory
4. include caveats for env setup or required services

## Command recording format

Use this structure when replacing placeholders:

```md
### Development

Run from: root

```bash
pnpm dev
```

Notes:
- starts web app and local services
- requires `.env.local`
```

## What not to do

- do not infer commands from vibes
- do not copy generic commands that have not been verified
- do not leave old placeholders beside real commands without labeling them


---

# File: `docs/agent/CONTEXT_ARCHITECTURE.md`

# Repo context architecture

## Diagnosis

A repo like this does not primarily need more prose. It needs a control surface for agents.

The main failure mode in a project like this is not lack of ideas. It is context sprawl:
- too much concept material at the root
- unclear boundary between product thinking and implementation
- speculative ideas treated as already real
- repeated re-orientation by each new agent
- no durable place for decisions, skills, and handoffs

The package therefore uses layered context with progressive disclosure.

## What belongs where

### Root files
Use root files only for:
- orientation
- task routing
- minimal operating rules
- links to deeper docs

### docs/agent
Use this directory for:
- project map
- product framing
- domain and architecture context
- recurring workflows
- command truth
- durable decisions
- anti-pattern prevention

### Rules
Use rules for lightweight agent behavior constraints:
- loading discipline
- planning thresholds
- implementation standards

### Skills
Use skills for repeatable tasks with clear triggers, inputs, steps, and verification.

### Plans
Use plans for medium- and large-scope workstreams. Plans are task-specific and temporary, but may remain valuable as history.

### Decision logs
Use decisions for choices that future agents should not have to rediscover.

## Traversal model

Agents should traverse the package in this order:

1. root entrypoint
2. intake triage
3. smallest relevant overview docs
4. skill
5. plan if needed
6. implementation or research work
7. validation
8. decision or handoff update

## Why this architecture

This structure keeps:
- root files concise
- detailed knowledge available but not forced into every context window
- product, research, and implementation work interoperable
- future agent recall easier
- wrong assumptions easier to catch


---

# File: `docs/agent/DECISIONS.md`

# DECISIONS

Durable decision log for the repo.

Use this file for choices that future agents should not have to rediscover.

## Format

- **ID**
- **Date**
- **Decision**
- **Reason**
- **Implication**

---

## D-001
**Date:** 2026-03-26  
**Decision:** Use layered context instead of a monolithic README.  
**Reason:** Agents need different levels of detail depending on task type. One giant file increases search cost, context waste, and wrong assumptions.  
**Implication:** Root files stay short. Detailed operational knowledge moves into `docs/agent/`.

## D-002
**Date:** 2026-03-26  
**Decision:** Treat agent portability as a first-order design goal.  
**Reason:** The product itself is about reusable context across agent environments, so the repo should embody that principle.  
**Implication:** Avoid tool-specific lock-in where possible. Keep root contracts and exports adaptable.

## D-003
**Date:** 2026-03-26  
**Decision:** Sequence the product as private product first, Labs second, cooperative layer later.  
**Reason:** Governance complexity should not outrun core product value.  
**Implication:** Private self-specialization is the baseline reference for product and architecture decisions.

## D-004
**Date:** 2026-03-26  
**Decision:** Prefer derived context over always-loaded raw context.  
**Reason:** Raw materials are large, noisy, and expensive to carry across tasks. Derived artifacts are more reusable and more inspectable.  
**Implication:** Invest in summaries, maps, skills, and memory layers rather than giant prompt dumps.

## D-005
**Date:** 2026-03-26  
**Decision:** Keep experiments operationally separate from commercialization and baseline product behavior.  
**Reason:** Labs should generate learning without confusing the default product or contaminating baseline artifacts.  
**Implication:** Experiment variants and measurements need explicit boundaries.

## D-006
**Date:** 2026-03-26  
**Decision:** Require a written plan for large workstreams.  
**Reason:** Multi-file, architecture-shaping work is where agents drift, overreach, or forget assumptions.  
**Implication:** Use `PLANS/PLAN_TEMPLATE.md` before broad changes.

## D-007
**Date:** 2026-03-26  
**Decision:** Keep command documentation brutally honest.  
**Reason:** Invented commands are worse than missing commands.  
**Implication:** `COMMANDS.md` starts with placeholders until verified from the repo.

## D-008
**Date:** 2026-03-26  
**Decision:** Make uncertainty visible rather than smoothing it over.  
**Reason:** This repo includes conceptual and aspirational components. Hiding uncertainty causes downstream implementation errors.  
**Implication:** Use implemented, provisional, and aspirational labels consistently.


---

# File: `docs/agent/DOMAIN_MODEL.md`

# DOMAIN_MODEL

## Purpose

This file defines the core entities and relationships for the product. It is conceptual first. Do not mistake this for a finished schema.

## Core entities

### User
A person creating and using a context package.

Key concerns:
- ownership
- privacy
- edit control
- export control
- consent choices

### Workspace
The working container for one user's specialization process.

Contains:
- source materials
- derived artifacts
- project-specific context
- exports
- experiment settings if applicable

### Source asset
Any raw material the system may inspect.

Examples:
- repo files
- notes
- documents
- prior agent transcripts
- prompts
- decisions
- workflows
- artifacts

### Derived context artifact
A structured output generated from source assets.

Examples:
- instruction layer
- skill file
- project map
- workflow spec
- memory summary
- agent handoff note

This is the main productive layer.

### Skill
A reusable procedure for recurring tasks inside a repo or product domain.

A skill should say:
- when to use it
- what inputs it requires
- what steps to follow
- how to verify output
- what mistakes to avoid

### Memory layer
A compressed persistence layer that preserves durable user- or project-specific facts without forcing full raw history into context.

Possible subtypes:
- identity and preferences
- project facts
- recurring workflows
- validated decisions
- open questions

### Export
A package or format intended for a target agent environment.

Examples:
- AGENTS-style repo files
- Claude-oriented pack
- Cursor or Codex-friendly summaries
- compressed handoff bundle

### Experiment
A structured comparison or observation inside Labs.

Examples:
- context variant A vs B
- prompt architecture comparison
- skill wording comparison
- intervention burden study
- productivity measurement setup

### Consent profile
The user's choices about what can be used where.

Possible scopes:
- private only
- private plus Labs
- private plus cooperative research
- licensing opt-in if later introduced

### Governance object
A record relevant to collective decision-making.

Examples:
- proposal
- vote
- consent state
- approved bundle class
- distribution rule

This should remain separate from the private product core.

## Relationships

- A **user** owns one or more **workspaces**.
- A **workspace** contains **source assets** and **derived context artifacts**.
- **Derived context artifacts** may be organized into **skills**, **memory layers**, and **exports**.
- A **workspace** may optionally participate in **experiments**.
- A **user** controls participation through a **consent profile**.
- **Governance objects** only apply when the user has entered the cooperative layer.

## Canonical transformations

The product likely performs these transformations:

1. source assets -> extracted signals
2. extracted signals -> candidate structures
3. candidate structures -> reviewed derived artifacts
4. reviewed derived artifacts -> exports
5. exports -> agent use
6. Labs feedback -> improved transformation logic

## Boundary rules

- Raw assets should not automatically become always-loaded context.
- Derived artifacts should remain inspectable and editable.
- Cooperative governance data should never silently mix with private baseline artifacts.
- Consent state should gate all non-private flows.

## Provisional schema clusters

If and when implementation begins, these clusters are likely:

- identity and access
- workspace and sources
- artifact generation
- skill library
- exports
- experiments and metrics
- governance and consent

## Common modeling mistakes

- flattening raw assets and derived artifacts into one concept
- treating prompts as the whole product
- merging Labs data with private baseline data
- treating governance as a prerequisite for core value
- assuming one universal export format for all agent environments


---

# File: `docs/agent/HIGHEST_PRIORITY_FILES.md`

# Highest-priority files if time is limited

If only a handful of files can be created first, create these in order:

1. `AGENTS.md`
2. `docs/agent/INTAKE/TASK_TRIAGE.md`
3. `docs/agent/PROJECT_MAP.md`
4. `docs/agent/PRODUCT_OVERVIEW.md`
5. `docs/agent/WORKFLOWS.md`
6. `docs/agent/ANTI_PATTERNS.md`
7. `docs/agent/SKILLS/REPO_ONBOARDING.md`

Why these:
- they classify tasks
- they stop context sprawl
- they distinguish product layers
- they reduce repeated agent wandering
- they improve handoff quality immediately


---

# File: `docs/agent/IMPLEMENTATION_ORDER.md`

# Suggested implementation order

Adopt this package in stages.

## Stage 1. Establish the entrypoints

Create first:
1. `README.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. `docs/agent/PROJECT_MAP.md`
5. `docs/agent/PRODUCT_OVERVIEW.md`

Why:
This gives both humans and agents a stable way to orient.

## Stage 2. Install the control layer

Create next:
1. `docs/agent/WORKFLOWS.md`
2. `docs/agent/ANTI_PATTERNS.md`
3. `docs/agent/DECISIONS.md`
4. `docs/agent/INTAKE/TASK_TRIAGE.md`

Why:
This reduces wrong assumptions and repeated re-orientation.

## Stage 3. Add reusable task procedures

Create next:
1. `docs/agent/SKILLS/README.md`
2. `docs/agent/SKILLS/SKILL_TEMPLATE.md`
3. `docs/agent/SKILLS/REPO_ONBOARDING.md`
4. `docs/agent/SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`
5. `docs/agent/SKILLS/COMPETITOR_SYNTHESIS.md`
6. `docs/agent/SKILLS/PRODUCT_MEMO_DRAFTING.md`

Why:
These are the highest-leverage recurring task patterns.

## Stage 4. Add architecture and domain specificity

Create next:
1. `docs/agent/ARCHITECTURE.md`
2. `docs/agent/DOMAIN_MODEL.md`
3. `docs/agent/COMMANDS.md`

Why:
These become more useful once the repo has some actual implementation to map.

## Stage 5. Add operational quality controls

Create next:
1. `docs/agent/CHECKLISTS/*`
2. `docs/agent/PLANS/*`
3. `.claude/rules/*`

Why:
These improve consistency once multiple agents or longer workstreams are active.

## Stage 6. Add examples and extend skills

Create next:
1. `docs/agent/EXAMPLES/*`
2. extra skills for new recurring workflows

Why:
Examples and expanded skills compound value after the basics are already stable.


---

# File: `docs/agent/PRODUCT_OVERVIEW.md`

# PRODUCT_OVERVIEW

## One-sentence product definition

**Self-Specialize Your Agents** helps a person convert their work, habits, and prior agent interactions into a portable context package that future agents can use productively.

## The product layers

### Layer 1. Private self-specialization
The user creates a private package for themselves.

Core outputs likely include:
- profile-level instructions
- project maps
- task workflows
- reusable skills
- compressed memory layers
- agent-native exports for different tools

This is the core product. Everything else depends on it.

**Status:** Provisional product definition. Specific implementation may still be evolving.

### Layer 2. Labs
A structured environment for trying different context architectures, prompts, skills, workflows, and memory setups.

Likely goals:
- compare variants
- capture productivity effects
- measure intervention burden
- track context usage patterns
- improve the underlying system

Labs should remain clearly separated from the user's private baseline package.

**Status:** Aspirational but strategically central.

### Layer 3. Cooperative layer
An optional governance and research layer for members who choose to participate.

Likely functions:
- member-governed research participation
- opt-in pooling of approved bundles or data products
- later voting on licensing or other collective decisions
- clear consent and compensation logic if bundles are monetized

This is not the starting point. Governance should not outrun product reality.

**Status:** Aspirational and policy-sensitive.

## User types

### Primary user: individual operator
Someone who wants agents to work more like a continuing team and less like blank slates.

Needs:
- portability
- privacy
- low-friction onboarding
- better continuity across projects and tools

### Secondary user: experiment participant
Someone willing to try variations and contribute structured feedback.

Needs:
- clear boundaries
- low burden
- observable benefit
- transparency about what is measured

### Tertiary user: cooperative member
Someone interested in collective governance or pooled value later on.

Needs:
- consent clarity
- auditable governance
- understandable rules
- visible upside and risk boundaries

## Value proposition

The project is valuable if it reduces four kinds of waste:

1. repeated orientation
2. repeated explanation
3. repeated mistakes
4. repeated loss of context across tools and sessions

## Non-goals

At least for now, this repo should not drift into:
- generic personal knowledge management
- a broad social network
- governance theater before core utility exists
- auto-ingesting everything without control boundaries
- a giant memory blob instead of layered context

## Product boundaries

### Data boundary
A user's raw materials are not the same thing as the export package. The product should derive a reusable working layer rather than just stuffing raw data into context.

### Control boundary
The user should be able to inspect, edit, accept, reject, and export the context package.

### Governance boundary
Labs and cooperative layers must be opt-in. Private product usage should not depend on joining them.

## Design stance

This project should feel like a serious developer tool for agent-native work:
- inspectable
- composable
- exportable
- explicit about uncertainty
- designed for long-horizon use

## What is likely implemented vs not

### Likely implemented or first to implement
- repo docs and context scaffolding
- prompt and skill structures
- initial page and concept work
- manual context packaging workflows

### Likely provisional
- exact ingestion pipeline
- exact memory model
- export formats
- instrumentation and evaluation design

### Likely aspirational
- fully automated package generation
- governance mechanisms
- pooled licensing and revenue logic
- strong multi-agent orchestration

## Current strategic assumptions

- Derived context is more useful than raw context for everyday use.
- Portability across agents is a first-order design goal.
- The private product should prove value before cooperative complexity is added.
- Labs should improve the system, not distort the main product.


---

# File: `docs/agent/PROJECT_MAP.md`

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


---

# File: `docs/agent/WORKFLOWS.md`

# WORKFLOWS

This file covers recurring work patterns. Use the matching skill whenever one exists.

## 1. Starting a new feature

### When to use
When adding or materially changing product functionality.

### Required inputs
- feature objective
- target user and layer
- current repo area affected
- constraints and assumptions

### Sequence
1. Classify the feature as private product, Labs, or cooperative.
2. Load relevant docs.
3. Create a plan if work spans multiple files or affects architecture.
4. Define the smallest testable version.
5. Implement.
6. Validate.
7. Update docs and decisions.

### Outputs
- plan file if needed
- code and docs
- decision entry if architecture or product boundary changed

### Validation
- feature aligns to the correct product layer
- implementation does not assume unbuilt systems
- affected commands and docs are updated

### Common failure modes
- building governance logic into private baseline flow
- skipping a plan for broad changes
- implementing vague concepts without a defined user outcome

---

## 2. Drafting a strategy or product memo

### When to use
For internal memos on product direction, tradeoffs, roadmap, governance, or positioning.

### Required inputs
- memo question
- intended audience
- known constraints
- relevant prior decisions

### Sequence
1. Read product overview and decisions.
2. Gather evidence or prior reasoning.
3. State the question precisely.
4. Structure the memo around decisions, not vibes.
5. End with implications and open questions.

### Outputs
- concise memo with recommendations
- list of open questions or decisions needed

### Validation
- separates facts from recommendations
- reflects repo's current maturity honestly
- does not relitigate already-settled choices without reason

### Common failure modes
- generic startup prose
- treating speculative monetization as current product reality
- failing to state what decision the memo supports

---

## 3. Competitor research synthesis

### When to use
When comparing products, adjacent tools, or analog systems.

### Required inputs
- comparison scope
- dimensions to compare
- target decision the synthesis should inform

### Sequence
1. Define the comparison frame.
2. Gather sources.
3. Extract comparable dimensions.
4. Synthesize into implications for this product.
5. Record any changed assumptions.

### Outputs
- comparison grid or memo
- implications for positioning, architecture, or roadmap

### Validation
- comparison dimensions are consistent
- synthesis ends with action relevance
- uncertain findings are marked as such

### Common failure modes
- collecting examples without extracting decisions
- comparing unlike products carelessly
- confusing inspiration with direct competition

---

## 4. Updating product positioning

### When to use
After new competitor information, user feedback, or product reframing.

### Required inputs
- old positioning
- trigger for change
- target audience
- core differentiation

### Sequence
1. Review current product overview.
2. Identify what changed.
3. Rewrite only the layers or claims affected.
4. Update associated docs and examples.
5. Record the positioning shift in decisions if durable.

### Outputs
- updated positioning text
- refreshed examples if needed

### Validation
- positioning still matches actual product stage
- claims are specific and defensible
- differentiation is legible

### Common failure modes
- drifting into marketing slogans
- rewriting everything for a narrow change
- claiming product breadth not supported by implementation

---

## 5. Implementing a frontend page

### When to use
For landing pages, product pages, dashboards, settings, review flows, and similar UI work.

### Required inputs
- page purpose
- target user
- states and actions
- known design constraints

### Sequence
1. Review relevant product and architecture docs.
2. Define the exact page job.
3. List states: loading, empty, normal, error.
4. Map data dependencies and placeholders.
5. Build the smallest coherent version.
6. Validate layout, copy, and states.
7. Update docs if the page changes product understanding.

### Outputs
- page implementation
- copy updates
- state handling

### Validation
- page reflects the correct product layer
- empty and error states exist
- text does not imply non-existent capabilities

### Common failure modes
- polishing visuals before clarifying the page job
- hardcoding speculative flows as if backed by real services
- forgetting review and consent states

---

## 6. Implementing a backend service

### When to use
For ingestion, structuring, export, consent, or experiment services.

### Required inputs
- service responsibility
- inputs and outputs
- domain entities touched
- failure and validation rules

### Sequence
1. Review domain model and architecture.
2. Write a plan.
3. Define boundaries and contracts first.
4. Implement the smallest useful slice.
5. Add validation and logging.
6. Update command docs and architecture notes.

### Outputs
- service code
- schemas or validation logic
- updated docs

### Validation
- service has a narrow responsibility
- boundaries match domain model
- assumptions and placeholders are obvious

### Common failure modes
- combining multiple layers into one service
- skipping schema thinking
- no clear contract between ingestion and derived artifacts

---

## 7. Defining a new experiment

### When to use
For Labs comparisons, metrics tests, prompt experiments, or context architecture trials.

### Required inputs
- hypothesis
- variants
- success signal
- user burden
- containment boundary

### Sequence
1. State what is being compared.
2. Define the expected learning.
3. Specify how burden will be measured.
4. Separate experiment artifacts from baseline product artifacts.
5. Decide how results will be summarized.

### Outputs
- experiment spec
- metrics and burden notes
- storage or logging plan if applicable

### Validation
- experiment does not silently become default behavior
- baseline vs experimental condition is explicit
- expected decision use is stated

### Common failure modes
- no hypothesis
- no burden measurement
- muddy separation from the main product

---

## 8. Creating a new skill

### When to use
When the same task pattern appears repeatedly or should be standardized for agents.

### Required inputs
- repeated task pattern
- typical inputs
- common mistakes
- verification method

### Sequence
1. Confirm the task is recurring.
2. Start from the skill template.
3. Define trigger, inputs, steps, outputs, verification, anti-patterns.
4. Add the skill to the backlog index if one exists.
5. Cross-link from workflows if needed.

### Outputs
- new skill file
- updated references

### Validation
- skill is specific enough to use
- verification is concrete
- it reduces future ambiguity

### Common failure modes
- writing abstract advice instead of a procedure
- omitting verification
- creating a skill for a one-off task

---

## 9. Writing a plan before major changes

### When to use
For broad, risky, or multi-file work.

### Required inputs
- objective
- assumptions
- touched files
- validation path

### Sequence
1. Use the plan template.
2. Keep the plan operational.
3. Include rollback or caution points.
4. Update while executing if scope changes materially.

### Outputs
- plan file under `PLANS/`

### Validation
- plan maps to real files
- validation is feasible
- open questions are visible

### Common failure modes
- vague plans
- plans with no file touch map
- plans that duplicate architecture docs

---

## 10. Reviewing or extending prior work

### When to use
When continuing from a prior agent, branch, or unfinished doc.

### Required inputs
- prior outputs
- current objective
- validation status of prior work

### Sequence
1. Read handoff notes or recent plans first.
2. Determine what is settled vs tentative.
3. Avoid rewriting unchanged context.
4. Extend the work with minimal disturbance.
5. Record corrections if prior assumptions were wrong.

### Outputs
- revised implementation or doc
- decision or handoff update if needed

### Validation
- preserves valid prior work
- explicitly corrects invalid assumptions
- avoids duplicate exploration

### Common failure modes
- redoing solved framing work
- deleting context without replacing it
- treating unfinished notes as final


---

# File: `docs/agent/CHECKLISTS/AGENT_HANDOFF.md`

# Agent handoff checklist

Use when leaving work for another agent.

- [ ] Objective completed or current stopping point is stated.
- [ ] Changed files are listed.
- [ ] Validation status is stated.
- [ ] Open issues or uncertainties are named.
- [ ] Next recommended step is concrete.
- [ ] Relevant plan or decision files are linked.
- [ ] The next agent does not need to rediscover basic context.


---

# File: `docs/agent/CHECKLISTS/DONE_MEANS_DONE.md`

# Done means done checklist

A task is not done unless:

- [ ] The output exists in the repo.
- [ ] The change was validated or validation limits were stated.
- [ ] Copy and docs do not overclaim capability.
- [ ] Decision logs were updated when needed.
- [ ] Handoff context exists if follow-on work is likely.
- [ ] No obvious anti-patterns were introduced.


---

# File: `docs/agent/CHECKLISTS/FEATURE_PREFLIGHT.md`

# Feature preflight checklist

Use before starting a material feature.

- [ ] The feature is assigned to the correct product layer: private, Labs, or cooperative.
- [ ] The user and user outcome are stated clearly.
- [ ] Relevant docs were loaded, not the whole tree.
- [ ] A plan exists if the work is multi-file or architecture-shaping.
- [ ] The smallest usable version is defined.
- [ ] Placeholder dependencies are labeled honestly.
- [ ] Validation path is known before coding starts.
- [ ] The feature does not quietly assume unbuilt services.


---

# File: `docs/agent/CHECKLISTS/PLAN_QUALITY.md`

# Plan quality checklist

Use to judge whether a plan is worth following.

- [ ] Objective is concrete.
- [ ] Assumptions are stated.
- [ ] File touch map is specific.
- [ ] Implementation steps are ordered and realistic.
- [ ] Validation is feasible.
- [ ] Rollback or caution points are included where relevant.
- [ ] Open questions are visible.
- [ ] The plan does not duplicate general architecture docs.


---

# File: `docs/agent/CHECKLISTS/RESEARCH_MEMO.md`

# Research memo checklist

Use for competitor scans, governance research, and product memos.

- [ ] The memo question is explicit.
- [ ] The audience is explicit.
- [ ] Sources or evidence are identified.
- [ ] Facts, inferences, and recommendations are separated.
- [ ] The memo supports a decision, not just general understanding.
- [ ] Prior decisions were checked to avoid rehashing settled issues.
- [ ] Open questions are listed at the end.
- [ ] Claims about current product reality match actual repo maturity.


---

# File: `docs/agent/CHECKLISTS/REVIEW_PR.md`

# PR or review checklist

Use before review or merge.

- [ ] The change matches the original task.
- [ ] Unrelated churn is limited.
- [ ] Docs are updated where behavior or expectations changed.
- [ ] Commands, if mentioned, are verified.
- [ ] Validation results are stated honestly.
- [ ] New assumptions are documented.
- [ ] Durable decisions were logged if needed.
- [ ] Handoff quality is sufficient for the next agent.


---

# File: `docs/agent/EXAMPLES/ADD_GOVERNANCE_CONSENT_FLOWS.md`

# Example pathway: add governance consent flows to domain model

## Read first

1. `AGENTS.md`
2. `INTAKE/TASK_TRIAGE.md`
3. `PRODUCT_OVERVIEW.md`
4. `DOMAIN_MODEL.md`
5. `ARCHITECTURE.md`
6. `DECISIONS.md`

## Skill to invoke

- `PRODUCT_MEMO_DRAFTING.md` for the rationale
- `DECISION_LOGGING.md` after the change

## Plan needed?

Yes. Governance logic affects boundaries and future implementation assumptions.

## Expected outputs

- plan file
- updated domain model
- updated architecture notes if service boundaries change
- decision entry explaining the new consent or governance stance


---

# File: `docs/agent/EXAMPLES/DRAFT_LABS_FEATURE_ARCHITECTURE.md`

# Example pathway: draft Labs feature architecture

## Read first

1. `AGENTS.md`
2. `INTAKE/TASK_TRIAGE.md`
3. `PRODUCT_OVERVIEW.md`
4. `DOMAIN_MODEL.md`
5. `ARCHITECTURE.md`
6. `SKILLS/EXPERIMENT_DESIGN.md`

## Skill to invoke

- `EXPERIMENT_DESIGN.md`
- optionally `PRODUCT_MEMO_DRAFTING.md`

## Plan needed?

Yes. Labs touches product boundaries and can easily bleed into baseline behavior.

## Expected outputs

- plan file
- feature architecture note
- explicit separation from private baseline artifacts
- decision entry if the boundary model changes


---

# File: `docs/agent/EXAMPLES/IMPLEMENT_LANDING_PAGE.md`

# Example pathway: implement a landing page

## Read first

1. `AGENTS.md`
2. `INTAKE/TASK_TRIAGE.md`
3. `PRODUCT_OVERVIEW.md`
4. `ARCHITECTURE.md`
5. `WORKFLOWS.md`
6. `SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`

## Skill to invoke

- `FRONTEND_PAGE_IMPLEMENTATION.md`

## Plan needed?

Yes, if the landing page introduces a new app structure, major copy architecture, or multiple supporting components.  
No, if it is a narrow single-page iteration.

## Expected outputs

- implemented landing page
- clear copy aligned to current product stage
- empty, loading, and fallback states where relevant
- doc updates if the page changes product understanding


---

# File: `docs/agent/EXAMPLES/PREPARE_INVESTOR_MEMO.md`

# Example pathway: prepare investor memo

## Read first

1. `AGENTS.md`
2. `INTAKE/TASK_TRIAGE.md`
3. `PRODUCT_OVERVIEW.md`
4. `DOMAIN_MODEL.md`
5. `DECISIONS.md`
6. `SKILLS/PRODUCT_MEMO_DRAFTING.md`
7. `SKILLS/POSITIONING_AND_MESSAGING.md`

## Skill to invoke

- `PRODUCT_MEMO_DRAFTING.md`
- `POSITIONING_AND_MESSAGING.md`

## Plan needed?

No for a standalone memo.  
Yes if the memo will force major reframing across repo docs.

## Expected outputs

- concise investor-facing memo
- honest statement of current maturity
- clear product sequence and differentiators
- explicit risks and open questions


---

# File: `docs/agent/EXAMPLES/RESEARCH_COOPERATIVE_ANALOGS.md`

# Example pathway: research data cooperative analogs

## Read first

1. `AGENTS.md`
2. `INTAKE/TASK_TRIAGE.md`
3. `PRODUCT_OVERVIEW.md`
4. `WORKFLOWS.md`
5. `DECISIONS.md`
6. `SKILLS/COMPETITOR_SYNTHESIS.md`

## Skill to invoke

- `COMPETITOR_SYNTHESIS.md`
- optionally `PRODUCT_MEMO_DRAFTING.md` for the final synthesis

## Plan needed?

Usually no unless the work will restructure governance docs or create a major new research package.

## Expected outputs

- analog scan
- comparison dimensions
- implications for the cooperative layer
- explicit note on what remains aspirational


---

# File: `docs/agent/EXAMPLES/UPDATE_POSITIONING_AFTER_COMPETITOR_SCAN.md`

# Example pathway: update product positioning after competitor scan

## Read first

1. `AGENTS.md`
2. `INTAKE/TASK_TRIAGE.md`
3. `PRODUCT_OVERVIEW.md`
4. `DECISIONS.md`
5. `SKILLS/COMPETITOR_SYNTHESIS.md`
6. `SKILLS/POSITIONING_AND_MESSAGING.md`

## Skill to invoke

- `POSITIONING_AND_MESSAGING.md`

## Plan needed?

Usually no unless the shift affects many docs and page surfaces.

## Expected outputs

- revised product narrative
- updated differentiators
- decision record if the positioning shift is durable


---

# File: `docs/agent/INTAKE/README.md`

# Intake system

The intake system helps an agent decide what the task is before opening too much context.

Use `TASK_TRIAGE.md` first for almost every task.

The point of intake is to answer six questions fast:

1. What is being asked?
2. What class of task is it?
3. Which docs should be loaded first?
4. Which skill should be invoked?
5. Is a plan required?
6. What should not be assumed?

If the task remains ambiguous after intake, keep assumptions explicit and scoped. Do not compensate by loading the whole repo.


---

# File: `docs/agent/INTAKE/TASK_TRIAGE.md`

# Task triage

Use this file to classify the task and load the minimum useful context.

## Step 1. Classify the task

Choose the closest task type:

- **Product**: positioning, roadmap, feature definition, layer boundaries
- **Research**: competitor scan, cooperative analogs, synthesis memo
- **Frontend**: pages, UI flows, copy implementation
- **Backend**: services, ingestion, exports, schemas, APIs
- **Governance**: consent models, member participation, voting logic
- **Experimentation**: Labs variants, metrics, burden measurement
- **Context engineering**: repo maps, skills, plans, handoffs, documentation hygiene

## Step 2. Load only the first relevant docs

### Product
- `PRODUCT_OVERVIEW.md`
- `DOMAIN_MODEL.md`
- relevant skill

### Research
- `WORKFLOWS.md`
- relevant research skill
- `DECISIONS.md`

### Frontend
- `ARCHITECTURE.md`
- `WORKFLOWS.md`
- `COMMANDS.md`
- `SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`

### Backend
- `ARCHITECTURE.md`
- `DOMAIN_MODEL.md`
- `COMMANDS.md`
- plan template

### Governance
- `PRODUCT_OVERVIEW.md`
- `DOMAIN_MODEL.md`
- `DECISIONS.md`

### Experimentation
- `PRODUCT_OVERVIEW.md`
- `WORKFLOWS.md`
- `SKILLS/EXPERIMENT_DESIGN.md`

### Context engineering
- `PROJECT_MAP.md`
- `ANTI_PATTERNS.md`
- relevant skill

## Step 3. Decide whether a plan is needed

A plan is required if:
- more than one subsystem or file cluster will change
- architecture or product boundaries may shift
- validation is non-trivial
- the task is easy to interpret in multiple ways

## Step 4. State what not to assume

By default, do not assume:
- commands are known unless verified
- services exist unless seen
- governance flows are built
- Labs instrumentation exists
- export formats are finalized
- speculative notes equal implementation commitments

## Step 5. Select the closest skill

Examples:
- onboarding -> `SKILLS/REPO_ONBOARDING.md`
- memo -> `SKILLS/PRODUCT_MEMO_DRAFTING.md`
- competitor scan -> `SKILLS/COMPETITOR_SYNTHESIS.md`
- UI page -> `SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`
- cleanup -> `SKILLS/FILE_STRUCTURE_HYGIENE.md`
- summarization -> `SKILLS/CONTEXT_COMPRESSION.md`
- handoff -> `SKILLS/AGENT_HANDOFF.md`

## Step 6. Proceed with a narrow reading set

If you feel tempted to open everything, stop and ask which file actually resolves the current uncertainty.


---

# File: `docs/agent/PLANS/PLAN_TEMPLATE.md`

# Plan template

## Objective

State the specific outcome.

## Why now

State the trigger or reason for this work.

## Scope

State what is in scope and out of scope.

## Assumptions

- assumption 1
- assumption 2

## File touch map

- `path/to/file`: why it will be touched
- `path/to/file`: why it will be touched

## Implementation steps

1. Step one
2. Step two
3. Step three

## Validation

- command or check
- UI or state check
- documentation consistency check

## Rollback or caution points

- risk 1
- risk 2

## Open questions

- question 1
- question 2

## Completion notes

Fill this in after execution:
- what changed
- what was validated
- what remains open


---

# File: `docs/agent/PLANS/README.md`

# Plans system

## Purpose

Plans are for medium- and large-scope work where agents are likely to drift without an explicit sequence.

## When a plan is required

Create a plan when work is:
- multi-file
- architecture-shaping
- difficult to validate after the fact
- likely to branch into multiple interpretations
- risky to roll back

## Where plans live

Store plans in this directory. Name them with a date and concise task slug.

Example:
`2026-03-26-landing-page-architecture.md`

## What a plan should do

A plan should:
- pin down the objective
- make assumptions explicit
- map touched files
- define validation before execution
- reveal caution points

A plan should not:
- become a generic essay
- restate the whole repo architecture
- hide uncertainty


---

# File: `docs/agent/SKILLS/AGENT_HANDOFF.md`

# Skill: agent handoff

## Purpose

Leave work in a state another agent can continue without rediscovering context.

## When to invoke

Use whenever work is unfinished, when a major task just ended, or before switching domains.

## Inputs required

- current objective
- changed files
- validation status
- next likely step

## Steps

1. State what was attempted and what actually changed.
2. Record validation status honestly.
3. Name unresolved issues and assumptions.
4. Point to the relevant plan, decision, and touched files.
5. Recommend the next concrete action.

## Outputs

- handoff note embedded in the task response or saved near the work
- clear continuation path

## Verification

- the next agent knows where to start
- there is no fake sense of completion
- open questions are concrete

## Anti-patterns

- vague handoffs
- omitting changed files
- hiding failed validation


---

# File: `docs/agent/SKILLS/COMPETITOR_SYNTHESIS.md`

# Skill: competitor synthesis

## Purpose

Turn a pile of adjacent products or analogs into usable strategic insight.

## When to invoke

Use for competitor scans, adjacent product mapping, cooperative analog research, or market framing.

## Inputs required

- comparison question
- entities to compare
- decision the scan should inform

## Steps

1. Define the comparison scope.
2. Pick dimensions that matter to this repo.
3. Extract comparable facts across entities.
4. Identify where they overlap, diverge, and leave whitespace.
5. Translate findings into implications for positioning, architecture, or sequencing.
6. Record any changed assumptions in decisions if durable.

## Outputs

- structured comparison
- implications for this project
- open uncertainties

## Verification

- the output compares like with like
- the synthesis produces action relevance
- unknowns remain visible

## Anti-patterns

- collecting examples with no synthesis
- inconsistent comparison dimensions
- confusing inspiration with direct competition


---

# File: `docs/agent/SKILLS/CONTEXT_COMPRESSION.md`

# Skill: context compression

## Purpose

Turn large raw material into a smaller reusable layer that agents can work with repeatedly.

## When to invoke

Use when source material is too large or messy to carry forward directly.

## Inputs required

- raw source material
- target task class
- target export or downstream use

## Steps

1. Separate raw facts, durable patterns, and one-off noise.
2. Preserve only what future agents need to act well.
3. Organize the result into maps, skills, workflows, decisions, or memory summaries.
4. Keep provenance clear enough that the summary can be checked later.
5. Store the compressed result where future agents will actually load it.

## Outputs

- compressed artifact
- explicit exclusions
- clear destination in the context tree

## Verification

- the compressed version supports the task better than the raw version
- critical nuance was not stripped out
- the result is reusable across more than one session

## Anti-patterns

- making a giant summary blob
- compressing away uncertainty
- keeping everything because you cannot decide what matters


---

# File: `docs/agent/SKILLS/DECISION_LOGGING.md`

# Skill: decision logging

## Purpose

Capture decisions so future agents do not repeat the same reasoning work.

## When to invoke

Use when a choice will influence future implementation, product framing, or task routing.

## Inputs required

- the decision
- why it was made
- what future work it affects

## Steps

1. Confirm the choice is durable enough to log.
2. Add an entry to `DECISIONS.md`.
3. State the reason and implication plainly.
4. Link or mention affected docs if useful.
5. Avoid logging trivial one-off details.

## Outputs

- new decision entry

## Verification

- the entry would save future agents time
- implication is concrete
- the entry is concise and not diary-like

## Anti-patterns

- logging everything
- vague implications
- writing history instead of a decision


---

# File: `docs/agent/SKILLS/EXPERIMENT_DESIGN.md`

# Skill: experiment design

## Purpose

Define a clean Labs experiment without contaminating the baseline product.

## When to invoke

Use when comparing context architectures, prompts, skills, workflows, or intervention levels.

## Inputs required

- hypothesis
- variants
- expected learning
- user burden concerns

## Steps

1. State the hypothesis and decision target.
2. Define control and variant conditions.
3. Specify what will be measured.
4. Specify how burden or friction will be measured.
5. State how the experiment remains isolated from baseline artifacts.
6. Define how results will be summarized.

## Outputs

- experiment spec
- variant description
- measurement plan
- containment boundary

## Verification

- the experiment has a real hypothesis
- burden is measured, not ignored
- the baseline product remains separable

## Anti-patterns

- no control condition
- no expected decision use
- letting experiment logic become default behavior without record


---

# File: `docs/agent/SKILLS/FILE_STRUCTURE_HYGIENE.md`

# Skill: file structure hygiene

## Purpose

Keep the repo legible as it grows.

## When to invoke

Use during cleanup, major additions, or after exploratory work created clutter.

## Inputs required

- current affected files
- intended long-term homes for those files
- awareness of current repo conventions

## Steps

1. Identify whether the problem is naming, placement, duplication, or missing maps.
2. Prefer adding maps and conventions before moving many files.
3. Consolidate duplicate docs when one can become the truth source.
4. Keep strategy, operations, and implementation docs distinct.
5. Update links after structural changes.
6. Add or update decision notes if the structure itself changed.

## Outputs

- clearer file layout
- reduced duplication
- updated maps and links

## Verification

- a new agent can find the relevant file faster
- one truth source exists per recurring question
- moved files are reflected in maps and references

## Anti-patterns

- moving files without updating docs
- creating overlapping truth sources
- inventing elaborate taxonomy too early


---

# File: `docs/agent/SKILLS/FRONTEND_PAGE_IMPLEMENTATION.md`

# Skill: frontend page implementation

## Purpose

Build a page that is product-correct, state-complete, and honest about backend maturity.

## When to invoke

Use for landing pages, dashboards, settings, review flows, exports, and consent pages.

## Inputs required

- page objective
- target user
- required states
- dependencies and placeholders

## Steps

1. Identify which product layer the page belongs to.
2. Define the page job in one sentence.
3. List states: loading, empty, success, error, unavailable.
4. Map required data and what is real vs mocked.
5. Implement the narrowest coherent version.
6. Review text for overclaiming.
7. Validate responsive behavior and obvious state transitions.

## Outputs

- implemented page
- copy aligned to current product maturity
- state handling

## Verification

- the page's job is clear
- error and empty states exist
- text does not imply non-existent systems

## Anti-patterns

- beautiful mock that lies about capability
- no consent or review affordances where needed
- shipping a happy-path-only page


---

# File: `docs/agent/SKILLS/POSITIONING_AND_MESSAGING.md`

# Skill: positioning and messaging

## Purpose

Sharpen how the product is described without drifting away from what it actually is.

## When to invoke

Use when updating landing copy, product narrative, investor-facing framing, or internal positioning.

## Inputs required

- target audience
- current positioning
- differentiation goal
- constraints from actual product maturity

## Steps

1. State the audience.
2. Define the exact contrast set.
3. Write the product in one line, then in one paragraph.
4. Specify the core differentiation.
5. Remove claims the repo cannot support yet.
6. Test whether the language matches the product layer sequence.

## Outputs

- revised positioning copy
- concise differentiators
- wording constraints for future copy

## Verification

- the copy is specific
- it does not overclaim implementation
- it preserves the private > Labs > cooperative sequence

## Anti-patterns

- slogan inflation
- feature dumping
- mixing experimental or governance language into core product copy too early


---

# File: `docs/agent/SKILLS/PRODUCT_MEMO_DRAFTING.md`

# Skill: product memo drafting

## Purpose

Produce a decision-oriented memo for product strategy, roadmap, governance, or architecture tradeoffs.

## When to invoke

Use when the output should shape a product decision rather than just summarize information.

## Inputs required

- memo question
- target audience
- known constraints
- relevant prior decisions or sources

## Steps

1. State the memo question in one sentence.
2. Identify the decision the memo should support.
3. Gather the smallest set of relevant evidence.
4. Summarize the current state and constraint set.
5. Present options with tradeoffs.
6. Recommend a direction.
7. End with open questions and next actions.

## Outputs

- memo draft
- explicit recommendation
- open question list

## Verification

- the memo ends in a decision or recommendation
- the audience is obvious from tone and structure
- repo maturity is represented honestly

## Anti-patterns

- generic startup language
- recommendation-free memo
- treating future monetization as present product fact


---

# File: `docs/agent/SKILLS/README.md`

# Skills system

## What a skill is

A skill is a reusable operating procedure for a recurring task in this repo.

A good skill is:
- task-specific
- input-aware
- procedural
- verifiable
- explicit about common mistakes

A skill is not:
- a vague principle
- a static product note
- a one-off plan for a single task

## When to create a new skill

Create a skill when:
- the task recurs across agents
- the task has recognizable failure modes
- standardization will reduce search, drift, or rework

## Skill template

Use `SKILL_TEMPLATE.md`.

## Initial skill backlog

Highest-value starter skills:
- `REPO_ONBOARDING.md`
- `PRODUCT_MEMO_DRAFTING.md`
- `COMPETITOR_SYNTHESIS.md`
- `POSITIONING_AND_MESSAGING.md`
- `EXPERIMENT_DESIGN.md`
- `FRONTEND_PAGE_IMPLEMENTATION.md`
- `FILE_STRUCTURE_HYGIENE.md`
- `DECISION_LOGGING.md`
- `CONTEXT_COMPRESSION.md`
- `AGENT_HANDOFF.md`


---

# File: `docs/agent/SKILLS/REPO_ONBOARDING.md`

# Skill: repo onboarding

## Purpose

Orient a new agent quickly without loading the entire repo.

## When to invoke

Use at the start of work in an unfamiliar branch or when taking over after another agent.

## Inputs required

- current task
- current branch or working context if known
- access to root files and `docs/agent/`

## Steps

1. Read `AGENTS.md`.
2. Read `INTAKE/TASK_TRIAGE.md`.
3. Classify the task.
4. Load only the docs relevant to that task class.
5. Check `DECISIONS.md` for durable constraints.
6. If prior work exists, load the latest related plan or handoff.
7. Only then move into implementation files.

## Outputs

- task classification
- minimal reading set
- list of assumptions
- decision on whether a plan is needed

## Verification

- you can state the product layer involved
- you can state what is implemented vs provisional
- you know which files matter first for the task

## Anti-patterns

- reading everything
- skipping task classification
- jumping into code before understanding layer boundaries


---

# File: `docs/agent/SKILLS/SKILL_TEMPLATE.md`

# Skill template

## Purpose

What this skill helps accomplish.

## When to invoke

The trigger conditions for using the skill.

## Inputs required

The minimum required inputs.

## Steps

1. Step one
2. Step two
3. Step three

## Outputs

What the skill should produce.

## Verification

How to tell whether the skill was applied correctly.

## Anti-patterns

What mistakes to avoid.
