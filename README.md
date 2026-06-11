# ECOSOLVE - Global Monitoring System Data Model Builder

The ECOSOLVE Global Monitoring System Data Model Builder helps teams review the field catalogue, build exportable schema profiles, run the Rapid Species Basket Assessment (RSBA), score platforms, and export templates or results for monitoring workflows.

## Files

- `index.html` — the application interface, including tab navigation, field selection, RSBA scoring, platform assessment, upload handling, template downloads, and export logic.
- `assets/global-data-model.js` — the application data bundle. It contains the complete field catalogue (289 fields across 13 field-selection categories), baseline profiles, current GMS fields, curation notes, RSBA criteria and examples, and platform assessment criteria and examples.

The app supports `.xlsx`, `.xls`, and `.csv` uploads for assessment data. Downloads are kept to Excel workbooks/templates only.

## Global Data Model

The **Global Data Model** is the master schema used to scope online illegal wildlife trade monitoring data collection: **289 fields across 13 field-selection categories**.

1. **Automation, scraping, and model-assist fields** — model labels, fingerprints, extractor metadata, scraper provenance, and ML suggestions.
2. **Core record and workflow metadata** — collection program, analyst workflow, dates, review state, priority, risk, validation, and handling flags.
3. **Geography and geocoding (GADM compatible)** — raw ad locations, GADM IDs, ISO country codes, coordinates, confidence, precision, and masking levels.
4. **Governance, interoperability, and export controls** — retention, export, schema, sharing, interoperability, and subset-profile controls.
5. **Item, species, taxonomy, and product fields** — CITES, IUCN, item taxonomy, product form, quantity, life stage, permits, legality, and conservation fields.
6. **Legal and enforcement tracking (optional)** — case, referral, prosecution, seizure, enforcement outcome, and recommendation fields.
7. **Linking, dedupe, and network fields** — duplicate matching, related records, network nodes/edges, hashed seller identifiers, and similarity scores.
8. **Media, evidence, and forensics metadata** — evidence storage, image/OCR, hashes, EXIF, media URLs, screenshots, and chain of custody fields.
9. **Platform, content, and discovery context** — access, language, content IDs/text, engagement, groups, post dates, platform names, URLs, search terms, and website types.
10. **Price, currency, and commercial terms** — price, currency, discounts, availability, shipping costs, order quantities, and trade terms.
11. **Seller and account entity fields** — seller contacts, profile attributes, entity resolution, payment handles, follower counts, and profile URLs.
12. **Shipping, routes, and movement indicators** — cross-border indicators, delivery, origin/destination countries, meetup cues, packaging, and shipping methods.
13. **Vulnerability and bycatch indicators** — bycatch flags and vulnerable-group indicators with explicit-basis requirements.

Each schema row includes a field ID, category, description, standardization notes, and whether it is part of the current Global Monitoring System field set. The Global Monitoring System profile contains the 53 fields marked for the current GMS export, including core workflow, platform/content, item/species, geography, price, route, case, and vulnerability/bycatch fields.

## Field catalogue and profiles

The **Field catalogue** tab lets users:

- browse the complete schema;
- filter by category;
- search field IDs, descriptions, and notes;
- show only current GMS fields;
- show only selected fields;
- apply baseline profiles; and
- export selected fields as a two-tab Excel workbook.


### Field catalogue Excel workbook

The **Download Excel workbook** button exports the selected field set as a two-tab spreadsheet:

1. **Data entry template** — the selected data fields are laid out as spreadsheet columns, with one example row showing the kind of value that should be entered for each field.
2. **Field catalogue** — the long-form field reference table with category, `Field_ID`, description, standardization notes, and `in_gms` membership.

This structure lets analysts fill out monitoring data in the first tab while keeping the full field definitions and standardization guidance in the second tab.

Profiles are meant to be starting points rather than final protocols. The included profiles are:

- **Global Monitoring System** — all fields marked `in_gms = TRUE`.
- **General Monitoring** — operational monitoring fields for routine collection, review, platform context, item details, locations, price, seller signals, delivery, media, and vulnerability/bycatch indicators.
- **Academic Research** — de-identified research fields for taxonomy, platform/content context, geography, timing, prices, and aggregate monitoring signals.
- **Law Enforcement** — operational, evidentiary, legal, seller/entity, referral, case, seizure, dedupe, media-forensics, and sensitive handling fields.
- **Trend Analysis** — standardized fields for longitudinal platform, taxon, geography, route, price, engagement, and detection trend analysis.
- **Policy/Regulation** — fields for CITES/IUCN/national protection review, legality and permitting, platform governance, routes, prices, enforcement outcomes, and policy-relevant indicators.

