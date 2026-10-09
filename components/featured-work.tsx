import { ArrowRight, Plus } from "lucide-react"

export default function FeaturedWork() {
  return (
    <section id="work" className="featured" aria-labelledby="work-title">
      <div className="page-width">
        <p className="section-label">Featured work</p>
        <div className="featured-layout">
          <div>
            <h2 id="work-title">Executive evaluation</h2>
            <p className="feature-description">An AI microservice generating performance ratings and summaries from feedback and KPIs.</p>
          </div>
          <div className="feature-evidence">
            <div className="timing" aria-label="Processing time reduced from about eight minutes to under one minute">
              <div><span>Previous service</span><strong>~8 min</strong></div>
              <ArrowRight aria-hidden="true" size={24} />
              <div><span>New service</span><strong>&lt;1 min</strong></div>
            </div>
            <div className="feature-scope"><p className="section-label">Scope</p><p>20 executives supported.</p></div>
            <div className="feature-consistency"><p className="section-label">Result</p><p>More consistent evaluations across feedback and KPIs.</p></div>
          </div>
        </div>
        <details className="case-study">
          <summary>View case study <Plus size={18} aria-hidden="true" /></summary>
          <div className="case-study-content">
            <div><h3>The challenge</h3><p>Generate performance ratings and summaries from multiple feedback inputs and KPIs, while improving processing time and evaluation consistency.</p></div>
            <div><h3>My ownership</h3><p>I owned the architecture, model evaluation, deployment, and stakeholder coordination for the production AI microservice.</p></div>
            <div><h3>The outcome</h3><p>Processing fell from about eight minutes to under one minute. The service supported 20 top-level executives and improved consistency across evaluations.</p></div>
          </div>
        </details>
      </div>
    </section>
  )
}
