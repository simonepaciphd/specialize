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
