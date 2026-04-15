// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





import Navbar from "./components/header/Navbar";

import About from "./components/aboutme/About";
import Hero from "./components/hero/Hero";
import Education from "./components/eduacation/Education.jsx";
import Skills from "./components/skills/Skills";
// import CapabilitiesSection from "./components/capabilities/CapabilitiesSection";

import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import FloatingSocialBar from "./components/socialmedia/FloatingSocialBar";


function App() {
  return (
    <div className="pt-[72px]">
      <FloatingSocialBar />

      <Navbar />
      <Hero />
      <About/>
      <Education/>
      <Skills/>
      {/* <CapabilitiesSection /> */}
    <Projects />
<Contact />

    <Footer />


      {/* Temporary content */}
      {/* <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-green-700">
          Portfolio Home
        </h1>
      </section> */}
    </div>
  );
}

export default App;
