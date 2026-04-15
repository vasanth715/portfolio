import {
  Code2,
  Database,
  Layout,
  Server,
  Palette,
  Brain,
  Github,
} from "lucide-react";

export const categories = [
  "All",
  "Frontend",
  "Backend",
  "Styling",
  "Frameworks",
  "Languages",
  "SoftSkills",
];

export const skillsData = [
  {
    name: "Java",
    category: "Languages",
    icon: Code2,
    topics: ["OOP", "JDBC", "Spring Basics"],
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: Code2,
    topics: ["ES6+", "DOM", "Async/Await"],
  },
  {
    name: "Python",
    category: "Languages",
    icon: Code2,
    topics: ["Basics", "ML Intro", "Automation"],
  },

  {
    name: "React.js",
    category: "Frontend",
    icon: Layout,
    topics: ["Components", "Hooks", "Routing"],
  },

  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: Palette,
    topics: ["Responsive UI", "Animations", "Utility Classes"],
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    topics: ["APIs", "Middleware", "Auth"],
  },

  {
    name: "Spring Boot",
    category: "Frameworks",
    icon: Server,
    topics: ["REST APIs", "MVC", "Security"],
  },

  {
    name: "MySQL",
    category: "Backend",
    icon: Database,
    topics: ["Queries", "Joins", "CRUD"],
  },

  {
    name: "GitHub",
    category: "Frameworks",
    icon: Github,
    topics: ["Version Control", "Collaboration", "Projects"],
  },

  {
    name: "Problem Solving",
    category: "SoftSkills",
    icon: Brain,
    topics: ["DSA Practice", "Logical Thinking", "Debugging"],
  },
];
