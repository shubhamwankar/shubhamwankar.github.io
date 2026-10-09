import Image from "next/image"
import { assetPath } from "@/lib/asset-path"

export default function AboutMe() {
  return <section id="about" className="section" aria-labelledby="about-title"><div className="page-width about-layout">
    <div><h2 id="about-title">About</h2>
      <p>I'm a data scientist with 9+ years of experience. The first six were in risk and operations at Amazon, and the years since have gone into building data and GenAI systems. That background shapes how I work: I start with the process and the people who live with it, then build the simplest solution they'll trust.</p>
      <p>Recently that has meant production GenAI for a global banking client, including summarizing executive performance reviews and extracting invoice data, always with citations, structured outputs and human review where the model is least certain. Before that I built analytics for professional sports teams, where a dashboard only matters if a coach can use it before training starts.</p>
      <p>I hold a Master's in Data Science from Liverpool John Moores University.</p>
    </div>
    <Image className="about-avatar" src={assetPath("/images/shubham-avatar.webp")} alt="Illustrated avatar of Shubham Wankar" width={240} height={360} loading="lazy" />
  </div></section>
}
