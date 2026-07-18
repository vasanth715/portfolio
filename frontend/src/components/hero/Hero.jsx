import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Java + Spring Boot Engineer",
  "MERN Stack Developer",
  "AI / ML Enthusiast",
];

// Typewriter cycle over the roles list
const useTypewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1600);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return text;
};

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "6+", label: "Live Client Sites" },
  { value: "8.0", label: "MCA CGPA" },
];

const badges = [
  { label: "React", className: "-left-4 top-8" },
  { label: "Java", className: "-right-2 top-1/3" },
  { label: "Spring Boot", className: "-left-8 bottom-16" },
  { label: "Node.js", className: "right-0 -bottom-2" },
];

const Hero = () => {
  const typed = useTypewriter();

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-screen w-full items-center overflow-hidden pt-[72px]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2">
        {/* ============ LEFT ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m{" "}
            <span className="text-gradient">Lakshmanarao Jada</span>
          </h1>

          <div className="mt-4 flex h-10 items-center font-display text-xl font-semibold text-slate-200 sm:text-2xl">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-7 w-[3px] animate-blink rounded bg-emerald-400" />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I design and build modern, scalable web applications with{" "}
            <span className="font-medium text-slate-200">Java, Spring Boot</span>{" "}
            and the{" "}
            <span className="font-medium text-slate-200">MERN stack</span> —
            shipping clean, responsive experiences that solve real problems.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={15} className="text-emerald-400" />
            Andhra Pradesh, India
          </div>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 font-semibold text-night-950 shadow-lg shadow-emerald-500/25 transition-transform duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10"
            >
              <Download size={18} />
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-md grid-cols-3 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ============ RIGHT: PORTRAIT ============ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative mr-0 md:mr-8">
            {/* Rotating conic ring */}
            <div className="absolute -inset-3 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#34d399_80deg,transparent_160deg,transparent_200deg,#22d3ee_280deg,transparent_360deg)]" />
            <div className="absolute -inset-10 rounded-full bg-emerald-500/15 blur-3xl" />

            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-night-950 sm:h-[340px] sm:w-[340px]">
              <img
                src="/lakshman_developer_image.png"
                alt="Lakshmanarao Jada — Full Stack Developer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating tech badges */}
            {badges.map((b, i) => (
              <motion.span
                key={b.label}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                className={`absolute ${b.className} rounded-full border border-white/15 bg-night-800/90 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-lg backdrop-blur-sm`}
              >
                {b.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
