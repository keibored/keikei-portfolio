import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function Divider() {
  return (
    <div className="section-divider container" aria-hidden="true">
      <span>&#x2726;</span>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
