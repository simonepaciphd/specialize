# Agent Context Interview System

Below is a full interview system designed from the attached brief and in the requested order. It is optimized to extract operationally useful knowledge for future agents rather than biographical detail.

## 1. Interview philosophy

This interview is a knowledge-transfer system. Its purpose is to capture the parts of a person’s working method that repeatedly affect whether an AI agent succeeds or fails.

The interview should not try to discover “who the user is.” It should discover how work actually gets done. That means the interviewer should bias toward concrete episodes, repeated corrections, preferred outputs, verification habits, and recurring frustrations. A good answer is not “I’m very detail-oriented.” A good answer is “When an agent gives me a claim with no source, I stop it and require a source check before any draft goes forward.”

The central distinction is this:

- **Skills** are reusable operational procedures with recognizable triggers, steps, outputs, and success conditions.
- **Rules** are constraints, defaults, or hard boundaries.
- **Workflows** are ordered sequences for recurring task types.
- **Anti-patterns** are failure modes, bad defaults, or recurring traps.
- **Preferences** are softer formatting or interaction choices that matter, but do not by themselves define a procedure.

The interview should collect knowledge only if it will help future agents search less, infer less, and act more correctly.

What not to collect:
- vague personality statements
- flattering self-descriptions
- highly personal or sensitive information not needed for work
- transient moods
- one-off anecdotes with no sign of recurrence
- aspirations stated as if they were habits
- “interesting facts” that do not change agent behavior

A useful test is: **Would knowing this change how an agent plans, executes, formats, verifies, or hands off work?** If not, do not collect it.

---

## 2. Knowledge taxonomy

| Category | Why it matters | What artifacts it can populate | What good evidence looks like |
|---|---|---|---|
| Task types | Agents need to recognize what kind of problem they are solving | skill, workflow, plan trigger | repeated task labels, examples of similar requests, recurring deliverables |
| Recurring workflows | Many users reuse the same sequence of steps | workflow, checklist, skill | “I always start by… then compare… then draft…” across multiple examples |
| Standards of quality | Agents fail when they do not know what “good enough” means | quality standard, rule, checklist | explicit acceptance criteria, revision reasons, examples of rejected outputs |
| Output expectations | The same analysis can fail if delivered in the wrong form | rule, preference, output contract | file formats, structure preferences, naming conventions, citation requirements |
| Tool habits | Tool selection shapes execution plans | rule, workflow, plan trigger | “for X I use Y first,” “never use Z for A,” preferred environments |
| Repo / file-structure habits | Execution quality depends on where work goes and how it is organized | workflow, rule, handoff convention | stable directory patterns, naming conventions, separation of scripts/outputs/inputs |
| Validation habits | Agents need to know how claims are checked | skill, checklist, rule, quality standard | source checks, tests, cross-validation, spot checks, replication steps |
| Common failure modes | Frustration often reveals missing procedures | anti-pattern, rule, missing-skill candidate | repeated complaints, known bad outputs, frequent correction patterns |
| Decision principles | Users often use stable heuristics under uncertainty | rule, plan trigger, skill | “when time is short, prefer X,” “if evidence is weak, do Y” |
| Collaboration / handoff norms | Work often passes between human and agent or among collaborators | handoff convention, checklist, workflow | review boundaries, status reporting, what to surface vs what to finish |
| Style / communication preferences | Important for adoption and output usability | preference, rule, quality standard | repeated requests about tone, structure, density, level of explanation |
| Escalation thresholds | Agents need to know when to stop and ask vs continue | rule, plan trigger | explicit thresholds for ambiguity, stakes, time, uncertainty, permissions |
| Planning vs acting defaults | Some users want immediate action; others want scoped planning first | rule, workflow, preference | repeated behavior across tasks: “just do it,” or “map first, act second” |
| Domain-specific expertise patterns | Experts have tacit moves that general agents miss | skill, rule, checklist | specialized checks, source hierarchies, domain-specific red flags |
| Reused heuristics | Fast decisions are often driven by compact internal rules | rule, checklist item | memorable criteria, tradeoff statements, prioritization logic |
| Correction signatures | How the user edits reveals what the agent got wrong | anti-pattern, quality standard, preference | tracked revisions, recurring comments, “I always remove…” patterns |

Evidence quality hierarchy:
1. Actual artifacts, transcripts, repos, templates, prior edits  
2. Repeated concrete examples  
3. Clear frustration patterns tied to outcomes  
4. Single anecdote with plausible recurrence  
5. Abstract self-description

Only the top three should routinely generate durable artifacts.

---

## 3. Interview stages

