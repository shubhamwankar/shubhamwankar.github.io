// Source inventory and outstanding source differences: CONTENT_INVENTORY.md.
// Existing employment and project evidence is kept separate from the confirmed case study.

export interface WorkExperienceItem {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export const experiences: WorkExperienceItem[] = [
  {
    role: "Data Science Specialist",
    company: "UBS",
    startDate: "April-2026",
    endDate: "Present",
    achievements: [
      "Built a custom Invoice Extraction model using Azure Document Intelligence to extract key invoice fields reducing manual extraction time by 60%",
    ]
  },
  {
    role: "Senior AI/ML Engineer",
    company: "Accenture",
    startDate: "Sep-2024",
    endDate: "Apr-2026",
    achievements: [
      "Designed and developed a Gen AI KPI and Feedback summarizer for yearly reviews of high level executives, reducing the manual effort by ~75% and 80% improvement in latency.",
      "Built a RESTAPI using FastAPI for PII detection and removal with a latency of ~350ms.",
      "Created a POC for doing Defect Quality Checks using LLM with a structured evaluation",
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

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageHeight?: number;
  technologies: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Text-2-SQL LLM App",
    description:
      "Created a robust Text to SQL application utilizing Gemini 1.5 Flash & Langchain to transform natural language questions into SQL queries and return results as natural language responses",
    image: "/images/text-to-sql.webp",
    technologies: ["Python", "LangChain", "Gemini API", "Streamlit"],
    githubUrl: "https://github.com/shubhamwankar/text2sql-langchain",
  },
  {
    title: "LLM Finetuning: Next Word Prediction",
    description:
      "Finetuned Distil-BERT model from HuggingFace for next word prediction task on a custom dataset, resulting in a Perplexity Score of 8.25",
    image: "/images/next-word-prediction.webp",
    technologies: ["Python", "HuggingFace", "FastAPI"],
    githubUrl: "https://github.com/shubhamwankar/NLP_NextWordSuggestion",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Built a state of the art Heart Disease Prediction model with Light GBM Classifier and deployed it using FastAPI",
    image: "/images/heart-disease.webp",
    technologies: ["Python", "FastAPI", "EDA", "Classification"],
    githubUrl: "https://github.com/shubhamwankar/heart-disease-prediction",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Performed RFM Analysis and built Clustering Algorithm to classify customers into segments such as Top, High Value, Low Value, Medium Value and Lost Customers",
    image: "/images/customer-segmentation.webp",
    imageHeight: 640,
    technologies: ["Python", "Scikit-learn", "Matplotlib", "KNN"],
    githubUrl: "https://github.com/shubhamwankar/customer-segmentation",
  },
  {
    title: "Stock Price Prediction",
    description:
      "Built a hybrid CNN-LSTM  model for stock price / performance prediction using numerical analysis of historical stock price, and sentimental analysis of news headlines",
    image: "/images/stock-prediction.webp",
    imageHeight: 640,
    technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl:
      "https://github.com/shubhamwankar/TSF-internship/tree/main/stock-prediction-hybrid",
  },
];

export const profile = {
  name: "Shubham Wankar",
  email: "shubhamwankar23@gmail.com",
  phone: "+91 8978996233",
  telephone: "+918978996233",
  resume: "/Shubham Wankar 2026.pdf",
  linkedin: "https://linkedin.com/in/shubham-wankar",
  github: "https://github.com/shubhamwankar",
  twitter: "https://twitter.com/shubhamwankar10",
}
export const navigation = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]
export const expertise = [
  { title: "Models & language", skills: ["Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "LLM Finetuning"] },
  { title: "Data & delivery", skills: ["Python", "SQL", "Data Visualization", "Azure", "Git", "CI/CD"] },
]
