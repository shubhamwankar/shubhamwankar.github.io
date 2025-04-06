"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperienceItem {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

const experiences: WorkExperienceItem[] = [
  {
    role: "Senior AI/ML Engineer",
    company: "Accenture",
    startDate: "Sep-2024",
    endDate: "Present",
    achievements: [
      "Built a Feedback writing agent using Azure Promptflow and Azure OpenAI with LLM-as-evaluator model",
      "Created a prototype for perfoming Defect Quality Check using Gen AI",
      "Implemented a semantic re-ranking RAG model for efficient retrieval of chunks leading to better quality of response",
    ],
  },
  {
    role: "Data Scientist",
    company: "Invictus Performance Labs",
    startDate: "June-2023",
    endDate: "May-2024",
    achievements: [
      "Built an end-to-end data pipelines with Google Appscript and Python, from data ingestion to 3+ dashboards",
      "Created 5+ dashboards for Gujarat Giants (WPL) and Bengaluru Torpedoes (Prime Volleyball) providing real time actionable insights",
      "Automated 7+ daily and weekly reports cutting down manual efforts by 75%",
    ],
  },
  {
    role: "Data Scientist Lead",
    company: "Zummit Infolab",
    startDate: "Jan-2023",
    endDate: "Apr-2023",
    achievements: [
      "Built a unique next word suggestion model with 90% accuracy by fine-tuning LLM (distil-BERT model) on a custom dataset",
      "Managed and mentored 30 interns to deliver 10 ready-to-deploy ML models for business use cases",
      "Built 6 state-of-the-art ML models for business use cases that are ready-to-deploy",
    ],
  },
  {
    role: "Senior Risk Analyst",
    company: "Amazon",
    startDate: "Feb-2016",
    endDate: "Sep-2022",
    achievements: [
      "Optimized the Standard Operating Procedure, enhancing clarity and reducing working time by 20% through data analysis and process improvement",
      "Trained and mentored 25 junior team members, achieving an overall team productivity of 95% and a quality rating of 98%",
      "Collaborated cross-functionally to identify and mitigate risks posed by recurring bad actors, utilizing data analysis techniques to inform preventive measures",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"></div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-semibold mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.startDate} to {exp.endDate}
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
