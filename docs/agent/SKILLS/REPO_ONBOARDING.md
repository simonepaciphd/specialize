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
