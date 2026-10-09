"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import ScrollProgress from "@/components/scroll-progress"
import { navigation, profile } from "@/lib/portfolio-data"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus() }
    }
    function onResize() { if (window.innerWidth >= 820) setOpen(false) }
    document.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [open])
  return (
    <header className="site-header">
      <ScrollProgress />
      <div className="header-inner page-width">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>{profile.name}</a>
        <nav aria-label="Main navigation" id="main-navigation" className={`main-navigation ${open ? "is-open" : ""}`}>
          {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <div className="mobile-theme"><span>Appearance</span><ModeToggle /></div>
        </nav>
        <div className="desktop-theme"><ModeToggle /></div>
        <button ref={menuButton} className="icon-button menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
