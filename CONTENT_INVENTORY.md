# Portfolio content inventory

## Sources and decisions

| Content | Source | Implementation decision |
| --- | --- | --- |
| Executive evaluation case study | User-confirmed facts in PRODUCT.md | About eight minutes to under one minute; 20 executives; qualitative consistency improvement; architecture, evaluation, deployment and stakeholder ownership. No employer attribution or invented architecture. |
| Five employment entries | Original components/work-experience.tsx, copied into lib/portfolio-data.ts | Preserve titles, employers, dates and all achievements. |
| UBS reduction | Original site: 60%; resume: 75% | User explicitly chose existing site values during implementation. Keep 60%. |
| Amazon dates | Original site: Feb 2016–Sep 2022; resume: Feb 2017–Oct 2022 | User explicitly chose existing site values. Keep Feb 2016–Sep 2022. |
| Older Accenture metrics | Original site: ~75% manual effort, 80% latency improvement; resume: four minutes to one minute | Preserve older employment metrics in the experience entry. The featured case study uses the latest confirmed eight-minute to under-one-minute timing, with no inferred attribution. |
| Biography | Original components/about-me.tsx and employment timeline | Describe risk analytics, data science and production AI without treating nine years of total experience as nine years of data science or Agentic AI. |
| Education | Existing biography and resume | Master's in Data Science, Liverpool John Moores University. |
| Eleven skills | Original components/about-me.tsx | Retain every skill; replace self-rating percentages with three expertise groups. |
| Five projects | Original components/projects.tsx | Preserve purposes, model names, technology lists, perplexity result, images and repository URLs. Light copy editing only. |
| Email | Resume and existing mailto destination | Use shubhamwankar23@gmail.com consistently; remove the extra dot from the visible label. |
| Phone and social links | Original components/contact-me.tsx, navbar.tsx and footer.tsx | Preserve destinations; normalize phone URI and Twitter handle casing. |
| Resume | public/Shubham Wankar 2026.pdf | Keep downloadable original. Its source differences remain inside the PDF; do not silently revise it. |
| Imagery | Existing public portrait and five project images | Use optimized derivatives where worthwhile, keep originals and document provenance. |

## Content boundaries

Senior Data Scientist and Staff Data Scientist are target opportunities, not new employment titles. The downloadable resume's summary is not authority to claim eight years of production AI experience. Existing project and employment claims remain source content, not newly validated measurements. No new testimonials, security guarantees, technical diagrams or quantitative consistency claims were added.

The resume was read locally with macOS PDFKit. It remains unchanged. Deployment URLs have not been independently confirmed, so metadata omits absolute canonical and social image URLs.
