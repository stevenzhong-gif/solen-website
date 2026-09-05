---
name: solen-review-editorial-experience
description: Review SOLEN editorial brand pages for proposition clarity, narrative progression, architectural visual rhythm, page-to-page differentiation, concept transparency, and meaningful onward journeys. Use after creating or substantially changing SOLEN Design, About, or future non-product editorial brand experiences.
---

# Review SOLEN Editorial Experience

Evaluate whether a brand-led page works as a deliberate editorial experience rather than a collection of generic sections. Complement the brand-guardrails and responsive-i18n Skills; do not duplicate their full claims or viewport audits.

## Required inputs

1. Read `AGENTS.md` and its relevant SOLEN source-of-truth documents.
2. Identify the page proposition, localized content model, route, components, CSS, metadata, and intended onward journey.
3. Inspect the rendered page in EN, zh-TW, and zh-CN at representative mobile, tablet, and desktop sizes.
4. Compare the page with other current SOLEN editorial and product experiences.

If browser rendering is unavailable, return `NEEDS REVIEW` and identify the unverified visual criteria.

## Checks

### Proposition and narrative

- Require one clear central proposition that remains recognizable throughout the page.
- Confirm sections progress intentionally instead of repeating parallel statements.
- Keep brand philosophy distinct from unsupported company history or product engineering.
- Confirm all three locales preserve the same narrative scope while sounding natural.

### Editorial rhythm

- Look for deliberate variation in scale, density, alignment, surface tone, rules, and whitespace.
- Confirm visual variation serves the narrative and does not become decoration without meaning.
- Flag generic feature-card grids, repetitive equal-weight sections, empty visual filler, or excessive rounded containers.
- Preserve SOLEN's calm, architectural, Warm Tech × Minimal Technology direction.

### Page differentiation

- Confirm the page has its own composition and is not a renamed Product, Product Detail, Design, About, or Support template.
- Allow shared tokens, typography, header, footer, links, and small primitives when they preserve consistency.
- Flag copied section order, repeated hero composition, or overly generalized components that erase page identity.

### Concept transparency and journey

- Keep fictional-brand or concept-product framing clear where the narrative could otherwise imply commercial reality.
- Confirm imagery, when present, supports design storytelling without implying engineering evidence.
- Require at least one meaningful next step into an existing, complete SOLEN route.
- Reject fake commerce, inactive decorative controls, or links to incomplete destinations.

## Scope boundaries

- Use `solen-review-brand-guardrails` for exhaustive unsupported-claim and official-asset review.
- Use `solen-review-responsive-i18n` for the full locale/viewport matrix, keyboard, touch, and overflow audit.
- Use `solen-review-product-experience` for product-detail storytelling and product-family identity.
- Report overlaps only when they materially affect the editorial experience.

## Severity

- **Critical**: Deceptive commercial narrative or a page that materially misrepresents SOLEN.
- **High**: Missing concept transparency, broken primary journey, or a page composition that is functionally unusable.
- **Medium**: Unclear proposition, disconnected narrative, substantial template duplication, or cross-locale narrative mismatch.
- **Low**: Minor rhythm, hierarchy, repetition, or subjective polish concern.

## Output

Return:

1. **Result**: `PASS` or `NEEDS REVIEW`.
2. **Coverage**: Routes, locales, viewport classes, comparison pages, and journey reviewed.
3. **Findings**: Severity, evidence, affected files/routes, impact, and recommended fix; state `None` when empty.
4. **Narrative summary**: Proposition → progression → closing journey.
5. **Differentiation assessment**: What is shared and what gives the page its own identity.
6. **Human review required**: Subjective editorial, pacing, and visual-composition decisions.

Use `NEEDS REVIEW` when any unresolved Medium, High, or Critical finding remains. After fixes, rerun affected checks and label results `Before fixes` and `After fixes`.
