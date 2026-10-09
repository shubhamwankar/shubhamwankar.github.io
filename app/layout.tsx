import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const bodyFont = localFont({
  src: [
    { path: "../public/fonts/IBMPlexSans-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/IBMPlexSans-500.ttf", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
})
const headingFont = localFont({
  src: [
    { path: "../public/fonts/BricolageGrotesque-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/BricolageGrotesque-700.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-heading",
})
const heroFont = localFont({
  src: "../public/fonts/SpaceGrotesk-700.ttf",
  weight: "700",
  display: "swap",
  variable: "--font-hero",
})
export const metadata: Metadata = {
  title: "Shubham Wankar — Data Science & Applied AI",
  description: "Turning messy data into insights and impact. Explore Shubham Wankar’s analytics and GenAI work, with 9+ years of experience across operations and data science.",
  openGraph: {
    title: "Shubham Wankar — Data Science & Applied AI",
    description: "Explore production AI work, selected projects, and experience spanning data science and risk analytics.",
    type: "website",
  },
  twitter: { card: "summary", creator: "@shubhamwankar10" },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} ${heroFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" storageKey="theme" enableSystem disableTransitionOnChange>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
