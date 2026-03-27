# Full-Scan Capacity Estimates: Laptop + Cloud Data

**Status:** Provisional — estimates based on known model throughput and typical storage profiles. Needs validation against real user data.

## User storage tiers

Most storage is media, binaries, and duplicates. The LLM only processes text-extractable, deduplicated content.

| Tier | Label | Total storage | Text-extractable | After dedup/filter | Example user |
|------|-------|--------------|-------------------|--------------------|--------------|
| T1 | Light | 20–50 GB | 500 MB–2 GB | 200 MB–800 MB | Student, single-project freelancer |
| T2 | Medium | 100–300 GB | 2–10 GB | 800 MB–4 GB | Professional with multiple active projects |
| T3 | Heavy | 500 GB–2 TB | 10–50 GB | 4–20 GB | Researcher, developer, writer with years of archives |
| T4 | Power | 2+ TB | 50–200 GB | 20–80 GB | Enterprise user, multi-domain academic, consultant |

### What counts as text-extractable

| Source | Typical content | Extraction method |
|--------|----------------|-------------------|
| Documents (md, txt, docx, pdf) | High signal | Direct parse / OCR |
| Code repos | High signal | Direct read, AST parse for structure |
| Email / messages | Medium signal, high volume | Export + parse |
| Cloud docs (Google Drive, Notion, etc.) | Medium-high signal | API export |
| Agent transcripts / chat histories | Very high signal | Direct parse |
| Config files, dotfiles, settings | Moderate signal | Direct read |
| Spreadsheets, CSVs | Variable | Cell extraction |
| Slides, presentations | Lower signal per byte | Text layer extraction |
| Calendar, task management | Compact but structured | API export |

### Why the filter ratio matters

Raw extracted text contains massive amounts of noise:
- boilerplate (licenses, headers, auto-generated code)
- duplicates (forks, copies, synced files, email threads)
- low-signal bulk (logs, data files masquerading as text)
- stale content (years-old drafts with no bearing on current work)

A good filtering pass keeps 30–40% of extracted text for LLM processing. Aggressive filtering (recommended for first scan) keeps 15–25%.

## Processing pipeline and token consumption

The scan is NOT "feed everything to the LLM." It's a staged pipeline where each stage compresses before the next one reads.

### Stage breakdown

| Stage | What happens | LLM needed? | Token cost model |
|-------|-------------|-------------|-----------------|
| 1. Discovery | Filesystem walk, cloud API enumeration | No | Zero tokens |
| 2. Extraction | Parse documents, code, exports to plain text | No | Zero tokens |
| 3. Dedup + filter | Hash-based dedup, boilerplate removal, staleness filter | No | Zero tokens |
| 4. Classification | What type of content is this? Route to appropriate processor | Light | ~600 tokens per file (500 in, 100 out) |
| 5. Chunked summarization | Read filtered text in 4K chunks, produce structured summaries | Heavy | ~4,500 tokens per chunk (4K in, 500 out) |
| 6. Entity extraction | Extract people, projects, tools, concepts, relationships | Moderate | Runs on summaries, not raw text |
| 7. Pattern synthesis | Identify workflows, skills, habits, decision patterns | Moderate | Runs on entity layer |
| 8. Knowledge graph assembly | Structure entities and relationships into navigable graph | Moderate | Runs on pattern layer |
| 9. Prompt system generation | Produce skills, interview questions, mapping prompts, specs | Moderate | Runs on graph + patterns |

### Compression cascade

Each stage compresses the previous stage's output before the next stage reads it:

```
Raw text           100%
After filter        25%     (4x compression)
After summarize      3%     (8x compression of filtered text)
After entities     0.5%     (6x compression of summaries)
After patterns     0.1%     (5x compression of entities)
Graph + prompts   0.05%     (2x compression of patterns)
```

This means a 4 GB filtered text corpus (T2 medium user) produces roughly:
- 4 GB → 1 GB filtered → 125 MB summaries → 20 MB entities → 4 MB patterns → 2 MB graph + prompts

## Token estimates by tier

### Conversion constants

- 1 MB plain text ≈ 250,000 tokens
- 1 GB plain text ≈ 250M tokens

### T1: Light user (200 MB–800 MB filtered text)

| Stage | Input tokens | Output tokens | Total tokens |
|-------|-------------|---------------|-------------|
| Classification | 5M | 1M | 6M |
| Summarization | 125M | 16M | 141M |
| Entity extraction | 16M | 3M | 19M |
| Pattern synthesis | 3M | 600K | 3.6M |
| Graph assembly | 600K | 300K | 900K |
| Prompt generation | 300K | 200K | 500K |
| **Total** | **150M** | **21M** | **~171M tokens** |

### T2: Medium user (800 MB–4 GB filtered text)