| Stage | Purpose | Ideal length | Question type | Main artifacts produced |
|---|---|---|---|---|
| Intake / scope | Define the user’s main work domains and interview focus | 5-8 min | scoping, prioritization | interview plan, user-type hypothesis |
| Work inventory | Map the user’s real workload | 5-10 min | inventory, frequency, examples | task map, candidate triggers |
| Recurring tasks | Identify repeatable work worth codifying | 10-15 min | concrete process questions | skills, workflows, plan triggers |
| Standards and taste | Learn what counts as good, bad, done, too sloppy, too verbose | 8-12 min | evaluation, contrast, examples | quality standards, preferences, rules |
| Failures and frustrations | Surface missing procedures and anti-patterns | 8-12 min | failure analysis, corrections | anti-patterns, rules, missing skills |
| Tool and agent use | Learn tool selection, delegation logic, and boundaries | 8-12 min | tool choice, sequencing, permissions | rules, workflows, plan triggers |
| Project-structure habits | Capture organizational patterns | 5-8 min | file/repo/process questions | rules, handoff conventions, workflows |
| Decision rules | Extract heuristics under time, ambiguity, or stakes | 5-8 min | tradeoffs, thresholds | rules, escalation triggers |
| Verification and review | Identify checks before accepting output | 5-8 min | audit, testing, trust calibration | checklist, quality standards, skills |
| Handoff and collaboration | Learn how work should be surfaced and handed back | 5-8 min | interface, reporting, review boundaries | handoff conventions, output contracts |
| Synthesis and confirmation | Convert findings into draft artifacts and validate | 10-15 min | summary, confirmation, contradiction checks | confirmed profile, prioritized backlog |

Design principle: every stage should produce candidate artifacts, not just notes.

---

## 4. Full question bank

Below is a high-yield question bank. The interviewer should not ask all questions every time. The point is to extract durable operational patterns.

### A. Intake / scope

**Q1. What are the main kinds of work you want future agents to help with in the next 1 to 3 months?**  
Why: anchors the interview in near-term reality rather than abstract identity.  
Signal: dominant task domains, likely branches.  
Artifacts: task map, adaptive interview path.  
Follow-ups:
- Which of those happens most often?
- Which one eats the most time?
- Which one has the highest cost when done badly?

**Q2. Think of the last week or two. What did you actually use AI or assistants for, and what did you still do yourself?**  
Why: distinguishes real behavior from ideals.  
Signal: current delegation boundary.  
Artifacts: tool habits, handoff norms, missing-skill candidates.  
Follow-ups:
- What did you keep because the agent usually gets it wrong?
- What did you hand off successfully?

**Q3. If we could only make agents much better at three things for you, what would they be?**  
Why: prioritizes high-value extraction.  
Signal: pain-adjusted importance.  
Artifacts: candidate skill backlog.  
Follow-ups:
- What goes wrong now on those tasks?
- How would you know the agent was finally “good enough”?

### B. Work inventory

**Q4. Walk me through a normal week of work. What outputs do you repeatedly have to produce?**  
Why: recurring outputs are strong indicators of workflow value.  
Signal: deliverables and cadence.  
Artifacts: workflow candidates, output contracts.  
Follow-ups:
- Which of those have a standard shape?
- Which ones always require cleanup?

**Q5. What kinds of requests or tasks show up over and over in slightly different forms?**  
Why: skills often live at the level of repeating task families.  
Signal: trigger patterns.  
Artifacts: skill candidates, plan triggers.  
Follow-ups:
- What are the common inputs?
- What does a finished version usually look like?

**Q6. Which tasks are deceptively simple but usually require judgment?**  
Why: these are high-value spots for codified heuristics.  
Signal: hidden expertise.  
Artifacts: rules, decision heuristics, skills.  
Follow-ups:
- What makes them tricky?
- What mistake would a generic agent make?

### C. Recurring tasks

**Q7. Pick one task you do often. Start from the moment it arrives. What do you do first, second, third?**  
Why: core workflow extraction question.  
Signal: ordered process.  
Artifacts: workflow, checklist, skill.  
Follow-ups:
- What inputs do you need before you can start?
- What do you produce at each step?
- Which step is most often skipped by bad assistants?

**Q8. For that task, what does the agent need to notice before choosing an approach?**  
Why: good skills require trigger recognition.  
Signal: input classification and branch conditions.  
Artifacts: plan trigger, rule, skill.  
Follow-ups:
- What clues tell you this is easy vs hard?
- What changes the plan?

**Q9. Are there standard intermediate outputs you like before the final deliverable?**  
Why: surfacing intermediate checkpoints improves control.  
Signal: review architecture.  
Artifacts: handoff convention, workflow, checklist.  
Follow-ups:
- Do you want an outline first, a decision memo, a draft, a table?
- When should the agent pause for review?

