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
