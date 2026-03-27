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
