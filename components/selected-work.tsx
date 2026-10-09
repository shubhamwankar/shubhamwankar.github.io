import { selectedWork } from "@/lib/selected-work"
import WorkPanel from "@/components/work-panel"

export default function SelectedWork() {
  return (
    <section id="projects" className="section" aria-labelledby="work-title">
      <div className="page-width">
        <span id="work" className="anchor-alias" aria-hidden="true" />
        <h2 id="work-title">Selected work</h2>
        {selectedWork.map((work, index) => (
          <WorkPanel key={work.t}>
            <div className="work-result"><p className="result-number">{work.n}%</p><p className="result-label">{work.l}</p><ul className="proof-list">{work.f.map(fact => <li key={fact}>{fact}</li>)}</ul></div>
            <div className="work-story">
              <h3>{work.t}</h3><p className="role">{work.r}</p>
              <h4>The problem</h4><p>{work.p}</p>
              <h4>What I built</h4><ul>{work.b.map(item => <li key={item}>{item}</li>)}</ul>
              {index === 0 && <p className="ownership">I owned architecture, evaluation, deployment and stakeholder coordination.</p>}
              <h4>{work.h}</h4><p>{work.x}</p>
            </div>
          </WorkPanel>
        ))}
      </div>
    </section>
  )
}
