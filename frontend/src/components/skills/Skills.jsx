import { useState } from "react";
import SkillCard from "./SkillCard";
import { skillsData, categories } from "./skillsData";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="w-full py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Skills
          </h2>
          <p className="text-gray-600 mt-3">
            Click categories to explore my expertise
          </p>
        </div>

        {/* Category Navbar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full font-medium text-sm
                transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-white border border-green-200 text-green-700 hover:bg-green-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
