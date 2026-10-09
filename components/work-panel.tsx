"use client"

import { useEffect, useRef, type ReactNode } from "react"

export default function WorkPanel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element || !window.IntersectionObserver) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("in-view")
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <article ref={ref} className="work-panel" onPointerMove={event => {
    if (event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`)
  }}>{children}</article>
}
