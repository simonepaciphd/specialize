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
