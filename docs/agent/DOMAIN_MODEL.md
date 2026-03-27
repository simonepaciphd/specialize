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

### Tracker
A user-defined or system-proposed metric for measuring productivity, quality, or efficiency improvement over time.

A tracker has:
- a name and category (Efficiency, Quality, or Combined)
- a precise definition of what is measured
- a data source (session logs, git history, user signal, automated eval)
- a baseline value (measured, estimated, or pending establishment)
- a target direction (higher/lower is better)
- a measurement frequency
- a confidence level
- whether it feeds the pricing model

Trackers are discovered through the KPI Discovery skill and stored in a workspace-level `TRACKERS.md`.

### KPI discovery record
The output of a KPI discovery session: a work scan, structured interview, and proposed metric set.

Contains:
- workspace scan summary (file types, work categories, session patterns)
- interview answers (value, quality, waste, baseline, stakes)
- proposed KPIs with definitions and data sources
- user acceptance decisions
- baseline snapshot

### Baseline
A reference measurement against which improvement is calculated.

Types:
- **Pre-intervention baseline** — how the work went before specialization
- **Generic baseline** — unspecialized agent on the same task type
- **Rolling baseline** — trailing average before a specific optimization
- **User-declared baseline** — the user's own estimate (e.g., hourly rate, typical task duration)

The baseline must be explicitly defined, inspectable, and resistant to manipulation. It is the hardest component of the pricing model.

### Savings estimate
A quality-constrained calculation of value produced by better specialization.

Formula chain:
1. `Verified Savings = Baseline Cost - Optimized Cost` (quality-gated)
2. `Distributable Savings = Verified Savings - Agent Cost`
3. `Company Fee = Distributable Savings * Share Rate`
4. `User Keeps = Distributable Savings - Company Fee`

Savings estimates can be denominated in tokens, dollars, time, or user-defined KPI units.

## Relationships

- A **user** owns one or more **workspaces**.
- A **workspace** contains **source assets** and **derived context artifacts**.
- **Derived context artifacts** may be organized into **skills**, **memory layers**, and **exports**.
- A **workspace** may optionally participate in **experiments**.
- A **user** controls participation through a **consent profile**.
- **Governance objects** only apply when the user has entered the cooperative layer.
- A **workspace** has zero or more **trackers**, discovered via **KPI discovery records**.
- Each **tracker** has a **baseline** and produces **savings estimates** when the pricing model is active.
- **Savings estimates** are quality-gated: they only count when tracker values meet or exceed the agreed threshold.

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
