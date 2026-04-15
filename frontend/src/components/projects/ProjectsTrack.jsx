// src/components/projects/ProjectsTrack.jsx

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

export default function ProjectsTrack() {
  // duplicate array for infinite loop
  const allProjects = [...projectsData, ...projectsData];

  return (
    <div className="overflow-hidden w-full">
    <div
  className="
    flex flex-col items-center gap-6
    w-full

    md:flex-row
    md:w-max
    md:animate-scroll
    md:hover:[animation-play-state:paused]
  "
>


        {allProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
