import { profile } from "@/lib/portfolio-data"

export default function ContactMe() {
  return <section id="contact" className="section" aria-labelledby="contact-title"><div className="page-width">
    <h2 id="contact-title">Get in touch</h2>
    <p>Hiring for a senior data or analytics role, or want to talk about a problem? Email me or find me on LinkedIn.</p>
    <div className="contact-actions"><a className="action action-primary" href={`mailto:${profile.email}`}>Email me</a><a className="action action-secondary" href={profile.linkedin}>LinkedIn</a><a className="action action-secondary" href={profile.github}>GitHub</a></div>
  </div></section>
}