**Q10. What parts of this task are mechanical, and what parts require your judgment?**  
Why: separates delegation from escalation.  
Signal: automation boundary.  
Artifacts: rules, handoff conventions.  
Follow-ups:
- What can be completed end-to-end?
- What must be surfaced to you before proceeding?

### D. Standards and taste

**Q11. When you reject a draft, analysis, or output, what are the most common reasons?**  
Why: revision patterns reveal standards better than ideals do.  
Signal: negative acceptance criteria.  
Artifacts: anti-patterns, quality standards, rules.  
Follow-ups:
- Can you give a recent example?
- What did you change first?

**Q12. What makes an output feel immediately “right” to you?**  
Why: elicits tacit quality markers.  
Signal: positive acceptance criteria.  
Artifacts: quality standards, preferences.  
Follow-ups:
- Is it structure, level of detail, tone, evidence, formatting?
- What would a near miss look like?

**Q13. Do you prefer agents to be concise, expansive, tentative, decisive, heavily sourced, lightly sourced, structured, or naturalistic? In what situations?**  
Why: preferences often vary by task type.  
Signal: conditional formatting and reasoning preferences.  
Artifacts: preferences, output rules.  
Follow-ups:
- When do you want options vs one strong recommendation?
- When do citations become mandatory?

**Q14. Are there style choices or writing habits you repeatedly remove or request?**  
Why: stable correction signatures are highly actionable.  
Signal: stylistic anti-patterns.  
Artifacts: anti-pattern, preference, rule.  
Follow-ups:
- What specifically do you ask to be changed?
- Is this universal or task-specific?

### E. Failures and frustrations

**Q15. What are the three most annoying ways agents or assistants waste your time?**  
Why: strong route into anti-patterns.  
Signal: high-cost failure modes.  
Artifacts: anti-patterns, rules, missing skills.  
Follow-ups:
- What do they fail to notice?
- What instruction do you keep repeating?

**Q16. Tell me about a recent case where an assistant seemed helpful at first but created cleanup later.**  
Why: uncovers subtle failure chains.  
Signal: downstream quality failures.  
Artifacts: workflow improvements, checklist items, escalation rules.  
Follow-ups:
- What earlier checkpoint would have prevented that?
- What evidence was missing?

**Q17. When an agent gives a plausible answer that might still be wrong, what do you check first?**  
Why: critical for trust calibration.  
Signal: first-line verification habit.  
Artifacts: verification checklist, skill, rule.  
Follow-ups:
- Is that check always required, or only for certain domains?
- What makes you trust the answer enough to move on?

**Q18. What kinds of ambiguity should an agent resolve itself, and what kinds should it escalate to you?**  
Why: establishes escalation thresholds.  
Signal: autonomy boundary.  
Artifacts: rules, plan triggers.  
Follow-ups:
- Give one example of each.
- What is the cost of guessing wrong?

### F. Tool and agent use

**Q19. Which tools do you prefer for which tasks, and what makes you choose one over another?**  
Why: tool strategy should be explicit, not inferred.  
Signal: tool-selection heuristic.  
Artifacts: rule, workflow, plan trigger.  
Follow-ups:
- Which tools do you distrust for certain jobs?
- What is your default stack for research / writing / coding / planning?

**Q20. When should an agent browse, search files, write code, or ask before acting?**  
Why: crucial for execution policy.  
Signal: action thresholds by tool.  
Artifacts: rule set, plan triggers.  
Follow-ups:
- Are there domains where freshness matters enough to require browsing?
- What work can proceed without asking?

**Q21. Do you want the agent to think out loud, show a plan, show partial outputs early, or just deliver results?**  
Why: determines interaction protocol.  
Signal: communication and control preferences.  
Artifacts: handoff convention, preference, workflow.  
Follow-ups:
- Does this differ for long tasks?
- What kind of update is useful vs noisy?

**Q22. What permissions should the agent assume by default, and what actions require explicit approval?**  
Why: supports safe autonomy.  
Signal: approval boundary.  
Artifacts: rules, handoff conventions.  
Follow-ups:
- Drafting, deleting, editing, sending, changing structure, running code?
- What is okay to do silently?

### G. Project structure habits

**Q23. How do you usually want projects, folders, docs, or outputs organized?**  
Why: organization patterns are often stable and high leverage.  
Signal: structure conventions.  
Artifacts: rules, workflows, handoff conventions.  
Follow-ups:
- Do you separate inputs, scripts, outputs, drafts?
- Are there standard filenames or directory names?

**Q24. What should an agent never scatter, duplicate, or overwrite?**  
Why: reveals organizational failure modes.  
Signal: file hygiene constraints.  
Artifacts: anti-patterns, rules.  
Follow-ups:
- What kinds of mess create the most cleanup?
- How should the agent preserve traceability?

