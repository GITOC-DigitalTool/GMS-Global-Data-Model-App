# GMS Tools Global Data Model App

This repository contains a static HTML version of the **GMS Tools Global Data Model** app for scoping and selecting data collection fields for online illegal wildlife trade (IWT) monitoring programs. It is designed to be published directly with GitHub Pages: no build step, package manager, database, or server runtime is required.

## Working parts

### 1. Static GitHub Pages app

The app is implemented with three files:

- `index.html` defines the page structure, content sections, navigation, forms, and interactive containers.
- `styles.css` provides the responsive layout, visual design, card system, tables, filters, and mobile navigation behavior.
- `app.js` stores the data model content and powers the interactive field builder, RSBA score calculator, platform assessment table, counters, and copy-to-clipboard action.

To run it locally, open `index.html` in a browser or serve the folder with any static file server.

## Global Data Model

The **Global Data Model** is a normalized catalogue of fields that can be used when designing an online IWT monitoring program. The model is split into six dimensions:

1. **Observation** — record-level metadata that supports traceability, de-duplication, and review.
2. **Taxon & Product** — species, product form, quantity, and identification confidence fields.
3. **Trade Signal** — evidence that content is commercial or otherwise relevant to trade monitoring.
4. **Actor & Network** — minimum necessary account, role, and engagement context.
5. **Platform & Location** — the online environment, platform feature, and location cues.
6. **Governance** — sensitivity, legal or policy flags, reviewer notes, and responsible data handling.

Each field includes:

- a field name;
- a dimension;
- a collection status; and
- a short operational definition.

Collection statuses are used to scope effort:

- **Required** fields are the baseline fields needed for a defensible monitoring record.
- **Recommended** fields strengthen interpretation and comparability when the information is available.
- **Conditional** fields should be collected only when relevant to the program objective, platform, or observed content.
- **Optional** fields add context but should not distract from the core monitoring question.

## How the model was curated

The app describes the curation process as a practical field-selection workflow rather than a fixed universal protocol. The working assumption is that monitoring teams need common structure while retaining enough flexibility to adapt to taxa, regions, languages, laws, platform policies, and safety constraints.

The curation workflow in the app has four steps:

1. **Harmonize terms** — similar data fields are consolidated into common labels and plain-language definitions.
2. **Assign collection status** — every field is marked as required, recommended, conditional, or optional.
3. **Map decisions** — fields are linked to decisions they support, such as species identification, seller behavior analysis, enforcement triage, or trend monitoring.
4. **Reduce risk** — sensitive or personally identifying data is scoped to the minimum necessary for a legitimate monitoring purpose.

This makes the model a living protocol. Teams should document why fields were included or excluded and revisit the field list when program goals, platforms, legal context, or trade patterns change.

## RSBA: Rapid Scoping & Baseline Assessment

The **RSBA** section is an interactive readiness screen for assessing whether a proposed monitoring concept is ready for a scoped pilot. It scores four factors from 1 to 5:

1. **Conservation or enforcement priority** — how important the monitoring question is.
2. **Evidence of online trade activity** — whether there is enough signal to justify monitoring.
3. **Data collection feasibility** — whether the team can collect useful information with available methods and capacity.
4. **Safety, privacy, and ethics readiness** — whether governance, minimization, and escalation safeguards are in place.

The app adds these inputs into a score out of 20 and displays guidance:

- **16–20**: strong candidate for a scoped pilot, assuming governance checks are complete.
- **11–15**: promising but needs refinement before methods and scope are finalized.
- **4–10**: keep in discovery mode until priority, evidence, feasibility, or readiness improves.

The RSBA is not a substitute for expert, legal, safety, or ethics review. It is a transparent first-pass baseline that helps teams compare candidate monitoring ideas consistently.

## Platform assessment

The **Platform Assessment** section helps teams compare online channels before committing to active monitoring. The app currently uses five criteria:

1. **Relevance** — whether target taxa, products, keywords, or seller communities are present.
2. **Accessibility** — whether content is public, permissioned, partner-provided, ephemeral, or technically restricted.
3. **Data Quality** — whether the platform provides usable timestamps, images, location cues, account continuity, and stable references.
4. **Risk & Ethics** — whether privacy exposure, investigator safety, sensitive species, or escalation concerns require stronger controls.
5. **Operational Fit** — whether the platform matches available language skills, tools, analyst capacity, and maintenance resources.

The assessment is intended to prioritize where and how to monitor. It should not be used to label an entire platform as inherently high or low risk.

## Program field-list builder

The **Program field-list builder** lets users filter fields by collection status and model dimension. The visible field cards can be copied to the clipboard and pasted into a protocol, spreadsheet, GitHub issue, or project management tool.

This supports a repeatable workflow:

1. Start with all required fields.
2. Add recommended fields that match the program objective.
3. Add conditional fields only when they are relevant and collectable.
4. Keep optional fields limited to the context the team can use responsibly.
5. Export the scoped list and document the rationale.

## Publishing with GitHub Pages

1. Commit the files in this repository.
2. Push the branch to GitHub.
3. In the repository settings, open **Pages**.
4. Choose the branch and root folder that contain `index.html`.
5. Save the settings and wait for GitHub Pages to publish the site.

Because this is a static app, GitHub Pages can serve it directly from the repository root.

## Responsible use note

Online IWT monitoring can involve sensitive species, personal data, risky actors, platform policy constraints, and law-enforcement implications. Before deployment, review the scoped field list and collection process with appropriate subject-matter, legal, safety, privacy, and ethics expertise.
