"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const dark = mounted && resolvedTheme === "dark"
  return <button className="theme-toggle" type="button" aria-label={mounted ? `Switch to ${dark ? "light" : "dark"} theme` : "Switch theme"} onClick={() => setTheme(dark ? "light" : "dark")}>
    {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}<span>Theme</span>
  </button>
}
