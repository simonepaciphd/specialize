# Skill: KPI Discovery

## Purpose

Scan a user's work artifacts, session logs, and operational patterns, then conduct a structured interview to propose observable KPIs for tracking productivity and output quality improvement over time.

This skill produces the measurement layer that feeds the data-driven pricing model. Token efficiency is one default metric, but the real value is discovering what "better" means for each user and making it measurable.

## When to invoke

- Onboarding a new user or workspace
- When a user asks "how do I know this is working?"
- Before activating the savings-share pricing model
- When the user's work patterns have changed significantly
- Periodically (quarterly) to update or retire stale KPIs

## Inputs

- Access to the user's workspace (repos, files, project structure)
- Session logs if available (timestamps, message counts, tool calls, retries)
- Any existing context package (skills, rules, workflows, memory)
- User availability for a 10-15 minute structured interview

## Steps

### Phase 1: Work scan (automated, no user input needed)

1. **Inventory the workspace**
   - Map file types, directory structure, languages, tools
   - Identify dominant work categories (code, writing, research, data analysis, planning)

2. **Analyze session logs** (if available)
   - Task duration distribution
   - Retry and correction frequency
   - Tool call patterns (which tools, how often, success rate)
   - Context loading patterns (what gets read, what gets re-read)
   - Abandonment signals (started but not completed tasks)

3. **Scan artifacts for quality signals**
   - Revision patterns (git history, file modification frequency)
   - Output structure consistency
   - Error and fixup patterns
   - Reuse rate of prior work (skills, templates, workflows)

4. **Produce a preliminary work profile**
   - Dominant task types with estimated frequency
   - Time allocation (if derivable from logs)
   - Observable bottlenecks or waste patterns
   - Candidate metrics with preliminary data

### Phase 2: Structured interview (10-15 min)

The interview is not about preferences. It is about discovering what the user would recognize as measurable improvement.

**Opening frame:**
> I've scanned your workspace and session history. I want to propose some ways to track whether the system is actually making your work better. I'll ask a few questions to make sure we're measuring the right things.

**Question sequence:**

1. **Value question**: "Of the work you do regularly, which tasks would save you the most time or frustration if they went better?"
   - *Signal*: identifies high-value task types for KPI focus
   - *Follow-up*: "What does 'better' look like for that — faster? fewer mistakes? less back-and-forth?"

2. **Quality question**: "When you look at agent output and think 'this is good enough to use,' what are you checking?"
   - *Signal*: reveals the user's actual acceptance criteria
   - *Follow-up*: "What are the most common reasons you reject or heavily edit output?"

3. **Waste question**: "Where do you feel the most time is wasted in your current workflow with agents?"
   - *Signal*: identifies efficiency targets
   - *Follow-up*: "Is that waste from re-explaining, wrong outputs, setup overhead, or something else?"

4. **Baseline question**: "Before you started using [this system / specialization], how did this same work go? Roughly how long, how many tries?"
   - *Signal*: establishes pre-intervention baseline for savings calculation
   - *Follow-up*: "Was there a specific incident that made you want to change the setup?"

5. **Measurement question**: "If I proposed tracking [candidate metric from scan], would that feel like a real signal to you, or would it miss the point?"
   - *Signal*: validates or kills candidate KPIs
   - *Follow-up*: "What would you add or change?"

6. **Stakes question**: "Is there a cost you can attach to this — either your hourly rate, or what you'd pay someone to do this work, or what it costs when it goes wrong?"
   - *Signal*: enables dollar-denominated savings calculation
   - *Follow-up*: "Would you prefer to use an estimated rate or provide your own?"

### Phase 3: KPI proposal

Synthesize scan data and interview answers into a structured KPI set.

**Each proposed KPI must include:**

| Field | Description |
|-------|-------------|
| **Name** | Short label (e.g., "First-draft acceptance rate") |
| **Category** | Efficiency, Quality, or Combined |
| **Definition** | Exactly what is measured and how |
| **Data source** | Where the measurement comes from (logs, git, user signal, automated eval) |
| **Baseline** | Current or pre-intervention value (measured or estimated) |
| **Target direction** | Higher is better / Lower is better |
| **Measurement frequency** | Per-session, daily, weekly, monthly |
| **Confidence** | High / Medium / Low — how reliable is this signal? |
| **Feeds pricing model?** | Yes / No — does this KPI contribute to savings calculation? |

**Default KPIs** (always proposed unless clearly irrelevant):

1. **Token cost per successful task** — total API spend divided by tasks the user accepted without major revision
2. **Intervention rate** — corrections, clarifications, and retries per task
3. **Time-to-usable-output** — wall clock from task start to user acceptance
4. **Reuse rate** — fraction of tasks that leveraged existing skills, templates, or prior context
5. **Rework frequency** — how often completed work gets revisited within 48 hours

**User-specific KPIs** (proposed based on scan + interview):

These are the high-value custom metrics. Examples by work type:

| Work type | Example KPI |
|-----------|-------------|
| Code | Tests passing on first generation, PR revision count |
| Writing | Draft-to-publish edit distance, structural revision rate |
| Research | Source coverage per memo, citation accuracy |
| Data analysis | Pipeline re-run count, result consistency across runs |
| Planning | Plan-to-execution divergence, assumption survival rate |

### Phase 4: User review and activation

1. Present the KPI proposal as a structured document
2. User accepts, modifies, or rejects each KPI
3. Accepted KPIs are written to a `TRACKERS.md` file in the workspace
4. Measurement begins — baseline period if no prior data exists
5. Schedule a review checkpoint (default: 2 weeks after activation)

## Outputs

- `TRACKERS.md` — the user's active KPI set with definitions, baselines, and data sources
- Updated user profile with measurement preferences
- Baseline snapshot for savings calculation
- Recommended measurement infrastructure (what needs logging, what's already available)

## Verification

- Every proposed KPI has a defined data source that actually exists or can be created
- No KPI depends on data the user hasn't consented to collect
- The baseline is explicitly stated (measured, estimated, or "to be established")
- The user has reviewed and accepted the final set
- At least one KPI feeds the pricing model

## Anti-patterns

- Proposing KPIs the user can't observe or doesn't care about
- Measuring only what's easy (tokens) and ignoring what matters (quality, time, frustration)
- Setting baselines that inflate savings claims
- Tracking so many KPIs that measurement becomes a burden
- Treating the KPI set as permanent — it should be reviewed and pruned
- Skipping the interview and relying only on automated scan data
