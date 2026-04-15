import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2">

        {/* LEFT SIDE – FORM */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Get in touch
          </h2>
          <p className="mt-3 text-gray-600">
            Have a question or just want to say hi? I’d love to hear from you.
          </p>

          <form className="mt-10 space-y-6">
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name *"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number *"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="
                bg-green-600 text-white
                px-6 py-3 rounded-lg
                font-medium
                hover:bg-green-700
                transition
              "
            >
              Send Your Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE – CONTACT INFO */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

          {/* Location */}
          <div className="flex gap-4">
            <MapPin className="text-green-600" />
            <div>
              <h4 className="font-semibold text-gray-900">
                Location
              </h4>
              <p className="text-gray-600 text-sm">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <Mail className="text-green-600" />
            <div>
              <h4 className="font-semibold text-gray-900">
                Email
              </h4>
              <p className="text-gray-600 text-sm">
                vasanthlakshmanjada@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <Phone className="text-green-600" />
            <div>
              <h4 className="font-semibold text-gray-900">
                Phone
              </h4>
              <p className="text-gray-600 text-sm">
                +91 72880 41562
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Follow Me
            </h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="p-3 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="p-3 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                className="p-3 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
              >
                <Instagram />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                className="p-3 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition"
              >
                <Youtube />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
