window.GDM_DATA = {
  "fields": [
    {
      "field_id": "classification_label",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Model label (ad, non-ad, unsure)",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "content_fingerprint",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Text fingerprint for matching",
      "standardization_notes": "Document algorithm",
      "in_gms": false
    },
    {
      "field_id": "extraction_confidence",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Extraction/classification confidence",
      "standardization_notes": "Numeric; define range",
      "in_gms": false
    },
    {
      "field_id": "extraction_model_name",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Model used for extraction/classification",
      "standardization_notes": "Versioned string; do not store secrets",
      "in_gms": false
    },
    {
      "field_id": "ingest_pipeline",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Pipeline name",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "ingest_run_id",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Pipeline run id",
      "standardization_notes": "UUID",
      "in_gms": false
    },
    {
      "field_id": "location_ml_suggestion",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Model-suggested location",
      "standardization_notes": "Structured geo fields + confidence",
      "in_gms": false
    },
    {
      "field_id": "pii_auto_detected_flag",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Automated PII detection flag",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "scraped_html_stored_flag",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Whether HTML was archived",
      "standardization_notes": "Boolean (TRUE/FALSE); ensure policy compliance",
      "in_gms": false
    },
    {
      "field_id": "scraper_source",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Scraper tool name/version",
      "standardization_notes": "Versioned string",
      "in_gms": false
    },
    {
      "field_id": "species_ml_confidence",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Confidence of species suggestion",
      "standardization_notes": "Numeric; define range",
      "in_gms": false
    },
    {
      "field_id": "species_ml_suggestion",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Model-suggested taxon",
      "standardization_notes": "Scientific name + taxon ID if possible",
      "in_gms": false
    },
    {
      "field_id": "text_embedding_id",
      "category": "Automation, scraping, and model-assist fields",
      "description": "Embedding reference id",
      "standardization_notes": "Store id only; embeddings stored separately",
      "in_gms": false
    },
    {
      "field_id": "alert_source",
      "category": "Core record and workflow metadata",
      "description": "If found via alert, which system",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "analyst_id",
      "category": "Core record and workflow metadata",
      "description": "Collector/analyst identifier",
      "standardization_notes": "Pseudonymous internal ID; avoid personal names",
      "in_gms": false
    },
    {
      "field_id": "analyst_role",
      "category": "Core record and workflow metadata",
      "description": "Role (monitor, reviewer, supervisor)",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "collecting_organization",
      "category": "Core record and workflow metadata",
      "description": "Organization that collected the record",
      "standardization_notes": "Use canonical org registry / code",
      "in_gms": false
    },
    {
      "field_id": "collecting_unit",
      "category": "Core record and workflow metadata",
      "description": "Team/unit name",
      "standardization_notes": "Controlled list; avoid free text drift",
      "in_gms": false
    },
    {
      "field_id": "collection_method",
      "category": "Core record and workflow metadata",
      "description": "How it was found (manual/alert/scraper/tip)",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "collection_program",
      "category": "Core record and workflow metadata",
      "description": "Program or project name",
      "standardization_notes": "Controlled list; keep canonical names",
      "in_gms": false
    },
    {
      "field_id": "data_source_confidentiality",
      "category": "Core record and workflow metadata",
      "description": "Sharing restriction level",
      "standardization_notes": "Controlled list (public, partner-only, LE-only, restricted)",
      "in_gms": false
    },
    {
      "field_id": "datahub",
      "category": "Core record and workflow metadata",
      "description": "Data hub / monitoring node responsible",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "date_collected_utc",
      "category": "Core record and workflow metadata",
      "description": "When record was collected (UTC)",
      "standardization_notes": "ISO 8601 UTC datetime (YYYY-MM-DDThh:mm:ssZ)",
      "in_gms": false
    },
    {
      "field_id": "date_last_updated_utc",
      "category": "Core record and workflow metadata",
      "description": "Last update timestamp (UTC)",
      "standardization_notes": "ISO 8601 UTC datetime",
      "in_gms": false
    },
    {
      "field_id": "legal_sensitivity_flag",
      "category": "Core record and workflow metadata",
      "description": "Flags material needing restricted handling",
      "standardization_notes": "Boolean (TRUE/FALSE); align to policy",
      "in_gms": false
    },
    {
      "field_id": "monitoring_mode",
      "category": "Core record and workflow metadata",
      "description": "Active search vs passive alerts",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "note",
      "category": "Core record and workflow metadata",
      "description": "Internal notes",
      "standardization_notes": "Keep separate from evidence",
      "in_gms": true
    },
    {
      "field_id": "parent_record_id",
      "category": "Core record and workflow metadata",
      "description": "Links to a parent record (eg consolidated case record)",
      "standardization_notes": "UUID; use for rollups and case aggregation",
      "in_gms": false
    },
    {
      "field_id": "pii_present_flag",
      "category": "Core record and workflow metadata",
      "description": "Whether record contains PII",
      "standardization_notes": "Boolean (TRUE/FALSE); define what counts as PII",
      "in_gms": false
    },
    {
      "field_id": "priority_level",
      "category": "Core record and workflow metadata",
      "description": "Operational priority",
      "standardization_notes": "Controlled list (low, medium, high, critical)",
      "in_gms": false
    },
    {
      "field_id": "record_date",
      "category": "Core record and workflow metadata",
      "description": "Date the record was created/entered",
      "standardization_notes": "ISO 8601 date or datetime",
      "in_gms": true
    },
    {
      "field_id": "record_id",
      "category": "Core record and workflow metadata",
      "description": "Unique record identifier for the monitoring entry",
      "standardization_notes": "UUID preferred; immutable; never reuse",
      "in_gms": false
    },
    {
      "field_id": "record_status",
      "category": "Core record and workflow metadata",
      "description": "Lifecycle status",
      "standardization_notes": "Controlled list (draft, reviewed, submitted, archived)",
      "in_gms": false
    },
    {
      "field_id": "record_version",
      "category": "Core record and workflow metadata",
      "description": "Version number for updates to the same record",
      "standardization_notes": "Integer; increment on edits",
      "in_gms": false
    },
    {
      "field_id": "redaction_status",
      "category": "Core record and workflow metadata",
      "description": "Redaction state",
      "standardization_notes": "Controlled list (none, partial, full)",
      "in_gms": false
    },
    {
      "field_id": "review_date_utc",
      "category": "Core record and workflow metadata",
      "description": "Review timestamp",
      "standardization_notes": "ISO 8601 UTC datetime",
      "in_gms": false
    },
    {
      "field_id": "review_status",
      "category": "Core record and workflow metadata",
      "description": "QA status",
      "standardization_notes": "Controlled list (unreviewed, reviewed, rejected, needs_fix)",
      "in_gms": false
    },
    {
      "field_id": "reviewed_by_analyst_id",
      "category": "Core record and workflow metadata",
      "description": "Reviewer identifier",
      "standardization_notes": "Pseudonymous internal ID",
      "in_gms": false
    },
    {
      "field_id": "risk_score",
      "category": "Core record and workflow metadata",
      "description": "Numeric risk score",
      "standardization_notes": "Define scale (0-10 or 0-100) and document method",
      "in_gms": false
    },
    {
      "field_id": "risk_score_method",
      "category": "Core record and workflow metadata",
      "description": "Risk scoring rubric used",
      "standardization_notes": "Versioned rubric name (eg GMS_v1.2)",
      "in_gms": false
    },
    {
      "field_id": "tags",
      "category": "Core record and workflow metadata",
      "description": "Tags for filtering",
      "standardization_notes": "Prefer controlled tags + optional free tags",
      "in_gms": false
    },
    {
      "field_id": "validation_status",
      "category": "Core record and workflow metadata",
      "description": "Overall validation confidence",
      "standardization_notes": "Controlled list (unverified, partially_verified, verified)",
      "in_gms": false
    },
    {
      "field_id": "ad_location",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Raw location string from the ad",
      "standardization_notes": "Preserve original",
      "in_gms": true
    },
    {
      "field_id": "gadm_version",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "GADM version used",
      "standardization_notes": "Store exact version string (eg 4.1)",
      "in_gms": false
    },
    {
      "field_id": "geo_admin0_gadm_id",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "GADM admin0 ID",
      "standardization_notes": "Store exact GADM ID",
      "in_gms": false
    },
    {
      "field_id": "geo_admin1_gadm_id",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin1 GADM ID",
      "standardization_notes": "Store exact GADM ID",
      "in_gms": false
    },
    {
      "field_id": "geo_admin1_name",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin1 name (canonical)",
      "standardization_notes": "Match GADM",
      "in_gms": false
    },
    {
      "field_id": "geo_admin2_gadm_id",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin2 GADM ID",
      "standardization_notes": "Store exact GADM ID",
      "in_gms": false
    },
    {
      "field_id": "geo_admin2_name",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin2 name (canonical)",
      "standardization_notes": "Match GADM",
      "in_gms": false
    },
    {
      "field_id": "geo_admin3_gadm_id",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin3 GADM ID",
      "standardization_notes": "Store exact GADM ID",
      "in_gms": false
    },
    {
      "field_id": "geo_admin4_gadm_id",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin4 GADM ID",
      "standardization_notes": "Store exact GADM ID",
      "in_gms": false
    },
    {
      "field_id": "geo_bbox",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Bounding box if only area known",
      "standardization_notes": "min/max lat/lon or GeoJSON bbox",
      "in_gms": false
    },
    {
      "field_id": "geo_context_type",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "What the location represents",
      "standardization_notes": "Controlled list (seller_claimed, ship_from, ship_to, origin_claimed, inferred, meetup, other)",
      "in_gms": false
    },
    {
      "field_id": "geo_coord_precision_m",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Coordinate precision estimate",
      "standardization_notes": "Numeric meters; define method/categories",
      "in_gms": false
    },
    {
      "field_id": "geo_country_iso2",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Country ISO2",
      "standardization_notes": "ISO 3166-1 alpha-2",
      "in_gms": false
    },
    {
      "field_id": "geo_country_iso3",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Country ISO3",
      "standardization_notes": "ISO 3166-1 alpha-3",
      "in_gms": false
    },
    {
      "field_id": "geo_country_name",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Country name (canonical)",
      "standardization_notes": "Use GADM/ISO canonical name",
      "in_gms": false
    },
    {
      "field_id": "geo_geocode_confidence",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Geocode confidence",
      "standardization_notes": "Numeric; define scale",
      "in_gms": false
    },
    {
      "field_id": "geo_geocode_method",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Geocode method",
      "standardization_notes": "Controlled list (manual, gazetteer, NER, reverse_geocode, ML)",
      "in_gms": false
    },
    {
      "field_id": "geo_geocoder_name",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Geocoder/tool used",
      "standardization_notes": "Controlled list (Nominatim, Google, ArcGIS, internal)",
      "in_gms": false
    },
    {
      "field_id": "geo_lat",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Latitude",
      "standardization_notes": "WGS84 decimal degrees",
      "in_gms": false
    },
    {
      "field_id": "geo_locality_name",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Locality/city name",
      "standardization_notes": "Prefer gazetteer match",
      "in_gms": false
    },
    {
      "field_id": "geo_location_sensitivity",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Masking level for exports",
      "standardization_notes": "Controlled list (public, masked_admin2, masked_admin1, masked_country)",
      "in_gms": false
    },
    {
      "field_id": "geo_lon",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Longitude",
      "standardization_notes": "WGS84 decimal degrees",
      "in_gms": false
    },
    {
      "field_id": "geo_place_raw",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Raw place string",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "location_known",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Whether a usable location is present",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "location_level0",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin level 0 (country name)",
      "standardization_notes": "Use GADM naming for chosen version",
      "in_gms": true
    },
    {
      "field_id": "location_level1",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin level 1 name",
      "standardization_notes": "Use GADM naming",
      "in_gms": true
    },
    {
      "field_id": "location_level2",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin level 2 name",
      "standardization_notes": "Use GADM naming",
      "in_gms": true
    },
    {
      "field_id": "location_level3",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin level 3 name",
      "standardization_notes": "Use GADM naming",
      "in_gms": false
    },
    {
      "field_id": "location_level4",
      "category": "Geography and geocoding (GADM compatible)",
      "description": "Admin level 4 name",
      "standardization_notes": "Use GADM naming",
      "in_gms": false
    },
    {
      "field_id": "anonymization_level",
      "category": "Governance, interoperability, and export controls",
      "description": "Anonymization level applied",
      "standardization_notes": "Controlled list (none, partial, strong)",
      "in_gms": false
    },
    {
      "field_id": "data_retention_class",
      "category": "Governance, interoperability, and export controls",
      "description": "Retention class",
      "standardization_notes": "Controlled list (30d, 1y, 5y, indefinite)",
      "in_gms": false
    },
    {
      "field_id": "export_format",
      "category": "Governance, interoperability, and export controls",
      "description": "Export format",
      "standardization_notes": "Controlled list (csv, xlsx, json, parquet)",
      "in_gms": false
    },
    {
      "field_id": "export_request_id",
      "category": "Governance, interoperability, and export controls",
      "description": "Export request id",
      "standardization_notes": "UUID",
      "in_gms": false
    },
    {
      "field_id": "export_timestamp_utc",
      "category": "Governance, interoperability, and export controls",
      "description": "Export timestamp",
      "standardization_notes": "ISO 8601 UTC",
      "in_gms": false
    },
    {
      "field_id": "field_subset_profile",
      "category": "Governance, interoperability, and export controls",
      "description": "Subset profile applied",
      "standardization_notes": "Controlled list (eg NGO_light, LE_full)",
      "in_gms": false
    },
    {
      "field_id": "interoperability_profile",
      "category": "Governance, interoperability, and export controls",
      "description": "Interoperability profile",
      "standardization_notes": "Controlled list (DarwinCore, CITES_like, internal)",
      "in_gms": false
    },
    {
      "field_id": "schema_version",
      "category": "Governance, interoperability, and export controls",
      "description": "Data model version used",
      "standardization_notes": "Semantic versioning (major.minor.patch)",
      "in_gms": false
    },
    {
      "field_id": "sharing_license",
      "category": "Governance, interoperability, and export controls",
      "description": "Terms for downstream use",
      "standardization_notes": "Controlled list (internal, partner, restricted, open)",
      "in_gms": false
    },
    {
      "field_id": "captive_breeding_claim",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Captive breeding claim present",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "cites_taxon_id",
      "category": "Item, species, taxonomy, and product fields",
      "description": "CITES Checklist ID",
      "standardization_notes": "String; document checklist version",
      "in_gms": false
    },
    {
      "field_id": "col_taxon_id",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Catalogue of Life taxon ID",
      "standardization_notes": "String; record release version",
      "in_gms": false
    },
    {
      "field_id": "condition",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Condition (alive/dead/processed)",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "conservation_notes",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Conservation notes",
      "standardization_notes": "Free text; keep concise",
      "in_gms": false
    },
    {
      "field_id": "gbif_species_key",
      "category": "Item, species, taxonomy, and product fields",
      "description": "GBIF identifier (speciesKey)",
      "standardization_notes": "Integer; record backbone version/date",
      "in_gms": false
    },
    {
      "field_id": "health_documents_claimed",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Health/vet documents claimed",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "identification_confidence",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Confidence of identification",
      "standardization_notes": "Numeric; define scale (0-1 or 0-100)",
      "in_gms": false
    },
    {
      "field_id": "identification_method",
      "category": "Item, species, taxonomy, and product fields",
      "description": "How identified",
      "standardization_notes": "Controlled list (visual, text_only, seller_claim, expert, ML, mixed)",
      "in_gms": false
    },
    {
      "field_id": "illegality_indicators",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Reason codes for suspected illegality",
      "standardization_notes": "Controlled list; stable codebook",
      "in_gms": false
    },
    {
      "field_id": "item_CITES",
      "category": "Item, species, taxonomy, and product fields",
      "description": "CITES Appendix indicator",
      "standardization_notes": "Controlled list (I, II, III, none, unknown)",
      "in_gms": true
    },
    {
      "field_id": "item_category",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Broad category",
      "standardization_notes": "Controlled list (live_animal, part, derivative, plant, timber, medicine, other)",
      "in_gms": false
    },
    {
      "field_id": "item_class",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Class",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_common_name",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Standardized common/vernacular name",
      "standardization_notes": "Use GBIF/NCBI backbone or Catalogue of Life per language",
      "in_gms": true
    },
    {
      "field_id": "item_common_name_raw",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Common name as written in the post",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "item_common_name_website",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Common grouping label (e.g., Parrots, Primates, Big Cats)",
      "standardization_notes": "Controlled vernacular list",
      "in_gms": true
    },
    {
      "field_id": "item_count",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Quantity",
      "standardization_notes": "Numeric",
      "in_gms": true
    },
    {
      "field_id": "item_count_max",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Maximum quantity if range",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "item_count_min",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Minimum quantity if range",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "item_family",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Family",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_genus",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Genus",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_hasEggs",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Eggs involved",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "item_id",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Unique item line within a record",
      "standardization_notes": "UUID or integer index within record",
      "in_gms": false
    },
    {
      "field_id": "item_order",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Order",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_phylum",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Phylum",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_scientific_name",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Standardized scientific name",
      "standardization_notes": "Use GBIF/NCBI backbone or Catalogue of Life; store identifiers",
      "in_gms": false
    },
    {
      "field_id": "item_scientific_name_raw",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Scientific name as written",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "item_species",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Species epithet or binomial (your convention)",
      "standardization_notes": "Define convention",
      "in_gms": true
    },
    {
      "field_id": "item_taxa",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Taxa grouping label (eg Birds/Reptiles)",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_type",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Item type in your system",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "item_unit",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Unit of quantity",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "itis_tsn",
      "category": "Item, species, taxonomy, and product fields",
      "description": "ITIS TSN",
      "standardization_notes": "Integer",
      "in_gms": false
    },
    {
      "field_id": "iucn_category",
      "category": "Item, species, taxonomy, and product fields",
      "description": "IUCN Red List category",
      "standardization_notes": "Controlled list (LC, NT, VU, EN, CR, EW, EX, DD, NE)",
      "in_gms": false
    },
    {
      "field_id": "iucn_taxon_id",
      "category": "Item, species, taxonomy, and product fields",
      "description": "IUCN taxon ID",
      "standardization_notes": "String; access may be restricted by license",
      "in_gms": false
    },
    {
      "field_id": "legality_assessment",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Suspected legality",
      "standardization_notes": "Controlled list (legal, suspect_illegal, illegal, unknown)",
      "in_gms": false
    },
    {
      "field_id": "life_stage",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Life stage",
      "standardization_notes": "Controlled list (adult, juvenile, egg, seed, unknown)",
      "in_gms": false
    },
    {
      "field_id": "national_protection_status",
      "category": "Item, species, taxonomy, and product fields",
      "description": "National protection tier",
      "standardization_notes": "Country-specific controlled list; document source/version",
      "in_gms": false
    },
    {
      "field_id": "origin_claimed",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Claimed source (wild/captive/farmed)",
      "standardization_notes": "Prefer CITES source codes where applicable",
      "in_gms": false
    },
    {
      "field_id": "permit_claimed_flag",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Permits claimed",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "permit_number_raw",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Permit number as posted",
      "standardization_notes": "Sensitive; store redacted + hashed variant for sharing",
      "in_gms": false
    },
    {
      "field_id": "permit_type_claimed",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Type of permit claimed",
      "standardization_notes": "Controlled list (CITES, national, veterinary, other, unknown)",
      "in_gms": false
    },
    {
      "field_id": "product_description_raw",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Raw description of product",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "product_form",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Form of item (skin, horn, ivory, meat, pet, etc)",
      "standardization_notes": "Controlled list; consortium codebook",
      "in_gms": false
    },
    {
      "field_id": "sex",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Sex",
      "standardization_notes": "Controlled list (male, female, mixed, unknown)",
      "in_gms": false
    },
    {
      "field_id": "taxon_rank",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Rank used for identification",
      "standardization_notes": "Controlled list (species, genus, family, etc)",
      "in_gms": false
    },
    {
      "field_id": "volume_unit",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Volume unit",
      "standardization_notes": "Controlled list (mL, L, gal)",
      "in_gms": false
    },
    {
      "field_id": "volume_value",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Volume value if stated",
      "standardization_notes": "Numeric; store unit separately",
      "in_gms": false
    },
    {
      "field_id": "weight_unit",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Weight unit",
      "standardization_notes": "Controlled list (g, kg, lb, oz)",
      "in_gms": false
    },
    {
      "field_id": "weight_value",
      "category": "Item, species, taxonomy, and product fields",
      "description": "Weight value if stated",
      "standardization_notes": "Numeric; store unit separately",
      "in_gms": false
    },
    {
      "field_id": "case_id",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Internal case identifier",
      "standardization_notes": "UUID/structured code",
      "in_gms": true
    },
    {
      "field_id": "case_status",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Case lifecycle status",
      "standardization_notes": "Controlled list (open, active, paused, closed)",
      "in_gms": false
    },
    {
      "field_id": "court_case_reference",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Court reference",
      "standardization_notes": "Sensitive; access-controlled",
      "in_gms": false
    },
    {
      "field_id": "enforcement_outcome",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Known outcome",
      "standardization_notes": "Controlled list (seizure, arrest, warning, takedown, unknown)",
      "in_gms": false
    },
    {
      "field_id": "intelligence_product_type",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Product type",
      "standardization_notes": "Controlled list (alert, brief, case_file, memo)",
      "in_gms": false
    },
    {
      "field_id": "is_case_of_interest",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Flag for elevated interest",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "legal_basis_jurisdiction",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Jurisdiction",
      "standardization_notes": "ISO 3166-1 alpha-3",
      "in_gms": false
    },
    {
      "field_id": "outcome_date_utc",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Outcome date",
      "standardization_notes": "ISO 8601 UTC",
      "in_gms": false
    },
    {
      "field_id": "prosecution_flag",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Prosecution initiated",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "referral_channel",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Referral channel",
      "standardization_notes": "Controlled list (email, portal, meeting, secure_link)",
      "in_gms": false
    },
    {
      "field_id": "referral_date_utc",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Referral date",
      "standardization_notes": "ISO 8601 UTC",
      "in_gms": false
    },
    {
      "field_id": "referral_recipient_org",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Recipient agency",
      "standardization_notes": "Canonical org registry code",
      "in_gms": false
    },
    {
      "field_id": "referral_reference_id",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Recipient reference number",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "referral_to_le_flag",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Referred to law enforcement",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "seizure_quantity",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Quantity seized",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "seizure_species_confirmed",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Confirmed species post-seizure",
      "standardization_notes": "Scientific name standard + taxon ID",
      "in_gms": false
    },
    {
      "field_id": "seizure_unit",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Unit seized",
      "standardization_notes": "Controlled list aligned to item_unit",
      "in_gms": false
    },
    {
      "field_id": "suspected_offense_type",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Suspected offense category",
      "standardization_notes": "Controlled list aligned to consortium taxonomy",
      "in_gms": false
    },
    {
      "field_id": "was_recommended",
      "category": "Legal and enforcement tracking (optional)",
      "description": "Recommended/escalated",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "dedupe_key",
      "category": "Linking, dedupe, and network fields",
      "description": "Key used to detect duplicates",
      "standardization_notes": "Deterministic string; document construction",
      "in_gms": false
    },
    {
      "field_id": "duplicate_group_id",
      "category": "Linking, dedupe, and network fields",
      "description": "Duplicate group ID",
      "standardization_notes": "UUID",
      "in_gms": false
    },
    {
      "field_id": "duplicate_match_method",
      "category": "Linking, dedupe, and network fields",
      "description": "How match was made",
      "standardization_notes": "Controlled list (url, hash, text_sim, image_phash, seller_id)",
      "in_gms": false
    },
    {
      "field_id": "duplicate_of_record_id",
      "category": "Linking, dedupe, and network fields",
      "description": "Canonical record id if duplicate",
      "standardization_notes": "UUID",
      "in_gms": false
    },
    {
      "field_id": "item_multiple_detections",
      "category": "Linking, dedupe, and network fields",
      "description": "Detected multiple times",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "network_edge_id",
      "category": "Linking, dedupe, and network fields",
      "description": "Network edge id",
      "standardization_notes": "Stable ID mapping",
      "in_gms": false
    },
    {
      "field_id": "network_edge_type",
      "category": "Linking, dedupe, and network fields",
      "description": "Network edge type",
      "standardization_notes": "Controlled list (contact_shared, reposted, co_listed, co_admin, co_comment)",
      "in_gms": false
    },
    {
      "field_id": "network_node_id",
      "category": "Linking, dedupe, and network fields",
      "description": "Network node id",
      "standardization_notes": "Stable ID mapping to entity",
      "in_gms": false
    },
    {
      "field_id": "related_record_ids",
      "category": "Linking, dedupe, and network fields",
      "description": "Related records",
      "standardization_notes": "Prefer relation table; list if needed",
      "in_gms": false
    },
    {
      "field_id": "relatedness_type",
      "category": "Linking, dedupe, and network fields",
      "description": "Relation type",
      "standardization_notes": "Controlled list (same_seller, same_group, repost, same_images, same_phone)",
      "in_gms": false
    },
    {
      "field_id": "seller_email_hash",
      "category": "Linking, dedupe, and network fields",
      "description": "Hashed email for matching",
      "standardization_notes": "Salted hash; document policy",
      "in_gms": false
    },
    {
      "field_id": "seller_payment_hash",
      "category": "Linking, dedupe, and network fields",
      "description": "Hashed payment handle for matching",
      "standardization_notes": "Salted hash; document policy",
      "in_gms": false
    },
    {
      "field_id": "seller_phone_hash",
      "category": "Linking, dedupe, and network fields",
      "description": "Hashed phone for matching",
      "standardization_notes": "Salted hash; document policy",
      "in_gms": false
    },
    {
      "field_id": "similarity_score",
      "category": "Linking, dedupe, and network fields",
      "description": "Similarity score",
      "standardization_notes": "Numeric; define range",
      "in_gms": false
    },
    {
      "field_id": "capture_browser_user_agent",
      "category": "Media, evidence, and forensics metadata",
      "description": "Capture browser UA",
      "standardization_notes": "Standard UA string",
      "in_gms": false
    },
    {
      "field_id": "chain_of_custody_id",
      "category": "Media, evidence, and forensics metadata",
      "description": "Chain of custody reference",
      "standardization_notes": "UUID/reference code",
      "in_gms": false
    },
    {
      "field_id": "evidence_access_control",
      "category": "Media, evidence, and forensics metadata",
      "description": "Evidence access class",
      "standardization_notes": "Controlled list (team, org, LE_only)",
      "in_gms": false
    },
    {
      "field_id": "evidence_storage_system",
      "category": "Media, evidence, and forensics metadata",
      "description": "Evidence storage system",
      "standardization_notes": "Controlled list (S3, Drive, internal vault)",
      "in_gms": false
    },
    {
      "field_id": "image_text",
      "category": "Media, evidence, and forensics metadata",
      "description": "Text extracted from images (OCR)",
      "standardization_notes": "Record language + method",
      "in_gms": true
    },
    {
      "field_id": "integrity_check_date_utc",
      "category": "Media, evidence, and forensics metadata",
      "description": "Evidence integrity check date",
      "standardization_notes": "ISO 8601 UTC",
      "in_gms": false
    },
    {
      "field_id": "item_image",
      "category": "Media, evidence, and forensics metadata",
      "description": "Image(s) captured/linked",
      "standardization_notes": "Store secure evidence refs",
      "in_gms": true
    },
    {
      "field_id": "media_count",
      "category": "Media, evidence, and forensics metadata",
      "description": "Number of media items",
      "standardization_notes": "Integer",
      "in_gms": false
    },
    {
      "field_id": "media_exif_datetime",
      "category": "Media, evidence, and forensics metadata",
      "description": "EXIF datetime",
      "standardization_notes": "ISO 8601",
      "in_gms": false
    },
    {
      "field_id": "media_exif_gps_lat",
      "category": "Media, evidence, and forensics metadata",
      "description": "EXIF GPS latitude",
      "standardization_notes": "WGS84; sensitive",
      "in_gms": false
    },
    {
      "field_id": "media_exif_gps_lon",
      "category": "Media, evidence, and forensics metadata",
      "description": "EXIF GPS longitude",
      "standardization_notes": "WGS84; sensitive",
      "in_gms": false
    },
    {
      "field_id": "media_exif_present",
      "category": "Media, evidence, and forensics metadata",
      "description": "EXIF present",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "media_file_hash_md5",
      "category": "Media, evidence, and forensics metadata",
      "description": "MD5 hash (legacy)",
      "standardization_notes": "Hex string",
      "in_gms": false
    },
    {
      "field_id": "media_file_hash_sha256",
      "category": "Media, evidence, and forensics metadata",
      "description": "SHA-256 hash for evidence",
      "standardization_notes": "Hex string; preferred",
      "in_gms": false
    },
    {
      "field_id": "media_phash",
      "category": "Media, evidence, and forensics metadata",
      "description": "Perceptual hash",
      "standardization_notes": "Document algorithm (pHash/dHash/aHash)",
      "in_gms": false
    },
    {
      "field_id": "media_types",
      "category": "Media, evidence, and forensics metadata",
      "description": "Types present",
      "standardization_notes": "Controlled list (image, video, audio, document)",
      "in_gms": false
    },
    {
      "field_id": "media_url_list",
      "category": "Media, evidence, and forensics metadata",
      "description": "List of media URLs",
      "standardization_notes": "Normalize; access controls may apply",
      "in_gms": false
    },
    {
      "field_id": "screen_recording_flag",
      "category": "Media, evidence, and forensics metadata",
      "description": "Screen recording captured",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "screenshot_captured_flag",
      "category": "Media, evidence, and forensics metadata",
      "description": "Screenshots taken",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "screenshot_file_refs",
      "category": "Media, evidence, and forensics metadata",
      "description": "References to stored screenshots",
      "standardization_notes": "Use secure storage URIs",
      "in_gms": false
    },
    {
      "field_id": "access_level",
      "category": "Platform, content, and discovery context",
      "description": "Public vs requires login/membership",
      "standardization_notes": "Controlled list (public, logged_in, closed_group, invite_only)",
      "in_gms": false
    },
    {
      "field_id": "ad_language",
      "category": "Platform, content, and discovery context",
      "description": "Detected language of ad/content",
      "standardization_notes": "ISO 639-1/2; record method",
      "in_gms": true
    },
    {
      "field_id": "channel_id",
      "category": "Platform, content, and discovery context",
      "description": "Channel ID (video platforms)",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "channel_name",
      "category": "Platform, content, and discovery context",
      "description": "Channel name",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "coded_language_flag",
      "category": "Platform, content, and discovery context",
      "description": "Coded terms suspected",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "coded_terms",
      "category": "Platform, content, and discovery context",
      "description": "Coded terms list",
      "standardization_notes": "Controlled list where possible; else free text",
      "in_gms": false
    },
    {
      "field_id": "content_duration_seconds",
      "category": "Platform, content, and discovery context",
      "description": "Video/audio duration",
      "standardization_notes": "Seconds as numeric",
      "in_gms": false
    },
    {
      "field_id": "content_hashtags",
      "category": "Platform, content, and discovery context",
      "description": "Hashtags",
      "standardization_notes": "Store list normalized + raw",
      "in_gms": false
    },
    {
      "field_id": "content_id",
      "category": "Platform, content, and discovery context",
      "description": "Platform content identifier",
      "standardization_notes": "Store exact platform ID string",
      "in_gms": false
    },
    {
      "field_id": "content_keywords",
      "category": "Platform, content, and discovery context",
      "description": "Extracted keywords",
      "standardization_notes": "Token list; document extraction method",
      "in_gms": false
    },
    {
      "field_id": "content_original_text",
      "category": "Platform, content, and discovery context",
      "description": "Full original text (if title+body not enough)",
      "standardization_notes": "Preserve exactly",
      "in_gms": false
    },
    {
      "field_id": "content_permalink",
      "category": "Platform, content, and discovery context",
      "description": "Stable permalink (if distinct)",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "content_summary",
      "category": "Platform, content, and discovery context",
      "description": "Analyst summary",
      "standardization_notes": "Avoid speculation; label assumptions",
      "in_gms": false
    },
    {
      "field_id": "content_translation",
      "category": "Platform, content, and discovery context",
      "description": "Translation (if needed)",
      "standardization_notes": "Keep separate from original",
      "in_gms": false
    },
    {
      "field_id": "content_type",
      "category": "Platform, content, and discovery context",
      "description": "Content type",
      "standardization_notes": "Controlled list (post, listing, story, reel, comment, profile, channel, group)",
      "in_gms": false
    },
    {
      "field_id": "date_observed_first_utc",
      "category": "Platform, content, and discovery context",
      "description": "First observed by monitoring team",
      "standardization_notes": "ISO 8601 UTC",
      "in_gms": false
    },
    {
      "field_id": "date_observed_last_utc",
      "category": "Platform, content, and discovery context",
      "description": "Last confirmed live",
      "standardization_notes": "ISO 8601 UTC",
      "in_gms": false
    },
    {
      "field_id": "date_posted_local",
      "category": "Platform, content, and discovery context",
      "description": "Local timestamp shown on platform",
      "standardization_notes": "ISO 8601 with offset if possible",
      "in_gms": false
    },
    {
      "field_id": "discovery_query_language",
      "category": "Platform, content, and discovery context",
      "description": "Language of query terms",
      "standardization_notes": "ISO 639-1/2",
      "in_gms": false
    },
    {
      "field_id": "engagement_comments",
      "category": "Platform, content, and discovery context",
      "description": "Comment count",
      "standardization_notes": "Integer; unknown as NA",
      "in_gms": false
    },
    {
      "field_id": "engagement_likes",
      "category": "Platform, content, and discovery context",
      "description": "Likes/reactions count",
      "standardization_notes": "Integer; unknown as NA",
      "in_gms": false
    },
    {
      "field_id": "engagement_shares",
      "category": "Platform, content, and discovery context",
      "description": "Share/forward count",
      "standardization_notes": "Integer; unknown as NA",
      "in_gms": false
    },
    {
      "field_id": "engagement_views",
      "category": "Platform, content, and discovery context",
      "description": "View count (video)",
      "standardization_notes": "Integer; unknown as NA",
      "in_gms": false
    },
    {
      "field_id": "group_id",
      "category": "Platform, content, and discovery context",
      "description": "Group/community ID",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "group_name",
      "category": "Platform, content, and discovery context",
      "description": "Group/community name",
      "standardization_notes": "Preserve original; store translated separately if needed",
      "in_gms": true
    },
    {
      "field_id": "group_type",
      "category": "Platform, content, and discovery context",
      "description": "Group type",
      "standardization_notes": "Controlled list (e.g., Social Media, MEssaging App)",
      "in_gms": true
    },
    {
      "field_id": "is_group",
      "category": "Platform, content, and discovery context",
      "description": "Whether content is from a group/community",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "item_date_posted",
      "category": "Platform, content, and discovery context",
      "description": "Date/time posted",
      "standardization_notes": "ISO 8601 UTC preferred",
      "in_gms": true
    },
    {
      "field_id": "item_text",
      "category": "Platform, content, and discovery context",
      "description": "Body text",
      "standardization_notes": "Preserve original",
      "in_gms": true
    },
    {
      "field_id": "item_title",
      "category": "Platform, content, and discovery context",
      "description": "Title/headline text",
      "standardization_notes": "Preserve original",
      "in_gms": true
    },
    {
      "field_id": "moderation_status",
      "category": "Platform, content, and discovery context",
      "description": "Visible/removed/unknown",
      "standardization_notes": "Controlled list; often unknown",
      "in_gms": false
    },
    {
      "field_id": "page_id",
      "category": "Platform, content, and discovery context",
      "description": "Page/business ID",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "page_name",
      "category": "Platform, content, and discovery context",
      "description": "Page/business name",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "platform_country",
      "category": "Platform, content, and discovery context",
      "description": "Platform primary jurisdiction (optional)",
      "standardization_notes": "ISO 3166-1 alpha-2/3",
      "in_gms": false
    },
    {
      "field_id": "platform_language_default",
      "category": "Platform, content, and discovery context",
      "description": "Platform default language (optional)",
      "standardization_notes": "ISO 639-1/2",
      "in_gms": false
    },
    {
      "field_id": "platform_name",
      "category": "Platform, content, and discovery context",
      "description": "Platform name",
      "standardization_notes": "Controlled list; canonical names",
      "in_gms": true
    },
    {
      "field_id": "platform_type",
      "category": "Platform, content, and discovery context",
      "description": "Platform category",
      "standardization_notes": "Controlled list (social, ecommerce, forum, messaging, classifieds, web)",
      "in_gms": false
    },
    {
      "field_id": "referral_source",
      "category": "Platform, content, and discovery context",
      "description": "How content was reached",
      "standardization_notes": "Controlled list (SERP, internal_search, link, tip, scraper)",
      "in_gms": false
    },
    {
      "field_id": "referral_url",
      "category": "Platform, content, and discovery context",
      "description": "Referring URL (if any)",
      "standardization_notes": "Normalize; can be NA",
      "in_gms": false
    },
    {
      "field_id": "search_term",
      "category": "Platform, content, and discovery context",
      "description": "Search term/query used to discover",
      "standardization_notes": "Store as executed; may be sensitive",
      "in_gms": true
    },
    {
      "field_id": "thread_id",
      "category": "Platform, content, and discovery context",
      "description": "Thread/discussion ID",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "url",
      "category": "Platform, content, and discovery context",
      "description": "URL of the content",
      "standardization_notes": "Store canonical + raw",
      "in_gms": true
    },
    {
      "field_id": "url_canonical",
      "category": "Platform, content, and discovery context",
      "description": "Normalized canonical URL",
      "standardization_notes": "Lowercase host; strip tracking params when policy allows",
      "in_gms": false
    },
    {
      "field_id": "url_raw",
      "category": "Platform, content, and discovery context",
      "description": "Raw URL as captured",
      "standardization_notes": "Preserve exactly for evidence fidelity",
      "in_gms": false
    },
    {
      "field_id": "website_type",
      "category": "Platform, content, and discovery context",
      "description": "Website/platform type in your system",
      "standardization_notes": "Controlled list (e.g., Social Media, E-commerce, B2B)",
      "in_gms": true
    },
    {
      "field_id": "availability_status",
      "category": "Price, currency, and commercial terms",
      "description": "Availability (in_stock/sold/unknown)",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "bulk_terms",
      "category": "Price, currency, and commercial terms",
      "description": "Wholesale/bulk terms",
      "standardization_notes": "Structured where possible",
      "in_gms": false
    },
    {
      "field_id": "discount_details",
      "category": "Price, currency, and commercial terms",
      "description": "Discount terms",
      "standardization_notes": "Preserve raw or structure fields",
      "in_gms": false
    },
    {
      "field_id": "discount_flag",
      "category": "Price, currency, and commercial terms",
      "description": "Discount mentioned",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "item_currency",
      "category": "Price, currency, and commercial terms",
      "description": "Currency",
      "standardization_notes": "ISO 4217",
      "in_gms": true
    },
    {
      "field_id": "item_price",
      "category": "Price, currency, and commercial terms",
      "description": "Listed price value",
      "standardization_notes": "Numeric; no currency symbols",
      "in_gms": true
    },
    {
      "field_id": "min_order_quantity",
      "category": "Price, currency, and commercial terms",
      "description": "Minimum order quantity",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "price_available",
      "category": "Price, currency, and commercial terms",
      "description": "Whether a price is stated",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "price_currency_raw",
      "category": "Price, currency, and commercial terms",
      "description": "Currency as written",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "price_max",
      "category": "Price, currency, and commercial terms",
      "description": "Maximum price if range",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "price_min",
      "category": "Price, currency, and commercial terms",
      "description": "Minimum price if range",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "price_total_value",
      "category": "Price, currency, and commercial terms",
      "description": "Total transaction value if stated",
      "standardization_notes": "Numeric; define inclusion of shipping/tax",
      "in_gms": false
    },
    {
      "field_id": "price_type",
      "category": "Price, currency, and commercial terms",
      "description": "Asking/negotiated/auction/wholesale",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "price_unit",
      "category": "Price, currency, and commercial terms",
      "description": "Unit price applies to",
      "standardization_notes": "Controlled list aligned to item_unit",
      "in_gms": false
    },
    {
      "field_id": "shipping_cost_currency",
      "category": "Price, currency, and commercial terms",
      "description": "Shipping cost currency",
      "standardization_notes": "ISO 4217",
      "in_gms": false
    },
    {
      "field_id": "shipping_cost_value",
      "category": "Price, currency, and commercial terms",
      "description": "Shipping cost",
      "standardization_notes": "Numeric",
      "in_gms": false
    },
    {
      "field_id": "tax_included_flag",
      "category": "Price, currency, and commercial terms",
      "description": "Tax included flag",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "trade_terms",
      "category": "Price, currency, and commercial terms",
      "description": "Trade/Incoterms if stated",
      "standardization_notes": "Controlled list (EXW, FOB, CIF, etc)",
      "in_gms": false
    },
    {
      "field_id": "contact_methods_json",
      "category": "Seller and account entity fields",
      "description": "Structured contact methods",
      "standardization_notes": "JSON schema with type/value/raw/confidence",
      "in_gms": false
    },
    {
      "field_id": "payment_method",
      "category": "Seller and account entity fields",
      "description": "Payment method(s) mentioned",
      "standardization_notes": "Controlled list, Comma Delimited (e.g., Visa/Mastera, PayPal, Cashapp)",
      "in_gms": true
    },
    {
      "field_id": "seller_account_type",
      "category": "Seller and account entity fields",
      "description": "Individual/business/breeder/shop/unknown",
      "standardization_notes": "Controlled list",
      "in_gms": false
    },
    {
      "field_id": "seller_bio_text",
      "category": "Seller and account entity fields",
      "description": "Profile bio/about",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "seller_contact_email",
      "category": "Seller and account entity fields",
      "description": "Email address",
      "standardization_notes": "Store raw only if policy allows; hash for sharing",
      "in_gms": false
    },
    {
      "field_id": "seller_contact_known",
      "category": "Seller and account entity fields",
      "description": "Whether any seller contact info is present",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "seller_contact_other",
      "category": "Seller and account entity fields",
      "description": "Other contact info",
      "standardization_notes": "Prefer structured contact_methods_json",
      "in_gms": false
    },
    {
      "field_id": "seller_contact_phone",
      "category": "Seller and account entity fields",
      "description": "Phone number",
      "standardization_notes": "E.164 preferred + raw; hash for sharing",
      "in_gms": false
    },
    {
      "field_id": "seller_contact_telegram",
      "category": "Seller and account entity fields",
      "description": "Telegram handle/link",
      "standardization_notes": "Normalize @handle + preserve raw",
      "in_gms": false
    },
    {
      "field_id": "seller_contact_wechat",
      "category": "Seller and account entity fields",
      "description": "WeChat ID",
      "standardization_notes": "String",
      "in_gms": false
    },
    {
      "field_id": "seller_contact_whatsapp",
      "category": "Seller and account entity fields",
      "description": "WhatsApp contact",
      "standardization_notes": "E.164 where possible",
      "in_gms": false
    },
    {
      "field_id": "seller_display_name",
      "category": "Seller and account entity fields",
      "description": "Seller display name",
      "standardization_notes": "Preserve original",
      "in_gms": false
    },
    {
      "field_id": "seller_entity_id",
      "category": "Seller and account entity fields",
      "description": "Internal seller entity ID",
      "standardization_notes": "UUID; used for entity resolution",
      "in_gms": false
    },
    {
      "field_id": "seller_entity_resolution_status",
      "category": "Seller and account entity fields",
      "description": "Entity resolution status",
      "standardization_notes": "Controlled list (new, matched, merged, split_needed)",
      "in_gms": false
    },
    {
      "field_id": "seller_external_links",
      "category": "Seller and account entity fields",
      "description": "External links from profile",
      "standardization_notes": "Normalize and store list",
      "in_gms": false
    },
    {
      "field_id": "seller_followers_count",
      "category": "Seller and account entity fields",
      "description": "Followers/subscribers",
      "standardization_notes": "Integer",
      "in_gms": false
    },
    {
      "field_id": "seller_following_count",
      "category": "Seller and account entity fields",
      "description": "Following count",
      "standardization_notes": "Integer",
      "in_gms": false
    },
    {
      "field_id": "seller_linked_entity_ids",
      "category": "Seller and account entity fields",
      "description": "Linked seller_entity_id values",
      "standardization_notes": "Prefer relation table; list if needed",
      "in_gms": false
    },
    {
      "field_id": "seller_payment_handles",
      "category": "Seller and account entity fields",
      "description": "Payment handles (eg PayPal IDs)",
      "standardization_notes": "Controlled type list; hash sensitive IDs",
      "in_gms": false
    },
    {
      "field_id": "seller_posts_count",
      "category": "Seller and account entity fields",
      "description": "Total posts/listings",
      "standardization_notes": "Integer",
      "in_gms": false
    },
    {
      "field_id": "seller_profile_image_hash",
      "category": "Seller and account entity fields",
      "description": "Profile image hash for matching",
      "standardization_notes": "pHash recommended; record algorithm",
      "in_gms": false
    },
    {
      "field_id": "seller_profile_language",
      "category": "Seller and account entity fields",
      "description": "Language of profile",
      "standardization_notes": "ISO 639-1/2",
      "in_gms": false
    },
    {
      "field_id": "seller_profile_location_text",
      "category": "Seller and account entity fields",
      "description": "Location text in profile",
      "standardization_notes": "Preserve raw; parse to structured geo fields if possible",
      "in_gms": false
    },
    {
      "field_id": "seller_profile_url",
      "category": "Seller and account entity fields",
      "description": "Seller profile URL",
      "standardization_notes": "Store canonical + raw if needed",
      "in_gms": false
    },
    {
      "field_id": "seller_user_id",
      "category": "Seller and account entity fields",
      "description": "Platform user ID",
      "standardization_notes": "Store exact platform ID string",
      "in_gms": false
    },
    {
      "field_id": "seller_username",
      "category": "Seller and account entity fields",
      "description": "Seller handle/username",
      "standardization_notes": "Preserve exact and normalized lowercase",
      "in_gms": false
    },
    {
      "field_id": "seller_verified_flag",
      "category": "Seller and account entity fields",
      "description": "Verified badge present",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": false
    },
    {
      "field_id": "crossborder_flag",
      "category": "Shipping, routes, and movement indicators",
      "description": "Cross-border implied",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "delivery_method",
      "category": "Shipping, routes, and movement indicators",
      "description": "Delivery method (system)",
      "standardization_notes": "Controlled list",
      "in_gms": true
    },
    {
      "field_id": "delivery_time_text",
      "category": "Shipping, routes, and movement indicators",
      "description": "Claimed delivery time",
      "standardization_notes": "Preserve raw; optional parsed numeric days",
      "in_gms": false
    },
    {
      "field_id": "destination_country",
      "category": "Shipping, routes, and movement indicators",
      "description": "Destination country (claimed/inferred)",
      "standardization_notes": "ISO 3166-1 alpha-3 preferred",
      "in_gms": true
    },
    {
      "field_id": "is_delivery_available",
      "category": "Shipping, routes, and movement indicators",
      "description": "Delivery/shipping offered (system flag)",
      "standardization_notes": "Boolean (TRUE/FALSE)",
      "in_gms": true
    },
    {
      "field_id": "item_sold_in",
      "category": "Shipping, routes, and movement indicators",
      "description": "Market country where sold",
      "standardization_notes": "ISO 3166-1 alpha-3",
      "in_gms": true
    },
    {
      "field_id": "meetup_flag",
      "category": "Shipping, routes, and movement indicators",
      "description": "Meetup/in-person handoff implied",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "meetup_location_text",
      "category": "Shipping, routes, and movement indicators",
      "description": "Meetup location (raw)",
      "standardization_notes": "Preserve raw + parse",
      "in_gms": false
    },
    {
      "field_id": "origin_country",
      "category": "Shipping, routes, and movement indicators",
      "description": "Origin country (claimed/inferred)",
      "standardization_notes": "ISO 3166-1 alpha-3 preferred",
      "in_gms": true
    },
    {
      "field_id": "packaging_text",
      "category": "Shipping, routes, and movement indicators",
      "description": "Packaging/concealment mentions",
      "standardization_notes": "Sensitive; handle with policy",
      "in_gms": false
    },
    {
      "field_id": "ship_available_flag",
      "category": "Shipping, routes, and movement indicators",
      "description": "Shipping offered",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown",
      "in_gms": false
    },
    {
      "field_id": "ship_destination_text",
      "category": "Shipping, routes, and movement indicators",
      "description": "Shipping destination (raw)",
      "standardization_notes": "Preserve raw + parse to geo",
      "in_gms": false
    },
    {
      "field_id": "ship_methods",
      "category": "Shipping, routes, and movement indicators",
      "description": "Shipping methods mentioned",
      "standardization_notes": "Controlled list (courier, post, bus, air, hand_carry, unknown)",
      "in_gms": false
    },
    {
      "field_id": "ship_origin_text",
      "category": "Shipping, routes, and movement indicators",
      "description": "Shipping origin (raw)",
      "standardization_notes": "Preserve raw + parse to geo",
      "in_gms": false
    },
    {
      "field_id": "is_bycatch",
      "category": "Vulnerability and bycatch indicators",
      "description": "Whether the item is bycatch or incidental take",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown; capture basis (seller claim, expert assessment) in notes",
      "in_gms": true
    },
    {
      "field_id": "is_seller_vulnerable_group",
      "category": "Vulnerability and bycatch indicators",
      "description": "Whether the seller appears to be a vulnerable group member (only if explicitly stated or clearly indicated in context)",
      "standardization_notes": "Boolean (TRUE/FALSE)/unknown; do NOT infer protected attributes; record only explicit self-identification or direct statements; document basis in note",
      "in_gms": true
    },
    {
      "field_id": "vulnerable_group",
      "category": "Vulnerability and bycatch indicators",
      "description": "Vulnerable group category (if applicable)",
      "standardization_notes": "Controlled list agreed by consortium; allow 'unknown'; avoid free text drift",
      "in_gms": true
    }
  ],
  "profiles": {
    "Global Monitoring System": [
      "datahub",
      "note",
      "record_date",
      "ad_location",
      "location_known",
      "location_level0",
      "location_level1",
      "location_level2",
      "item_CITES",
      "item_class",
      "item_common_name",
      "item_common_name_website",
      "item_count",
      "item_family",
      "item_genus",
      "item_hasEggs",
      "item_order",
      "item_phylum",
      "item_species",
      "item_taxa",
      "item_type",
      "item_unit",
      "case_id",
      "is_case_of_interest",
      "was_recommended",
      "item_multiple_detections",
      "image_text",
      "item_image",
      "ad_language",
      "group_name",
      "group_type",
      "is_group",
      "item_date_posted",
      "item_text",
      "item_title",
      "platform_name",
      "search_term",
      "url",
      "website_type",
      "item_currency",
      "item_price",
      "price_available",
      "payment_method",
      "seller_contact_known",
      "delivery_method",
      "destination_country",
      "is_delivery_available",
      "item_sold_in",
      "origin_country",
      "is_bycatch",
      "is_seller_vulnerable_group",
      "vulnerable_group"
    ],
    "Core public-monitoring export": [
      "datahub",
      "note",
      "record_date",
      "item_CITES",
      "item_class",
      "item_common_name",
      "item_common_name_website",
      "item_count",
      "item_family",
      "item_genus",
      "item_hasEggs",
      "item_order",
      "item_phylum",
      "item_species",
      "item_taxa",
      "item_type",
      "item_unit",
      "ad_language",
      "group_name",
      "group_type",
      "is_group",
      "item_date_posted",
      "item_text",
      "item_title",
      "platform_name",
      "search_term",
      "url",
      "website_type"
    ],
    "Geography and routes review": [
      "ad_location",
      "geo_country_iso3",
      "geo_geocode_confidence",
      "geo_lat",
      "geo_lon",
      "location_known",
      "location_level0",
      "location_level1",
      "location_level2",
      "delivery_method",
      "destination_country",
      "is_delivery_available",
      "item_sold_in",
      "origin_country",
      "ship_methods"
    ],
    "Enforcement and case tracking": [
      "datahub",
      "note",
      "priority_level",
      "record_date",
      "risk_score",
      "case_id",
      "case_status",
      "is_case_of_interest",
      "referral_date_utc",
      "referral_recipient_org",
      "suspected_offense_type",
      "was_recommended"
    ],
    "Automation and dedupe QA": [
      "classification_label",
      "content_fingerprint",
      "extraction_confidence",
      "species_ml_suggestion",
      "dedupe_key",
      "duplicate_group_id",
      "item_multiple_detections",
      "image_text",
      "item_image",
      "media_file_hash_sha256",
      "media_phash"
    ]
  },
  "gmsFields": [
    "datahub",
    "note",
    "record_date",
    "ad_location",
    "location_known",
    "location_level0",
    "location_level1",
    "location_level2",
    "item_CITES",
    "item_class",
    "item_common_name",
    "item_common_name_website",
    "item_count",
    "item_family",
    "item_genus",
    "item_hasEggs",
    "item_order",
    "item_phylum",
    "item_species",
    "item_taxa",
    "item_type",
    "item_unit",
    "case_id",
    "is_case_of_interest",
    "was_recommended",
    "item_multiple_detections",
    "image_text",
    "item_image",
    "ad_language",
    "group_name",
    "group_type",
    "is_group",
    "item_date_posted",
    "item_text",
    "item_title",
    "platform_name",
    "search_term",
    "url",
    "website_type",
    "item_currency",
    "item_price",
    "price_available",
    "payment_method",
    "seller_contact_known",
    "delivery_method",
    "destination_country",
    "is_delivery_available",
    "item_sold_in",
    "origin_country",
    "is_bycatch",
    "is_seller_vulnerable_group",
    "vulnerable_group"
  ],
  "curationSteps": [
    "Import the complete exported field table from the R app without dropping categories or optional fields.",
    "Preserve each Field_ID, category, description, standardization note, and in_gms flag exactly for catalogue review.",
    "Use profiles only as convenience subsets; the Field catalogue remains the authoritative complete list.",
    "Scope sensitive, personal, enforcement, and automated fields according to governance and sharing policies."
  ],
  "rsbaCriteria": [
    {
      "key": "conservation_concern",
      "label": "Conservation concern",
      "max": 3,
      "help": "Threat, protection, or sensitivity level for the species or taxon."
    },
    {
      "key": "online_trade_evidence",
      "label": "Online trade evidence",
      "max": 3,
      "help": "Evidence that the species or product appears in online trade channels."
    },
    {
      "key": "local_relevance",
      "label": "Local relevance",
      "max": 3,
      "help": "Relevance to the geography, language, taxa, or mandate of the monitoring program."
    },
    {
      "key": "enforcement_relevance",
      "label": "Enforcement relevance",
      "max": 3,
      "help": "Likely usefulness for enforcement, compliance, or policy response."
    },
    {
      "key": "identification_confidence",
      "label": "Identification confidence",
      "max": 3,
      "help": "How reliably analysts can identify the species or product from available content."
    }
  ],
  "rsbaExample": [
    {
      "common_name": "African grey parrot",
      "scientific_name": "Psittacus erithacus",
      "iucn_status": "EN",
      "cites_status": "I",
      "conservation_concern": 3,
      "online_trade_evidence": 3,
      "local_relevance": 2,
      "enforcement_relevance": 3,
      "identification_confidence": 2,
      "notes": "High-risk example with strong online trade signal"
    },
    {
      "common_name": "Pangolin",
      "scientific_name": "Manis spp.",
      "iucn_status": "VU-CR",
      "cites_status": "I",
      "conservation_concern": 3,
      "online_trade_evidence": 2,
      "local_relevance": 3,
      "enforcement_relevance": 3,
      "identification_confidence": 2,
      "notes": "Sensitive taxa; product identification may require expert review"
    },
    {
      "common_name": "Helmeted hornbill",
      "scientific_name": "Rhinoplax vigil",
      "iucn_status": "CR",
      "cites_status": "I",
      "conservation_concern": 3,
      "online_trade_evidence": 2,
      "local_relevance": 2,
      "enforcement_relevance": 3,
      "identification_confidence": 2,
      "notes": "High conservation concern and carved product risk"
    },
    {
      "common_name": "Ball python",
      "scientific_name": "Python regius",
      "iucn_status": "NT",
      "cites_status": "II",
      "conservation_concern": 1,
      "online_trade_evidence": 2,
      "local_relevance": 2,
      "enforcement_relevance": 1,
      "identification_confidence": 2,
      "notes": "Commonly detected in online reptile trade"
    },
    {
      "common_name": "Orchid",
      "scientific_name": "Orchidaceae spp.",
      "iucn_status": "varies",
      "cites_status": "II",
      "conservation_concern": 2,
      "online_trade_evidence": 2,
      "local_relevance": 1,
      "enforcement_relevance": 1,
      "identification_confidence": 1,
      "notes": "Identification often difficult from listing photos"
    },
    {
      "common_name": "Example low-priority species",
      "scientific_name": "Species exampleus",
      "iucn_status": "LC",
      "cites_status": "none",
      "conservation_concern": 0,
      "online_trade_evidence": 0,
      "local_relevance": 1,
      "enforcement_relevance": 0,
      "identification_confidence": 1,
      "notes": "Placeholder low-priority species"
    }
  ],
  "platformCriteria": [
    {
      "key": "target_species_presence",
      "label": "Target species presence",
      "max": 3,
      "help": "Presence of target species, products, keywords, sellers, or communities."
    },
    {
      "key": "trade_volume",
      "label": "Trade volume",
      "max": 3,
      "help": "Observed or expected volume of relevant listings, posts, or interactions."
    },
    {
      "key": "accessibility",
      "label": "Accessibility",
      "max": 3,
      "help": "Ability to observe content through public, permissioned, or partner-provided access."
    },
    {
      "key": "data_quality",
      "label": "Data quality",
      "max": 3,
      "help": "Availability of timestamps, images, stable references, location cues, and account continuity."
    },
    {
      "key": "risk_and_ethics",
      "label": "Risk and ethics readiness",
      "max": 3,
      "help": "Whether privacy, safety, sensitive species, and escalation controls are manageable."
    },
    {
      "key": "operational_fit",
      "label": "Operational fit",
      "max": 3,
      "help": "Fit with team language coverage, tooling, analyst capacity, and maintenance effort."
    }
  ],
  "platformExample": [
    {
      "platform_name": "Marketplace A",
      "platform_type": "Marketplace",
      "target_species_presence": 3,
      "trade_volume": 3,
      "accessibility": 2,
      "data_quality": 3,
      "risk_and_ethics": 2,
      "operational_fit": 2,
      "notes": "High volume and useful listing metadata"
    },
    {
      "platform_name": "Social Group B",
      "platform_type": "Social media group",
      "target_species_presence": 2,
      "trade_volume": 2,
      "accessibility": 1,
      "data_quality": 2,
      "risk_and_ethics": 1,
      "operational_fit": 2,
      "notes": "Relevant but access and privacy controls need review"
    },
    {
      "platform_name": "Forum C",
      "platform_type": "Forum",
      "target_species_presence": 1,
      "trade_volume": 1,
      "accessibility": 3,
      "data_quality": 1,
      "risk_and_ethics": 3,
      "operational_fit": 2,
      "notes": "Accessible watchlist platform with low volume"
    },
    {
      "platform_name": "Messaging Channel D",
      "platform_type": "Messaging app",
      "target_species_presence": 2,
      "trade_volume": 2,
      "accessibility": 0,
      "data_quality": 1,
      "risk_and_ethics": 0,
      "operational_fit": 1,
      "notes": "Do not monitor without authorization and safety review"
    },
    {
      "platform_name": "Classifieds E",
      "platform_type": "Classified ads",
      "target_species_presence": 2,
      "trade_volume": 1,
      "accessibility": 3,
      "data_quality": 2,
      "risk_and_ethics": 2,
      "operational_fit": 3,
      "notes": "Good candidate for periodic open-source review"
    },
    {
      "platform_name": "Livestream F",
      "platform_type": "Livestream commerce",
      "target_species_presence": 2,
      "trade_volume": 3,
      "accessibility": 1,
      "data_quality": 1,
      "risk_and_ethics": 1,
      "operational_fit": 1,
      "notes": "Ephemeral content creates collection and QA challenges"
    }
  ]
};
