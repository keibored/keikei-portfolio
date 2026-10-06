import { FaMapMarkerAlt } from "react-icons/fa";
import portrait from "../../assets/images/hero/portrait.webp";

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Keisha Dumpit</h1>
        <p className="hero-role">
          Computer Science Student &amp;
          <br className="desktop-break" /> Aspiring Software Engineer
        </p>
        <p className="hero-description">
          I build web applications, from the interface to the backend and data.
        </p>
        <p className="hero-location">
          <FaMapMarkerAlt aria-hidden="true" /> Tarlac, Philippines
        </p>
      </div>
      <div className="hero-art">
        <span className="art-star" aria-hidden="true">
          &#x2727;
        </span>
        <div className="portrait-frame">
          <img
            src={portrait}
            width="700"
            height="700"
            alt="Keisha Dumpit"
            fetchPriority="high"
          />
        </div>
        <svg
          className="bow"
          viewBox="0 0 100 80"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M50 32C18-9 0 10 16 32c10 10 23 7 34 0Zm0 0C82-9 100 10 84 32c-10 10-23 7-34 0ZM48 35C38 51 35 63 21 74M52 35c10 16 13 28 27 39"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse cx="50" cy="32" rx="5" ry="4" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
