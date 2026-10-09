# Portfolio implementation handoff

## Current update — October 9, 2026

The updated user-supplied `DESIGN.md`, `PRODUCT.md`, and `index-react.html` define the current portfolio. The implementation follows that reference in the existing Next.js app. The Modern Precision handoff below is historical; its composition, project count, screenshots, preview address, and review result do not describe this update.

### Delivered and adapted

- The page now presents the full-height data-surface hero, three detailed selected-work studies, five core strengths and a tools table, five-role experience timeline, about section, contact links, and footer. The navy/blue and amber themes, Space Grotesk hero, Bricolage Grotesque headings, and IBM Plex Sans body follow the supplied reference. Fonts are hosted locally.
- Next.js 16.2.4 and React 19.2.5 remain in place with `output: "export"`, unoptimized images, and GitHub Pages base-path handling. The reference's standalone React 18/htm/CDN setup is translated into repository components; it is not the deployed runtime. Three.js and its types are pinned to `0.128.0`.
- `lib/selected-work.ts` contains the supplied `WORK`, `STR`, `TOOLS`, and `JOBS` data. The earlier projects remain in source for preservation but are no longer rendered; the visible page contains no learning/tutorial project list. The hero says “Data scientist & analytics leader,” preserving the rule that target Senior/Staff roles are aspirations rather than claimed job titles.
- Destinations are `home`, `projects`, `skills`, `experience`, `about`, and `contact`; `#work` remains an alias for the selected-work section. The navigation and hero action target the current IDs.
- The theme follows the system initially and persists explicit choices under `theme`. The mobile menu has accessible labels, expanded state, Escape closure and focus restoration. The page includes a skip link, visible keyboard focus, and meaningful portrait/avatar alternatives.
- The decorative Three.js scene uses 784 round points and the supplied chaos-to-order surface, with keyboard-accessible scramble and pause controls. It is ordered and static under reduced motion. Case-study content is visible by default; entrance movement, pointer spotlight, avatar float, and smooth scrolling respect reduced motion. The readable page remains available when WebGL or its deferred chunk is unavailable.
- The about avatar uses `public/images/shubham-avatar.webp` (34,850 bytes), with provenance metadata; the original asset is retained. Existing portrait, original images, and resume are preserved. No phone number or MBA is shown on the page.

### Checks actually run for this update

The implementation agent ran the following checks. Documentation review separately checked the current source files, dependency/font declarations, section composition, scene and menu controls, asset size, and the historical sidecar; it did not rerun application checks.

| Check | Result |
| --- | --- |
| `npx --no-install tsc --noEmit` | Pass |
| `npm run build` | Pass after allowing the Turbopack worker port outside the sandbox |
| `git diff --check` | Pass |
| Export asset/anchor inspection | All 18 local asset references, all section anchors, and the PDF resolve; no `tel:` destination |
| Browser widths | 320, 390, 768, and 1440px: no horizontal overflow |
| Themes and imagery | Both themes inspected; portrait and avatar loaded |
| Scene controls | Scramble/settle and pause/play worked |
| Mobile menu | Escape closes the menu |
| Browser console | No captured errors during inspected interactions |
| Reduced motion | Source-reviewed only; the browser interface did not expose media-preference emulation |
| `npm run lint` | Fails: the existing `next lint` script is unsupported by Next.js 16 |
| Fresh design review | **Ship**: independent review of all six captures found no material fidelity, readability, or accessibility issues; see `.impeccable/review/reference-update-review.md` |

### Open items and source authority

- `Shubham_Wankar_Resume.pdf`, named by the supplied reference, is absent. Download links continue to use the existing `public/Shubham Wankar 2026.pdf`. Add the new resume when available; do not substitute a broken download path.
- The user still needs to confirm that the supplied figures match the resume and LinkedIn. The visible case-study figures follow the newly supplied content; this handoff does not claim that cross-source confirmation has happened.
- `DESIGN.md` and `PRODUCT.md` are preserved verbatim as the user's pinned documents. Their standalone-file implementation/maintenance notes describe the reference; the repository adaptation is recorded here rather than rewriting those sources.
- `.impeccable/design.json` still describes the October 7 Modern Precision system (including Cambay and teal). This is pre-existing sidecar drift, not current design authority. It was reported and left unchanged because sidecar repair was not requested. `IMPLEMENTATION_PLAN.md` also records the earlier redesign sequence; this dated update and the current surface contract distinguish the newly supplied direction from that history.
- Nothing was committed, pushed, or deployed as part of this update. For local work use `npm run dev`; deployment serves the exported `out/` directory. The historical preview address below is not a claim that a current preview server is running there.

