import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import TiltCard from "../effects/TiltCard";
import SectionReveal from "../effects/SectionReveal";

function Contact() {
  return (
    <section className="contact" id="contact">

      <span className="sparkle-mark contact-sparkle contact-sparkle-1"></span>
      <span className="sparkle-mark contact-sparkle contact-sparkle-2"></span>
      <span className="sparkle-mark contact-sparkle contact-sparkle-3"></span>

      <div className="container">

        <SectionReveal>
          <TiltCard className="contact-card" maxTilt={3}>

            <div className="contact-glow"></div>

            <div className="contact-subtitle">
              <span className="subtitle-line"></span>
              <span>LEAVE A LITTLE LIGHT ON</span>
              <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
              <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
            </div>

            <h2 className="contact-title">
              Have a good
              <br />
              <span>idea?</span> Let's talk.
            </h2>

            <p className="contact-text">
              Whether you have a project in mind, want to collaborate,
              or simply want to connect, I'd love to hear from you.
            </p>

            <div className="contact-actions">

              <a
                href="mailto:keishadumpit@gmail.com"
                className="contact-action contact-action--primary"
                data-cursor="button"
              >
                <span className="contact-action-icon">
                  <FaEnvelope />
                </span>

                <span className="contact-action-text">
                  <span className="contact-action-label">Email Me</span>
                  <span className="contact-action-value">
                    keishadumpit@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://github.com/keibored"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action contact-action--secondary"
                data-cursor="button"
              >
                <span className="contact-action-icon">
                  <FaGithub />
                </span>

                <span className="contact-action-text">
                  <span className="contact-action-label">GitHub</span>
                  <span className="contact-action-value">@keibored</span>
                </span>

                <span className="contact-action-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/keisha-dumpit-28b238394/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action contact-action--secondary"
                data-cursor="button"
              >
                <span className="contact-action-icon">
                  <FaLinkedin />
                </span>

                <span className="contact-action-text">
                  <span className="contact-action-label">LinkedIn</span>
                  <span className="contact-action-value">Keisha Dumpit</span>
                </span>

                <span className="contact-action-arrow">↗</span>
              </a>

            </div>

          </TiltCard>
        </SectionReveal>

      </div>
    </section>
  );
}

export default Contact;
