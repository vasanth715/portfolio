import {
  Code2,
  Database,
  Layout,
  Server,
  Palette,
  Brain,
  Github,
  FileCode2,
  Braces,
} from "lucide-react";

export const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Tools",
  "Soft Skills",
];

export const skillsData = [
  {
    name: "Java",
    category: "Languages",
    icon: Code2,
    topics: ["OOP", "JDBC", "Collections"],
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: Braces,
    topics: ["ES6+", "DOM", "Async/Await"],
  },
  {
    name: "Python",
    category: "Languages",
    icon: FileCode2,
    topics: ["ML Basics", "Automation", "Scripting"],
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: Layout,
    topics: ["Components", "Hooks", "Routing"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: Palette,
    topics: ["Responsive UI", "Animations", "Design Systems"],
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    icon: Server,
    topics: ["REST APIs", "Middleware", "Auth"],
  },
  {
    name: "Spring Boot",
    category: "Backend",
    icon: Server,
    topics: ["REST APIs", "MVC", "Security"],
  },
  {
    name: "MySQL",
    category: "Backend",
    icon: Database,
    topics: ["Queries", "Joins", "Schema Design"],
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: Github,
    topics: ["Version Control", "Collaboration", "CI Basics"],
  },
  {
    name: "Problem Solving",
    category: "Soft Skills",
    icon: Brain,
    topics: ["DSA Practice", "Logical Thinking", "Debugging"],
  },
];