---

## Historical handoff — October 7 Modern Precision implementation

### Delivered

- Modern Precision across the introduction, featured work, five projects, five employment entries, about/expertise, contact, and footer.
- Centered desktop hero and centered 1120px content containers; left-aligned phone layout.
- Confirmed flagship evidence kept separate from existing employment claims. UBS remains 60%; Amazon remains Feb 2016–Sep 2022, following the user's decision.
- Corrected visible email to match the resume and mailto destination.
- Native case-study/project disclosures, keyboard menu with Escape/focus restoration, visible focus, skip link, and light/dark/system appearance.
- Static sections render on the server; essential content does not wait for animations. Reduced-motion CSS disables transitions and smooth scrolling.
- Locally hosted Cambay, optimized WebP copies of existing images, original assets/resume preserved.
- Static export retained. GitHub Pages base path is supplied to both Next routes and public assets through NEXT_PUBLIC_BASE_PATH.
- Existing TypeScript compatibility errors fixed in the theme provider, calendar, chart, and resizable wrappers. The build no longer ignores type errors.

### Checks actually run

| Check | Result |
| --- | --- |
| `npx --no-install tsc --noEmit` | Pass, including final changes |
| `npm run build` | Pass after allowing Turbopack's local worker port outside the sandbox |
| `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build` | Pass, including final changes |
| Export asset/anchor inspection | 19 prefixed asset URLs and 9 anchor links resolve within the export |
| Browser widths | 320, 390, 768, 1440px: no horizontal overflow; centered wider hero |
| Light/dark captures | Phone and desktop inspected; portrait loaded |
| Mobile keyboard menu | Enter opens, Escape closes and restores button focus; section navigation closes menu |
| Case/project disclosures | Keyboard opening works; all five project images load in the subpath export |
| Resume | Download succeeded from the subpath export |
| Contact/repository/social links | Existing destinations preserved; email/tel normalized. External account/repository availability was not checked over the network |
| Focus | Visible outline confirmed when tabbing from resume to contact action |
| Browser console | No captured errors or warnings during inspected interactions |
| Reduced motion | CSS inspected; OS preference emulation was not available in the browser control interface |
| `git diff --check` | Pass |
| `npm run lint` | Fails: existing `next lint` command is unsupported by installed Next.js 16; no ESLint setup installed |

### Design review

The reviewer scored mobile spacing, inset divider/color correction, and retention of the approved labels resolved. The user's desktop centering correction remains in place. At 390px the featured band starts at 354.7px and ends at 785.4px, close to the normalized approved reference.

The review disposition is **fix**, solely because the automated workflow has not closed. The approved original was preserved and normalized to 390×1050 for a valid comparison. The latest unique capture scores 83% overall (match), but strict region crops still veto visibly present text and documented content adaptations. The hero phase remains open; no forced or false pass was recorded. See `.impeccable/review/verdict.md`, `hero-final.png`, and `diff/final-corrected/`. Earlier same-filename comparisons were stale; the unique final capture is the current comparison evidence.

### Preview and deployment

- Development: `npm run dev`, then http://localhost:3000.
- Current local static preview: http://localhost:3001/portfolio/ (temporary local server; exported with `/portfolio` to verify project Pages paths).
- For a root-hosted export, run `npm run build` without NEXT_PUBLIC_BASE_PATH.
- The Pages workflow obtains the actual base path from `actions/configure-pages`.
- Nothing was committed, pushed, or deployed. Existing user changes to package.json, package-lock.json, and tooling directories were preserved.
