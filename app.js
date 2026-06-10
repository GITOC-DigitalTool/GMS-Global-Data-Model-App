const dimensions = [
  {
    name: "Observation",
    description: "Core record metadata that makes a sighting traceable, de-duplicated, and auditable.",
  },
  {
    name: "Taxon & Product",
    description: "Species, product form, quantity, and identification confidence for the wildlife item.",
  },
  {
    name: "Trade Signal",
    description: "Price, currency, offer language, shipping cues, and other indicators that the post is commercial.",
  },
  {
    name: "Actor & Network",
    description: "Seller, group, account, and interaction fields used to understand behavior without over-collecting personal data.",
  },
  {
    name: "Platform & Location",
    description: "The online environment, collection path, jurisdictional cues, and geographic signals.",
  },
  {
    name: "Governance",
    description: "Safety, sensitivity, reviewer confidence, legal basis, and handling notes for responsible use.",
  },
];

const fields = [
  {
    name: "Record ID",
    dimension: "Observation",
    status: "Required",
    description: "Stable identifier for each captured observation or listing.",
  },
  {
    name: "Collection Date",
    dimension: "Observation",
    status: "Required",
    description: "Date and time the content was observed or collected.",
  },
  {
    name: "Source URL or Handle",
    dimension: "Observation",
    status: "Required",
    description: "Reference that allows authorized reviewers to locate the original content.",
  },
  {
    name: "Common Name",
    dimension: "Taxon & Product",
    status: "Recommended",
    description: "Plain-language taxon or product name used by the monitoring team.",
  },
  {
    name: "Scientific Name",
    dimension: "Taxon & Product",
    status: "Recommended",
    description: "Taxonomic name when identification is possible and relevant to the program.",
  },
  {
    name: "Product Form",
    dimension: "Taxon & Product",
    status: "Required",
    description: "Form of item offered, such as live animal, specimen, part, derivative, or service.",
  },
  {
    name: "Quantity",
    dimension: "Taxon & Product",
    status: "Conditional",
    description: "Count, weight, volume, or advertised stock when visible or stated.",
  },
  {
    name: "Identification Confidence",
    dimension: "Taxon & Product",
    status: "Required",
    description: "Reviewer confidence score and rationale for the species or product identification.",
  },
  {
    name: "Price",
    dimension: "Trade Signal",
    status: "Conditional",
    description: "Advertised value, including whether price is explicit, implied, or requested privately.",
  },
  {
    name: "Currency",
    dimension: "Trade Signal",
    status: "Conditional",
    description: "Currency or exchange cue associated with the advertised offer.",
  },
  {
    name: "Trade Intent Cue",
    dimension: "Trade Signal",
    status: "Required",
    description: "Evidence that content is an offer, request, brokered sale, auction, or promotion.",
  },
  {
    name: "Shipping or Delivery Cue",
    dimension: "Trade Signal",
    status: "Recommended",
    description: "References to shipping, pickup, cross-border movement, or delivery methods.",
  },
  {
    name: "Account Identifier",
    dimension: "Actor & Network",
    status: "Conditional",
    description: "Minimum account reference needed for authorized analysis, de-duplication, or escalation.",
  },
  {
    name: "Account Role",
    dimension: "Actor & Network",
    status: "Recommended",
    description: "Observed role such as seller, buyer, broker, group administrator, or promoter.",
  },
  {
    name: "Engagement Signals",
    dimension: "Actor & Network",
    status: "Optional",
    description: "Visible likes, shares, comments, bids, or membership cues used for trend context.",
  },
  {
    name: "Platform Name",
    dimension: "Platform & Location",
    status: "Required",
    description: "Website, marketplace, social app, messaging channel, forum, or classified platform.",
  },
  {
    name: "Platform Feature",
    dimension: "Platform & Location",
    status: "Recommended",
    description: "Feature where content appeared, such as group, story, live stream, listing, or direct chat.",
  },
  {
    name: "Location Cue",
    dimension: "Platform & Location",
    status: "Conditional",
    description: "Self-reported, inferred, or platform-provided location evidence with confidence notes.",
  },
  {
    name: "Legal or Policy Flag",
    dimension: "Governance",
    status: "Recommended",
    description: "Relevant law, marketplace policy, CITES appendix, or internal escalation category.",
  },
  {
    name: "Sensitivity Rating",
    dimension: "Governance",
    status: "Required",
    description: "Handling level for sensitive taxa, personal data, enforcement leads, or safety concerns.",
  },
  {
    name: "Reviewer Notes",
    dimension: "Governance",
    status: "Optional",
    description: "Structured notes documenting uncertainty, assumptions, translation issues, or context.",
  },
];

