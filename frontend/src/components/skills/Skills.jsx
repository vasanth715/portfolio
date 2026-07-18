import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SectionHeading from "../shared/SectionHeading";
import { skillsData, categories } from "./skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative w-full py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My Technical Toolbox"
          subtitle="The languages, frameworks and tools I use to bring ideas to life."
        />

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-night-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:text-white"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="skill-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/25"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