## How the model was curated

The model is curated as a practical harmonization layer across online monitoring workflows. The curation process is represented in the app as four steps:

1. **Harmonize equivalent field names** from monitoring protocols into a shared vocabulary.
2. **Define each field operationally** so analysts collect the same kind of evidence consistently.
3. **Mark current GMS fields and reusable profiles** so teams can start from tested field sets.
4. **Minimize sensitive data collection** by keeping personal, safety-relevant, or enforcement-sensitive information limited to a documented monitoring purpose.

This makes the model a living schema. Teams should adapt the field list to their species scope, platforms, legal context, ethics review, and operational capacity.



## Rapid Species Basket Assessment (RSBA)

The **Species assessment (RSBA)** tab lets users run a rapid assessment workflow. Users can:

- load the bundled multi-row example species list;
- upload a `.csv`, `.xlsx`, or `.xls` species list;
- download an Excel template with the required criteria columns;
- add species manually;
- edit criteria values directly in the table;
- run scoring after edits; and
- export the completed assessment as an Excel workbook.

Priority-setting should balance conservation urgency, enforcement relevance, trade relevance, online trade relevance, and the practical likelihood that a species or product can be identified and assessed online with enough confidence to make monitoring useful. The app auto-scores legislative protection from CITES appendix and legal protection fields, and ecological impact from IUCN status. The current RSBA criteria are stored in `assets/global-data-model.js` and displayed in the app:

| Criterion | Score range | Description |
| --- | --- | --- |
| Legislative protection | 0–3 | Based on international and national protections: 3 = CITES Appendix I plus national trade ban/protection; 2 = one of those criteria, or CITES Appendix II with significant law-enforcement rationale and/or permit-based trade; 1 = general protections or legal-origin requirements; 0 = none. |
| Expert-identified concern | 0–2 | 2 = strong evidence of emerging threat or conservation concern; 1 = some concern but insufficient data; 0 = no flagged issues. |
| Enforcement priority | 0–3 | 3 = high priority with organized-crime link; 2 = medium priority with significant trafficking; 1 = low priority; 0 = not identified as a priority. |
| Trade relevance (global/local) | 0–2 | 2 = high relevance in global and local markets; 1 = medium relevance in either global or local markets; 0 = low relevance. |
| Online trade relevance | 0–2 | 2 = strong evidence of active online advertising, searching, or transactions; 1 = occasional online signals or likely online displacement; 0 = little or no online relevance. |
| Ecological impact | 0–2 | 2 = Critically Endangered, keystone, or severe ecological impact; 1 = Vulnerable or moderate ecological impact; 0 = Least Concern or low documented ecological impact. |

The recommendation is calculated from the score:

- totals at or above the retain threshold are marked **Retain**;
- totals at or below the drop threshold are marked **Drop**; and
- totals between the thresholds are marked **Monitor**.

## Platform assessment

The **Platform assessment** tab lets users score platforms interactively or from uploaded data. Users can:

- load the bundled multi-row platform example;
- upload a `.csv`, `.xlsx`, or `.xls` platform list;
- download an Excel template with the required platform criteria columns;
- add platforms manually;
- edit criteria values directly in the table;
- re-run scoring after edits; and
- export the ranked platform assessment as an Excel workbook.

The platform scoring criteria are stored in `assets/global-data-model.js` and displayed in the app. The current criteria columns are:

- `target_species_presence`
- `trade_volume`
- `accessibility`
- `data_quality`
- `risk_and_ethics`
- `operational_fit`

The app sums the criteria values, sorts platforms by total score, and labels rows as **High priority**, **Monitor**, or **Low priority** using editable thresholds.

## Exportable templates

Both assessment tabs include **Excel template** and **Export results Excel** buttons. The templates include the relevant input columns but omit computed result columns. Users can fill in the templates, upload them back into the app, review or edit the rows, run scoring, and export completed results as Excel workbooks.


## Responsible use

Online IWT monitoring can involve sensitive species, personal information, risky actors, platform policy restrictions, and law-enforcement implications. Before deploying a monitoring workflow, review the selected fields, RSBA criteria, platform scoring method, retention plan, and sharing rules with appropriate subject-matter, legal, safety, privacy, and ethics expertise.
