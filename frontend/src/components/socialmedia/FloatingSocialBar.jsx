// // src/components/socialmedia/FloatingSocialBar.jsx
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   X,
//   PhoneCall,
//   MessageCircle,
// } from "lucide-react";

// export default function FloatingSocialBar() {
//   return (
//     <div
//       className="
//         fixed top-1/2 left-4
//         -translate-y-1/2
//         flex flex-col gap-3
//         z-50
//       "
//     >
//       {/* Facebook */}
//       <a
//         href="https://facebook.com/"
//         target="_blank"
//         className="
//           w-10 h-10 flex items-center justify-center
//           bg-blue-600 text-white rounded
//           hover:scale-110 transition
//         "
//       >
//         <Facebook size={18} />
//       </a>

//       {/* Instagram */}
//       <a
//         href="https://instagram.com/"
//         target="_blank"
//         className="
//           w-10 h-10 flex items-center justify-center
//           bg-gradient-to-tr from-pink-500 to-yellow-400
//           text-white rounded
//           hover:scale-110 transition
//         "
//       >
//         <Instagram size={18} />
//       </a>

//       {/* X (Twitter) */}
//       <a
//         href="https://x.com/"
//         target="_blank"
//         className="
//           w-10 h-10 flex items-center justify-center
//           bg-black text-white rounded
//           hover:scale-110 transition
//         "
//       >
//         <X size={18} />
//       </a>

//       {/* LinkedIn */}
//       <a
//         href="https://linkedin.com/"
//         target="_blank"
//         className="
//           w-10 h-10 flex items-center justify-center
//           bg-blue-700 text-white rounded
//           hover:scale-110 transition
//         "
//       >
//         <Linkedin size={18} />
//       </a>

//       {/* WhatsApp (ALL SCREENS) */}
//       <a
//         href="https://wa.me/917288041562"
//         target="_blank"
//         className="
//           w-10 h-10 flex items-center justify-center
//           bg-green-500 text-white rounded
//           hover:scale-110 transition
//         "
//       >
//         <MessageCircle size={18} />
//       </a>

//       {/* PHONE – ONLY MOBILE */}
//       <a
//         href="tel:+917288041562"
//         className="
//           md:hidden
//           w-10 h-10 flex items-center justify-center
//           bg-red-600 text-white rounded
//           hover:scale-110 transition
//         "
//       >
//         <PhoneCall size={18} />
//       </a>
//     </div>
//   );
// }





// src/components/socialmedia/FloatingSocialBar.jsx






// src/components/socialmedia/FloatingSocialBar.jsx

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function FloatingSocialBar() {
  return (
    <>
      {/* LEFT SIDE SOCIAL ICONS (REAL BRAND ICONS) */}
      <div
        className="
          fixed top-1/2 left-0
          -translate-y-1/2
          flex flex-col gap-3
          z-50
        "
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          className="
            w-12 h-12
            flex items-center justify-center
            bg-[#0A66C2]
            text-white
            rounded-r-xl
            hover:scale-110 transition
          "
        >
          <FaLinkedinIn size={22} />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/vasanthlakshman"
          target="_blank"
          className="
            w-12 h-12
            flex items-center justify-center
            bg-black
            text-[#FFA116]
            rounded-r-xl
            hover:scale-110 transition
          "
        >
          <SiLeetcode size={22} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          className="
            w-12 h-12
            flex items-center justify-center
            bg-[#181717]
            text-white
            rounded-r-xl
            hover:scale-110 transition
          "
        >
          <FaGithub size={22} />
        </a>
      </div>

      {/* WHATSAPP – RIGHT BOTTOM (ALL SCREENS) */}
      <a
        href="https://wa.me/917288041562"
        target="_blank"
        className="
          fixed bottom-6 right-6
          w-14 h-14
          flex items-center justify-center
          bg-[#25D366]
          text-white
          rounded-full
          shadow-xl
          hover:scale-110 transition
          z-50
        "
      >
        <FaWhatsapp size={26} />
      </a>

      {/* PHONE – ONLY SMALL SCREENS */}
      <a
        href="tel:+917288041562"
        className="
          md:hidden
          fixed bottom-24 right-6
          w-14 h-14
          flex items-center justify-center
          bg-[#E53935]
          text-white
          rounded-full
          shadow-xl
          hover:scale-110 transition
          z-50
        "
      >
        <FaPhoneAlt size={22} />
      </a>
    </>
  );
}
