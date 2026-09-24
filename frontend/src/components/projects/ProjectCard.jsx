import { motion } from "framer-motion";
import { Github, ExternalLink, FolderCode, Star } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      {/* COVER */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/20 via-night-800 to-cyan-500/15">
            <FolderCode
              size={52}
              className="text-emerald-400/70 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-emerald-400/90 px-2.5 py-1 text-[11px] font-bold text-night-950">
            <Star size={11} className="fill-night-950" />
            Featured
          </span>
        )}

        {/* Hover action overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-night-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition hover:scale-110 hover:bg-white/20"
            >
              <Github size={19} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 text-night-950 transition hover:scale-110"
            >
              <ExternalLink size={19} />
            </a>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display font-semibold text-white transition-colors duration-300 group-hover:text-emerald-300">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}

          <div className="ml-auto flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-slate-300 transition hover:text-emerald-300"
              >
                <Github size={13} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Live <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
