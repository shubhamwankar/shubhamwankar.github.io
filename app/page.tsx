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
      { name: "Micrsoft Azure", level: 70 },
      { name: "FastAPI", level: 80 },
      { name: "React", level: 60 },
    ],
    soft: [
      "Data Storytelling",
      "Problem Solving",
      "Team Collaboration",
      "Research",
      "SDLC",
      "Project Management",
    ],
  }

  // Sample data for projects section
  const projects = [
    {
      id: 1,
      title: "LLM Finetuning: Next Word Prediction",
      description:
        "Finetuned Distil-BERT model from HuggingFace for next word prediction task on a custom dataset, resulting in a Perplexity Score of 8.25",
      image: "/Next Word Prediction Project.png?height=300&width=400",
      tags: ["Python", "HuggingFace", "FastAPI",],
      github: "https://github.com/shubhamwankar/NLP_NextWordSuggestion",
      featured: true,
    },
    {
      id: 2,
      title: "Text-2-SQL LLM App",
      description: "Created a robust Text to SQL application utilizing Gemini 1.5 Flash & Langchain to transform natural language questions into SQL queries and return results as natural language responses",
      image: "/Text-2-SQL LLM Agent Project.png?height=300&width=400",
      tags: ["Python", "LangChain", "Gemini API", "Streamlit"],
      github: "https://github.com/shubhamwankar/text2sql-langchain",
    },
    {
      id: 3,
      title: "Heart Disease Prediction",
      description: "Built a state of the art Heart Disease Prediction model with Light GBM Classifier and deployed it using FastAPI",
      image: "/Heart Disease Prediction Project.png?height=300&width=400",
      tags: ["Python", "FastAPI", "EDA", "Classification"],
      github: "https://github.com/shubhamwankar/heart-disease-prediction",
    },
  ]

  // Sample data for experience section
  const experiences = [
    {
      id: 1,
      role: "AI/ML Senior Engineer",
      company: "Accenture",
      period: "2024-Present",
      description:
        "Working with a Global Banking client and building Gen AI solutions.",
      achievements: [
        "Built a Feedback writing agent using Azure Promptflow and Azure OpenAI with LLM-as-evaluator model",
        "Created a prototype for perfoming Defect Quality Check using Gen AI",
        "Implemented a semantic re-ranking RAG model for efficient retrieval of chunks leading to better quality of response",
      ],
    },
    {
      id: 2,
      role: "Data Scientist",
      company: "Invictus Performance Lab",
      period: "2023 - 2024",
      description: "Acted as Lead Data Scientist building data systems and predictive models.",
      achievements: [
        "Built an end-to-end data pipelines with Google Appscript and Python, from data ingestion to 3+ dashboards",
        "Created 5+ dashboards for Gujarat Giants (WPL) and Bengaluru Torpedoes (Prime Volleyball) providing real time actionable insights",
        "Automated 7+ daily and weekly reports cutting down manual efforts by 75%",
      ],
    },
    {
      id: 3,
      role: "Senior Risk Analyst",
      company: "Amazon",
      period: "2017-2022",
      description: "Analysed intellectual property rights risk while dealing with multiple stakeholders.",
      achievements: [
        "Optimized the Standard Operating Procedure, enhancing clarity and reducing working time by 20% through data analysis and process improvement",
        "Trained and mentored 25 junior team members, achieving an overall team productivity of 95% and a quality rating of 98%",
        "Collaborated cross-functionally to identify and mitigate risks posed by recurring bad actors, utilizing data analysis techniques to inform preventive measures",
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