**Q25. When an agent creates something substantial, what context should it leave behind for future reuse?**  
Why: makes outputs cumulative rather than disposable.  
Signal: documentation expectations.  
Artifacts: handoff convention, checklist.  
Follow-ups:
- Notes, assumptions, provenance, changelog, README, citations?
- What is enough vs excessive?

### H. Decision rules

**Q26. When you are under time pressure, what gets simplified and what must never be skipped?**  
Why: good systems need degraded-mode behavior.  
Signal: priority hierarchy.  
Artifacts: rules, plan triggers, checklist.  
Follow-ups:
- What is your minimum acceptable process?
- What shortcut is acceptable, and what shortcut creates risk?

**Q27. When evidence is incomplete, how do you decide whether to move forward, hedge, or stop?**  
Why: extracts uncertainty policy.  
Signal: decision heuristic under incomplete information.  
Artifacts: rule, quality standard.  
Follow-ups:
- What wording or labels should be used when uncertain?
- What is your threshold for “tentative but usable”?

**Q28. How do you choose between a better but slower output and a good-enough output delivered faster?**  
Why: captures tradeoff logic.  
Signal: optimization preference.  
Artifacts: rule, plan trigger.  
Follow-ups:
- Does it depend on stakes, audience, or reversibility?
- What are the signs that a task deserves the slower path?

### I. Verification and review

**Q29. Before you trust a draft, analysis, or code output, what checks do you perform?**  
Why: explicit review is often more important than generation.  
Signal: validation routine.  
Artifacts: checklist, skill, quality standard.  
Follow-ups:
- Which checks are universal?
- Which are domain-specific?

**Q30. What kinds of claims, outputs, or changes require evidence attached to them?**  
Why: evidence requirements should not be guessed.  
Signal: sourcing threshold.  
Artifacts: rule, quality standard.  
Follow-ups:
- Is citation enough, or do you want direct inspection?
- What about figures, calculations, code changes?

**Q31. Do you prefer the agent to self-audit and surface possible weaknesses, or only present the finished output?**  
Why: determines review posture.  
Signal: transparency preference.  
Artifacts: handoff convention, checklist.  
Follow-ups:
- What kinds of weaknesses should be surfaced?
- What kind of caveat is useful vs excessive?

### J. Handoff and collaboration

**Q32. When an agent hands work back to you, what is the ideal package?**  
Why: handoff quality drives usability.  
Signal: final output contract.  
Artifacts: handoff convention, workflow, checklist.  
Follow-ups:
- Final answer only, or answer plus assumptions, files changed, remaining questions?
- How much summary is useful?

**Q33. How should the agent flag uncertainty, missing inputs, or blocked next steps?**  
Why: avoids silent failure.  
Signal: exception-handling preference.  
Artifacts: rule, handoff convention.  
Follow-ups:
- Do you want a confidence label?
- Should the agent propose next steps or stop cleanly?

**Q34. What kinds of tasks should end with a recommendation, and what kinds should end with options?**  
Why: users differ on advisory vs exploratory outputs.  
Signal: decision support style.  
Artifacts: preference, output rule.  
Follow-ups:
- In which cases do you want one best answer?
- When do you want a menu with tradeoffs?

### K. Synthesis and confirmation

**Q35. Here are the patterns I think I heard. Which of these are truly stable habits, and which are just situational?**  
Why: confirmation against overreach.  
Signal: durability check.  
Artifacts: confirmed vs tentative labels.  
Follow-ups:
- Which of these would still be true three months from now?
- Which only apply in one project or one mood?

**Q36. Which proposed skills would save you the most time or reduce the most rework if we authored them well?**  
Why: prioritization for implementation.  
Signal: backlog ranking.  
Artifacts: prioritized skill backlog.  
Follow-ups:
- Which one should be built first?
- Which one needs more evidence before formalizing?

---

## 5. Branching and adaptive logic

The interviewer should adapt depth by user type. The interview is not a fixed script.

### User-type routing

#### Researcher
Go deeper on:
- task types around literature review, evidence synthesis, writing, data analysis
- source hierarchy
- verification standards
- structure of papers, appendices, citations, tables, figures
- distinctions between exploratory vs publication-grade work

De-emphasize:
- shipping/product workflows unless relevant
- software deployment details unless they code regularly

Trigger deeper branches when the user says:
- “I always need sources”
- “I run regressions / analyses / coding”
- “I write papers / memos / grant proposals”
- “I have style or citation constraints”

#### Coder / developer
Go deeper on:
- repo layout
- tests, linting, build workflows
- debugging patterns
- code review standards
- tool use and permission boundaries

De-emphasize:
- long-form prose style unless a major part of work

Trigger deeper branches when the user says:
- “agent edits code”
- “I want exact file placement”
- “tests or builds matter”
- “I use versioning conventions”

