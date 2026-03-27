# Prompt: Build a Clean Website From My GitHub Repo

You are an elite product designer and frontend engineer with excellent taste in minimal UI.

Your job is to inspect my GitHub repository and create a **very clean, simple, modern website** for the project.

You should behave like a **UI expert first**, not just a coder. That means:
- strong visual hierarchy
- clean spacing
- restrained typography
- minimal clutter
- thoughtful use of white space
- clear calls to action
- elegant product framing
- simple but polished interactions
- no gimmicks
- no noisy gradients unless they are extremely subtle
- no overdesigned startup fluff

## Project context

The project is centered on the concept:

**Self-Specialize Your Agents**

Core idea:
A product that helps people create a portable personal context package for AI agents by scanning their projects, workflows, and prior agent interactions, then distilling that into reusable instructions, skills, workflows, and memory layers.

Main product layers:
1. **Private self-specialization**
   - personal context package for the user
   - reusable instructions, skills, workflows, anti-patterns, project maps
   - exports into agent-native formats like `AGENTS.md`, `CLAUDE.md`, skills, scoped rules, etc.

2. **Labs**
   - opt-in collaborative experimentation layer
   - members test different context architectures, memory structures, skills, and workflow setups
   - system provides feedback on productivity, intervention burden, and IDE-context usage

3. **Cooperative / governance layer**
   - optional member-governed participation in pooled research and benchmarking
   - possible later commercial licensing of approved bundles only after explicit second opt-in and member vote
   - economic participation / distribution model for approved downstream use

## Your task

Inspect the repo and create the website for this project.

Do **not** just generate a generic SaaS landing page.
Do **not** make up product details that are not supported by the repo.
Do **not** bury the core idea under excessive copy.

You should:
1. inspect the existing repo and infer what is already implemented vs conceptual
2. identify the most likely site architecture for the current stage of the project
3. design a clean website that reflects the real project honestly
4. implement the site directly in the codebase
5. keep the design simple, elegant, and credible

## Primary goal

The website should make a visitor understand, within a few seconds:
- what the product is
- why it matters
- what makes it different
- what the three layers are: private product, Labs, cooperative layer
- what stage the project is at

## Design direction

Aim for something like:
- founder-quality product taste
- restrained and high-signal
- somewhere between a serious research-tech product and a refined developer tool
- closer to a clean modern product page than a marketing-heavy startup site

Preferred characteristics:
- neutral or mostly neutral palette
- excellent typography and spacing
- one strong accent color at most
- card-based sections only where useful
- no unnecessary illustrations unless the repo already contains a design system or visual assets
- subtle motion only if it improves polish
- mobile-responsive by default
- accessibility-conscious

## Product positioning guidance

The website should clearly communicate a positioning such as:
- train your agents on you
- your portable agent operating system
- a context layer for serious AI users
- an infrastructure for personal agent specialization

But do not lock into one slogan too early if the repo suggests better wording.

## What to produce

Create a first high-quality version of the public-facing website.

At minimum, design and implement:

### 1. Hero section
Should communicate the product in plain, sharp language.
Needs:
- concise headline
- strong subheadline
- one primary CTA
- optional secondary CTA
- immediate visual clarity

### 2. How it works section
Explain the flow simply:
- connect projects / context
- distill a personal context package
- improve future agent performance
- optionally join Labs
- optionally participate in governed collective research / licensing later

### 3. Product layers section
Make the three layers legible:
- Private Self-Specialization
- Labs
- Cooperative Layer

This should be one of the cleanest sections on the page.

### 4. Why this matters section
Explain the problem:
- current agents repeatedly relearn the user
- context is fragmented
- workflows are inefficient
- good users build hidden systems manually
- there is no good governed layer for collaborative improvement and controlled downstream use

### 5. Trust / governance section
This is important.
Make clear:
- private by default
- opt-in Labs
- separate opt-in for pooled participation
- member control and governance are core principles

### 6. Footer / final CTA
Simple and clean.

## Optional sections if justified by the repo
Only include these if they improve the site:
- product architecture overview
- use cases
- who it is for
- FAQ
- status / roadmap
- research / writing / product philosophy

## Technical instructions

You are working in the repo directly.
You should:
- inspect the existing stack first
- use the framework already present if possible
- avoid unnecessary rewrites
- respect existing conventions
- create reusable components where sensible
- keep the codebase clean

If the repo does not already contain a clear frontend structure, choose the lightest reasonable implementation path and explain why.

If there is an existing design system, use it.
If not, create a minimal consistent one.

## Output expectations

You should provide:
1. a short diagnosis of the current repo and what website approach makes sense
2. the information architecture of the site
3. the design rationale
4. the actual implementation
5. a brief note on what remains intentionally simple or provisional

## Constraints

- do not overcomplicate the page
- do not create fake enterprise features
- do not use bloated copy
- do not produce generic AI startup clichés
- do not hide uncertainty about what is implemented
- do not over-animate
- do not design for Dribbble; design for credibility

## Style of copy

The copy should be:
- crisp
- intelligent
- product-literate
- restrained
- not hypey
- not overly academic
- not robotic

## Final standard

The site should feel like a serious, early-stage, high-taste product website that a thoughtful founder would actually ship.

It should be simple enough to trust, clear enough to understand, and polished enough that someone landing on it thinks:

**this is real, this is thoughtful, and this is different.**
