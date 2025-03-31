"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Sample data for skills section
  const skills = {
    technical: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "SQL", level: 75 },
      { name: "AWS/GCP", level: 70 },
      { name: "Docker", level: 65 },
      { name: "React", level: 60 },
    ],
    soft: [
      "Data Storytelling",
      "Problem Solving",
      "Team Collaboration",
      "Research",
      "Technical Writing",
      "Project Management",
    ],
  }

  // Sample data for projects section
  const projects = [
    {
      id: 1,
      title: "Predictive Analytics Dashboard",
      description:
        "Built an interactive dashboard for visualizing machine learning predictions with real-time data processing.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      github: "https://github.com/username/project1",
      demo: "https://demo-link.com",
      featured: true,
    },
    {
      id: 2,
      title: "Natural Language Processing System",
      description: "Developed an NLP system that analyzes customer feedback to identify trends and sentiment.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "NLTK", "spaCy", "PyTorch"],
      github: "https://github.com/username/project2",
      demo: null,
    },
    {
      id: 3,
      title: "Computer Vision Object Detection",
      description: "Created a real-time object detection system using state-of-the-art computer vision algorithms.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "OpenCV", "YOLO", "TensorFlow"],
      github: "https://github.com/username/project3",
      demo: "https://demo-link.com",
    },
  ]

  // Sample data for experience section
  const experiences = [
    {
      id: 1,
      role: "Senior Data Scientist",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead data scientist for multiple machine learning projects. Developed predictive models that increased operational efficiency by 35%.",
      achievements: [
        "Implemented a recommendation system that increased user engagement by 27%",
        "Led a team of 5 data scientists on a major NLP project",
        "Reduced model training time by 40% through optimization",
      ],
    },
    {
      id: 2,
      role: "Machine Learning Engineer",
      company: "AI Solutions Ltd.",
      period: "2018 - 2021",
      description: "Designed and implemented machine learning models for various business applications.",
      achievements: [
        "Built a fraud detection system with 94% accuracy",
        "Deployed 5+ models to production using CI/CD pipelines",
        "Mentored junior engineers on best practices in ML",
      ],
    },
    {
      id: 3,
      role: "Data Analyst",
      company: "Data Insights Corp.",
      period: "2016 - 2018",
      description: "Analyzed large datasets to extract meaningful insights for business decisions.",
      achievements: [
        "Created automated reporting dashboards used by executive team",
        "Identified patterns that led to $2M in cost savings",
        "Transitioned team from Excel-based analysis to Python",
      ],
    },
  ]

  return (
    <AnimatePresence>
      {isLoaded && (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Header />
          <Hero />
          <About />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Experience experiences={experiences} />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}

