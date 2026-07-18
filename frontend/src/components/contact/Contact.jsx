import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Code2,
} from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/20";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Andhra Pradesh, India" },
  { icon: Mail, label: "Email", value: "vasanthlakshmanjada@gmail.com", href: "mailto:vasanthlakshmanjada@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 72880 41562", href: "tel:+917288041562" },
];

const socials = [
  { icon: Github, href: "https://github.com/vasanth715", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/vasanthlakshman", label: "LeetCode" },
  { icon: MessageCircle, href: "https://wa.me/917288041562", label: "WhatsApp" },
];

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'error'

  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const data = {
      name: formValues.name,
      email: formValues.email,
      toMail: "vasanthlakshmanjada@gmail.com",
      toName: "Vasanth",
      phone: formValues.mobile,
      subject: formValues.subject,
      message: formValues.message,
    };

    try {
      const response = await fetch("https://api.qrdcard.com/api/url/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("ok");
        setFormValues({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative w-full py-24">
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* FORM */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Your name *"
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Your email *"
                  className={inputClass}
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="tel"
                  name="mobile"
                  value={formValues.mobile}
                  onChange={handleChange}
                  placeholder="Phone number *"
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={inputClass}
                />
              </div>

              <textarea
                rows="5"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                className={inputClass}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3.5 font-semibold text-night-950 shadow-lg shadow-emerald-500/25 transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />
                {loading ? "Sending…" : "Send Message"}
              </button>

              {status === "ok" && (
                <p className="text-sm font-medium text-emerald-300">
                  ✅ Message sent successfully — I&rsquo;ll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-rose-400">
                  ❌ Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </Reveal>

          {/* INFO */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="glass-card flex h-full flex-col gap-7 p-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 text-emerald-300">
                    <info.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="break-words text-sm text-slate-400 transition hover:text-emerald-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-auto border-t border-white/10 pt-6">
                <h4 className="mb-4 font-semibold text-white">Follow Me</h4>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:text-emerald-300"
                    >
                      <s.icon size={19} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
