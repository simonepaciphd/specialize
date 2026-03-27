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
