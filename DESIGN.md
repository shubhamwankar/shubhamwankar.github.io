# Design: Shubham Wankar's portfolio

## Direction
Modern and bold: a dark theme, subtle motion and data-visualization flair. The signature element is a Three.js hero scene that acts out the tagline, with scattered dots settling into an ordered data surface. Everything else stays quiet and disciplined so the scene and the case studies carry the page.

## Color tokens
| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#0c1117` | `#f5f7fa` | Page background |
| `--panel` | `#141b24` | `#ffffff` | Case study panels |
| `--line` | `#243040` | `#d9e0e8` | Borders and dividers |
| `--text` | `#e8edf3` | `#0e1620` | Body text |
| `--muted` | `#8d9aac` | `#566377` | Secondary text |
| `--blue` | `#6aa5ff` | `#1f6feb` | Primary accent: links, buttons, headline numbers |
| `--amber` | `#ffb454` | `#c77700` | "Messy data" highlight and the scattered dots |

Amber means the messy, manual state and blue means the ordered result. The theme follows the system setting until the visitor uses the toggle, and the choice is saved in `localStorage` under `theme`.

## Typography
- **Hero headline:** Space Grotesk 700, `clamp(2.5rem, 6.4vw, 4.4rem)`, tight tracking.
- **Other headings:** Bricolage Grotesque 500 and 700.
- **Body:** IBM Plex Sans 400 and 500 at 17px with a 1.6 line height.
- Body lines stay under about 66 characters. Text is sentence case throughout, with no all-caps labels.

## Layout
- Single column, left aligned, content width 1040px with 24px side padding.
- Sections are separated by hairline borders with 84px vertical padding (60px on mobile).
- The hero is full height. Text sits on the left over a fade from the page color, and the 3D scene fills the area behind it and sits to the right.
- Case studies are panels with a two-column grid (220px result column, then the story). They stack on screens narrower than 820px.
- Skills split into strengths on the left and a tools table on the right.
- Experience is a vertical timeline, the only numbered-sequence-like element, because the content is genuinely chronological.
- About places the text beside the avatar, which stacks on mobile.

## Hero scene (Three.js)
- **Points:** a 28 by 28 grid, 784 points, drawn as round sprites from a canvas-generated texture (size 0.17, alpha test 0.5).
- **Chaos state:** random positions in a flattened sphere with radius 4 to 11.
- **Order state:** a surface at 0.55 spacing, height `sin(0.9x) * cos(0.9z) * 1.3` plus a Gaussian hump of 2.2, offset by -1.
- **Motion:** on load the points ease from chaos to order. A gentle wave runs through the surface, and the group rotates slowly and follows the pointer.
- **Color:** each point blends amber to blue as it settles, with taller points turning blue first.
- **Interaction:** clicking the scene toggles between scrambled and ordered. The text layer ignores pointer events except on links and buttons, so clicks reach the canvas.
- **Responsive:** the scene shifts right on desktop and sits above the text on narrow screens. Pixel ratio is capped at 2.
- **Fallback:** if WebGL is unavailable the scene is simply omitted. With reduced motion enabled the surface renders ordered and static.

## Motion
| Element | Behavior | Purpose |
|---|---|---|
| Hero scene | Chaos to order on load, rotation, pointer parallax | The one memorable moment |
| Scroll progress bar | Gradient bar along the top edge | Orientation |
| Case study panels | Slide in once on scroll, plus a cursor-following spotlight on hover | Draw attention and show what is interactive |
| Timeline dots | Fill with blue on hover | Feedback |
| Avatar | Slow vertical float | Light life |

All animation respects `prefers-reduced-motion`: reveals show immediately, the float stops and smooth scrolling is disabled.

## Accessibility
- Visible keyboard focus on all controls, with sufficient text contrast in both themes.
- The 3D canvas is decorative and marked `aria-hidden`.
- Meaningful alt text on the photo and avatar, and a labeled theme toggle.
- Semantic landmarks: header, main, sections and footer.

## Implementation
- **Stack:** React 18.3.1, Three.js r128, and `htm` 3.1.1 for JSX-like templates, all loaded from CDNs at pinned versions. There is no build step, so the file works on GitHub Pages as is.
- **Components:** `Scene` (Three.js), `Reveal` and `useInView` (scroll reveal), and `App` (page and theme toggle).
- **Content:** data arrays `WORK`, `STR`, `TOOLS` and `JOBS` at the top of the script.
- **Assets** (same folder as `index.html`): `IMG_3225.JPG`, `AI-Avatar.png` and `Shubham_Wankar_Resume.pdf`.
- **Deploy:** rename `index-react.html` to `index.html` and push to the GitHub Pages repository.

## Decisions
- Replaced skill percentage bars with a core strengths list and a tools grid.
- Replaced the stats strip below the hero with nothing, because it duplicated the case study headlines and felt flat.
- Chose solid amber for "messy data" over a gradient, so the word matches the scattered dots.
- Used round points because square sprites looked crude.

## Possible next steps
- Apply Space Grotesk to the other headings for consistency.
- Move to a Vite project with separate component files if the site grows.
- Add a short case study page per project with diagrams.
- Add Open Graph tags and a preview image for link sharing.
