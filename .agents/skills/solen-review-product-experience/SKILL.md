---
name: solen-review-product-experience
description: Review SOLEN product-detail implementations for storytelling hierarchy, product identity and registry consistency, concept-product disclosure, official image constraints, product-family navigation, commercial journey without fake commerce, and excessive template repetition. Use after creating or changing a SOLEN product route, product-detail content model, product-page components, or cross-product navigation.
---

# Review SOLEN Product Experience

Review the rendered product journey and its implementation against approved repository context. Complement, rather than duplicate, brand-claims and responsive-i18n reviews.

## Inputs

1. Read `AGENTS.md`, relevant project context, and the current product registry.
2. Identify the product ID, approved slug, locale content, official image, detail status, and affected routes.
3. Inspect implementation, metadata, rendered page, collection entry points, and family navigation.

## Checks

### Product identity and routing

- Match product name, stable ID, slug, metadata, image, and localized content.
- Confirm supported locale/product combinations are generated and unknown slugs return 404.
- Confirm collection cards link only to complete detail experiences; keep incomplete destinations intentionally controlled.

### Storytelling hierarchy

- Require a clear product identity, concept statement, introduction, design/form story, material direction, workspace relationship, and family continuation for a complete page.
- Keep sections purposeful and progressive; flag disconnected copy blocks, specification-table imitation, or empty visual filler.
- Preserve a shared system while leaving room for later products to use distinct compositions.

### Concept truth and imagery

- Present concept-product status clearly without overwhelming the commercial narrative.
- Treat official imagery as design reference, never engineering proof.
- Use only the approved image for the current product. Flag fabricated crops that imply alternate angles, fake galleries, detail magnification that implies specifications, or unrelated imagery.

### Commercial journey

- Provide useful movement to sibling products and the Products collection.
- Do not add fake purchase, price, stock, retailer, warranty, support, or availability actions.
- Ensure preview routes do not impersonate complete product experiences or expose internal project workflow to visitors.

### Cross-locale and maintainability

- Keep factual scope and disclosure equivalent in EN, zh-TW, and zh-CN.
- Key content by stable product identity, not array position.
- Abstract only structures expected to serve multiple products; flag both needless duplication and over-generalized templates.

## Severity

- **Critical**: Deceptive commerce, false product identity, or materially false engineering representation.
- **High**: Wrong official image, broken product route, missing concept disclosure, unsupported specification, or fake purchase path.
- **Medium**: Incomplete storytelling hierarchy, misleading preview, broken family journey, locale scope mismatch, or fragile identity mapping.
- **Low**: Minor narrative rhythm, hierarchy, repetition, or maintainability concern.

## Output

Return:

1. **Result**: `PASS` or `NEEDS REVIEW`.
2. **Coverage**: Product, routes, locales, entry points, and rendered sections reviewed.
3. **Findings**: Severity, evidence, affected files/routes, impact, and recommended fix; state `None` when empty.
4. **Journey summary**: Entry point → product story → family continuation.
5. **Reuse assessment**: Shared components and risks of excessive sameness.
6. **Human review required**: Subjective storytelling and image-framing decisions.

Use `NEEDS REVIEW` for unresolved Medium, High, or Critical findings. After fixes, rerun affected checks and label results `Before fixes` and `After fixes`.
