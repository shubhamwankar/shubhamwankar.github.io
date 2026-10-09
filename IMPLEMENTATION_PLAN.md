# Portfolio redesign implementation plan

Status: implementation delivered for review. Modern Precision (sample 1) is applied across the portfolio, including the requested desktop centering correction. TypeScript and static export checks pass. See IMPLEMENTATION_NOTES.md for results and the remaining lint/design-gate tooling limitations.

## Goal and requirements

Build a mobile-first portfolio that helps recruiters and hiring managers evaluate Shubham Wankar for Senior Data Scientist and Staff Data Scientist roles, while strengthening his professional reputation.

- Lead with evidence of production delivery, measurable results, and end-to-end ownership.
- Use the existing project content and assets, supplemented by confirmed facts in `PRODUCT.md`.
- Keep Next.js App Router, TypeScript, Tailwind, existing reusable components, and static GitHub Pages hosting.
- Preserve resume access, contact and social links, project repository links, and light/dark theme support.
- Ask clarification questions one at a time when a decision materially affects the work.

## 1. Consolidate content and resolve factual conflicts

Read the existing sources together before rewriting public copy:

| Source | Use |
| --- | --- |
| `PRODUCT.md` | Confirmed audience, target roles, mobile-first requirement, and flagship results |
| `components/about-me.tsx` | Biography, education, and existing skills |
| `components/work-experience.tsx` | Titles, employers, dates, and work achievements |
| `components/projects.tsx` | Five existing projects, descriptions, technologies, images, and GitHub links |
| `components/contact-me.tsx`, `components/navbar.tsx` | Contact and social destinations |
| `public/Shubham Wankar 2026.pdf` | Resume content and downloadable asset; extract and reconcile before changing career claims |
| `public/` | Existing portrait and project imagery |

Move reusable portfolio data into a typed module such as `lib/portfolio-data.ts` so sections and navigation share the same source. Preserve all existing projects and employment entries; use hierarchy to distinguish featured work from supporting material.

Resolve these content issues during implementation:

- Keep the confirmed processing-time change, about eight minutes to under one minute, distinct from older manual-effort and latency percentages in the Accenture entry.
- The current contact label and `mailto:` destination differ. Compare repository and resume evidence, then ask for the correct address only if it remains ambiguous.
- Reconcile biography wording about years of experience with the career timeline; distinguish total career experience from data science experience.
- Preserve factual titles and dates. Do not turn a target Staff role into an employment claim.

Deliverable: a source-backed content inventory and consistent typed content data.

## 2. Resolve visual direction

Resolved: the user chose mockup review, approved Modern Precision (sample 1), and authorized implementation across the entire portfolio. Preserve its typography, white/navy/teal palette, pale blue feature section, restrained controls and mobile reading order.

Develop the selected direction around the mobile experience and actual work evidence. If using mockups, make the phone composition the primary reference. Record the selected visual system in `DESIGN.md` and the relevant surface brief through the skill workflow before UI implementation.

Deliverable: a selected visual direction covering typography, color, spacing, imagery, interaction, and wider-screen adaptation.

## 3. Implement the mobile page structure

Proposed order, to be refined with the selected direction:

1. **Introduction (`home`):** name, concise evidence-backed positioning, an introduction to the flagship result, and clearly labeled resume and contact actions. Keep the message readable immediately.
2. **Featured production work:** an executive evaluation case study explaining the problem, personal ownership, and results. Give it its own navigation destination if it becomes a separate section.
3. **Experience (`experience`):** a compact career history highlighting existing production, leadership, mentoring, and business achievements.
4. **Selected projects (`projects`):** retain the five existing projects, with clear purpose, technology context, and repository links. Give the most relevant work greater prominence.
5. **About and expertise (`about`):** concise biography, education, portrait, and skill groups grounded in existing content. Replace self-rated skill percentages with demonstrated areas of expertise while preserving the underlying skill list.
6. **Contact (`contact`) and footer:** an explicit invitation to discuss relevant roles, supported by existing contact and social links.

Build the flagship case study from confirmed information only:

- Production AI microservice generating executive performance ratings and summaries from feedback and KPIs.
- Processing time reduced from about eight minutes to under one minute.
- Support for 20 top-level executives.
- Improved consistency described qualitatively.
- Ownership of architecture, model evaluation, deployment, and stakeholder coordination.

Add technical details or diagrams only where existing files or user answers substantiate them. An accurate concise case study is sufficient when deeper evidence is unavailable.

Main files: `app/page.tsx`, portfolio section components, a new featured-work component, and shared content data.

## 4. Build responsive layout and interactions

- Start with a single-column phone layout and unprefixed mobile styles. Introduce wider layouts only when the content benefits.
- Support narrow screens from 320 CSS pixels; use a representative 390-pixel phone viewport as the primary design reference.
- Keep text and primary actions prominent in the first viewport; size the portrait so it does not dominate the phone screen.
- Use comfortable touch targets, generally at least 44 by 44 CSS pixels, with visible focus and accessible names.
- Make the mobile menu keyboard-accessible; expose expanded state, support Escape, and close it after section navigation.
- Add anchor scroll offsets for fixed navigation and keep IDs aligned with all navigation links.
- Keep resume and contact actions accessible without hover. Use an ordinary link to the existing resume where possible.
- Scale project images without distortion, reserve their layout space, and defer loading images below the initial viewport.
- Support light and dark themes, reduced motion, long titles, and long URLs without overflow.

Main files: `components/navbar.tsx`, `components/hero.tsx`, section components, `app/globals.css`, and `tailwind.config.ts` as needed.

## 5. Complete performance, metadata, and static compatibility

- Use server components for static sections where possible; isolate client-side theme, menu, and motion behavior.
- Keep animation restrained and ensure meaningful content is visible without waiting for it.
- Reuse existing imagery and create optimized derivatives only where justified; keep original assets intact.
- Update title, description, and social metadata using actual portfolio content. Set absolute canonical or social URLs only after verifying the deployment URL.
- Preserve static export, unoptimized-image compatibility, and GitHub Pages asset paths. Do not introduce a server-dependent contact form.
- Keep dependency and lockfile changes limited to actual implementation needs.

Main files: `app/layout.tsx`, `next.config.mjs` only if necessary, assets, and relevant components.

## 6. Validate and hand off

For the implementation, run the separate TypeScript check and production build. Inspect the installed lint tooling before relying on the existing lint script; report a tooling gap explicitly if it remains. A passing build alone is insufficient because the current configuration ignores TypeScript build errors.

Inspect phone, tablet, and desktop layouts in a bounded review pass, including a narrow 320-pixel screen and representative 390-, 768-, and 1440-pixel widths. Include both themes, keyboard navigation, reduced motion, menu operation, all section anchors, resume download, contact links, and repository links. Fix findings in a batch and confirm the changes through the skill's review workflow.

Acceptance criteria:

- The phone experience communicates identity, relevant expertise, and a concrete result before requiring a long scroll.
- No horizontal overflow, clipped content, obscured anchor headings, or hover-only essential actions.
- The flagship case study reflects confirmed outcomes and personal ownership without unsupported technical or business claims.
- All existing career and project facts remain available, with conflicts resolved or explicitly left open.
- Resume, contact, navigation, and external links work in the exported site.
- TypeScript and static build results are reported accurately, with unresolved issues identified.
- The selected design system and implementation documentation reflect what was delivered.

Deliver a concise summary of changes, preview instructions, validation results, and any remaining limitations. Publishing is a separate action requiring authorization.
