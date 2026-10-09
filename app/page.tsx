import Hero from "@/components/hero"
import SelectedWork from "@/components/selected-work"
import Skills from "@/components/skills"
import WorkExperience from "@/components/work-experience"
import AboutMe from "@/components/about-me"
import ContactMe from "@/components/contact-me"
import Footer from "@/components/footer"

export default function Home() {
  return <><main id="main-content"><Hero /><SelectedWork /><Skills /><WorkExperience /><AboutMe /><ContactMe /></main><Footer /></>
}