#### Founder / strategist
Go deeper on:
- prioritization logic
- decision memos
- research-to-action workflows
- stakeholder outputs
- planning vs acting thresholds

De-emphasize:
- detailed code or scholarly citation branches unless central

Trigger deeper branches when the user says:
- “I need recommendations”
- “I make decisions under uncertainty”
- “I manage multiple projects or people”

#### Writer
Go deeper on:
- structure, voice, revisions, examples of “right” and “wrong”
- sourcing standards by genre
- tone and sentence-level anti-patterns
- outline-to-draft workflow

De-emphasize:
- tool-stack minutiae if not central

Trigger deeper branches when the user says:
- “tone matters”
- “I hate generic writing”
- “I want the agent to sound like me”

#### General knowledge worker
Go deeper on:
- recurring administrative outputs
- synthesis tasks
- meeting prep, note consolidation, email drafts, presentations
- planning and handoff expectations

#### Mixed-type user
Start broad, then spend more time on the two highest-frequency or highest-cost domains.

### Section depth rules

- If the user names **three or fewer dominant task families**, center the interview on those and skip general questions once the pattern is clear.
- If the user gives **highly abstract answers**, switch to “tell me about the last time” questions.
- If the user provides **existing artifacts** such as templates, repos, prior prompts, or edited drafts, shorten speculative questioning and extract directly from evidence.
- If the user shows **strong frustration with one failure mode**, branch into failure analysis and derive missing skills from it.
- If the user rarely uses agents today, focus less on current tool habits and more on stable workflows and review standards.
- If the user works across very different domains, create **domain-scoped artifacts** instead of one overgeneralized profile.

### High-value follow-up triggers

If user says “I always have to fix…”  
→ ask what exactly they fix, when it happens, and whether the correction is reusable.

If user says “It depends…”  
→ ask what the decision depends on, what cues they look for, and whether those cues can be made explicit.

If user says “I just know when it’s right”  
→ ask for contrast cases: one output that felt right and one that did not.

If user says “I’m not sure, maybe…”  
→ mark tentative, ask for recent example, do not formalize yet.

If user says “I have a standard way of doing this”  
→ extract a workflow immediately.

If user says “agents should never…”  
→ likely a rule or anti-pattern.

---

## 6. Extraction framework

The extraction framework converts raw answers into artifacts. It should be conservative.

### General extraction principles

A candidate artifact should usually require:
- at least one concrete example
- evidence of recurrence or stated reuse
- operational wording, not just a value statement
- enough specificity to change future agent behavior

When evidence is weak, mark the artifact as tentative and store it as a hypothesis, not as a locked rule.

### Artifact-by-artifact rules

| Artifact type | Raw signals that trigger it | Minimum evidence threshold | How to draft it | How to flag uncertainty |
|---|---|---|---|---|
| Skill | repeated multi-step task, stable trigger, known outputs, evaluable success criteria | 2 concrete examples or 1 example plus strong corroborating artifact | title, trigger, inputs, steps, output, checks, failure modes | mark as “candidate skill” if trigger or success criteria still fuzzy |
| Workflow | ordered sequence used for a recurring task family | user can describe steps and branches | write as sequence with pause points and decision forks | mark ambiguous branches separately |
| Rule | hard constraint, default, prohibition, or threshold | single strong statement is often enough if clearly normative and stable | use if/then or always/never form | mark scope: global or task-specific |
| Anti-pattern | repeated failure mode or bad default | one high-cost example plus evidence it is recurring, or two examples | describe failure, symptoms, likely cause, prevention | mark “suspected anti-pattern” if recurrence uncertain |
| Preference | softer formatting, tone, or interaction choice | one stable statement, especially if user repeatedly restates it | draft as preference with scope and exceptions | mark as low-stakes if not durable |
| Checklist item | concrete review step or required component | one clear verification action or required element | phrased as a yes/no check | mark domain scope |
| Handoff convention | recurring expectation for surfacing work | one clear statement plus at least one example | define what to return, when to pause, what to summarize | mark as task-specific if limited |
| Plan trigger | condition under which the agent should plan first, ask first, or escalate | one clear threshold with an example | express as trigger → action | mark ambiguous threshold numerically if not specified |
| Quality standard | explicit acceptance criterion or revision reason | at least one criterion tied to acceptance or rejection | phrase as measurable or contrastive standard | mark subjective if it cannot yet be operationalized |

### Drafting format

Every extracted artifact should be drafted in a normalized form:

- **Name**
- **Type**
- **Scope**
- **Trigger / when it applies**
- **Operational content**
- **Evidence**
- **Confidence**
- **Open questions**

This forces each artifact to remain grounded.

### Distinguishing anecdotes from patterns

