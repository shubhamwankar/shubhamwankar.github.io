"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Pause, Play, Shuffle } from "lucide-react"

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useRef({ target: 1, paused: false, reduced: false })
  const [ready, setReady] = useState(false)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [ordered, setOrdered] = useState(true)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const element = ref.current
    if (!element || !resolvedTheme) return
    let disposed = false
    let cleanup = () => {}
    setReady(false)

    // The decorative scene loads separately from the readable, server-rendered page.
    import("three").then(THREE => {
      if (disposed) return
      let renderer: import("three").WebGLRenderer
      try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }) }
      catch { return }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      element.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100)
      camera.position.set(0, 3.5, 15)
      camera.lookAt(0, 0, 0)
      const grid = 28, count = grid * grid
      const chaos = new Float32Array(count * 3)
      const order = new Float32Array(count * 3)
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      for (let i = 0; i < grid; i++) for (let j = 0; j < grid; j++) {
        const k = (i * grid + j) * 3, x = (i - grid / 2) * 0.55, z = (j - grid / 2) * 0.55
        order[k] = x
        order[k + 2] = z
        order[k + 1] = Math.sin(x * 0.9) * Math.cos(z * 0.9) * 1.3 + Math.exp(-(x * x + z * z) / 18) * 2.2 - 1
        const u = Math.random() * Math.PI * 2, v = Math.acos(2 * Math.random() - 1), radius = 4 + Math.random() * 7
        chaos[k] = radius * Math.sin(v) * Math.cos(u)
        chaos[k + 1] = radius * Math.sin(v) * Math.sin(u) * 0.7
        chaos[k + 2] = radius * Math.cos(v)
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
      const sprite = document.createElement("canvas")
      sprite.width = sprite.height = 64
      const context = sprite.getContext("2d")
      if (!context) { geometry.dispose(); renderer.dispose(); renderer.domElement.remove(); return }
      context.beginPath()
      context.arc(32, 32, 30, 0, Math.PI * 2)
      context.fillStyle = "#fff"
      context.fill()
      const texture = new THREE.CanvasTexture(sprite)
      const material = new THREE.PointsMaterial({ size: 0.17, map: texture, alphaTest: 0.5, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false })
      const points = new THREE.Points(geometry, material)
      scene.add(points)
      const amber = new THREE.Color(resolvedTheme === "dark" ? "#ffb454" : "#c77700")
      const blue = new THREE.Color(resolvedTheme === "dark" ? "#6aa5ff" : "#1f6feb")
      const color = new THREE.Color()
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
      controls.current.reduced = motion.matches
      setReduced(motion.matches)
      let progress = motion.matches ? 1 : 0, time = 0, last = 0, frame = 0
      let pointerX = 0, pointerY = 0, visible = true

      const render = (now: number) => {
        frame = 0
        const state = controls.current
        const moving = !state.reduced && !state.paused
        const delta = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60
        last = now
        if (moving) {
          time += delta
          progress += (state.target - progress) * (1 - Math.exp(-1.52 * delta))
        } else if (state.reduced) progress = 1
        const ease = progress * progress * (3 - 2 * progress)
        for (let i = 0; i < count; i++) {
          const k = i * 3
          positions[k] = chaos[k] + (order[k] - chaos[k]) * ease
          positions[k + 2] = chaos[k + 2] + (order[k + 2] - chaos[k + 2]) * ease
          const wave = state.reduced ? 0 : Math.sin(time * 1.4 + order[k] * 0.8 + order[k + 2] * 0.6) * 0.22 * ease + Math.sin(time + i) * 0.08 * (1 - ease)
          positions[k + 1] = chaos[k + 1] + (order[k + 1] - chaos[k + 1]) * ease + wave
          color.copy(amber).lerp(blue, Math.min(1, ease * (0.55 + (order[k + 1] + 1.2) / 4)))
          colors[k] = color.r; colors[k + 1] = color.g; colors[k + 2] = color.b
        }
        geometry.attributes.position.needsUpdate = true
        geometry.attributes.color.needsUpdate = true
        if (state.reduced) { points.rotation.y = 0.5; points.rotation.x = 0 }
        else if (moving) { points.rotation.y = time * 0.12 + pointerX * 0.6; points.rotation.x = pointerY * 0.25 }
        renderer.render(scene, camera)
        if (moving && visible && !document.hidden) frame = requestAnimationFrame(render)
      }
      const wake = () => { if (!frame && visible && !document.hidden) { last = 0; frame = requestAnimationFrame(render) } }
      const resize = () => {
        const width = element.clientWidth, height = element.clientHeight
        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        points.position.x = width < 820 ? 0 : 4.4
        points.position.y = width < 820 ? 1 : 0
        wake()
      }
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse" || controls.current.reduced) return
        const rect = element.getBoundingClientRect()
        pointerX = (event.clientX - rect.left) / rect.width - 0.5
        pointerY = (event.clientY - rect.top) / rect.height - 0.5
      }
      const changeMotion = () => {
        controls.current.reduced = motion.matches
        setReduced(motion.matches)
        wake()
      }
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        if (visible) wake()
        else { cancelAnimationFrame(frame); frame = 0 }
      })
      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(element)
      observer.observe(element)
      element.addEventListener("pointermove", move)
      element.addEventListener("scene-change", wake)
      motion.addEventListener("change", changeMotion)
      document.addEventListener("visibilitychange", wake)
      resize()
      setReady(true)
      cleanup = () => {
        cancelAnimationFrame(frame)
        observer.disconnect(); resizeObserver.disconnect()
        element.removeEventListener("pointermove", move)
        element.removeEventListener("scene-change", wake)
        motion.removeEventListener("change", changeMotion)
        document.removeEventListener("visibilitychange", wake)
        geometry.dispose(); material.dispose(); texture.dispose(); renderer.dispose()
        renderer.domElement.remove()
      }
    }).catch(() => { /* The page remains usable when the decorative chunk cannot load. */ })
    return () => { disposed = true; cleanup() }
  }, [resolvedTheme])

  const scramble = () => {
    if (controls.current.reduced) return
    controls.current.target = controls.current.target ? 0 : 1
    controls.current.paused = false
    setPaused(false)
    setOrdered(Boolean(controls.current.target))
    ref.current?.dispatchEvent(new Event("scene-change"))
  }
  return <>
    <div ref={ref} className="hero-scene" aria-hidden="true" onClick={scramble} />
    {ready && !reduced && <div className="scene-controls">
      <button type="button" onClick={scramble}><Shuffle size={14} aria-hidden="true" />{ordered ? "Scramble the dots" : "Settle into order"}</button>
      <button type="button" aria-label={paused ? "Play scene animation" : "Pause scene animation"} onClick={() => {
        controls.current.paused = !controls.current.paused
        setPaused(controls.current.paused)
        ref.current?.dispatchEvent(new Event("scene-change"))
      }}>{paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}</button>
    </div>}
  </>
}
