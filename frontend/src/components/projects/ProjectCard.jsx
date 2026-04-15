// // src/components/projects/ProjectCard.jsx

// export default function ProjectCard({ project }) {
//   return (
//    <div
//   className="
//     w-[90%] max-w-[360px]
//     h-[460px]
//     bg-white/5 backdrop-blur-lg
//     border border-white/10 rounded-2xl
//     overflow-hidden shadow-xl
//     hover:scale-105 transition-transform duration-300
//   "
// >


//       {/* Image */}
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-56 object-cover"

//       />

//       {/* Content */}
//       <div className="p-4 text-white">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tech.map((tech, index) => (
//             <span
//               key={index}
//               className="text-xs px-2 py-1 rounded-full
//                          bg-white/10 border border-white/20"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <div className="flex gap-3">
//           <a
//             href={project.github}
//             className="text-sm px-4 py-2 rounded-lg
//                        bg-white/10 hover:bg-white/20 transition"
//           >
//             GitHub
//           </a>
//           <a
//             href={project.live}
//             className="text-sm px-4 py-2 rounded-lg
//                        bg-green-500/80 hover:bg-green-500 transition"
//           >
//             Live
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }











// src/components/projects/ProjectCard.jsx

// export default function ProjectCard({ project }) {
//   return (
//     <div
//       className="
//         w-[90%] max-w-[360px]
//         h-[480px]
//         bg-white/5 backdrop-blur-lg
//         border border-white/10 rounded-2xl
//         overflow-hidden shadow-xl
//         hover:scale-105 transition-transform duration-300
//         flex flex-col
//       "
//     >
//       {/* IMAGE – MAX SPACE */}
//       <div className="flex-1">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* BOTTOM CONTENT */}
//       <div className="p-4 text-white bg-black/70 backdrop-blur-md">
//         <h3 className="text-lg font-semibold mb-2">
//           {project.title}
//         </h3>

//         {/* TECH STACK */}
//         <div className="flex flex-wrap gap-2 mb-3">
//           {project.tech.map((tech, index) => (
//             <span
//               key={index}
//               className="
//                 text-xs px-2 py-1 rounded-full
//                 bg-white/10 border border-white/20
//               "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* ACTION BUTTONS */}
//         <div className="flex gap-3">
//           <a
//             href={project.github}
//             className="
//               text-sm px-4 py-2 rounded-lg
//               bg-white/10 hover:bg-white/20
//               transition
//             "
//           >
//             GitHub
//           </a>

//           <a
//             href={project.live}
//             className="
//               text-sm px-4 py-2 rounded-lg
//               bg-green-500/80 hover:bg-green-500
//               transition
//             "
//           >
//             Live
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
   



// export default function ProjectCard({ project }) {
//   return (
//     <div
//       className="
//         w-[280px] h-[420px]
//         bg-white/5 backdrop-blur-xl
//         border border-white/10 rounded-2xl
//         overflow-hidden
//         shadow-lg hover:shadow-2xl
//         hover:-translate-y-2
//         transition-all duration-300
//         flex flex-col
//         group
//       "
//     >
//       {/* IMAGE */}
//       <div className="h-[55%] overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="
//             w-full h-full object-cover
//             group-hover:scale-110
//             transition-transform duration-500
//           "
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="flex-1 p-4 flex flex-col justify-between bg-black/60 backdrop-blur-md text-white">
        
//         {/* TITLE */}
//         <h3 className="text-md font-semibold tracking-wide">
//           {project.title}
//         </h3>

//         {/* TECH STACK */}
//         <div className="flex flex-wrap gap-1.5 mt-2">
//           {project.tech.map((tech, index) => (
//             <span
//               key={index}
//               className="
//                 text-[10px] px-2 py-[2px]
//                 rounded-full
//                 bg-white/10 border border-white/20
//                 text-gray-200
//               "
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* BUTTONS */}
//         <div className="flex gap-2 mt-3">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               flex-1 text-center text-xs py-2 rounded-md
//               bg-white/10 hover:bg-white/20
//               border border-white/20
//               transition-all duration-200
//             "
//           >
//             GitHub
//           </a>

//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               flex-1 text-center text-xs py-2 rounded-md
//               bg-gradient-to-r from-green-400 to-emerald-500
//               hover:opacity-90
//               text-black font-medium
//               transition-all duration-200
//             "
//           >
//             Live
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// }   





export default function ProjectCard({ project }) {
  return (
    <div
      className="
        w-[260px] h-[380px]
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-2xl
        overflow-hidden
        shadow-lg hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
        flex flex-col
        group
      "
    >
      {/* IMAGE */}
      <div className="h-[55%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition-transform duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-black/60 text-white">
        
        <h3 className="text-sm font-semibold tracking-wide">
          {project.title}
        </h3>

        {/* TECH */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                text-[10px] px-2 py-[2px]
                rounded-full
                bg-white/10 border border-white/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-3">
          <a
            href={project.github}
            className="
              flex-1 text-center text-xs py-2 rounded-md
              bg-white/10 hover:bg-white/20
              border border-white/20
              transition
            "
          >
            GitHub
          </a>

          <a
            href={project.live}
            className="
              flex-1 text-center text-xs py-2 rounded-md
              bg-gradient-to-r from-green-400 to-emerald-500
              text-black font-medium
              hover:opacity-90
              transition
            "
          >
            Live
          </a>
        </div>

      </div>
    </div>
  );
}