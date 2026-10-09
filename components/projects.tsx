import Image from "next/image"
import { ArrowUpRight, Plus } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { assetPath } from "@/lib/asset-path"

export default function Projects() {
  return (
    <section id="projects" className="section page-width" aria-labelledby="projects-title">
      <div className="section-heading"><h2 id="projects-title">Selected projects</h2><p>Applied AI, language models, and predictive analytics.</p></div>
      <div className="project-list">
        {projects.map(project => (
          <details className="project" key={project.title}>
            <summary><div><h3>{project.title}</h3><p className="project-technologies">{project.technologies.join(" · ")}</p></div><Plus size={21} aria-hidden="true" /></summary>
            <div className="project-content">
              <div><p>{project.description}</p><a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View repository<span className="sr-only"> for {project.title} (opens in a new tab)</span><ArrowUpRight size={18} aria-hidden="true" /></a></div>
              <Image src={assetPath(project.image)} width={640} height={project.imageHeight || 427} alt={project.imageAlt || `Illustration for ${project.title}`} className="project-image" loading="lazy" />
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
