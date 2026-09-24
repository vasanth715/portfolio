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
      "NLP-powered system that parses resumes and ranks candidates against job descriptions.",
    image: null,
    tech: ["Java", "NLP", "ML"],
    github: "https://github.com/vasanth715/ai-resume-screener",
    live: null,
    category: "fullstack",
    featured: true,
  },
  {
    title: "Energy Anomaly Detection",
    description:
      "Unsupervised machine-learning pipeline detecting anomalies in energy-consumption data.",
    image: null,
    tech: ["Python", "ML"],
    github: "https://github.com/vasanth715/energy-anomaly-detection",
    live: null,
    category: "fullstack",
  },
  {
    title: "Sports E-commerce UI",
    description:
      "E-commerce storefront concept for sports gear — product grids, carts and checkout UI.",
    image: null,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/vasanth715/e-commerse-sports",
    live: null,
    category: "frontend",
  },
];

export default projectsData;
