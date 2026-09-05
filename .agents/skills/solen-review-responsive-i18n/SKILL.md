---
name: solen-review-responsive-i18n
description: Review rendered SOLEN website changes for responsive layout, multilingual presentation, CJK wrapping, navigation interaction, keyboard accessibility, touch targets, image behavior, overflow, and reduced-motion support. Use after changing SOLEN layouts, navigation, footer, page typography, product cards, localized content, or responsive CSS, and before each SOLEN phase or release review.
---

# Review SOLEN Responsive and i18n Quality

Review real rendered pages across approved locales and target viewport sizes. Use repository evidence and browser inspection; do not infer visual success from lint or build output.

## Required inputs

1. Read `AGENTS.md` and the project context it identifies.
2. Identify changed routes, shared components, translations, CSS, and responsive breakpoints.
3. Start the project using its documented local command. Preserve existing symbolic links and configuration.
4. Test all affected routes in `en`, `zh-TW`, and `zh-CN` at approximately 390px, 768px, and 1440px.

If browser rendering is unavailable, return `NEEDS REVIEW` and list the unverified checks. Do not substitute source inspection for visual QA.

## Review workflow

### 1. Verify layout integrity

- Check horizontal overflow, clipped content, collisions, unintended overlap, and excessive empty space.
- Confirm images load, preserve intended composition, and do not create layout shift.
- Confirm mobile, tablet, and desktop layouts follow the approved content hierarchy.
- Inspect the top, middle, and bottom of each affected page rather than only the initial viewport.

### 2. Verify multilingual presentation

- Confirm `html lang`, localized page title, navigation labels, controls, CTA text, and footer content.
- Check Traditional and Simplified Chinese independently.
- Flag orphaned single-character final lines, awkward punctuation wrapping, clipped CJK text, and forced breaks that only work in one locale.
- Confirm language switching preserves the current route where that route exists.

### 3. Verify navigation and controls

- Confirm active navigation and `aria-current` match the route.
- Test keyboard focus order, visible focus, menu open and close, Escape behavior, and focus restoration when applicable.
- Confirm mobile menus close after route changes and link activation.
- Check touch targets are at least 44 by 44 CSS pixels where practical.
- Confirm controls retain accessible names in open and closed states.

### 4. Verify motion and resilience

- Confirm motion is restrained, introduces no layout shift, and does not block interaction.
- Emulate `prefers-reduced-motion: reduce`; confirm animations and smooth scrolling are removed or effectively minimized.
- Confirm content remains visible and usable when motion does not run.

### 5. Record evidence

For each locale and viewport, record tested route, overflow result, image result, and notable typography or interaction observations. Capture screenshots for subjective visual findings when possible.

## Severity

- **Critical**: Content or primary navigation is unusable for a locale or target viewport.
- **High**: Horizontal overflow, inaccessible navigation, broken image, hidden content, keyboard trap, or incorrect-language route.
- **Medium**: CJK wrapping failure, collision, undersized primary control, incorrect active state, route-change menu defect, or reduced-motion failure.
- **Low**: Minor spacing, rhythm, or visual consistency issue that does not block use.

## Output format

Return these sections:

1. **Result**: `PASS` or `NEEDS REVIEW`.
2. **Coverage**: Routes, locales, viewports, keyboard checks, and motion preference tested.
3. **Findings**: Severity, evidence, affected files or routes, impact, and recommended fix. State `None` when empty.
4. **Locale and viewport matrix**: Concise result for every tested combination.
5. **Human review required**: Subjective visual judgments and checks that automation cannot establish.

Use `NEEDS REVIEW` when an unresolved Medium, High, or Critical finding remains. After fixes, rerun affected combinations and label results `Before fixes` and `After fixes`.
