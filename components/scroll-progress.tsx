"use client"

import { useEffect, useRef } from "react"

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight
        ref.current?.style.setProperty("--progress", String(height > 0 ? Math.min(1, window.scrollY / height) : 0))
      })
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update) }
  }, [])
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />
}