Treat as a durable pattern only if one or more of the following is true:
- user says it happens often
- user gives multiple instances
- existing artifacts or prior prompts support it
- it is framed as a stable house rule
- it explains a repeated frustration or repeated revision

Treat as a one-off unless:
- it has broad applicability and the user confirms it is typical
- it reflects a known domain requirement rather than personal coincidence

---

## 7. Skill identification rules

A pattern qualifies as a **skill** only if most of the following are true:

1. **Repeatability**  
   It applies to more than one task instance.

2. **Clear trigger**  
   There is a recognizable condition that tells the agent when to use it.

3. **Multi-step structure**  
   It involves more than a single command or preference.

4. **Recognizable inputs**  
   The agent can tell what information is needed to begin.

5. **Recognizable outputs**  
   The agent can tell what finished looks like.

6. **Evaluable success criteria**  
   The user can say what makes the result acceptable.

7. **Transferability**  
   It can be reused across projects, not only one exact file or one exact conversation.

8. **Actionability**  
   It is specific enough that an agent could actually execute it.

9. **Non-triviality**  
   It captures meaningful judgment or structure, not just “be careful” or “write well.”

10. **Operational distinctness**  
   It is not merely a sub-step better represented inside another skill.

### What is too broad to be a skill
- “Do research well”
- “Write clearly”
- “Help with coding”
- “Think strategically”

These are umbrellas, not skills.

### What is too narrow to be a skill
- “Rename this exact file in this exact folder”
- “Use size-11 font in this one deck”
- one-off task instructions that will never recur

These belong in a task note or a local rule.

### When to merge two skills
Merge when:
- they have the same trigger
- they share most steps
- their outputs are part of the same reusable procedure
- splitting them would force constant cross-reference

### When to split one skill into two
Split when:
- there are different triggers
- the user uses different success criteria
- the workflow branches early and the branches behave like separate procedures
- one part is a reusable sub-skill in many contexts

### Identifying missing skills from frustration
A missing skill is likely present when:
- the user repeatedly complains about the same cleanup
- the user keeps restating the same instructions
- a failure occurs at the same stage of a task
- the user describes tacit judgment they have never written down

Pattern:  
repeated frustration → locate task stage → identify missing decision or check → draft candidate skill or rule

---

## 8. Interviewer style guide

The interviewer should sound like a sharp operator, not a therapist and not a survey bot.

### Core style principles

**Ask for behavior, not identity.**  
Prefer “What did you do last time?” over “How do you usually think about…?”

**Push toward examples early.**  
If the answer is abstract, ask for the latest instance.

**Separate ideals from reality.**  
Say: “Is that what you aim for, or what actually happens most of the time?”

**Do not over-validate vague answers.**  
Do not reward fluff. Redirect cleanly to operational detail.

**Use contrast.**  
Ask for a good example and a bad example. Contrast sharpens criteria.

**Test durability.**  
Ask whether a pattern is stable across projects or only relevant in one context.

**Summarize with caution.**  
Offer a tentative inference and ask for confirmation: “I think this is a rule, not just a preference. Is that right?”

### Good interviewer moves

- “Walk me through the last real example.”
- “What did you change first?”
- “What would a generic agent miss here?”
- “How do you know when that step is done?”
- “What should happen before the final draft?”
- “What is the actual trigger for switching approaches?”
- “Is that a hard rule or just a preference?”
- “How often does that come up?”

### How to recognize ideals vs actual habits

Signs of idealized answers:
- broad virtues with no example
- claims of consistency that collapse under example requests
- “I try to…”
- “In principle…”
- “Ideally…”

Response:
- “What happened the last time?”
- “What do you do when you’re rushed?”
- “What gets skipped in reality?”

### How to test whether a supposed habit is real

Use at least one of:
- recency check: ask for the last case
- frequency check: ask how often it occurs
- exception check: ask when it does not apply
- artifact check: ask whether there is an example, template, or prior output

### Managing long answers

Long answers are fine if they contain signal. The interviewer should periodically compress:
- “I’m hearing three distinct points…”
- “Let me separate the stable rule from the one-off story.”
- “Of those, which one should actually shape future agent behavior?”

### Avoid leading the user

Do not say:
- “So you want deeply sourced answers, right?”
Say:
- “What evidence level do you require before you trust an answer?”

Do not preload categories too early. Let the pattern emerge, then classify.

---

## 9. Synthesis and validation system

The final phase turns the interview into a draft agent-context package, then tests it for false certainty.

### Synthesis outputs

At the end, produce:

1. **Draft user profile for agent-context purposes**  
   Not biography. A concise operational profile.

2. **Candidate skills backlog**  
   Ranked by expected leverage and confidence.

3. **Candidate workflows**

4. **Candidate rules**

5. **Candidate anti-patterns**

6. **Candidate preferences**

7. **Open questions and ambiguities**