const platformCriteria = [
  {
    criterion: "Relevance",
    document: "Known or suspected presence of target taxa, products, keywords, or seller communities.",
    implication: "Higher relevance justifies deeper sampling and more tailored search vocabularies.",
  },
  {
    criterion: "Accessibility",
    document: "Whether content is public, permissioned, partner-provided, ephemeral, or technically restricted.",
    implication: "Access constraints determine whether manual review, consent, partnerships, or exclusion is appropriate.",
  },
  {
    criterion: "Data Quality",
    document: "Availability of timestamps, images, location cues, account continuity, and stable references.",
    implication: "Low-quality data may require narrower objectives or additional validation steps.",
  },
  {
    criterion: "Risk & Ethics",
    document: "Privacy exposure, investigator safety, vulnerable communities, sensitive species, and escalation pathways.",
    implication: "Higher risk requires stronger governance, minimization, and review before collection.",
  },
  {
    criterion: "Operational Fit",
    document: "Language needs, platform volatility, tooling feasibility, analyst capacity, and maintenance burden.",
    implication: "Poor fit may move the platform to watchlist status rather than active monitoring.",
  },
];

const dimensionCards = document.querySelector("#dimension-cards");
const fieldGrid = document.querySelector("#field-grid");
const statusFilter = document.querySelector("#status-filter");
const dimensionFilter = document.querySelector("#dimension-filter");
const platformTable = document.querySelector("#platform-table");
const copyStatus = document.querySelector("#copy-status");

function renderDimensions() {
  dimensionCards.innerHTML = dimensions
    .map(
      (dimension) => `
        <article class="card">
          <h3>${dimension.name}</h3>
          <p>${dimension.description}</p>
          <span class="badge">${fields.filter((field) => field.dimension === dimension.name).length} fields</span>
        </article>
      `,
    )
    .join("");

  dimensionFilter.insertAdjacentHTML(
    "beforeend",
    dimensions.map((dimension) => `<option value="${dimension.name}">${dimension.name}</option>`).join(""),
  );
}

function renderFields() {
  const status = statusFilter.value;
  const dimension = dimensionFilter.value;
  const visibleFields = fields.filter((field) => {
    const statusMatches = status === "all" || field.status === status;
    const dimensionMatches = dimension === "all" || field.dimension === dimension;
    return statusMatches && dimensionMatches;
  });

  fieldGrid.innerHTML = visibleFields
    .map(
      (field) => `
        <article class="field-card" data-status="${field.status}">
          <h3>${field.name}</h3>
          <p>${field.description}</p>
          <span class="badge">${field.dimension}</span>
          <span class="badge">${field.status}</span>
        </article>
      `,
    )
    .join("");
}

function renderPlatformCriteria() {
  platformTable.innerHTML = platformCriteria
    .map(
      (row) => `
        <tr>
          <th scope="row">${row.criterion}</th>
          <td>${row.document}</td>
          <td>${row.implication}</td>
        </tr>
      `,
    )
    .join("");
}

function updateRsba() {
  const form = document.querySelector("#rsba-form");
  const values = Array.from(form.elements)
    .filter((element) => element.type === "range")
    .map((element) => Number(element.value));
  const total = values.reduce((sum, value) => sum + value, 0);
  document.querySelector("#rsba-score").textContent = total;
  document.querySelectorAll(".range-value").forEach((label, index) => {
    label.textContent = values[index];
  });

  const guidance = document.querySelector("#rsba-guidance");
  if (total >= 16) {
    guidance.textContent = "Strong candidate for a scoped pilot, provided governance checks are complete.";
  } else if (total >= 11) {
    guidance.textContent = "Promising but needs refinement before collection scope and methods are finalized.";
  } else {
    guidance.textContent = "Keep in discovery mode until priority, evidence, feasibility, or readiness improves.";
  }
}

async function copyVisibleFields() {
  const lines = Array.from(fieldGrid.querySelectorAll(".field-card")).map((card) => {
    const title = card.querySelector("h3").textContent;
    const badges = Array.from(card.querySelectorAll(".badge")).map((badge) => badge.textContent);
    return `${title} (${badges.join("; ")})`;
  });

  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    copyStatus.textContent = `Copied ${lines.length} fields to the clipboard.`;
  } catch {
    copyStatus.textContent = "Clipboard access is unavailable; select and copy the visible cards manually.";
  }
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function init() {
  document.querySelector("#field-count").textContent = fields.length;
  document.querySelector("#dimension-count").textContent = dimensions.length;
  document.querySelector("#platform-count").textContent = platformCriteria.length;
  renderDimensions();
  renderPlatformCriteria();
  renderFields();
  updateRsba();
  statusFilter.addEventListener("change", renderFields);
  dimensionFilter.addEventListener("change", renderFields);
  document.querySelector("#rsba-form").addEventListener("input", updateRsba);
  document.querySelector("#copy-fields").addEventListener("click", copyVisibleFields);
  setupNavigation();
}

init();
