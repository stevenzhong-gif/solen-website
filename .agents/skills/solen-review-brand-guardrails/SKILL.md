---
name: solen-review-brand-guardrails
description: Review SOLEN website changes for brand consistency, visual guardrails, unsupported product or company claims, misuse of concept imagery as engineering evidence, and factual consistency across English, Traditional Chinese, and Simplified Chinese. Use after changing SOLEN UI, product content, translations, metadata, assets, support content, or before a SOLEN release.
---

# Review SOLEN Brand Guardrails

Review changes against the repository's approved SOLEN context. Report evidence-based findings without inventing missing facts or redesigning unrelated areas.

## Required inputs

1. Locate the repository root.
2. Read `AGENTS.md` completely.
3. Read the relevant source-of-truth files named by `AGENTS.md`, including brand, visual design, website specification, architecture, and known-problem documentation.
4. Inspect the current diff and the affected implementation, translations, metadata, and assets.
5. Inspect rendered pages or screenshots when visual behavior is in scope. Treat automated layout checks as insufficient proof of visual quality.

If an approved fact, asset, or product decision is missing, mark it for human review. Do not fill the gap by inference.

## Review workflow

### 1. Establish the approved scope

- Identify the approved brand name, slogan, product names, stable slugs, locales, visual assets, and production URL.
- Distinguish approved facts from concept copy, placeholders, and future plans.
- Treat product images as concept visuals, not engineering specifications.

### 2. Review brand and visual consistency

Check that the implementation preserves:

- Warm Tech × Minimal Technology.
- Warm, calm, natural, minimal, modern, premium, and functional character.
- Warm off-white, soft beige, charcoal, warm silver, generous whitespace, restrained borders, and large editorial imagery.
- Product differentiation through form while retaining shared material, color, lighting, geometry, and typography.
- Official SOLEN imagery without unauthorized replacement, fabricated angles, or invented product details.

Flag neon, cyberpunk, gaming, glassmorphism, heavy gradients, generic SaaS styling, excessive motion, overly futuristic UI, or direct imitation of an existing technology brand.

### 3. Detect unsupported claims

Search visible copy, alt text, metadata, structured data, comments used as content sources, and configuration for unsupported claims.

Prohibit invented or unverified:

- Engineering specifications, port capabilities, dimensions, compatibility, performance, or certifications.
- Awards, company history, founding dates, employee counts, offices, investors, partnerships, or customer claims.
- Phone numbers, addresses, email addresses, business hours, or working contact infrastructure.
- Environmental or recyclability claims.
- Warranty terms or service commitments.
- Pricing, availability, release timing, purchase status, or shipping claims.

Allow a category label such as warranty or contact only when the UI clearly states that real terms or infrastructure are not yet available and makes no commitment.

### 4. Check multilingual factual consistency

Compare EN, zh-TW, and zh-CN by semantic key rather than character conversion.

- Require the same factual scope in every locale.
- Flag added promises, capabilities, materials, availability, or certainty in only one language.
- Preserve natural Traditional Chinese and natural Simplified Chinese wording.
- Confirm product names, product mapping, assets, and route slugs remain aligned across locales.

### 5. Check implementation evidence

- Confirm product content is keyed by stable product identity rather than fragile array position where practical.
- Confirm official assets map to the correct products.
- Confirm factual content is separated from presentation.
- Confirm production-domain references are centrally managed.
- Do not report PASS based only on lint or build results when visual or content review is required.

## Severity model

- **Critical**: Publishes dangerous, deceptive, legally material, or security-sensitive false information.
- **High**: Invents specifications, certifications, warranties, availability, environmental claims, contact channels, company facts, or uses the wrong official product visual.
- **Medium**: Breaks SOLEN brand direction, creates cross-locale factual inconsistency, presents concept imagery as engineering truth, or introduces a misleading functional UI.
- **Low**: Minor visual inconsistency, unclear placeholder wording, maintainability issue that raises future brand risk, or a human-review concern without a confirmed violation.

## Output format

Return exactly these sections:

1. **Result**: `PASS` or `NEEDS REVIEW`.
2. **Findings**: For every finding include severity, evidence, affected files, impact, and recommended fix. State `None` when there are no findings.
3. **Factual consistency**: Summarize EN／zh-TW／zh-CN alignment.
4. **Official asset check**: Summarize product-to-image mapping and whether any unapproved imagery was introduced.
5. **Human review required**: List subjective visual decisions, missing approvals, and facts that cannot be verified from repository evidence.

Use `NEEDS REVIEW` when any unresolved Medium, High, or Critical finding remains. Low-only findings may still produce `PASS` when they are clearly identified as non-blocking.

After fixes, rerun the complete review and label the two results `Before fixes` and `After fixes`.