| Stage | Input tokens | Output tokens | Total tokens |
|-------|-------------|---------------|-------------|
| Classification | 15M | 3M | 18M |
| Summarization | 500M | 63M | 563M |
| Entity extraction | 63M | 11M | 74M |
| Pattern synthesis | 11M | 2M | 13M |
| Graph assembly | 2M | 1M | 3M |
| Prompt generation | 1M | 500K | 1.5M |
| **Total** | **592M** | **80M** | **~672M tokens** |

### T3: Heavy user (4–20 GB filtered text)

| Stage | Input tokens | Output tokens | Total tokens |
|-------|-------------|---------------|-------------|
| Classification | 50M | 10M | 60M |
| Summarization | 2.5B | 313M | 2.8B |
| Entity extraction | 313M | 52M | 365M |
| Pattern synthesis | 52M | 10M | 62M |
| Graph assembly | 10M | 5M | 15M |
| Prompt generation | 5M | 2M | 7M |
| **Total** | **2.9B** | **392M** | **~3.3B tokens** |

### T4: Power user (20–80 GB filtered text)

| Stage | Input tokens | Output tokens | Total tokens |
|-------|-------------|---------------|-------------|
| Classification | 150M | 30M | 180M |
| Summarization | 10B | 1.25B | 11.25B |
| Entity extraction | 1.25B | 210M | 1.46B |
| Pattern synthesis | 210M | 42M | 252M |
| Graph assembly | 42M | 20M | 62M |
| Prompt generation | 20M | 8M | 28M |
| **Total** | **11.7B** | **1.56B** | **~13.2B tokens** |

## Time estimates on private VM

### Hardware: single A100 80GB running Qwen 2.5 Coder 32B via vLLM

Throughput with continuous batching (processing many chunks in parallel):

| Metric | Conservative | Optimistic |
|--------|-------------|-----------|
| Aggregate input throughput | 3,000 tok/sec | 8,000 tok/sec |
| Aggregate output throughput | 800 tok/sec | 2,000 tok/sec |
| Effective batch size | 16 | 32 |

The bottleneck is output generation (summaries, entities, patterns). Input prefill is fast.

### Time = (input tokens / input throughput) + (output tokens / output throughput)

| Tier | Tokens | Conservative | Optimistic | Rounded estimate |
|------|--------|-------------|-----------|-----------------|
| T1 Light | 171M | 150M/3K + 21M/800 = 50K + 26K = ~21 hrs | 150M/8K + 21M/2K = 19K + 10K = ~8 hrs | **8–21 hours** |
| T2 Medium | 672M | 592M/3K + 80M/800 = 197K + 100K = ~83 hrs | 592M/8K + 80M/2K = 74K + 40K = ~32 hrs | **32–83 hours** |
| T3 Heavy | 3.3B | 2.9B/3K + 392M/800 = 967K + 490K = ~405 hrs | 2.9B/8K + 392M/2K = 363K + 196K = ~155 hrs | **155–405 hours** |
| T4 Power | 13.2B | ~1,600 hrs | ~620 hrs | **620–1,600 hours** |

### With 8x A100 cluster (linear scaling for batch workloads)

| Tier | Tokens | Conservative | Optimistic | Rounded estimate |
|------|--------|-------------|-----------|-----------------|
| T1 Light | 171M | ~2.6 hrs | ~1 hr | **1–3 hours** |
| T2 Medium | 672M | ~10 hrs | ~4 hrs | **4–10 hours** |
| T3 Heavy | 3.3B | ~51 hrs | ~19 hrs | **19–51 hours** |
| T4 Power | 13.2B | ~200 hrs | ~78 hrs | **78–200 hours** |

## Cost estimates (GCP, March 2026 pricing approximate)

### Single A100 80GB (a2-highgpu-1g): ~$4/hr spot, ~$8/hr on-demand

| Tier | Time (optimistic) | Cost (spot) | Cost (on-demand) |
|------|-------------------|------------|-----------------|
| T1 Light | 8 hrs | $32 | $64 |
| T2 Medium | 32 hrs | $128 | $256 |
| T3 Heavy | 155 hrs | $620 | $1,240 |
| T4 Power | 620 hrs | $2,480 | $4,960 |

### 8x A100 cluster (a2-ultragpu-8g): ~$30/hr spot, ~$50/hr on-demand

| Tier | Time (optimistic) | Cost (spot) | Cost (on-demand) |
|------|-------------------|------------|-----------------|
| T1 Light | 1 hr | $30 | $50 |
| T2 Medium | 4 hrs | $120 | $200 |
| T3 Heavy | 19 hrs | $570 | $950 |
| T4 Power | 78 hrs | $2,340 | $3,900 |

## Practical implications

