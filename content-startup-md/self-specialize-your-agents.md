# Self-Specialize Your Agents

Portable personal context packages for AI agents.

This document is a top-level downloadable markdown brief for the repo scaffold.

## Core idea

Most AI agent performance problems are not model problems. They are context-structure problems.

Users repeatedly have to re-explain:
- how they work
- what matters
- what to avoid
- how projects are organized
- what “done” means
- which workflows repeatedly succeed

This project turns a user’s projects, files, workflows, and prior agent interactions into reusable, reviewable, portable context artifacts.

## Product layers

The system has three explicitly separated layers:

1. **Private self-specialization**
   User-owned scanning, artifact extraction, review, and export.

2. **Labs**
   Opt-in experimentation and benchmarking for context structures and workflows.

3. **Cooperative / governance**
   Future-facing consent, pooling, and licensing hooks. Not implemented as product behavior in the MVP.

## MVP

A user can upload or connect a small set of sources, run a read-only scan, review extracted artifacts, publish a versioned context package, and optionally opt into Labs experiments with separate consent.

## What exists already in the scaffold

- product definition and scope boundary
- MVP architecture and domain model
- agent-facing context package
- core TypeScript domain types
- pipeline interfaces for scanning, distillation, and export
- Labs and governance model stubs
- example artifacts and consent boundaries

## What does not exist yet

- production auth
- real source connectors
- real LLM orchestration
- persistent database
- working web frontend
- working API server
- IDE plugin / extension
- pooled benchmarking service

## Repo structure

- `apps/api` — backend API contracts and eventual service
- `apps/web` — product surfaces and UX specs
- `packages/domain` — core entities and enums
- `packages/context-engine` — scan, extract, distill, export
- `packages/labs` — experiments, metrics, reporting logic
- `packages/governance` — consent and future cooperative hooks
- `docs/agent` — layered repo context for future agents
- `schemas` — JSON schema and example package contracts

## Build order

1. manual intake and uploads
2. scan job orchestration
3. artifact review loop
4. package export
5. Labs opt-in with lightweight telemetry
6. connector expansion
7. governance-managed pooled research

## Key product thesis

The goal is not to dump raw files into every agent session. The goal is to derive durable artifacts that agents can use repeatedly with less noise, less repetition, and tighter task alignment.

## Downloadable assets already produced in the scaffold

- repo scaffold zip
- README
- AGENTS guide
- architecture docs
- workflows docs
- Labs framework
- governance boundaries
- build plan
- starter TypeScript packages

## Suggested next milestone

Build the happy path end to end:

- create workspace
- ingest source material
- run scan job
- surface extracted artifacts for review
- publish a versioned context package
- export it for IDE and agent use

