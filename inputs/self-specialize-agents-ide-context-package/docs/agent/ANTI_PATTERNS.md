# ANTI_PATTERNS

This file exists to stop predictable agent mistakes.

## 1. Overloading root instructions

### Bad pattern
Putting long workflows, architecture details, and domain reasoning into `README.md` or `AGENTS.md`.

### Why it hurts
It increases startup cost and makes the most important files unreadable.

### Correct pattern
Keep root files short. Push detail into `docs/agent/`.

---

## 2. Inventing architecture details

### Bad pattern
Writing as if specific services, schemas, queues, jobs, or databases already exist when they have not been verified.

### Why it hurts
It contaminates future implementation with fake certainty.

### Correct pattern
Label assumptions as provisional and tie them to the current product stage.

---

## 3. Treating speculative ideas as implemented

### Bad pattern
UI copy, docs, or code paths that imply governance, experiments, or export flows already work.

### Why it hurts
It creates false product claims and implementation debt.

### Correct pattern
Mark features by status and keep aspirational flows visibly separate.

---

## 4. Editing too many unrelated files at once

### Bad pattern
Sweeping changes across docs, code, and strategy without a plan.

### Why it hurts
It makes validation weak and handoff difficult.

### Correct pattern
Use a plan for broad work. Keep changes coherent.

---

## 5. Claiming completion without validation

### Bad pattern
Saying a task is done without running checks or stating why checks could not be run.

### Why it hurts
It turns confidence into noise.

### Correct pattern
State exactly what was validated and what remains unverified.

---

## 6. Adding abstractions before repeated need exists

### Bad pattern
Creating complex framework layers, plugin systems, or schema hierarchies before a second real use case exists.

### Why it hurts
It slows iteration and makes the repo harder to reason about.

### Correct pattern
Keep structure simple until repeated patterns justify abstraction.

---

## 7. Hiding uncertainty

### Bad pattern
Smoothing over unknowns with generic prose.

### Why it hurts
Future agents cannot tell which assumptions are safe.

### Correct pattern
Name the unknown directly and record it where it matters.

---

## 8. Repeating prior mistakes because they were never recorded

### Bad pattern
Fixing the same ambiguity multiple times without updating docs or decisions.

### Why it hurts
The repo never compounds learning.

### Correct pattern
Record durable lessons in `DECISIONS.md`, skills, or checklists.

---

## 9. Building the cooperative layer too early

### Bad pattern
Spending early implementation effort on voting, licensing, or complex governance before private utility works.

### Why it hurts
It front-loads complexity and weakens the core product loop.

### Correct pattern
Use governance thinking to shape boundaries, not to dominate the build order.

---

## 10. Letting Labs bleed into the baseline product

### Bad pattern
Treating experimental variants as default behavior without documentation.

### Why it hurts
Results become uninterpretable and the product gets unstable.

### Correct pattern
Keep experimental paths explicit and reversible.

---

## 11. Using giant memory blobs as a substitute for structure

### Bad pattern
Stuffing everything into a long context file and calling it memory.

### Why it hurts
It destroys portability and precision.

### Correct pattern
Use layered artifacts: maps, skills, workflows, memory summaries, and exports.

---

## 12. Writing skills that are really slogans

### Bad pattern
A skill file that offers generic advice but no trigger, inputs, steps, or verification.

### Why it hurts
Agents cannot actually use it.

### Correct pattern
Every skill should act like an executable procedure in prose.
