import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Send } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "aboutme" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Scrollspy: highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-night-950/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/lucky-logo.png"
            alt="Logo"
            className="h-11 w-11 rounded-full border-2 border-emerald-400/60 bg-white object-cover p-0.5"
          />
          <span className="font-display text-lg font-bold text-white">
            Lakshman<span className="text-emerald-400">.</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === item.id
                  ? "text-emerald-300"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-night-950 shadow-lg shadow-emerald-500/25 transition-transform duration-300 hover:scale-105 sm:flex"
          >
            <Send size={15} />
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-slate-200 lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-[2px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
      />

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-night-950/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col items-center gap-2 py-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                  active === item.id
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-night-950"
            >
              <Send size={15} />
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
