import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import InteractiveCursor from "./components/effects/InteractiveCursor";

function App() {
  return (
    <>
      <InteractiveCursor />

      <Navbar />

      <Hero />

      <About />

      <Certifications />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;