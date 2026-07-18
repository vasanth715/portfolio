import { Code2, Database, Brain, Rocket } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "End-to-end web apps with React, Node.js, Express and Spring Boot.",
  },
  {
    icon: Database,
    title: "Data & Backend",
    text: "Robust REST APIs, MySQL schemas and scalable server-side logic in Java.",
  },
  {
    icon: Brain,
    title: "AI / ML Projects",
    text: "Applied ML work — anomaly detection and AI-based resume screening.",
  },
  {
    icon: Rocket,
    title: "Shipping for Clients",
    text: "6+ live production websites delivered for real businesses.",
  },
];

const About = () => {
  return (
    <section id="aboutme" className="relative w-full py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer. Builder. Lifelong Learner."
        />

        <div className="grid items-start gap-14 md:grid-cols-2">
          {/* Left – story */}
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">
              I&rsquo;m{" "}
              <span className="font-semibold text-emerald-300">
                Lakshmanarao Jada
              </span>
              , an Associate Engineer with a strong foundation in software
              development, problem-solving and modern web technologies.
            </p>

            <p className="mt-5 leading-relaxed text-slate-400">
              I hold an <span className="font-medium text-slate-200">MCA</span>{" "}
              and work hands-on with{" "}
              <span className="font-medium text-slate-200">
                Java, Spring Boot, React, Node.js, Express and MySQL
              </span>
              , alongside applied{" "}
              <span className="font-medium text-slate-200">AI/ML</span>{" "}
              projects. I enjoy building scalable applications, admin
              dashboards and products that solve real-world problems.
            </p>

            <p className="mt-5 leading-relaxed text-slate-400">
              Recent work includes{" "}
              <span className="font-medium text-slate-200">
                Unsupervised Anomaly Detection in Energy Consumption
              </span>
              , an{" "}
              <span className="font-medium text-slate-200">
                AI-based Resume Screening System
              </span>{" "}
              and multiple production client websites. I believe in continuous
              learning, clean code and collaborative development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Java", "Spring Boot", "React", "Node.js", "MySQL", "AI/ML"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-emerald-400/25 bg-emerald-400/5 px-4 py-1.5 text-sm text-emerald-300"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </Reveal>

          {/* Right – highlight cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1}>
                <div className="glass-card group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:bg-emerald-400/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                    <h.icon size={24} />
                  </div>
                  <h4 className="font-display font-semibold text-white">
                    {h.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {h.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
