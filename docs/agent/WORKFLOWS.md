# WORKFLOWS

This file covers recurring work patterns. Use the matching skill whenever one exists.

## 1. Starting a new feature

### When to use
When adding or materially changing product functionality.

### Required inputs
- feature objective
- target user and layer
- current repo area affected
- constraints and assumptions

### Sequence
1. Classify the feature as private product, Labs, or cooperative.
2. Load relevant docs.
3. Create a plan if work spans multiple files or affects architecture.
4. Define the smallest testable version.
5. Implement.
6. Validate.
7. Update docs and decisions.

### Outputs
- plan file if needed
- code and docs
- decision entry if architecture or product boundary changed

### Validation
- feature aligns to the correct product layer
- implementation does not assume unbuilt systems
- affected commands and docs are updated

### Common failure modes
- building governance logic into private baseline flow
- skipping a plan for broad changes
- implementing vague concepts without a defined user outcome

---

## 2. Drafting a strategy or product memo

### When to use
For internal memos on product direction, tradeoffs, roadmap, governance, or positioning.

### Required inputs
- memo question
- intended audience
- known constraints
- relevant prior decisions

### Sequence
1. Read product overview and decisions.
2. Gather evidence or prior reasoning.
3. State the question precisely.
4. Structure the memo around decisions, not vibes.
5. End with implications and open questions.

### Outputs
- concise memo with recommendations
- list of open questions or decisions needed

### Validation
- separates facts from recommendations
- reflects repo's current maturity honestly
- does not relitigate already-settled choices without reason

### Common failure modes
- generic startup prose
- treating speculative monetization as current product reality
- failing to state what decision the memo supports

---

## 3. Competitor research synthesis

### When to use
When comparing products, adjacent tools, or analog systems.

### Required inputs
- comparison scope
- dimensions to compare
- target decision the synthesis should inform

### Sequence
1. Define the comparison frame.
2. Gather sources.
3. Extract comparable dimensions.
4. Synthesize into implications for this product.
5. Record any changed assumptions.

### Outputs
- comparison grid or memo
- implications for positioning, architecture, or roadmap

### Validation
- comparison dimensions are consistent
- synthesis ends with action relevance
- uncertain findings are marked as such

### Common failure modes
- collecting examples without extracting decisions
- comparing unlike products carelessly
- confusing inspiration with direct competition

---

## 4. Updating product positioning

### When to use
After new competitor information, user feedback, or product reframing.

### Required inputs
- old positioning
- trigger for change
- target audience
- core differentiation

### Sequence
1. Review current product overview.
2. Identify what changed.
3. Rewrite only the layers or claims affected.
4. Update associated docs and examples.
5. Record the positioning shift in decisions if durable.

### Outputs
- updated positioning text
- refreshed examples if needed

### Validation
- positioning still matches actual product stage
- claims are specific and defensible
- differentiation is legible

### Common failure modes
- drifting into marketing slogans
- rewriting everything for a narrow change
- claiming product breadth not supported by implementation

---

## 5. Implementing a frontend page

### When to use
For landing pages, product pages, dashboards, settings, review flows, and similar UI work.

### Required inputs
- page purpose
- target user
- states and actions
- known design constraints

### Sequence
1. Review relevant product and architecture docs.
2. Define the exact page job.
3. List states: loading, empty, normal, error.
4. Map data dependencies and placeholders.
5. Build the smallest coherent version.
6. Validate layout, copy, and states.
7. Update docs if the page changes product understanding.

### Outputs
- page implementation
- copy updates
- state handling

### Validation
- page reflects the correct product layer
- empty and error states exist
- text does not imply non-existent capabilities

### Common failure modes
- polishing visuals before clarifying the page job
- hardcoding speculative flows as if backed by real services
- forgetting review and consent states

---

## 6. Implementing a backend service

### When to use
For ingestion, structuring, export, consent, or experiment services.

### Required inputs
- service responsibility
- inputs and outputs
- domain entities touched
- failure and validation rules

### Sequence
1. Review domain model and architecture.
2. Write a plan.
3. Define boundaries and contracts first.
4. Implement the smallest useful slice.
5. Add validation and logging.
6. Update command docs and architecture notes.

### Outputs
- service code
- schemas or validation logic
- updated docs

### Validation
- service has a narrow responsibility
- boundaries match domain model
- assumptions and placeholders are obvious

### Common failure modes
- combining multiple layers into one service
- skipping schema thinking
- no clear contract between ingestion and derived artifacts

---

## 7. Defining a new experiment

### When to use
For Labs comparisons, metrics tests, prompt experiments, or context architecture trials.

### Required inputs
- hypothesis
- variants
- success signal
- user burden
- containment boundary

### Sequence
1. State what is being compared.
2. Define the expected learning.
3. Specify how burden will be measured.
4. Separate experiment artifacts from baseline product artifacts.
5. Decide how results will be summarized.

### Outputs
- experiment spec
- metrics and burden notes
- storage or logging plan if applicable

### Validation
- experiment does not silently become default behavior
- baseline vs experimental condition is explicit
- expected decision use is stated

### Common failure modes
- no hypothesis
- no burden measurement
- muddy separation from the main product

---

## 8. Creating a new skill

### When to use
When the same task pattern appears repeatedly or should be standardized for agents.

### Required inputs
- repeated task pattern
- typical inputs
- common mistakes
- verification method

### Sequence
1. Confirm the task is recurring.
2. Start from the skill template.
3. Define trigger, inputs, steps, outputs, verification, anti-patterns.
4. Add the skill to the backlog index if one exists.
5. Cross-link from workflows if needed.

### Outputs
- new skill file
- updated references

### Validation
- skill is specific enough to use
- verification is concrete
- it reduces future ambiguity

### Common failure modes
- writing abstract advice instead of a procedure
- omitting verification
- creating a skill for a one-off task

---

## 9. Writing a plan before major changes

### When to use
For broad, risky, or multi-file work.

### Required inputs
- objective
- assumptions
- touched files
- validation path

### Sequence
1. Use the plan template.
2. Keep the plan operational.
3. Include rollback or caution points.
4. Update while executing if scope changes materially.

### Outputs
- plan file under `PLANS/`

### Validation
- plan maps to real files
- validation is feasible
- open questions are visible

### Common failure modes
- vague plans
- plans with no file touch map
- plans that duplicate architecture docs

---

## 10. Reviewing or extending prior work

### When to use
When continuing from a prior agent, branch, or unfinished doc.

### Required inputs
- prior outputs
- current objective
- validation status of prior work

### Sequence
1. Read handoff notes or recent plans first.
2. Determine what is settled vs tentative.
3. Avoid rewriting unchanged context.
4. Extend the work with minimal disturbance.
5. Record corrections if prior assumptions were wrong.

### Outputs
- revised implementation or doc
- decision or handoff update if needed

### Validation
- preserves valid prior work
- explicitly corrects invalid assumptions
- avoids duplicate exploration

### Common failure modes
- redoing solved framing work
- deleting context without replacing it
- treating unfinished notes as final
