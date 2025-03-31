"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string | null
  featured?: boolean
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful machine learning and data science projects.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Featured Project</h3>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold">{featuredProject.title}</h4>
                <p className="text-muted-foreground">{featuredProject.description}</p>

                <div className="flex flex-wrap gap-2 my-4">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-muted-foreground text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>

                  {featuredProject.demo && (
                    <Button asChild size="sm">
                      <Link href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Card className="overflow-hidden h-full border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-800 text-muted-foreground text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Link>
                    </Button>

                    {project.demo && (
                      <Button asChild size="sm">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

