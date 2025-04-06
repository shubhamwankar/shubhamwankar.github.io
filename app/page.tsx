import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import WorkExperience from "@/components/work-experience"
import Projects from "@/components/projects"
import ContactMe from "@/components/contact-me"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </main>
  )
}

