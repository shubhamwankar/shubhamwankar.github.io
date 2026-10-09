import { jobs } from "@/lib/selected-work"

export default function WorkExperience() {
  return <section id="experience" className="section" aria-labelledby="experience-title"><div className="page-width">
    <h2 id="experience-title">Experience</h2>
    <ol className="timeline">{jobs.map(([title, dates, impact]) => <li key={title}><h3>{title}</h3><p className="dates">{dates}</p><p>{impact}</p></li>)}</ol>
  </div></section>
}
