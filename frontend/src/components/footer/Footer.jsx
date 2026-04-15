import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* LEFT : ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-green-500">
            Lakshmanarao Jada
          </h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            MCA Postgraduate | Java & MERN Full-Stack Developer | AI/ML Enthusiast.
            Passionate about solving real-world problems and building scalable
            software solutions.
          </p>
        </div>

        {/* MIDDLE : CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-green-500" />
              +91 7288041562
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} className="text-green-500" />
              vasanthlakshmanjada@gmail.com
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-green-500" />
              Andhra Pradesh, India
            </li>
          </ul>
        </div>

        {/* RIGHT : SOCIAL MEDIA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>

          <div className="flex flex-wrap gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <Github />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <Linkedin />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <Code2 />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917288041562"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <MessageCircle />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <Instagram />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Lakshmanarao Jada. All rights reserved.
      </div>
    </footer>
  );
}
