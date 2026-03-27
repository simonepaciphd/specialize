# Skill: frontend page implementation

## Purpose

Build a page that is product-correct, state-complete, and honest about backend maturity.

## When to invoke

Use for landing pages, dashboards, settings, review flows, exports, and consent pages.

## Inputs required

- page objective
- target user
- required states
- dependencies and placeholders

## Steps

1. Identify which product layer the page belongs to.
2. Define the page job in one sentence.
3. List states: loading, empty, success, error, unavailable.
4. Map required data and what is real vs mocked.
5. Implement the narrowest coherent version.
6. Review text for overclaiming.
7. Validate responsive behavior and obvious state transitions.

## Outputs

- implemented page
- copy aligned to current product maturity
- state handling

## Verification

- the page's job is clear
- error and empty states exist
- text does not imply non-existent systems

## Anti-patterns

- beautiful mock that lies about capability
- no consent or review affordances where needed
- shipping a happy-path-only page
