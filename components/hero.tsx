import Image from "next/image"
import { Download } from "lucide-react"
import { assetPath } from "@/lib/asset-path"
import { profile } from "@/lib/portfolio-data"
import HeroScene from "@/components/hero-scene"

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <HeroScene />
      <div className="page-width hero-copy">
        <div className="who">
          <Image src={assetPath("/images/shubham-wankar.webp")} alt="Portrait of Shubham Wankar" width={60} height={60} priority />
          <div><b>{profile.name}</b><span>Data scientist &amp; analytics leader · 9+ years</span></div>
        </div>
        <h1 id="hero-title">Turning <em>messy data</em> into insights and impact</h1>
        <p className="hero-description">I build analytics and GenAI systems that replace manual work with something people trust.</p>
        <div className="hero-actions">
          <a className="action action-primary" href={assetPath(profile.resume)} download>Download resume <Download size={17} aria-hidden="true" /></a>
          <a className="action action-secondary" href="#projects">See the work</a>
        </div>
      </div>
    </section>
  )
}
