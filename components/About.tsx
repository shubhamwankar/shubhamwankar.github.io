"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/Profile.jpg?height=400&width=300"
                alt="Professional portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Data Scientist & ML Engineer with 7+ Years of Experience
            </h3>

            <motion.p
              className="mb-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm passionate about solving complex problems using data science and machine learning. My journey in the
              field of AI began with a deep curiosity about how algorithms can learn from data and make predictions that
              drive business value.
            </motion.p>

            <motion.p
              className="mb-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With expertise in predictive modeling, natural language processing, and computer vision, I've helped
              organizations across various industries leverage their data to gain competitive advantages, optimize
              operations, and enhance customer experiences.
            </motion.p>

            <motion.p
              className="mb-6 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              My approach combines technical rigor with a strong focus on business impact. I believe that the most
              valuable AI solutions are those that can be effectively implemented, clearly explained, and deliver
              tangible results.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div>
                <h4 className="font-semibold text-lg mb-2">Education</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>M.S. in Data Science, Liverpool John Moores University (2021-2023)</li>
                  <li>PG.D in Data Science, IIIT-B (2020-2021)</li>
                  <li>B.Tech. in Mechanical Engineering, Jawaharlal Nehru Technology University (2012-2016)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Interests</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Deep Reinforcement Learning</li>
                  <li>Agentic AI</li>
                  <li>RAG</li>
                  <li>Prompt Engineering</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

