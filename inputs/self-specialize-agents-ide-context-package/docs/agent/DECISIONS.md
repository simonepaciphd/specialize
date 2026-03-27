# DECISIONS

Durable decision log for the repo.

Use this file for choices that future agents should not have to rediscover.

## Format

- **ID**
- **Date**
- **Decision**
- **Reason**
- **Implication**

---

## D-001
**Date:** 2026-03-26  
**Decision:** Use layered context instead of a monolithic README.  
**Reason:** Agents need different levels of detail depending on task type. One giant file increases search cost, context waste, and wrong assumptions.  
**Implication:** Root files stay short. Detailed operational knowledge moves into `docs/agent/`.

## D-002
**Date:** 2026-03-26  
**Decision:** Treat agent portability as a first-order design goal.  
**Reason:** The product itself is about reusable context across agent environments, so the repo should embody that principle.  
**Implication:** Avoid tool-specific lock-in where possible. Keep root contracts and exports adaptable.

## D-003
**Date:** 2026-03-26  
**Decision:** Sequence the product as private product first, Labs second, cooperative layer later.  
**Reason:** Governance complexity should not outrun core product value.  
**Implication:** Private self-specialization is the baseline reference for product and architecture decisions.

## D-004
**Date:** 2026-03-26  
**Decision:** Prefer derived context over always-loaded raw context.  
**Reason:** Raw materials are large, noisy, and expensive to carry across tasks. Derived artifacts are more reusable and more inspectable.  
**Implication:** Invest in summaries, maps, skills, and memory layers rather than giant prompt dumps.

## D-005
**Date:** 2026-03-26  
**Decision:** Keep experiments operationally separate from commercialization and baseline product behavior.  
**Reason:** Labs should generate learning without confusing the default product or contaminating baseline artifacts.  
**Implication:** Experiment variants and measurements need explicit boundaries.

## D-006
**Date:** 2026-03-26  
**Decision:** Require a written plan for large workstreams.  
**Reason:** Multi-file, architecture-shaping work is where agents drift, overreach, or forget assumptions.  
**Implication:** Use `PLANS/PLAN_TEMPLATE.md` before broad changes.

## D-007
**Date:** 2026-03-26  
**Decision:** Keep command documentation brutally honest.  
**Reason:** Invented commands are worse than missing commands.  
**Implication:** `COMMANDS.md` starts with placeholders until verified from the repo.

## D-008
**Date:** 2026-03-26  
**Decision:** Make uncertainty visible rather than smoothing it over.  
**Reason:** This repo includes conceptual and aspirational components. Hiding uncertainty causes downstream implementation errors.  
**Implication:** Use implemented, provisional, and aspirational labels consistently.