### For the MVP: target T1–T2 users first

- T1 scan completes in 1–8 hours on reasonable hardware: viable as "overnight scan"
- T2 takes 4–32 hours: viable as "weekend scan" or multi-session
- T3–T4 require either cluster hardware or multi-day processing

### Optimization levers (not yet modeled)

| Lever | Potential savings | Implementation complexity |
|-------|------------------|--------------------------|
| Smarter filtering (scan TOC/structure before full read) | 2–5x fewer tokens | Low |
| Hierarchical summarization (summarize summaries) | 3–10x fewer tokens at upper stages | Medium |
| Incremental scanning (only process new/changed files) | Huge for repeat scans | Medium |
| Smaller model for classification pass | 3–5x faster for stage 4 | Low |
| Embedding-based clustering before LLM summarization | 2–3x fewer redundant chunks | Medium |
| User-guided scope ("skip these folders") | Variable, often 2–10x | Low |
| Speculative routing: cheap model first, escalate to large model only for hard chunks | 2–4x cost reduction | High |

### The incremental advantage

The first scan is expensive. Every subsequent scan is cheap because:
- Only new/modified files need processing
- The knowledge graph is additive — update, don't rebuild
- The prompt system evolves incrementally
- User corrections prune the search space

A weekly incremental scan for a T2 user might process 1–5% of the original volume: 30 minutes to 2 hours.

## What the scan produces

### Primary output: knowledge graph

A structured, navigable graph containing:

| Node type | Description | Source stages |
|-----------|-------------|--------------|
| Person | User + collaborators, with roles and relationships | Entity extraction |
| Project | Active and historical projects with status and connections | Entity extraction, pattern synthesis |
| Tool | Software, platforms, and environments used | Entity extraction |
| Skill | Reusable procedures the user employs | Pattern synthesis |
| Workflow | Recurring task sequences | Pattern synthesis |
| Domain | Knowledge areas with depth estimates | Entity extraction, pattern synthesis |
| Artifact | Key documents, repos, datasets | Discovery, classification |
| Decision | Durable choices that shape future work | Pattern synthesis |
| Habit | Recurring behavioral patterns (positive and negative) | Pattern synthesis |
| Preference | Output format, style, communication expectations | Pattern synthesis |
| Gap | Missing skills, broken workflows, unsupported patterns | Pattern synthesis |

### Secondary output: prompt system for further mapping

| Prompt type | Purpose | Count (typical T2) |
|-------------|---------|-------------------|
| Interview questions | Targeted questions to fill graph gaps | 15–30 |
| Skill extraction prompts | Templates to codify discovered procedures | 10–20 |
| Workflow mapping prompts | Templates to formalize recurring sequences | 5–15 |
| Tool audit prompts | Questions about tool selection and delegation logic | 5–10 |
| Contradiction resolution prompts | Surface conflicting patterns for user clarification | 3–8 |
| Specialization depth prompts | Drill deeper into high-signal domains | 5–15 |
| Validation prompts | Confirm inferred patterns with concrete examples | 10–20 |

The prompt system is not generic. It is generated from the scan — each prompt targets a specific node, edge, or gap in the user's knowledge graph.

### Tertiary output: initial context package draft

- Draft `AGENTS.md` / `CLAUDE.md` instruction layers
- Candidate skill files
- Project map
- Workflow specs
- Memory layer seeds
- Anti-pattern warnings
- Suggested tracker KPIs

This draft is explicitly marked provisional and presented for user review before activation.

## Token consumption summary table

| Tier | Total tokens | Equivalent pages | Equivalent books |
|------|-------------|-----------------|-----------------|
| T1 Light | ~170M | ~250K pages | ~500 books |
| T2 Medium | ~670M | ~1M pages | ~2,000 books |
| T3 Heavy | ~3.3B | ~5M pages | ~10,000 books |
| T4 Power | ~13.2B | ~20M pages | ~40,000 books |

For context: GPT-4 class models typically cost $5–15 per million input tokens via API. On the private VM, the cost is pure compute — no per-token API charge. The VM cost IS the token cost.

## Comparison: private VM vs API pricing

If this same scan were run via commercial API (e.g., Claude Sonnet at $3/$15 per M input/output tokens):

| Tier | VM cost (spot A100) | API cost (estimated) | VM savings |
|------|--------------------|--------------------|-----------|
| T1 | $32 | ~$500–800 | 15–25x cheaper |
| T2 | $128 | ~$2,000–3,500 | 15–27x cheaper |
| T3 | $620 | ~$10,000–18,000 | 16–29x cheaper |
| T4 | $2,480 | ~$40,000–70,000 | 16–28x cheaper |

The private VM is roughly **15–30x cheaper** than API pricing for batch workloads, in addition to the data security benefit.
