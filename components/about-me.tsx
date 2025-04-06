"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Python", percentage: 95 },
  { name: "Machine Learning", percentage: 90 },
  { name: "Deep Learning", percentage: 85 },
  { name: "Data Visualization", percentage: 88 },
  { name: "SQL", percentage: 80 },
  { name: "Azure", percentage: 75 },
  { name: "Prompt Engineering", percentage: 85 },
  { name: "LLM Finetuning", percentage: 75 },
  { name: "Git", percentage: 80 },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground mb-6">
              I am a passionate Data Scientist with over 7+ years of experience
              in developing AI/ML solutions for real-world problems. My
              expertise lies in building Gen AI applications, Prompt Engineering
              and LLM Finetuning. I have a strong foundation in Python and core
              machine learning and deep learning concepts.
            </p>
            <p className="text-muted-foreground mb-8">
              I hold a Master's degree in Data Science from Liverpool's John
              Moores University and have worked with leading tech companies to
              implement data-driven solutions that have significantly improved
              business outcomes.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <motion.div
                      className="bg-primary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Card className="w-full max-w-md overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/AI-Avatar.png?height=400&width=400"
                  alt="About Me"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
