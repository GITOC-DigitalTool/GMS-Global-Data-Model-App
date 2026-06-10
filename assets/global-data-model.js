window.GDM_DATA = {
  "fields": [
    {
      "field_id": "record_id",
      "category": "Record metadata",
      "description": "Stable identifier for each captured observation, listing, message, or record.",
      "standardization_notes": "Use a non-meaningful unique ID; do not encode personal information.",
      "in_gms": true
    },
    {
      "field_id": "parent_record_id",
      "category": "Record metadata",
      "description": "Identifier linking duplicate, follow-up, or related observations.",
      "standardization_notes": "Use when records are split across posts, screenshots, or collection passes.",
      "in_gms": false
    },
    {
      "field_id": "collection_datetime",
      "category": "Record metadata",
      "description": "Date and time the content was observed, captured, or entered.",
      "standardization_notes": "Store as ISO 8601 with timezone when possible.",
      "in_gms": true
    },
    {
      "field_id": "posted_datetime",
      "category": "Record metadata",
      "description": "Date and time the original content appears to have been posted.",
      "standardization_notes": "Preserve raw visible date if normalized date is uncertain.",
      "in_gms": true
    },
    {
      "field_id": "collector_id",
      "category": "Record metadata",
      "description": "Internal identifier for the analyst, partner, or workflow that collected the record.",
      "standardization_notes": "Use internal IDs rather than personal names where possible.",
      "in_gms": false
    },
    {
      "field_id": "capture_method",
      "category": "Record metadata",
      "description": "How the observation was collected, such as manual review, referral, export, or automated capture.",
      "standardization_notes": "Use controlled values for auditability.",
      "in_gms": true
    },
    {
      "field_id": "review_status",
      "category": "Record metadata",
      "description": "Current workflow state for the record.",
      "standardization_notes": "Suggested values: new, reviewed, verified, escalated, archived, excluded.",
      "in_gms": false
    },
    {
      "field_id": "duplicate_status",
      "category": "Record metadata",
      "description": "Whether the record is original, potential duplicate, confirmed duplicate, or merged.",
      "standardization_notes": "Document duplicate resolution rules before collection.",
      "in_gms": false
    },
    {
      "field_id": "source_url_or_reference",
      "category": "Source and access",
      "description": "Reference allowing an authorized reviewer to locate the original content.",
      "standardization_notes": "Use durable URLs or internal references when direct links create risk.",
      "in_gms": true
    },
    {
      "field_id": "source_domain",
      "category": "Source and access",
      "description": "Domain, app, or service host associated with the content.",
      "standardization_notes": "Normalize domains and app names for filtering.",
      "in_gms": false
    },
    {
      "field_id": "source_access_level",
      "category": "Source and access",
      "description": "Whether content was public, permissioned, partner-provided, closed, or ephemeral.",
      "standardization_notes": "Do not collect restricted content without authorization.",
      "in_gms": true
    },
    {
      "field_id": "screenshot_reference",
      "category": "Source and access",
      "description": "Internal reference to a stored screenshot or evidence capture.",
      "standardization_notes": "Apply redaction and retention rules for screenshots.",
      "in_gms": false
    },
    {
      "field_id": "archive_reference",
      "category": "Source and access",
      "description": "Reference to an internal archive, evidence package, or chain-of-custody file.",
      "standardization_notes": "Use only when archive creation is authorized.",
      "in_gms": false
    },
    {
      "field_id": "platform_name",
      "category": "Platform",
      "description": "Website, marketplace, social platform, messaging channel, forum, classified site, or app.",
      "standardization_notes": "Use a controlled platform list.",
      "in_gms": true
    },
    {
      "field_id": "platform_type",
      "category": "Platform",
      "description": "General platform class.",
      "standardization_notes": "Suggested values: marketplace, social, messaging, forum, classified, livestream, other.",
      "in_gms": true
    },
    {
      "field_id": "platform_feature",
      "category": "Platform",
      "description": "Specific feature where content appeared, such as group, listing, story, livestream, or comment.",
      "standardization_notes": "Record the feature separately from platform name.",
      "in_gms": true
    },
    {
      "field_id": "group_or_channel_name",
      "category": "Platform",
      "description": "Visible name of the group, channel, forum, shop, or board.",
      "standardization_notes": "Minimize collection if names identify private communities.",
      "in_gms": false
    },
    {
      "field_id": "group_or_channel_id",
      "category": "Platform",
      "description": "Platform-specific group or channel identifier.",
      "standardization_notes": "Hash or restrict access where appropriate.",
      "in_gms": false
    },
    {
      "field_id": "platform_policy_flag",
      "category": "Platform",
      "description": "Relevant platform policy issue or marketplace prohibition category.",
      "standardization_notes": "Use as a triage flag, not a final policy determination.",
      "in_gms": false
    },
    {
      "field_id": "account_reference",
      "category": "Account and actor",
      "description": "Minimum necessary account, seller, group, or channel reference for de-duplication or escalation.",
      "standardization_notes": "Minimize, hash, or pseudonymize personal data when possible.",
      "in_gms": true
    },
    {
      "field_id": "account_display_name",
      "category": "Account and actor",
      "description": "Visible display name associated with the content.",
      "standardization_notes": "Collect only when necessary for documented monitoring purpose.",
      "in_gms": false
    },
    {
      "field_id": "account_role",
      "category": "Account and actor",
      "description": "Observed role such as seller, buyer, broker, administrator, influencer, or unknown.",
      "standardization_notes": "Infer only from visible behavior and document uncertainty.",
      "in_gms": true
    },
    {
      "field_id": "account_location_text",
      "category": "Account and actor",
      "description": "Location text self-reported by the account.",
      "standardization_notes": "Do not treat self-reported locations as verified.",
      "in_gms": false
    },
    {
      "field_id": "account_contact_method",
      "category": "Account and actor",
      "description": "Visible contact route such as comments, direct message, phone, email, or external app.",
      "standardization_notes": "Avoid collecting direct contact details unless authorized.",
      "in_gms": false
    },
    {
      "field_id": "seller_type",
      "category": "Account and actor",
      "description": "Observed seller type such as individual, shop, breeder, wholesaler, transporter, or unknown.",
      "standardization_notes": "Use controlled values and avoid unsupported assumptions.",
      "in_gms": false
    },
    {
      "field_id": "repeat_seller_flag",
      "category": "Account and actor",
      "description": "Whether the actor appears in previous records.",
      "standardization_notes": "Base on authorized internal matching rules.",
      "in_gms": false
    },
    {
      "field_id": "post_title",
      "category": "Content",
      "description": "Title, listing headline, or leading caption for the content.",
      "standardization_notes": "Preserve original language where useful.",
      "in_gms": false
    },
    {
      "field_id": "post_text_excerpt",
      "category": "Content",
      "description": "Short relevant text excerpt supporting the observation.",
      "standardization_notes": "Avoid over-collecting unrelated personal content.",
      "in_gms": true
    },
    {
      "field_id": "language",
      "category": "Content",
      "description": "Primary language of the post, listing, or communication.",
      "standardization_notes": "Use ISO language codes when possible.",
      "in_gms": false
    },
    {
      "field_id": "translated_text",
      "category": "Content",
      "description": "Translation of relevant text.",
      "standardization_notes": "Record translation method or reviewer where needed.",
      "in_gms": false
    },
    {
      "field_id": "media_type",
      "category": "Content",
      "description": "Type of media present, such as image, video, livestream, text-only, or mixed.",
      "standardization_notes": "Use controlled media categories.",
      "in_gms": true
    },
    {
      "field_id": "image_count",
      "category": "Content",
      "description": "Number of relevant images visible or captured.",
      "standardization_notes": "Record counts only when useful for quality or evidence review.",
      "in_gms": false
    },
    {
      "field_id": "video_present",
      "category": "Content",
      "description": "Whether video or livestream evidence is present.",
      "standardization_notes": "Use boolean values for analysis.",
      "in_gms": false
    },
    {
      "field_id": "keyword_hit",
      "category": "Content",
      "description": "Search term, keyword, or query that surfaced the content.",
      "standardization_notes": "Useful for reproducibility and sampling bias review.",
      "in_gms": false
    },
    {
      "field_id": "common_name",
      "category": "Taxonomy",
      "description": "Common or trade name used for the wildlife item, organism, part, derivative, or service.",
      "standardization_notes": "Map observed terms to a preferred common name for analysis.",
      "in_gms": true
    },
    {
      "field_id": "scientific_name",
      "category": "Taxonomy",
      "description": "Scientific name associated with the observed species or lowest confident taxonomic unit.",
      "standardization_notes": "Use an accepted taxonomy source and record uncertainty.",
      "in_gms": true
    },
    {
      "field_id": "taxon_rank",
      "category": "Taxonomy",
      "description": "Lowest confident rank identified, such as species, genus, family, or unknown.",
      "standardization_notes": "Use when species-level identification is not possible.",
      "in_gms": false
    },
    {
      "field_id": "taxon_family",
      "category": "Taxonomy",
      "description": "Family associated with the identified taxon.",
      "standardization_notes": "Derive from the accepted taxonomy where possible.",
      "in_gms": false
    },
    {
      "field_id": "taxon_class",
      "category": "Taxonomy",
      "description": "Class associated with the identified taxon.",
      "standardization_notes": "Useful for high-level summaries.",
      "in_gms": false
    },
    {
      "field_id": "identification_basis",
      "category": "Taxonomy",
      "description": "Basis for identification, such as image, text claim, expert review, or metadata.",
      "standardization_notes": "Record all relevant bases when possible.",
      "in_gms": true
    },
    {
      "field_id": "identification_confidence",
      "category": "Taxonomy",
      "description": "Reviewer confidence in the taxon or product identification.",
      "standardization_notes": "Use controlled values or a numeric scale with notes.",
      "in_gms": true
    },
    {
      "field_id": "lookalike_notes",
      "category": "Taxonomy",
      "description": "Notes on lookalike species, ambiguous products, or identification caveats.",
      "standardization_notes": "Use for quality assurance and expert review.",
      "in_gms": false
    },
    {
      "field_id": "product_form",
      "category": "Product and specimen",
      "description": "Observed form of the item, such as live animal, specimen, skin, meat, medicine, carving, plant, or derivative.",
      "standardization_notes": "Use a controlled product-form vocabulary.",
      "in_gms": true
    },
    {
      "field_id": "life_stage",
      "category": "Product and specimen",
      "description": "Observed or stated life stage such as adult, juvenile, egg, seedling, or unknown.",
      "standardization_notes": "Do not infer unless visible or stated.",
      "in_gms": false
    },
    {
      "field_id": "condition",
      "category": "Product and specimen",
      "description": "Observed condition such as live, dead, processed, raw, fresh, preserved, or unknown.",
      "standardization_notes": "Use controlled values.",
      "in_gms": false
    },
    {
      "field_id": "quantity",
      "category": "Product and specimen",
      "description": "Visible or stated count, weight, volume, stock amount, or quantity indicator.",
      "standardization_notes": "Separate raw quantity from normalized numeric value and unit.",
      "in_gms": true
    },
    {
      "field_id": "quantity_unit",
      "category": "Product and specimen",
      "description": "Unit associated with the quantity.",
      "standardization_notes": "Normalize units where possible.",
      "in_gms": false
    },
    {
      "field_id": "sex_or_morph",
      "category": "Product and specimen",
      "description": "Observed or advertised sex, morph, color form, or breed.",
      "standardization_notes": "Capture only if relevant to trade pattern or identification.",
      "in_gms": false
    },
    {
      "field_id": "origin_claim",
      "category": "Product and specimen",
      "description": "Claim about wild-caught, captive-bred, farmed, cultivated, antique, or unknown origin.",
      "standardization_notes": "Treat claims as unverified unless independently supported.",
      "in_gms": true
    },
    {
      "field_id": "permit_or_document_claim",
      "category": "Product and specimen",
      "description": "Claim that permits, paperwork, certificates, or legal documents are available.",
      "standardization_notes": "Capture the claim without treating it as validated.",
      "in_gms": false
    },
    {
      "field_id": "trade_intent",
      "category": "Trade signal",
      "description": "Evidence that content represents an offer, request, sale, purchase, auction, brokered trade, or promotion.",
      "standardization_notes": "Capture normalized intent and supporting cue.",
      "in_gms": true
    },
    {
      "field_id": "trade_cue_text",
      "category": "Trade signal",
      "description": "Specific words, phrases, emojis, or context indicating trade intent.",
      "standardization_notes": "Preserve original text if needed for review.",
      "in_gms": true
    },
    {
      "field_id": "price_value",
      "category": "Trade signal",
      "description": "Advertised price, bid, requested value, or visible monetary amount.",
      "standardization_notes": "Store numeric amount separately from raw text.",
      "in_gms": true
    },
    {
      "field_id": "price_currency",
      "category": "Trade signal",
      "description": "Currency, token, barter term, or exchange unit associated with the offer.",
      "standardization_notes": "Use ISO currency codes when clear.",
      "in_gms": true
    },
    {
      "field_id": "price_raw_text",
      "category": "Trade signal",
      "description": "Raw price text as shown in the content.",
      "standardization_notes": "Useful when symbols or shorthand are ambiguous.",
      "in_gms": false
    },
    {
      "field_id": "negotiation_cue",
      "category": "Trade signal",
      "description": "Whether price, availability, or delivery appears negotiable or private-message based.",
      "standardization_notes": "Use visible cues only.",
      "in_gms": false
    },
    {
      "field_id": "availability_status",
      "category": "Trade signal",
      "description": "Observed availability such as available, sold, wanted, pre-order, or unknown.",
      "standardization_notes": "Use controlled values.",
      "in_gms": false
    },
    {
      "field_id": "shipping_or_delivery_cue",
      "category": "Trade signal",
      "description": "References to pickup, delivery, shipping, concealment, cross-border movement, or logistics.",
      "standardization_notes": "Record only cues relevant to scope and safety protocols.",
      "in_gms": true
    },
    {
      "field_id": "payment_cue",
      "category": "Trade signal",
      "description": "Visible payment method or payment-platform cue.",
      "standardization_notes": "Avoid collecting account numbers or personal financial details.",
      "in_gms": false
    },
    {
      "field_id": "location_cue",
      "category": "Location and jurisdiction",
      "description": "Self-reported, inferred, platform-provided, or content-derived geographic clue.",
      "standardization_notes": "Separate raw location text, normalized place, and confidence.",
      "in_gms": true
    },
    {
      "field_id": "location_raw_text",
      "category": "Location and jurisdiction",
      "description": "Raw location text visible in the content or profile.",
      "standardization_notes": "Preserve ambiguity; do not over-geocode.",
      "in_gms": false
    },
    {
      "field_id": "country",
      "category": "Location and jurisdiction",
      "description": "Normalized country associated with the record when justified.",
      "standardization_notes": "Use ISO country names or codes.",
      "in_gms": false
    },
    {
      "field_id": "admin_area",
      "category": "Location and jurisdiction",
      "description": "State, province, region, or administrative area when justified.",
      "standardization_notes": "Avoid precise locations unless necessary and authorized.",
      "in_gms": false
    },
    {
      "field_id": "jurisdiction_or_market",
      "category": "Location and jurisdiction",
      "description": "Country, region, or market context relevant to legal interpretation, referral, or sampling.",
      "standardization_notes": "Do not infer jurisdiction from weak cues without notes.",
      "in_gms": true
    },
    {
      "field_id": "location_confidence",
      "category": "Location and jurisdiction",
      "description": "Confidence in the normalized location or jurisdiction.",
      "standardization_notes": "Use controlled values such as low, medium, high.",
      "in_gms": false
    },
    {
      "field_id": "engagement_signals",
      "category": "Engagement and network",
      "description": "Visible likes, shares, comments, bids, replies, members, or interaction indicators.",
      "standardization_notes": "Counts change; record date/time if used.",
      "in_gms": false
    },
    {
      "field_id": "comment_count",
      "category": "Engagement and network",
      "description": "Visible comment or reply count.",
      "standardization_notes": "Use as context, not as proof of trade.",
      "in_gms": false
    },
    {
      "field_id": "share_count",
      "category": "Engagement and network",
      "description": "Visible share or repost count.",
      "standardization_notes": "Use cautiously because visibility differs by platform.",
      "in_gms": false
    },
    {
      "field_id": "member_count",
      "category": "Engagement and network",
      "description": "Visible group, channel, or audience size.",
      "standardization_notes": "Record only when relevant to platform assessment.",
      "in_gms": false
    },
    {
      "field_id": "external_link",
      "category": "Engagement and network",
      "description": "External website, payment, messaging, or cross-platform link referenced.",
      "standardization_notes": "Classify link type without over-collecting sensitive identifiers.",
      "in_gms": false
    },
    {
      "field_id": "network_notes",
      "category": "Engagement and network",
      "description": "Structured notes on relationships, repeated actors, or cross-platform movement.",
      "standardization_notes": "Use only when authorized and relevant.",
      "in_gms": false
    },
    {
      "field_id": "iucn_status",
      "category": "Legal, policy, and conservation",
      "description": "IUCN Red List category associated with the identified taxon when available.",
      "standardization_notes": "Record source/date for conservation statuses in analytical outputs.",
      "in_gms": false
    },
    {
      "field_id": "cites_status",
      "category": "Legal, policy, and conservation",
      "description": "CITES appendix or listing information associated with the taxon when available.",
      "standardization_notes": "Use as a reference flag, not final legal advice.",
      "in_gms": true
    },
    {
      "field_id": "national_protection_status",
      "category": "Legal, policy, and conservation",
      "description": "Relevant national or local protection flag.",
      "standardization_notes": "Jurisdiction-dependent; document source.",
      "in_gms": false
    },
    {
      "field_id": "legal_or_policy_flag",
      "category": "Legal, policy, and conservation",
      "description": "Relevant law, CITES appendix, platform policy, internal category, or escalation concern.",
      "standardization_notes": "Use as triage, not final legal determination.",
      "in_gms": true
    },
    {
      "field_id": "suspected_violation_type",
      "category": "Legal, policy, and conservation",
      "description": "Observed or suspected category of concern.",
      "standardization_notes": "Avoid definitive legal language unless validated by authorized experts.",
      "in_gms": false
    },
    {
      "field_id": "enforcement_relevance",
      "category": "Legal, policy, and conservation",
      "description": "Potential usefulness for enforcement, compliance, or policy response.",
      "standardization_notes": "Use a documented scoring scale.",
      "in_gms": false
    },
    {
      "field_id": "sensitivity_rating",
      "category": "Governance and quality",
      "description": "Handling level for sensitive taxa, personal data, investigator safety, enforcement value, or vulnerable contexts.",
      "standardization_notes": "Tie ratings to retention, access, sharing, and redaction rules.",
      "in_gms": true
    },
    {
      "field_id": "data_handling_notes",
      "category": "Governance and quality",
      "description": "Instructions for retention, redaction, sharing restrictions, consent, or escalation pathway.",
      "standardization_notes": "Complete before sharing sensitive records.",
      "in_gms": true
    },
    {
      "field_id": "reviewer_notes",
      "category": "Governance and quality",
      "description": "Structured notes documenting assumptions, translation issues, uncertainty, review decisions, or quality concerns.",
      "standardization_notes": "Keep notes factual and suitable for audit.",
      "in_gms": true
    },
    {
      "field_id": "quality_flag",
      "category": "Governance and quality",
      "description": "Data quality flag such as complete, partial, uncertain, needs review, or exclude.",
      "standardization_notes": "Use to filter outputs and QA queues.",
      "in_gms": false
    },
    {
      "field_id": "exclusion_reason",
      "category": "Governance and quality",
      "description": "Reason a record is excluded from analysis or escalation.",
      "standardization_notes": "Keep controlled values for reproducibility.",
      "in_gms": false
    },
    {
      "field_id": "escalation_status",
      "category": "Governance and quality",
      "description": "Whether and how the record was referred, escalated, or retained internally.",
      "standardization_notes": "Follow organizational protocols.",
      "in_gms": false
    },
    {
      "field_id": "retention_date",
      "category": "Governance and quality",
      "description": "Date after which the record should be reviewed, deleted, archived, or minimized.",
      "standardization_notes": "Align with data retention policy.",
      "in_gms": false
    }
  ],
  "profiles": {
    "Global Monitoring System": [
      "record_id",
      "collection_datetime",
      "posted_datetime",
      "capture_method",
      "source_url_or_reference",
      "source_access_level",
      "platform_name",
      "platform_type",
      "platform_feature",
      "account_reference",
      "account_role",
      "post_text_excerpt",
      "media_type",
      "common_name",
      "scientific_name",
      "identification_basis",
      "identification_confidence",
      "product_form",
      "quantity",
      "origin_claim",
      "trade_intent",
      "trade_cue_text",
      "price_value",
      "price_currency",
      "shipping_or_delivery_cue",
      "location_cue",
      "jurisdiction_or_market",
      "cites_status",
      "legal_or_policy_flag",
      "sensitivity_rating",
      "data_handling_notes",
      "reviewer_notes"
    ],
    "Minimal monitoring baseline": [
      "record_id",
      "collection_datetime",
      "source_url_or_reference",
      "platform_name",
      "common_name",
      "scientific_name",
      "product_form",
      "identification_confidence",
      "trade_intent",
      "sensitivity_rating",
      "reviewer_notes"
    ],
    "Species trend analysis": [
      "record_id",
      "collection_datetime",
      "posted_datetime",
      "platform_name",
      "common_name",
      "scientific_name",
      "taxon_rank",
      "product_form",
      "quantity",
      "quantity_unit",
      "identification_confidence",
      "location_cue",
      "country",
      "reviewer_notes"
    ],
    "Platform enforcement triage": [
      "record_id",
      "source_url_or_reference",
      "platform_name",
      "platform_type",
      "platform_feature",
      "account_reference",
      "account_role",
      "trade_intent",
      "trade_cue_text",
      "price_value",
      "price_currency",
      "shipping_or_delivery_cue",
      "location_cue",
      "legal_or_policy_flag",
      "sensitivity_rating",
      "data_handling_notes"
    ],
    "Governance and QA review": [
      "record_id",
      "collector_id",
      "review_status",
      "duplicate_status",
      "screenshot_reference",
      "archive_reference",
      "identification_confidence",
      "quality_flag",
      "exclusion_reason",
      "sensitivity_rating",
      "data_handling_notes",
      "retention_date"
    ]
  },
  "gmsFields": [
    "record_id",
    "collection_datetime",
    "posted_datetime",
    "capture_method",
    "source_url_or_reference",
    "source_access_level",
    "platform_name",
    "platform_type",
    "platform_feature",
    "account_reference",
    "account_role",
    "post_text_excerpt",
    "media_type",
    "common_name",
    "scientific_name",
    "identification_basis",
    "identification_confidence",
    "product_form",
    "quantity",
    "origin_claim",
    "trade_intent",
    "trade_cue_text",
    "price_value",
    "price_currency",
    "shipping_or_delivery_cue",
    "location_cue",
    "jurisdiction_or_market",
    "cites_status",
    "legal_or_policy_flag",
    "sensitivity_rating",
    "data_handling_notes",
    "reviewer_notes"
  ],
  "curationSteps": [
    "Harmonize equivalent field names from monitoring protocols into a shared vocabulary.",
    "Define each field in operational language so analysts collect the same thing consistently.",
    "Mark current GMS fields and create reusable profiles for common monitoring objectives.",
    "Limit sensitive or personal data to what is necessary for a documented monitoring purpose."
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
