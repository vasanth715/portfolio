import { GraduationCap, School, BookOpen, Award } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const educationData = [
  {
    title: "Master of Computer Applications (MCA)",
    institute: "JNTU-GV University",
    year: "2023 – 2025",
    score: "CGPA 8.0",
    icon: GraduationCap,
  },
  {
    title: "Bachelor of Science (Chemistry)",
    institute: "Andhra University",
    year: "2017 – 2020",
    score: "80%",
    icon: BookOpen,
  },
  {
    title: "Intermediate Education",
    institute: "Aditya Jr. College, Andhra Pradesh",
    year: "2015 – 2017",
    score: "931 / 1000",
    icon: School,
  },
  {
    title: "Secondary Education (SSC)",
    institute: "Z.P.H. School, Andhra Pradesh",
    year: "2014 – 2015",
    score: "CGPA 9.3",
    icon: Award,
  },
];

const Education = () => {
  return (
    <section id="education" className="relative w-full py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="My Academic Journey"
          subtitle="The milestones that built my foundation in engineering and computer science."
        />

        {/* Timeline */}
        <div className="relative ml-3 border-l border-white/10 pl-10 sm:ml-6">
          {educationData.map((edu, index) => (
            <Reveal key={edu.title} delay={index * 0.1} className="relative pb-12 last:pb-0">
              {/* Node */}
              <span className="absolute -left-[59px] flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-night-800 text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.35)]">
                <edu.icon size={17} />
              </span>

              <div className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {edu.year}
                  </span>
                  <span className="text-sm font-semibold text-cyan-300">
                    {edu.score}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {edu.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{edu.institute}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Coursework */}
        <Reveal className="mt-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Relevant Coursework
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              "Data Analysis",
              "Software Engineering",
              "Operating Systems",
              "Web Technologies",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
