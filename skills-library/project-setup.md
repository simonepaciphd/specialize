# Project Setup Template

Copy this file into a new replication folder and fill in the bracketed placeholders. Then rename it to `README.md`.

---

# [Project Title] — Replication Folder

## Project Overview

[1–3 sentences describing the research question, empirical strategy, and core methodology.]

## Rules for Agents

1. **Never modify files in `inputs/`.** All raw and cleaned input data is read-only. Scripts should read raw data and produce new clean/intermediary/final data files through code.
2. **All scripts live in `scripts/`**, organized by subfolder (cleaning, analysis, management).
3. **All outputs live in `outputs/`** — analyses, visualizations, tables, model results.
4. **Archive folders** exist in `inputs/Archive/` and `scripts/archive/`. These contain old files and scripts. You may look in them for prior approaches and reuse anything useful, but do not treat them as canonical.

## Folder Structure

```
Replication Folder/
├── README.md
├── docs/                              # Project documentation
│
├── inputs/                            # ALL DATA — DO NOT MODIFY
│   ├── raw/                           # Original, unmodified data files
│   │   └── [describe raw data subfolders as needed]
│   ├── clean/                         # For script-produced clean data
│   └── archive/                       # Old files (reference only)
│
├── scripts/
│   ├── data-collection/               # Collection scripts
│   ├── data-cleaning/                 # Cleaning scripts
│   ├── data-analysis/                 # Analysis scripts
│   ├── data-management/               # Data management / merge scripts
│   └── archive/                       # Old scripts (reference only)
│
└── outputs/
    └── results/                       # Model results, tables, figures
```

## Data Sources

[List each data source with its file name, location, and coverage. Example format:]

| Source | File(s) | Coverage |
|--------|---------|----------|
| [Dataset name] | `inputs/raw/[filename]` | [Years / waves / scope] |

## Cleaned Data

[Describe where cleaned data is stored and naming conventions, e.g.:]

All cleaned data lives in `inputs/clean/` as [format] files, following the naming convention `[convention]`.

## Analysis Pipeline

1. **Raw data** -> `scripts/data-cleaning/` -> **Cleaned data** (stored in `inputs/clean/`)
2. **Cleaned data** -> `scripts/data-management/` -> **Merged analysis-ready data**
3. **Merged data** -> `scripts/data-analysis/` -> **Model results & visualizations** (stored in `outputs/`)

## Key Methodological Notes

- **Dependent variable(s):** [Describe what you are measuring and how.]
- **Independent variable(s):** [Describe treatment / key predictors.]
- **Method:** [Describe the estimation strategy.]

## Language & Tools

- **[Primary language]** is used for all scripts.
- Raw data arrives in [list formats, e.g., `.csv`, `.sav`, `.dta`, `.rds`].
- All intermediate and output data is stored as [list formats].
