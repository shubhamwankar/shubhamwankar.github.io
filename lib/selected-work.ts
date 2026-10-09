// Content supplied in PRODUCT.md and index-react.html.
export const selectedWork = [
  {
    "n": "~80",
    "l": "less manual effort per review",
    "f": [
      "80% faster responses",
      "9/10 expert score across 20 samples",
      "Used for the top 20 executives"
    ],
    "t": "Summarizing executive year-end reviews with GenAI",
    "r": "Senior AI/ML Engineer at Accenture, for a global banking client",
    "p": "Reviewers read months of KPI data and dozens of feedback comments per executive before writing a review. Quality varied by reviewer and deadline, and these reviews shape promotion, pay and retention.",
    "b": [
      "A pipeline turns KPI data and multi-source feedback into a structured summary of strengths, gaps and themes.",
      "Every claim cites the KPI or comment behind it. Output follows a fixed schema, prompts are limited to the supplied data, and temperature 0 with a fixed seed keeps results repeatable.",
      "Reviewers check every output and make the final call. Built with FastAPI, Azure OpenAI and Microsoft Agent Framework."
    ],
    "h": "How I checked it",
    "x": "An expert compared AI summaries with manual ones on 20 samples from the previous year, scoring quality, consistency and completeness: 9/10 on average. I chose a strict, evidence-linked format over fluent prose because reviewer trust mattered more than polish."
  },
  {
    "n": "~78",
    "l": "less manual reporting",
    "f": [
      "7+ reports fully automated",
      "5+ live dashboards",
      "Two professional franchises"
    ],
    "t": "Live performance analytics for cricket and volleyball teams",
    "r": "Data Scientist at Invictus Performance Labs",
    "p": "Workload, training, match, fitness and recovery data sat in scattered spreadsheets. Analysts cleaned it by hand, often late at night, so coaches saw insights after the decision window had closed.",
    "b": [
      "Staff entered data through Google Forms into Sheets. Apps Script and Python handled cleaning and automation, and Looker Studio served live dashboards. The teams already used Google Workspace, so nobody needed new tools.",
      "Dashboards follow the questions coaches ask. One tracks each athlete's progress across bi-monthly assessments.",
      "Missing entries are filled with that athlete's own median, so gaps do not distort individual trends."
    ],
    "h": "The result",
    "x": "Staff had numbers before training sessions instead of after, so they could tailor decisions to each athlete."
  },
  {
    "n": "96",
    "l": "average accuracy across 20 invoices",
    "f": [
      "About 75% less manual extraction time",
      "Low-confidence fields go to a person"
    ],
    "t": "Automating invoice data extraction with LLMs",
    "r": "Data Science Specialist, for a global banking client",
    "p": "An operations team keyed vendor, amount, date and bank details from many invoice layouts by hand. The work was slow, and each manual entry risked an error that would surface later as a payment issue or audit question.",
    "b": [
      "Invoices go to Azure OpenAI with a Pydantic schema, so every output is typed and checkable. Custom validators, such as format checks on matter numbers, run automatically.",
      "A second LLM scores confidence for each field. Low-confidence fields go to a person instead of passing through.",
      "Validated output is saved as a CSV and uploaded in bulk by an RPA process, with no re-keying."
    ],
    "h": "The result",
    "x": "Accuracy averaged 96% against the data printed on 20 invoices, and the operations team no longer reviews every invoice."
  }
] as const

export const strengths = [
  [
    "Replacing manual work with automation",
    "About 75% to 80% less manual effort across these projects."
  ],
  [
    "GenAI with guardrails",
    "Structured outputs, citations, LLM-as-judge scoring and human review."
  ],
  [
    "Evaluating before shipping",
    "Expert-scored samples and ground-truth checks."
  ],
  [
    "Building for non-technical users",
    "Simple data capture and minimal dashboards."
  ],
  [
    "Operations and data science",
    "Six years in risk and operations, then data and AI."
  ]
] as const

export const tools = [
  [
    "Data and analytics",
    "Python, pandas, SQL, Power BI, Looker Studio"
  ],
  [
    "GenAI and agents",
    "Azure OpenAI, Microsoft Agent Framework, Copilot Studio, Pydantic structured outputs, LLM-as-judge evaluation"
  ],
  [
    "Backend and cloud",
    "FastAPI, Azure"
  ],
  [
    "Automation",
    "Power Automate, Google Apps Script, RPA integration"
  ],
  [
    "AI-assisted development",
    "GitHub Copilot, Codex"
  ],
  [
    "Front end (working knowledge)",
    "HTML, CSS, JavaScript, React"
  ]
] as const

export const jobs = [
  [
    "Data Science Specialist, UBS",
    "April 2026 to present",
    "Built LLM-based invoice extraction with confidence-scored human review: about 75% less manual extraction time."
  ],
  [
    "Senior AI/ML Engineer, Accenture",
    "September 2024 to April 2026",
    "Shipped a GenAI summarizer for executive reviews, plus a FastAPI service that detects and removes PII in about 350 ms."
  ],
  [
    "Data Scientist, Invictus Performance Labs",
    "June 2023 to May 2024",
    "Built 5+ live dashboards for two professional franchises and automated 7+ reports."
  ],
  [
    "Data Scientist Lead, Zummit Infolab",
    "January 2023 to April 2023",
    "Led 30 interns to deliver 10 deployable ML models and fine-tuned a DistilBERT next-word model to 90% accuracy."
  ],
  [
    "Senior Risk Analyst, Amazon",
    "February 2016 to September 2022",
    "Cut SOP working time by 20% through data analysis and mentored 25 analysts to 95% productivity and a 98% quality rating."
  ]
] as const
