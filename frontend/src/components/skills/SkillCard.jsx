import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:bg-emerald-400/5"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-display font-semibold text-white">
            {skill.name}
          </h3>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            {skill.category}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skill.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors duration-300 group-hover:border-emerald-400/25 group-hover:text-emerald-200"
          >
            {topic}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
