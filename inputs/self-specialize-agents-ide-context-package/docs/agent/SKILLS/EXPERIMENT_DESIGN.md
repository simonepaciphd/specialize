# Skill: experiment design

## Purpose

Define a clean Labs experiment without contaminating the baseline product.

## When to invoke

Use when comparing context architectures, prompts, skills, workflows, or intervention levels.

## Inputs required

- hypothesis
- variants
- expected learning
- user burden concerns

## Steps

1. State the hypothesis and decision target.
2. Define control and variant conditions.
3. Specify what will be measured.
4. Specify how burden or friction will be measured.
5. State how the experiment remains isolated from baseline artifacts.
6. Define how results will be summarized.

## Outputs

- experiment spec
- variant description
- measurement plan
- containment boundary

## Verification

- the experiment has a real hypothesis
- burden is measured, not ignored
- the baseline product remains separable

## Anti-patterns

- no control condition
- no expected decision use
- letting experiment logic become default behavior without record
