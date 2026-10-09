import { ArrowUp } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export default function Footer() {
  return <footer className="site-footer page-width"><p>© {new Date().getFullYear()} {profile.name}</p><a className="text-link" href="#home">Back to top <ArrowUp size={16} aria-hidden="true" /></a></footer>
}
