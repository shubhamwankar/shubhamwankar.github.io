import { strengths, tools } from "@/lib/selected-work"

export default function Skills() {
  return <section id="skills" className="section" aria-labelledby="skills-title"><div className="page-width">
    <h2 id="skills-title">Skills</h2>
    <div className="skills-layout">
      <ul className="strengths">{strengths.map(([title, description]) => <li key={title}><b>{title}</b><span>{description}</span></li>)}</ul>
      <table className="tools-table"><caption className="sr-only">Tools and technologies by area</caption><tbody>{tools.map(([area, items]) => <tr key={area}><th scope="row">{area}</th><td>{items}</td></tr>)}</tbody></table>
    </div>
  </div></section>
}
