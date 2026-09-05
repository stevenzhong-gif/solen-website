---
name: solen-review-production-readiness
description: Audit SOLEN releases for production-safe routing, localized metadata, canonical and hreflang output, robots and sitemap endpoints, invalid-route behavior, build quality, performance basics, dependency discipline, staged-content safety, Git synchronization, and Vercel deployment health. Use before committing, deploying, or approving a SOLEN production release.
---

# Review SOLEN Production Readiness

Run an evidence-based technical release gate. Complement the brand, responsive-i18n, editorial, and product Skills rather than repeating their subjective reviews.

## Inputs

1. Read `AGENTS.md`, architecture documentation, deployment notes, `package.json`, site configuration, route tree, metadata utilities, and current Git diff.
2. Identify the approved locales, routes, production domain, branch, remote, build command, and files intended for release.
3. Obtain current results from the other applicable SOLEN Skills before declaring the release ready.

## Checks

### Routes and SEO

- Build the production application and verify every expected localized route is generated or intentionally dynamic.
- Require localized titles and descriptions, canonical URLs, locale alternates, correct `html lang`, a production-domain sitemap, and a valid robots endpoint.
- Verify root redirect behavior and confirm invalid locales, pages, and product slugs return 404 with `noindex`.
- Add structured data only when repository facts support every field.

### Accessibility and performance evidence

- Confirm lint and TypeScript checks pass and no known High/Critical finding remains from responsive-i18n review.
- Check `next/image` use, eager-loading restraint, layout-shift risks, unnecessary dependencies, and obvious client-side rendering overhead.
- Do not claim lab performance scores without measuring them.

### Repository and deployment safety

- Inspect status, staged files, ignored files, symlinks, environment files, credentials, keys, build output, and temporary artifacts.
- Stage explicit approved paths; never rely on unrestricted `git add .` when local-only files exist.
- Run `git diff --check` and a staged secret-pattern scan before commit.
- Do not commit the local absolute `docs` symlink unless repository policy changes.
- Never rewrite history or force push.

### Production verification

- After an authorized push, confirm local HEAD equals the live remote branch SHA.
- Verify the Vercel commit status and public production routes when accessible.
- Confirm production content corresponds to the deployed commit; separate an unavailable status API from an actual deployment failure.

## Scope boundaries

- Delegate brand and claim truth to `solen-review-brand-guardrails`.
- Delegate rendered viewport, CJK, keyboard, touch, and motion coverage to `solen-review-responsive-i18n`.
- Delegate product storytelling to `solen-review-product-experience`.
- Delegate editorial narrative quality to `solen-review-editorial-experience`.

## Severity

- **Critical**: Secret exposure, destructive Git action, compromised deployment, or unsafe production configuration.
- **High**: Build failure, broken primary route, incorrect production domain, indexable invalid route, failed deployment, or missing release file.
- **Medium**: Metadata/hreflang/sitemap defect, meaningful performance regression, stale remote comparison, or unsafe staging scope.
- **Low**: Non-blocking warning, local portability limitation, or optional future optimization.

## Output

Return:

1. **Result**: `PASS`, `NEEDS REVIEW`, or `FAIL`.
2. **Release scope**: Branch, diff, expected routes, locales, and deployment target.
3. **Findings**: Severity, evidence, affected files or routes, impact, and recommended fix; state `None` when empty.
4. **Validation**: Lint, TypeScript, build, diff check, route/SEO checks, performance inspection, and applicable Skill results.
5. **Git and deployment**: Commit, remote equality, Vercel result, and production URL, or clearly state not yet executed.
6. **Human review required**: Visual approval and any external facts or account settings automation cannot establish.

Use `FAIL` for unresolved Critical or High findings and `NEEDS REVIEW` for unresolved Medium findings. After fixes, rerun affected checks and label results `Before fixes` and `After fixes`.