8. **Evidence gaps requiring artifact review**  
   Such as repos, transcripts, templates, edited drafts.

### Synthesis presentation back to the user

Use this structure:

**What I think I learned**
- top task families
- dominant standards
- delegation boundaries
- core frustrations

**What I think should become durable artifacts**
- skills
- workflows
- rules
- anti-patterns

**What I am less certain about**
- tentative patterns
- areas that need examples or project scans

**What to validate next**
- artifacts to inspect
- cases to test against

### Validation process

Every major artifact should receive:

**A. Confirmation question**  
“Is this a real stable pattern, or just true for one kind of project?”

**B. Contradiction check**  
Earlier they said the agent should act autonomously; later they say it should stop early. Resolve scope.

**C. Evidence check**  
“What example supports this?”

**D. Scope check**  
“Is this universal, domain-specific, or project-specific?”

**E. Confidence label**
- High: repeated evidence, clear operationalization  
- Medium: one strong example plus explicit confirmation  
- Low: plausible but weakly evidenced, keep tentative

### Rules for tentative outputs

Mark an output as tentative when:
- it came from abstract self-description
- it has no recent example
- it conflicts with another stated pattern
- the scope is unclear
- the user says “sometimes,” “depends,” or “ideally” but cannot define the condition

Tentative outputs can remain in a backlog, but should not yet become strong rules or final skills.

### When to request project or transcript evidence

Request evidence when:
- the user claims a detailed workflow but cannot articulate the steps
- there is a strong style preference but no example
- a quality standard is important but not yet measurable
- a proposed skill would be central to many future tasks
- the user has prior prompts, docs, repos, checklists, or revisions that would reveal actual practice

---

## 10. Output template

Below is a template that can become markdown files, repo agent docs, or backlog entries.

```md
# User Agent Context Interview Output

## 1. Operational profile
- Primary work domains:
- Highest-frequency task families:
- Highest-cost failure modes:
- Preferred agent posture:
- Planning vs acting default:
- Escalation style:
- Review style:
- Output preferences:
- Tool posture:

## 2. Confirmed rules
### Rule 1
- Name:
- Scope:
- Statement:
- Trigger:
- Exceptions:
- Evidence:
- Confidence:

## 3. Confirmed preferences
### Preference 1
- Name:
- Scope:
- Statement:
- Why it matters:
- Evidence:
- Confidence:

## 4. Candidate skills backlog
### Skill candidate 1
- Name:
- Trigger:
- Scope:
- Inputs:
- Outputs:
- Why it matters:
- Evidence:
- Confidence:
- Next step:
- Open questions:

## 5. Workflows
### Workflow 1
- Name:
- Applies to:
- Steps:
- Decision points:
- Pause points / review points:
- Failure risks:
- Evidence:
- Confidence:

## 6. Anti-patterns
### Anti-pattern 1
- Name:
- Symptom:
- Likely cause:
- Prevention:
- Scope:
- Evidence:
- Confidence:

## 7. Quality standards
### Standard 1
- Name:
- Applies to:
- Acceptance criteria:
- Rejection criteria:
- Evidence:
- Confidence:

## 8. Handoff conventions
### Convention 1
- When to use:
- What the agent should return:
- What should be surfaced explicitly:
- What can be omitted:
- Evidence:
- Confidence:

## 9. Verification checklist
- [ ] 
- [ ] 
- [ ] 

## 10. Open questions
- 
- 
- 

## 11. Recommended next artifacts to author
1.
2.
3.

## 12. Evidence to review next
- Repos:
- Prior prompts:
- Edited drafts:
- Templates:
- Transcripts:
```

---

## 11. MVP interview version

Use this when:
- testing the process
- onboarding friends or early users
- time is limited
- you want enough signal to produce a first-pass skills backlog

Target length: **20 to 30 minutes**

### MVP structure

**1. Scope and priority, 5 minutes**
- What are the main kinds of work you want help with soon?
- What three agent improvements would matter most?

**2. Recurring task extraction, 8 minutes**
- Pick one frequent task. Walk me through it step by step.
- What does the agent need to notice before choosing an approach?
- What intermediate output do you want before the final one?

**3. Standards and failures, 7 minutes**
- Why do you reject outputs?
- What do agents repeatedly get wrong?
- What do you check first when something might be plausible but wrong?

**4. Tool and handoff policy, 5 minutes**
- Which tools for which tasks?
- When should the agent act vs ask?
- What should the final handoff include?

**5. Synthesis and confirmation, 5 minutes**
- Summarize top candidate skills, rules, anti-patterns
- Confirm what is stable vs tentative

### MVP output
- short operational profile
- 3 to 5 candidate skills
- 3 to 7 rules/preferences
- 2 to 4 anti-patterns
- 1 to 2 workflows
- evidence gaps list

