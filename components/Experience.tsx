"use client"

import { motion } from "framer-motion"
import { Briefcase, Award } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
}

interface ExperienceProps {
  experiences: Experience[]
}

export default function Experience({ experiences }: ExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in the field of data science and machine learning.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="relative pl-8 pb-12"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
              )}

              {/* Timeline circle */}
              <div className="absolute left-0 top-2 size-6 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="size-3 text-white" />
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <span className="text-sm text-muted-foreground">{experience.period}</span>
                </div>

                <div className="mb-4">
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {experience.company}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{experience.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <Award className="size-4 mr-2 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1 ml-6 list-disc text-sm text-muted-foreground">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

