# Skill: decision logging

## Purpose

Capture decisions so future agents do not repeat the same reasoning work.

## When to invoke

Use when a choice will influence future implementation, product framing, or task routing.

## Inputs required

- the decision
- why it was made
- what future work it affects

## Steps

1. Confirm the choice is durable enough to log.
2. Add an entry to `DECISIONS.md`.
3. State the reason and implication plainly.
4. Link or mention affected docs if useful.
5. Avoid logging trivial one-off details.

## Outputs

- new decision entry

## Verification

- the entry would save future agents time
- implication is concrete
- the entry is concise and not diary-like

## Anti-patterns

- logging everything
- vague implications
- writing history instead of a decision
