"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Text-2-SQL LLM App",
    description:
      "Created a robust Text to SQL application utilizing Gemini 1.5 Flash & Langchain to transform natural language questions into SQL queries and return results as natural language responses",
    image: "/Text-2-SQL LLM Agent Project.png?height=300&width=400",
    technologies: ["Python", "LangChain", "Gemini API", "Streamlit"],
    githubUrl: "https://github.com/shubhamwankar/text2sql-langchain",
  },
  {
    title: "LLM Finetuning: Next Word Prediction",
    description:
      "Finetuned Distil-BERT model from HuggingFace for next word prediction task on a custom dataset, resulting in a Perplexity Score of 8.25",
    image: "/Next Word Prediction Project.png?height=300&width=400",
    technologies: ["Python", "HuggingFace", "FastAPI"],
    githubUrl: "https://github.com/shubhamwankar/NLP_NextWordSuggestion",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Built a state of the art Heart Disease Prediction model with Light GBM Classifier and deployed it using FastAPI",
    image: "/Heart Disease Prediction Project.png?height=300&width=400",
    technologies: ["Python", "FastAPI", "EDA", "Classification"],
    githubUrl: "https://github.com/shubhamwankar/heart-disease-prediction",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Performed RFM Analysis and built Clustering Algorithm to classify customers into segments such as Top, High Value, Low Value, Medium Value and Lost Customers",
    image: "/Customer Segmentation Analysis Project.png?height=300&width=500",
    technologies: ["Python", "Scikit-learn", "Matplotlib", "KNN"],
    githubUrl: "https://github.com/shubhamwankar/customer-segmentation",
  },
  {
    title: "Stock Price Prediction",
    description:
      "Built a hybrid CNN-LSTM  model for stock price / performance prediction using numerical analysis of historical stock price, and sentimental analysis of news headlines",
    image: "/Stock Price Prediction Project.png?height=300&width=500",
    technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl:
      "https://github.com/shubhamwankar/TSF-internship/tree/main/stock-prediction-hybrid",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="overflow-hidden h-64">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
