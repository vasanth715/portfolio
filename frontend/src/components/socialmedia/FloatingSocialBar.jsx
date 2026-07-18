import { FaLinkedinIn, FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    hover: "hover:text-[#0A66C2] hover:border-[#0A66C2]/60",
  },
  {
    icon: FaGithub,
    href: "https://github.com/vasanth715",
    label: "GitHub",
    hover: "hover:text-white hover:border-white/60",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/vasanthlakshman",
    label: "LeetCode",
    hover: "hover:text-[#FFA116] hover:border-[#FFA116]/60",
  },
];

export default function FloatingSocialBar() {
  return (
    <>
      {/* LEFT RAIL — desktop only */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-4 lg:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-night-800/80 text-slate-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${l.hover}`}
          >
            <l.icon size={16} />
          </a>
        ))}
        {/* vertical line to bottom */}
        <span className="h-24 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* WHATSAPP — floating action button */}
      <a
        href="https://wa.me/917288041562"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-[#25D366]/30 transition hover:scale-110"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* PHONE — small screens only */}
      <a
        href="tel:+917288041562"
        aria-label="Call"
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center rounded-full bg-night-800 p-3.5 text-emerald-300 shadow-xl ring-1 ring-emerald-400/40 transition hover:scale-110 md:hidden"
      >
        <FaPhoneAlt size={20} />
      </a>
    </>
  );
}
