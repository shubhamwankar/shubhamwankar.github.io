---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/hero.tsx","components/hero-scene.tsx","components/selected-work.tsx","components/work-panel.tsx","components/skills.tsx","components/work-experience.tsx","components/about-me.tsx","components/contact-me.tsx","components/navbar.tsx","app/globals.css","lib/selected-work.ts"]
---

# Portfolio home — October reference update

The user's updated `DESIGN.md`, `PRODUCT.md`, and `index-react.html` supersede the prior Modern Precision direction recorded below. Implement the supplied HTML directly in the existing Next.js static-export app; no new direction or mockup round is needed.

## Current direction contract

THESIS: Show messy data becoming a useful, trusted result, then make the evidence readable in three detailed case studies.

OWN-WORLD: Follow the supplied dark/light navy and blue system, amber for the manual state, Space Grotesk hero, Bricolage Grotesque headings, IBM Plex Sans body, hairline dividers and restrained panels.

STORY: Identity and resume, selected work with evaluation evidence, strengths and tools, five-role timeline, personal background and contact.

FIRST VIEWPORT: Full-height hero, small circular portrait and identity above a large left-aligned tagline, resume and work actions below, with a 784-point Three.js surface behind and to the right. Mobile places the scene above readable copy.

FORM: User-pinned code reference `index-react.html`; direct implementation. The scene transitions amber chaos into a blue ordered surface, supports scrambling, and becomes static for reduced motion. System theme with a persistent override.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## October 9 implementation record

Mode: Experience. The supplied reference has been translated into the existing Next.js 16/React 19 static export, with locally hosted fonts and Three.js `0.128.0`. `DESIGN.md`, `PRODUCT.md`, and `index-react.html` remain pinned source documents; their standalone CDN instructions describe the reference, not the repository runtime.

The page has three selected-work studies followed by skills, experience, about and contact. Source content is maintained in `lib/selected-work.ts`; former project content is preserved in source but omitted from the visible page. Section IDs are `home`, `projects`, `skills`, `experience`, `about`, and `contact`, with a `#work` alias. The hero uses a generic data-scientist title in accordance with the aspiration rule. No phone or MBA is shown.

The existing `Shubham Wankar 2026.pdf` remains the working download because the newly named resume file is absent. Resume/LinkedIn figure reconciliation remains the user's open item. System theme and a persisted `theme` override, accessible mobile navigation, scene scramble/pause controls, static reduced-motion rendering, and visible default content complete the reference's behavior in the app.

Fresh review disposition: **ship**. The independent reviewer inspected all six captures and found no material fidelity, readability, or accessibility issues. See `.impeccable/review/reference-update-review.md`. Current validation and limitations are recorded at the top of `IMPLEMENTATION_NOTES.md`. The old `.impeccable/design.json` remains unchanged and stale; it must not override the supplied design.

## Historical direction — superseded October 9

Target: `app/page.tsx`; mode: Experience. All sections share the user-approved Modern Precision direction. Approval: “I like the 1st sample. You can go ahead and implement it. I also want the rest of the portfolio in the same design.”

Approved comp: `.impeccable/mocks/modern-precision-approved.png`.

### Historical direction contract

THESIS: Make production experience legible in a short recruiter review, followed by inspectable work and personal ownership.

OWN-WORLD: White, navy type, muted steel-blue supporting text, teal actions, a pale blue featured-work band, fine rules and restrained rectangular controls. Clean sans-serif typography carries the whole page.

STORY: Understand Shubham’s expertise, see the confirmed timing improvement and scope, inspect career and projects, download the resume or get in touch.

FIRST VIEWPORT: Compact name and menu, expertise line, left-aligned production-AI heading, ownership sentence, two adjacent actions. A full-width pale blue case-study band follows. Preserve the approved composition at 390px; wider layouts increase measure and use columns where useful.

FORM: User-pinned Modern Precision, sample 1. Earlier seed `7e42049a` was superseded by the user’s request for three professional samples and explicit choice of this comp. No additional direction selection is required.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

### Historical translation notes

The comp is a mobile scroll excerpt. Extend the same system to experience, all five projects, about, expertise, contact and footer. Correct its duplicated “Selected projects” label. Keep its approved top expertise and featured-work labels. Provide theme switching and keyboard navigation as functional additions. Case study disclosure shows confirmed ownership and context without adding architecture claims. Use existing portrait and project imagery, with optimized derivatives below the opening viewport. Light is the default reference, with a complete dark alternative.

### Historical content decisions

Email resolved from resume: shubhamwankar23@gmail.com. The user confirmed keeping existing site values: UBS 60% and Amazon Feb 2016–Sep 2022. Avoid numeric tenure claims. See CONTENT_INVENTORY.md.

### Historical desktop correction

The user reported that the web layout felt skewed left. At 640px and wider, center the hero heading, description, and actions in the centered page container. Content sections retain readable left-aligned text within balanced columns.

### Historical review outcome

Visual fixes F02–F04 resolved; workflow fix F01 remains partial because strict crop vetoes keep the hero phase open despite an 83% overall match. No automated pass claimed. See IMPLEMENTATION_NOTES.md and review/verdict.md.
