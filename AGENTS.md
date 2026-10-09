# Agent guidance

## Purpose and collaboration

This is Shubham Wankar's personal portfolio. Its primary goals are to attract recruiters and hiring managers for Senior Data Scientist and Staff Data Scientist roles and build his professional reputation.

- Read `PRODUCT.md` before changing content or planning the redesign. It records confirmed facts and open decisions.
- Read `IMPLEMENTATION_PLAN.md` for the redesign sequence and acceptance criteria. Treat proposed design choices there as proposals until resolved with the user.
- Build mobile-first, then enhance for tablet and desktop. Use existing project content and assets, supplemented by the user's confirmed updates.
- Ask one clarification question at a time. Carry confirmed answers forward.
- Emphasize measurable outcomes, production experience, technical judgment, and personal ownership.
- Target roles are aspirations; do not present them as current or historical job titles.
- Preserve unrelated user changes. Inspect `git status --short` before editing.

## Project structure

- `app/page.tsx`: single-page composition of hero, about, experience, projects, contact, and footer.
- `app/layout.tsx`: root layout, metadata, font, theme provider, and navigation.
- `app/globals.css`: active global styles and light/dark theme tokens.
- `styles/globals.css`: a second stylesheet exists; check imports before editing it. The root layout uses `app/globals.css`.
- `components/`: portfolio sections, navigation, icons, and theme controls. Content currently lives directly in these components.
- `components/ui/`: reusable shadcn-style components built with Radix primitives.
- `hooks/`: shared React hooks.
- `lib/utils.ts`: `cn()` combines conditional classes with Tailwind merging.
- `public/`: portraits, project images, and `Shubham Wankar 2026.pdf`.
- `.github/workflows/nextjs.yml`: builds and deploys the static export to GitHub Pages.

## Stack and conventions

The project uses Next.js App Router, React, strict TypeScript, Tailwind CSS, Framer Motion, and `next-themes`. Consult `package.json` and the lockfile for versions.

- Use the existing `@/*` import alias, mapped to the project root.
- Keep components server-renderable where possible; add `"use client"` when hooks, event handlers, or browser APIs require it.
- Reuse existing UI primitives and `cn()` where appropriate.
- Match the surrounding file's formatting; avoid unrelated formatting changes.
- Tailwind utilities are configured in `tailwind.config.ts`; PostCSS currently uses the `tailwindcss` plugin. Do not infer a Tailwind migration from the presence of `@tailwindcss/postcss` in dependencies.
- Use semantic theme tokens from `app/globals.css`; maintain legible light and dark appearances.

## Commands and validation

Use npm and preserve `package-lock.json`. CI currently uses Node 20 and `npm ci --legacy-peer-deps`.

- `npm run dev`: local development server.
- `npm run build`: production build and static export to `out/`.
- `npx --no-install tsc --noEmit`: separate TypeScript check using installed dependencies.
- `npm run lint`: currently maps to the legacy `next lint` command; do not assume it is a functioning lint check without checking the installed tooling.
- `npm run start`: maps to `next start`; deployment serves the exported `out/` directory, so use a static server to preview that output.

There is no test script configured. For implementation changes, use relevant checks and report what actually ran, including failures or limitations. Documentation-only changes do not require an application build. `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so a successful build does not establish type correctness.

## Deployment constraints

- Preserve `output: "export"` and compatibility with static GitHub Pages hosting unless the task explicitly changes deployment.
- Do not add features that require a runtime Next.js server, such as server actions or request-dependent API routes, without resolving hosting requirements.
- Images currently use `unoptimized: true`.
- Keep section links and IDs aligned: `home`, `about`, `experience`, `projects`, and `contact`. Update both navigation and destinations if the structure changes.
- Preserve working resume, contact, social, and repository links. Check asset paths, including spaces and filename case, and account for the deployment base path when changing routing.
- Pushing to `main` triggers the Pages deployment workflow. Do not push or deploy unless authorized.

## Content and design

- Use the confirmed flagship AI microservice results in `PRODUCT.md`: about eight minutes to under one minute, 20 executives supported, improved evaluation consistency, and ownership of architecture, evaluation, deployment, and stakeholder coordination.
- Do not invent quantified consistency improvements, model details, business results, testimonials, or employer attribution. Keep older repository claims distinct from newly confirmed evidence.
- Preserve existing employment history and project facts unless the user supplies corrections.
- Read the local impeccable skill at `.agents/skills/impeccable/SKILL.md` when undertaking design work. If `DESIGN.md` or a relevant surface brief exists, read it before UI edits.
- The redesign's visual direction and choice between a mockup first or direct implementation are still open; consult the latest user answers before treating either as settled.
- Support mobile and desktop layouts, keyboard navigation, visible focus, accessible control labels, meaningful image alternatives, and reduced-motion preferences.
- Keep content readable without waiting for animation. Avoid horizontal overflow and fixed navigation obscuring section headings.
- Do not commit generated build output, dependency directories, secrets, or local environment files.
