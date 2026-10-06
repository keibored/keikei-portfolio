import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaMoon, FaSun } from "react-icons/fa";
import { profile } from "../../data/profile";

export default function Header() {
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === "dark",
  );
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* Theme still works without storage. */
    }
  }
  return (
    <header className="site-header container">
      <a href="#home" className="logo" aria-label="Keisha Dumpit, back to top">
        K.
      </a>
      <div className="header-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" /> <span>GitHub</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn aria-hidden="true" /> <span>LinkedIn</span>
        </a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          aria-pressed={dark}
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
