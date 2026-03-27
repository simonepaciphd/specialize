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
