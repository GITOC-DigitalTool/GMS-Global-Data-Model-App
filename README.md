# gmstools Global Data Model Builder

This repository contains a **static GitHub Pages version** of the gmstools Global Data Model app. It is designed to mimic the browser-only app pattern used by the original Shiny workflow: the schema is loaded in the browser, users can select fields, score species baskets, rank platforms, and export CSV or JSON outputs without running a server.

## Files

- `index.html` — the complete browser application, including layout, styles, tab navigation, field selection, RSBR scoring, platform prioritisation, file upload handling, and export logic.
- `assets/global-data-model.js` — the reusable data bundle exposed as `window.GDM_DATA`. It contains the field catalogue, baseline profiles, current GMS fields, curation notes, and platform assessment criteria.

The app loads the SheetJS `xlsx` library from a CDN so `.xlsx` and `.xls` uploads work on GitHub Pages. CSV uploads have a small browser fallback parser so CSV files still work if the CDN is unavailable.

## Global Data Model

The **Global Data Model** is the master schema used to scope online illegal wildlife trade monitoring data collection. It organizes fields into six practical categories:

1. **Observation** — stable identifiers, collection dates, source references, and capture methods that make records auditable.
2. **Taxon & Product** — common names, scientific names, product forms, quantities, and identification confidence.
3. **Trade Signal** — trade intent, price, currency, shipping cues, and other indicators that observed content is relevant to trade monitoring.
4. **Actor & Network** — minimum necessary account, role, and engagement fields used for de-duplication or authorized escalation.
5. **Platform & Location** — platform names, platform features, jurisdictional cues, and location evidence.
6. **Governance** — legal or policy flags, sensitivity ratings, reviewer notes, and data-handling notes.

Each schema row includes a field ID, category, description, standardization notes, and whether it is part of the current Global Monitoring System field set.

## Field catalogue and profiles

The **Field catalogue** tab lets users:

- browse the complete schema;
- filter by category;
- search field IDs, descriptions, and notes;
- show only current GMS fields;
- show only selected fields;
- apply baseline profiles; and
- export selected fields as CSV or JSON.

Profiles are meant to be starting points rather than final protocols. The included profiles are:

- **Global Monitoring System** — the default current GMS field set.
- **Minimal monitoring baseline** — a lean field set for lightweight pilots.
- **Species trend analysis** — fields focused on taxon/product consistency and trend comparison.
- **Platform enforcement triage** — fields focused on platform, actor, trade signal, and governance decisions.

## How the model was curated

The model is curated as a practical harmonization layer across online monitoring workflows. The curation process is represented in the app as four steps:

1. **Harmonize equivalent field names** from monitoring protocols into a shared vocabulary.
2. **Define each field operationally** so analysts collect the same kind of evidence consistently.
3. **Mark current GMS fields and reusable profiles** so teams can start from tested field sets.
4. **Minimize sensitive data collection** by keeping personal, safety-relevant, or enforcement-sensitive information limited to a documented monitoring purpose.

This makes the model a living schema. Teams should adapt the field list to their species scope, platforms, legal context, ethics review, and operational capacity.

## RSBA and RSBR

The user-facing app labels the species workflow as **Rapid Species Basket Review (RSBR)**, while the broader readiness concept can be understood as part of an **RSBA-style rapid scoping and baseline assessment** workflow.

The RSBR tab lets users:

- upload a `.csv`, `.xlsx`, or `.xls` species list;
- load example species data;
- add and edit rows directly in the browser;
- adjust retain and drop thresholds;
- compute a total score from editable criteria; and
- export the resulting species prioritisation table as CSV.

The scoring fields are:

- `online_trade_evidence`
- `local_relevance`
- `enforcement_relevance`
- `identification_confidence`

The recommendation is calculated from the score:

- totals at or above the retain threshold are marked **Retain**;
- totals at or below the drop threshold are marked **Drop**; and
- totals between the thresholds are marked **Monitor**.

## Platform assessment and prioritisation

The **Platform prioritisation** tab ranks monitoring platforms from uploaded exploratory monitoring data. Users choose the platform and species columns after upload. If RSBR rows are loaded, platform detections are linked against the RSBR species table; otherwise the ranking uses score or recommendation columns already present in the uploaded workbook when available.

The model documentation frames platform assessment around five criteria:

1. **Relevance** — whether target species, products, keywords, sellers, or communities appear on the platform.
2. **Accessibility** — whether content is public, permissioned, partner-provided, technically restricted, or ephemeral.
3. **Data quality** — whether the platform provides usable timestamps, images, references, location cues, and account continuity.
4. **Risk and ethics** — whether privacy, investigator safety, sensitive species, or escalation concerns require stronger controls.
5. **Operational fit** — whether the platform matches available language coverage, tooling, analyst capacity, and maintenance effort.

The app calculates detections, distinct species, retain/monitor/drop counts, average RSBR score, and a priority score for each platform.

## Publishing on GitHub Pages

You can publish the app directly from the repository root because `index.html` is at the top level.

1. Commit and push this repository to GitHub.
2. Open **Settings → Pages** for the repository.
3. Choose the branch that contains `index.html`.
4. Choose the repository root as the Pages source, or copy `index.html` and `assets/global-data-model.js` into `/docs` and publish from `/docs`.
5. Save the Pages settings and wait for the published URL.

## Responsible use

Online IWT monitoring can involve sensitive species, personal information, risky actors, platform policy restrictions, and law-enforcement implications. Before deploying a monitoring workflow, review the selected fields, RSBR criteria, platform ranking method, retention plan, and sharing rules with appropriate subject-matter, legal, safety, privacy, and ethics expertise.
