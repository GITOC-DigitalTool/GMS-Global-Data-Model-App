# gmstools Global Data Model Builder

This repository contains a **static GitHub Pages version** of the gmstools Global Data Model app. It runs entirely in the browser, so teams can review the field catalogue, build exportable schema profiles, run the Rapid Species Basket Assessment (RSBA), score platforms, and export templates or results without a Shiny server.

## Files

- `index.html` — the complete browser application, including layout, styles, tab navigation, field selection, RSBA scoring, platform assessment, upload handling, template downloads, and export logic.
- `assets/global-data-model.js` — the browser data bundle exposed as `window.GDM_DATA`. It contains the expanded field catalogue (84 fields across 12 field-selection categories), baseline profiles, current GMS fields, curation notes, RSBA criteria and examples, and platform assessment criteria and examples.

The app loads SheetJS from a CDN so `.xlsx` and `.xls` uploads and Excel template downloads work on GitHub Pages. CSV uploads and CSV template downloads work without the CDN.

## Global Data Model

The **Global Data Model** is the master schema used to scope online illegal wildlife trade monitoring data collection. It organizes fields into 12 practical field-selection categories:

1. **Record metadata** — identifiers, collection dates, review states, and duplicate tracking.
2. **Source and access** — source references, access level, screenshots, and archives.
3. **Platform** — platform names, types, features, groups, channels, and policy flags.
4. **Account and actor** — account references, display names, roles, contact cues, and repeat-seller flags.
5. **Content** — post text, language, translation, media, and search-keyword context.
6. **Taxonomy** — common names, scientific names, ranks, families, classes, and identification basis.
7. **Product and specimen** — product forms, life stage, condition, quantity, origin claims, and permit claims.
8. **Trade signal** — trade intent, cue text, price, currency, negotiation, availability, shipping, and payment cues.
9. **Location and jurisdiction** — location cues, raw text, country, administrative area, market, and confidence.
10. **Engagement and network** — engagement counts, group size, external links, and network notes.
11. **Legal, policy, and conservation** — IUCN, CITES, national protection, suspected violation, and enforcement relevance fields.
12. **Governance and quality** — sensitivity, handling notes, reviewer notes, QA flags, exclusion, escalation, and retention fields.

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
- **Governance and QA review** — fields focused on audit, quality, sensitivity, exclusion, and retention decisions.

## How the model was curated

The model is curated as a practical harmonization layer across online monitoring workflows. The curation process is represented in the app as four steps:

1. **Harmonize equivalent field names** from monitoring protocols into a shared vocabulary.
2. **Define each field operationally** so analysts collect the same kind of evidence consistently.
3. **Mark current GMS fields and reusable profiles** so teams can start from tested field sets.
4. **Minimize sensitive data collection** by keeping personal, safety-relevant, or enforcement-sensitive information limited to a documented monitoring purpose.

This makes the model a living schema. Teams should adapt the field list to their species scope, platforms, legal context, ethics review, and operational capacity.

## Rapid Species Basket Assessment (RSBA)

The **Species assessment (RSBA)** tab lets users run a rapid assessment workflow in the browser. Users can:

- load the bundled multi-row example species list;
- upload a `.csv`, `.xlsx`, or `.xls` species list;
- download CSV or Excel templates with the required criteria columns;
- add species manually;
- edit criteria values directly in the table;
- run scoring after edits; and
- export the completed assessment as CSV.

The RSBA scoring criteria are stored in `assets/global-data-model.js` and displayed in the app. The current criteria columns are:

- `conservation_concern`
- `online_trade_evidence`
- `local_relevance`
- `enforcement_relevance`
- `identification_confidence`

The recommendation is calculated from the score:

- totals at or above the retain threshold are marked **Retain**;
- totals at or below the drop threshold are marked **Drop**; and
- totals between the thresholds are marked **Monitor**.

## Platform assessment

The **Platform assessment** tab lets users score platforms interactively or from uploaded data. Users can:

- load the bundled multi-row platform example;
- upload a `.csv`, `.xlsx`, or `.xls` platform list;
- download CSV or Excel templates with the required platform criteria columns;
- add platforms manually;
- edit criteria values directly in the browser table;
- re-run scoring after edits; and
- export the ranked platform assessment as CSV.

The platform scoring criteria are stored in `assets/global-data-model.js` and displayed in the app. The current criteria columns are:

- `target_species_presence`
- `trade_volume`
- `accessibility`
- `data_quality`
- `risk_and_ethics`
- `operational_fit`

The app sums the criteria values, sorts platforms by total score, and labels rows as **High priority**, **Monitor**, or **Low priority** using editable thresholds.

## Exportable templates

Both assessment tabs include **CSV template** and **Excel template** buttons. The templates include the relevant input columns but omit computed result columns. Users can fill in the templates, upload them back into the app, review or edit the rows, run scoring, and export completed results.

## Publishing on GitHub Pages

You can publish the app directly from the repository root because `index.html` is at the top level.

1. Commit and push this repository to GitHub.
2. Open **Settings → Pages** for the repository.
3. Choose the branch that contains `index.html`.
4. Choose the repository root as the Pages source, or copy `index.html` and `assets/global-data-model.js` into `/docs` and publish from `/docs`.
5. Save the Pages settings and wait for the published URL.

## Responsible use

Online IWT monitoring can involve sensitive species, personal information, risky actors, platform policy restrictions, and law-enforcement implications. Before deploying a monitoring workflow, review the selected fields, RSBA criteria, platform scoring method, retention plan, and sharing rules with appropriate subject-matter, legal, safety, privacy, and ethics expertise.
