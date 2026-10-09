# Product: Shubham Wankar's portfolio

## Purpose
A one-page portfolio that helps recruiters and hiring managers for senior data and analytics roles decide quickly that Shubham is worth a conversation. It replaces an earlier template-built site that led with skill percentage bars and learning projects.

## Audience
- **Primary:** recruiters and hiring managers screening for senior roles. They skim first, then read one or two case studies closely.
- **What they need within a minute:** who he is, what he has delivered, how he thinks, and how to get his resume or contact him.

## Positioning
Senior data scientist and analytics leader, with 9+ years of experience, six of them in risk and operations at Amazon, followed by data science and GenAI work. The operations background is presented as a strength: he starts with the process and the people who live with it, then builds the simplest solution they will trust.

**Tagline:** Turning messy data into insights and impact.

## Primary action
Download the resume. Secondary actions: see the work, email, LinkedIn, GitHub.

## Page structure
1. **Hero:** photo, name, title, tagline, one-line intro, resume button.
2. **Selected work:** three case studies, each following problem, what I built, and result or how I checked it.
3. **Skills:** five core strengths plus a compact tools grid.
4. **Experience:** five roles, newest first, one line of impact each.
5. **About:** three short paragraphs.
6. **Contact:** email, LinkedIn, GitHub.

## Case studies
| Study | Role | Headline | Key proof |
|---|---|---|---|
| Executive year-end review summarizer | Senior AI/ML Engineer, Accenture, for a global banking client | ~80% less manual effort per review | 80% faster responses, 9/10 average expert score across 20 samples, used for the top 20 executives |
| Performance analytics for cricket and volleyball teams | Data Scientist, Invictus Performance Labs | ~78% less manual reporting | 7+ reports automated, 5+ live dashboards, two professional franchises |
| Invoice data extraction with LLMs | Data Science Specialist, for a global banking client | 96% average accuracy | About 75% less manual extraction time, measured on 20 invoices against the data printed on them |

Each study stresses judgment over tooling: citations and human review for the summarizer, simple Google Workspace-based capture for the sports teams, and confidence-scored routing to a person for invoices.

## Content rules
- Lead with outcomes and the decision made, then the tools.
- Use percentages and relative improvements, not absolute business figures.
- Client names inside case studies are generalized as "a global banking client."
- Keep figures identical across the site, resume and LinkedIn.
- Describe evaluation methods honestly, including sample size and who scored.
- The page does not show a phone number (it appears only on the downloadable resume) and does not mention the MBA.

## Voice and tone
Plain, specific and confident. Sentence case, active verbs, no buzzwords such as "passionate." Every claim points to evidence on the page.

## Non-goals
- No blog, no learning or tutorial projects, no self-rated skill bars.
- No contact form or backend.
- No analytics or tracking.

## Success looks like
A recruiter can state his positioning after reading the hero, open the resume within one click, and come away from one case study with a clear sense of how he handles trust, evaluation and adoption.

## Maintenance
- Content lives in four arrays at the top of the script in `index.html`: `WORK`, `STR`, `TOOLS` and `JOBS`.
- Update the resume PDF and the timeline whenever the role changes.
- Add a new case study by appending an object to `WORK`.

## Open items
- Add `Shubham_Wankar_Resume.pdf` to the repository.
- Confirm that the figures shown match the resume and LinkedIn.
