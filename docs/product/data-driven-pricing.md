# Data-Driven Pricing: Measurement as Business Model

**Status:** Provisional — core logic defined, implementation pending

## One-line summary

The Labs efficiency layer is not a feature that supports a pricing model. It IS the pricing model.

## The insight

The same instrumentation that measures quality-constrained improvement for research purposes also produces the billing inputs. Every session generates:

- **Baseline estimate** — what this work would cost without specialization
- **Actual cost** — API spend (agent "wage") for the session
- **Quality signal** — did the user accept, correct, or reject the output
- **Savings delta** — baseline minus actual, gated on quality

Price is a function of measured value, not a subscription guess. The user doesn't trust a flat fee — they audit the claim.

## The formula

```
Verified Savings      = Baseline Cost - Optimized Cost      (quality-gated)
Distributable Savings = Verified Savings - Agent Cost        (API spend deducted first)
Company Fee           = Distributable Savings * Share Rate
User Keeps            = Distributable Savings - Company Fee
```

Agent cost is deducted from savings before the split. The company only earns from net value created.

## What gets measured

### Default: token efficiency
- Input/output/cached tokens per task
- Cost per successful task (accepted without major revision)
- Retry and intervention rate
- Time-to-usable-output

### Custom: user-defined KPIs
Token savings are one axis. Users may care about entirely different things:

| Dimension | Example KPIs |
|-----------|-------------|
| Time | Minutes to first usable draft, hours saved per week |
| Quality | First-draft acceptance rate, revision count, error frequency |
| Cognitive load | Corrections per session, re-explanation frequency |
| Output | Documents produced per period, code merged without rework |
| Domain-specific | Citation accuracy, test pass rate, compliance check results |

These are discovered through the **KPI Discovery** process: an agent scans the user's work artifacts and session logs, conducts a structured interview, and proposes observable metrics with measurement plans.

## The KPI discovery process

1. **Automated scan** — inventory workspace, analyze session logs, identify work categories and bottleneck patterns
2. **Structured interview** (10-15 min) — six questions targeting what the user values, what "good" looks like, where waste occurs, and what cost they attach to the work
3. **KPI proposal** — each metric has a name, definition, data source, baseline, target direction, measurement frequency, and whether it feeds the pricing model
4. **User review** — accept, modify, or reject each KPI
5. **Activation** — accepted KPIs written to `TRACKERS.md`, measurement begins

See `docs/agent/SKILLS/KPI_DISCOVERY.md` for the full skill specification.

## Why this aligns incentives

**Company wants:** higher revenue
**User wants:** better, cheaper, faster work

Under savings-share:
- Company revenue increases when the system produces more value
- But savings only count when quality holds (quality floor)
- And agent cost is deducted first (no earning from expensive inefficiency)
- And the user can inspect every claim (transparency requirement)

Fake efficiency — cutting corners to reduce tokens — immediately shows up in quality metrics and kills the savings claim. Over-engineering — burning tokens on excessive reasoning — inflates agent cost and shrinks distributable savings.

The only way to increase revenue is to genuinely make the user's work better and cheaper.

## The baseline problem

Everything depends on a credible baseline. Options:

| Baseline type | Strength | Weakness |
|---------------|----------|----------|
| Pre-intervention measurement | Strong causal claim | Requires data from before adoption |
| Generic unspecialized agent | Easy to establish | May not match user's actual alternative |
| User-declared rate | Respects user knowledge | Susceptible to strategic inflation |
| Rolling pre-optimization average | Adapts over time | Harder to explain |
| A/B holdout | Cleanest causal estimate | Requires sufficient task volume |

The company should support multiple baseline types and let users choose, with transparency about which method is in use.

## Guardrails

1. **Quality floor** — no savings count if output quality drops below threshold
2. **User inspectability** — measurement methodology is visible, not a black box
3. **Baseline integrity** — baselines cannot be retroactively inflated
4. **Time-bounded windows** — savings computed over defined periods
5. **Explicit terms** — share rate, what qualifies as savings, and quality thresholds are contractually clear
6. **Agent cost transparency** — API spend is auditable from logs

## Phased rollout

| Phase | What ships | Pricing implication |
|-------|-----------|-------------------|
| 1. Measurement | Token tracking, session logging, KPI discovery | Free — building the data layer |
| 2. Reporting | User dashboard showing efficiency and quality metrics | Free or low flat fee — demonstrating value |
| 3. Recommendations | System suggests leaner configs based on measured results | Flat fee or usage-based |
| 4. Savings-share | Verified savings calculation with transparent split | Data-driven pricing activated |
| 5. Governed externalization | Pooled benchmarks, licensed insights | Cooperative governance required |

## Positioning

**For users:** "We make your AI work more efficient. We measure the improvement. We share in verified savings."

**For investors:** "Revenue scales with demonstrated value creation. The measurement infrastructure is the moat."

**Short:** "Reduce your AI consumption without reducing the quality of your work."
