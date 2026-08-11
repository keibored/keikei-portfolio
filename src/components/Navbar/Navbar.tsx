import "./Navbar.css";
import { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
  { id: "contact", label: "Contact", icon: <FaPaperPlane /> },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking a navigation link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* DESKTOP / TABLET — GLASS SIDEBAR */}
      <aside className="sidebar">
        <a
          href="#home"
          className="logo"
          aria-label="Keisha Dumpit — Home"
          onClick={handleNavClick}
        >
          <span className="logo-mark">K.</span>
          <span className="logo-spark"></span>
        </a>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar-link ${
                active === item.id ? "active" : ""
              }`}
              onClick={handleNavClick}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-connect">
            <span className="sidebar-connect-label">
              Let's connect!
            </span>

            <div className="sidebar-socials">
              <a
                href="https://github.com/keibored"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <button
            className="theme-toggle"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            <span className="theme-toggle-knob">
              {theme === "dark" ? <FaMoon /> : <FaSun />}
            </span>
          </button>
        </div>
      </aside>

      {/* MOBILE — COMPACT TOP BAR */}
      <header className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <a
            href="#home"
            className="logo"
            aria-label="Keisha Dumpit — Home"
            onClick={handleNavClick}
          >
            <span className="logo-mark">K</span>
            <span className="logo-spark" aria-hidden="true"></span>
          </a>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">

            {/* THEME */}
            <button
              className="theme-toggle"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
            >
              <span className="theme-toggle-knob">
                {theme === "dark" ? <FaMoon /> : <FaSun />}
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className={`menu-toggle ${
                menuOpen ? "open" : ""
              }`}
              aria-label="Toggle Navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

          {/* MOBILE MENU */}
          <nav
            className={`mobile-menu ${
              menuOpen ? "show" : ""
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>
    </>
  );
}

export default Navbar;
