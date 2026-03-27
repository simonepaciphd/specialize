# Skill: file structure hygiene

## Purpose

Keep the repo legible as it grows.

## When to invoke

Use during cleanup, major additions, or after exploratory work created clutter.

## Inputs required

- current affected files
- intended long-term homes for those files
- awareness of current repo conventions

## Steps

1. Identify whether the problem is naming, placement, duplication, or missing maps.
2. Prefer adding maps and conventions before moving many files.
3. Consolidate duplicate docs when one can become the truth source.
4. Keep strategy, operations, and implementation docs distinct.
5. Update links after structural changes.
6. Add or update decision notes if the structure itself changed.

## Outputs

- clearer file layout
- reduced duplication
- updated maps and links

## Verification

- a new agent can find the relevant file faster
- one truth source exists per recurring question
- moved files are reflected in maps and references

## Anti-patterns

- moving files without updating docs
- creating overlapping truth sources
- inventing elaborate taxonomy too early
