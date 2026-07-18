import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../shared/SectionHeading";
import projectsData from "./projectsData";

const filters = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack & AI" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative w-full py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Things I've Built"
          subtitle="Production websites shipped for real clients, plus applied AI/ML projects."
        />

        {/* Filter bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                active === f.key
                  ? "text-night-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-white"
              }`}
            >
              {active === f.key && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/25"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
