import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact-content">
        <div className="contact-intro">
          <h2 id="contact-title">Get in touch</h2>
          <p>Open to software development opportunities and collaboration.</p>
        </div>
        <div className="contact-links">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">&#x2197;</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">&#x2197;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
