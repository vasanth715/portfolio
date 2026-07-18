import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Code2,
  MessageCircle,
  ArrowUp,
  Heart,
} from "lucide-react";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "aboutme" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/vasanth715", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/vasanthlakshman", label: "LeetCode" },
  { icon: MessageCircle, href: "https://wa.me/917288041562", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-night-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* ABOUT */}
        <div>
          <h2 className="font-display text-xl font-bold text-white">
            Lakshmanarao Jada<span className="text-emerald-400">.</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Full Stack Developer — Java, Spring Boot & MERN. MCA postgraduate
            and AI/ML enthusiast, passionate about building scalable software
            that solves real-world problems.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="md:justify-self-center">
          <h3 className="mb-5 font-display font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-slate-400 transition hover:text-emerald-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-5 font-display font-semibold text-white">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0 text-emerald-400" />
              <a href="tel:+917288041562" className="transition hover:text-emerald-300">
                +91 72880 41562
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0 text-emerald-400" />
              <a
                href="mailto:vasanthlakshmanjada@gmail.com"
                className="break-all transition hover:text-emerald-300"
              >
                vasanthlakshmanjada@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} className="shrink-0 text-emerald-400" />
              Andhra Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Lakshmanarao Jada. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={13} className="fill-emerald-400 text-emerald-400" /> using
            React & Tailwind
          </p>
        </div>
      </div>

      {/* BACK TO TOP */}
      <a
        href="#home"
        aria-label="Back to top"
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-night-950 shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:scale-110"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