---

## 12. Full interview version

Use this when:
- onboarding a serious user
- building a durable context package
- planning to author multiple skills
- the user has complex, mixed work patterns

Target length: **60 to 90 minutes**

### Full structure

**Phase 1: Scope and work inventory, 10-15 min**
- Q1 to Q6

**Phase 2: Deep recurring-task extraction, 15-20 min**
- choose 2 to 3 top task families
- use Q7 to Q10 on each

**Phase 3: Standards, style, and quality, 10-15 min**
- Q11 to Q14

**Phase 4: Failures, frustration, and hidden cleanup, 10-15 min**
- Q15 to Q18

**Phase 5: Tools, permissions, and execution policy, 10-15 min**
- Q19 to Q22

**Phase 6: Structure, decision rules, and review, 10-15 min**
- Q23 to Q31

**Phase 7: Handoff, synthesis, and validation, 10-15 min**
- Q32 to Q36

### Full output
- fuller operational profile
- prioritized candidate skills backlog
- domain-scoped workflows
- stronger rule set
- anti-pattern library
- handoff conventions
- verification checklist
- confidence labels
- open questions and required evidence review

---

## 13. Worked examples

### Example 1: Researcher

**Raw answer**  
“When I ask for literature synthesis, assistants often give me generic summaries. What I actually need is: identify the argument, the empirical strategy, the data source, the identification claim, the main limitation, and then compare papers against each other. If it’s for something important, I want citations and I want the comparison in a structured table before prose.”

#### Extracted skill
**Name:** Comparative paper synthesis for research use  
**Why it qualifies:** recurring task, clear trigger, multi-step, clear output, evaluable standard  
**Draft:**  
Trigger: user asks for literature review, paper comparison, or research synthesis  
Steps: identify each paper’s argument, method, data, identification claim, limitation; build comparison table; then write synthesis  
Output: structured table plus prose synthesis  
Checks: citations present; comparison is across papers, not serial summaries

#### Extracted rule
“For research synthesis, produce a structured comparison table before long-form prose when the task is non-trivial.”

#### Extracted anti-pattern
“Do not produce generic paper-by-paper summaries with no cross-paper comparison.”

#### Extracted workflow
1. Gather papers  
2. Extract standardized fields  
3. Build comparison table  
4. Surface gaps or disagreements  
5. Draft synthesis prose  
6. Verify citations

### Example 2: Developer

**Raw answer**  
“When an agent edits code, I want it to first inspect the existing structure and follow local patterns. I hate when it creates new helper files or duplicates logic just because that was easier. If the change is substantial, it should tell me which files it changed and why. And if there are tests, it should run them before presenting the result.”

#### Extracted skill
**Name:** Repository-conforming code change execution  
Trigger: requested code modification in an existing codebase  
Steps: inspect local patterns; identify minimal edit surface; avoid duplication; implement change; run tests; summarize modified files and rationale  
Output: code changes plus change summary  
Checks: no unnecessary file proliferation; tests run if available

#### Extracted rule
“Before changing code, inspect local patterns and conform to existing structure rather than creating parallel abstractions.”

#### Extracted anti-pattern
“Do not introduce new helper files or duplicate logic unless there is a clear architectural reason.”

#### Extracted workflow
1. Read relevant files  
2. Infer local conventions  
3. Edit minimal set of files  
4. Run tests or checks  
5. Return summary of files changed, why, and any remaining risks

### Example 3: Founder / strategist

**Raw answer**  
“For strategy work, I do not want endless options unless the decision is truly open. Usually I want the agent to do some research, give me one recommended path, tell me why, and then note the top two risks. But if the evidence is thin or the stakes are high, I want it to slow down, show assumptions, and give me options with tradeoffs instead of pretending there is one best answer.”

#### Extracted skill
**Name:** Recommendation-first strategic memo generation  
Trigger: strategy, prioritization, or decision-support task with adequate evidence  
Steps: gather evidence; evaluate options; choose recommended path; state rationale; list top risks  
Output: recommendation memo with risks  
Checks: recommendation grounded in evidence; risks surfaced

#### Extracted rule
“If evidence is thin or stakes are high, do not force a single recommendation. Surface assumptions and present options with tradeoffs.”

#### Extracted anti-pattern
“Do not present false certainty in strategy outputs when evidence is weak.”

#### Extracted workflow
1. Assess evidence quality and stakes  
2. If sufficient evidence and moderate stakes → produce recommendation memo  
3. If weak evidence or high stakes → produce options memo with assumptions and tradeoffs  
4. Surface top risks and open questions

---

This system is ready to use as:
- a manual founder-led interview
- a friend-testing script
- a chat-based agent-guided intake
- a front-end survey/interview backbone for your product
