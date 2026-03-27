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
