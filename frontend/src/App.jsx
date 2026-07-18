import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/aboutme/About";
import Education from "./components/eduacation/Education.jsx";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FloatingSocialBar from "./components/socialmedia/FloatingSocialBar";

function App() {
  return (
    <div className="relative">
      <FloatingSocialBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
