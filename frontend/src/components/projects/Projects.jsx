// // src/components/projects/Projects.jsx

// import ProjectsTrack from "./ProjectsTrack";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-black overflow-x-hidden">

//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-white mb-10">
//           My Projects
//         </h2>

//         <ProjectsTrack />
//       </div>
//     </section>
//   );
// }










import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

export default function Projects() {
  const [active, setActive] = useState("all");

  const filters = ["all", "frontend", "fullstack", "others"];

  const filtered =
    active === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-white mb-6">
          My Projects
        </h2>

        {/* 🔥 FILTER BAR */}
        <div className="flex gap-4 mb-12 flex-wrap">

          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                px-6 py-2 rounded-full text-sm capitalize
                transition-all duration-300 border

                ${
                  active === item
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 text-black border-transparent shadow-lg"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }
              `}
            >
              {item}
            </button>
          ))}

        </div>

        {/* 🔥 GRID */}
        <div
          className="
            grid gap-10
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            justify-items-center
          "
        >
          {filtered.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}