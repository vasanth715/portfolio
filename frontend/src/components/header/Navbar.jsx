// 04/02/2026 – Fixed anchor links + responsive navbar
import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // ✅ Explicit mapping (THIS FIXES EVERYTHING)
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "aboutme" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-green-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-[78px] px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/lucky-logo.png"
            alt="Lucky Logo"
            className="
              w-14 h-14 md:w-16 md:h-16
              object-cover rounded-full
              border-2 border-green-500
              shadow-lg bg-white p-1
            "
          />
          <h1 className="text-xl md:text-2xl font-bold text-green-700 tracking-wide">
            Vasanth
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 text-[15px] font-medium text-green-900">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                relative transition-all duration-300
                hover:text-green-700
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-green-600
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* CONTACT BUTTON (ALL SCREENS ≥ sm) */}
          <a
            href="#contact"
            className="
              hidden sm:flex items-center gap-2
              px-4 py-2 rounded-full
              bg-green-600 text-white
              font-medium text-sm
              shadow-md hover:bg-green-700
              transition-all duration-300
            "
          >
            <PhoneCall size={18} />
            Contact
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-green-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-green-200 shadow-md">
          <nav className="flex flex-col items-center gap-6 py-6 text-green-900 font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="hover:text-green-700 transition"
              >
                {item.label}
              </a>
            ))}

            {/* CONTACT BUTTON – MOBILE */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-2
                px-5 py-2 rounded-full
                bg-green-600 text-white
                text-sm shadow-md
                hover:bg-green-700
                transition
              "
            >
              <PhoneCall size={18} />
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
