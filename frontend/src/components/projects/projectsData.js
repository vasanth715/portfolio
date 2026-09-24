// Set image to null for projects without a screenshot — the card renders a
// styled gradient cover instead. Links set to null are hidden on the card.
const projectsData = [
  {
    title: "Sri Bhoomi Developers",
    description:
      "Production real-estate website for a property developer — listings, gallery and lead capture.",
    image: "/sribhoomi.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/sribhoomi-relestate",
    live: "https://sribhoomidevelopers.com/",
    category: "frontend",
    featured: true,
  },
  {
    title: "CodingRoots — Company Website",
    description:
      "Corporate website for a software training company with courses, team and enquiry flows.",
    image: "/codingroots.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/Coding-Roots",
    live: "https://codingroots.in",
    category: "frontend",
    featured: true,
  },
  {
    title: "RunBro Real Estate",
    description:
      "Modern real-estate landing experience with property showcases and responsive layouts.",
    image: "/runbro.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/runbro",
    live: "https://melodious-eclair-19f514.netlify.app",
    category: "frontend",
  },
  {
    title: "VSN Interiors",
    description:
      "Portfolio website for an interior design studio — project galleries and service pages.",
    image: "/vsn-interiors.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/interior-vzm",
    live: "https://celebrated-florentine-995c67.netlify.app/",
    category: "frontend",
  },
  {
    title: "NCK Interiors",
    description:
      "Interior design brand site with rich imagery, service breakdowns and contact funnels.",
    image: "/nck-interiors.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/interior-nck",
    live: "https://exquisite-crumble-be8d28.netlify.app",
    category: "frontend",
  },
  {
    title: "SLNS Visa Consultancy",
    description:
      "Website for a visa consultancy — services, country guides and enquiry handling.",
    image: "/slns.png",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/slns-visa-website",
    live: "https://slns-visa-website.vercel.app/",
    category: "frontend",
  },
  {
    title: "AI Resume Screener",
    description:
      "NLP-powered system that parses resumes and ranks candidates against job descriptions using machine learning.",
    image: null,
    tech: ["Python", "NLP", "Scikit-Learn", "FastAPI"],
    github: "https://github.com/vasanth715/ai-resumescreening",
    live: null,
    category: "ai",
    featured: true,
  },
  {
    title: "Energy Anomaly Detection",
    description:
      "Unsupervised machine-learning pipeline & analytics dashboard detecting anomalies in energy-consumption data.",
    image: null,
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    github: "https://github.com/vasanth715/energy-anomaly-detection",
    live: null,
    category: "data-analysis",
    featured: true,
  },
  {
    title: "E-Commerce Sales Analytics Dashboard",
    description:
      "Interactive data analytics dashboard analyzing sales performance, customer acquisition funnels, monthly revenue trends, and product metrics.",
    image: "/ecommerce-sales.jpg",
    tech: ["Python", "Pandas", "PowerBI", "SQL", "Plotly"],
    github: "https://github.com/vasanth715/ecommerce-sales-analysis",
    live: null,
    category: "data-analysis",
    featured: true,
  },
  {
    title: "Student Marks & Academic Performance Analyzer",
    description:
      "Data analysis application examining student academic scores, grade distribution metrics, subject-wise trends, and class rank distributions.",
    image: "/student-marks.jpg",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    github: "https://github.com/vasanth715/student-marks-analyzer",
    live: null,
    category: "data-analysis",
    featured: true,
  },
  {
    title: "Customer Churn & Behavioral Analytics",
    description:
      "End-to-end data analytics pipeline identifying customer drop-off trends, cohort churn metrics, and retention patterns.",
    image: null,
    tech: ["Python", "Pandas", "SQL", "PowerBI"],
    github: "https://github.com/vasanth715/customer-churn-analytics",
    live: null,
    category: "data-analysis",
  },
  {
    title: "LLM Document Q&A Assistant",
    description:
      "Retrieval-Augmented Generation (RAG) assistant querying complex technical documents using semantic search embeddings.",
    image: null,
    tech: ["Python", "LangChain", "OpenAI API", "FAISS"],
    github: "https://github.com/vasanth715/llm-document-qa",
    live: null,
    category: "ai",
  },
  {
    title: "Sports E-Commerce Platform",
    description:
      "Full-stack e-commerce web application for sports gear — user authentication, dynamic product catalog, shopping cart, and order processing.",
    image: null,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vasanth715/e-commerse-sports",
    live: null,
    category: "fullstack",
    featured: true,
  },
  {
    title: "E-Learning Platform",
    description:
      "Full-stack education portal with course video streaming, interactive student progress tracking, quiz modules, and certificate generation.",
    image: "/elearning.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vasanth715/e-learning_app",
    live: null,
    category: "fullstack",
    featured: true,
  },
  {
    title: "Gopi CRM System",
    description:
      "Enterprise customer relationship management portal with lead sales pipelines, deal funnels, contact analytics, and automated reporting.",
    image: "/gopi-crm.jpg",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/vasanth715/gopi-crm",
    live: null,
    category: "fullstack",
  },
  {
    title: "Invoice & Billing Management System",
    description:
      "Comprehensive web app for creating, tracking, and managing client invoices, recurring billing cycles, payment statuses, and revenue analytics.",
    image: "/invoice.jpg",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    github: "https://github.com/vasanth715/Invoice",
    live: null,
    category: "fullstack",
  },
];

export default projectsData;
