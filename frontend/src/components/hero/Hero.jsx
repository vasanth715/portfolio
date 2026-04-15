// const Hero = () => {
//   const title = "Full Stack Developer";

//   return (
//    <section
//   id="home"
//   className="w-full min-h-screen flex items-center bg-white pt-16"
// >

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

//         {/* ================= LEFT CONTENT ================= */}
//         <div>
//           <p className="text-green-700 font-semibold tracking-wide mb-3">
//             Hello, I’m
//           </p>

//           <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
//             Vasanth Lakshman <br />

//             {/* Animated Full Stack Developer */}
//             <span className="inline-block mt-2">
//               {title.split("").map((char, index) => (
//                 <span
//                   key={index}
//                   className="bounce-letter"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </span>
//               ))}
//             </span>
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
//             I build modern, scalable and responsive web applications using
//             Java, MERN Stack, and Spring Boot with clean UI/UX designs.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex gap-4">
//             <a
//               href="#projects"
//               className="px-7 py-3 rounded-full bg-green-700 text-white font-semibold shadow-md hover:bg-green-800 transition"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="px-7 py-3 rounded-full border border-yellow-500 text-gray-800 font-semibold hover:bg-yellow-400 hover:text-black transition"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* ================= RIGHT PROFILE IMAGE ================= */}
//         <div className="flex justify-center relative">
//           <div
//             className="
//               w-[320px] h-[320px]
//               rounded-full
//               overflow-hidden
//               border-[8px]
//               border-yellow-400
//               shadow-2xl
//               animate-float
//             "
//           >
//             <img
//               src="/profile.png"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;








const Hero = () => {
  const title = "Full Stack Developer";

  return (
    <section
      id="home"
      className="w-full bg-white pt-10 pb-10"
    >
      <div className="max-w-[92%] mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="md:pl-6">
          <p className="text-green-700 font-semibold tracking-wide mb-2">
            Hello, I’m
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Vasanth Lakshman <br />

            {/* Animated Full Stack Developer */}
            <span className="inline-block mt-2">
              {title.split("").map((char, index) => (
                <span
                  key={index}
                  className="bounce-letter"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
            I build modern, scalable and responsive web applications using
            Java, MERN Stack, and Spring Boot with clean UI/UX designs.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-green-700 text-white font-semibold shadow-md hover:bg-green-800 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-yellow-500 text-gray-800 font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ================= RIGHT PROFILE IMAGE ================= */}
        <div className="flex justify-center md:justify-end relative">

          <div
            className="
              w-[280px] h-[280px]
              rounded-full
              overflow-hidden
              border-[7px]
              border-yellow-400
              shadow-2xl
              animate-float
              mr-10
            "
          >
            <img
              src="/lakshman_developer_image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
