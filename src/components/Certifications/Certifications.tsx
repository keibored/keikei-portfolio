import "./Certifications.css";
import SectionReveal from "../effects/SectionReveal";
import ccnaCert from "../../assets/images/certificates/ccna-introduction-to-networks.png";
import htmlCert from "../../assets/images/certificates/html-essentials.png";
import jsCert from "../../assets/images/certificates/javascript-essentials-1.png";

const certifications = [
  {
    image: ccnaCert,
    year: "2025",
    org: "Cisco Networking Academy",
    title: "CCNA: Introduction to Networks",
    description:
      "Configured switches and routers, built IPv4/IPv6 addressing schemes, and secured small networks against common threats.",
  },
  {
    image: htmlCert,
    year: "2026",
    org: "Cisco Networking Academy × JS Institute",
    title: "HTML Essentials",
    description:
      "Built structured, accessible web pages using semantic HTML, forms, and multimedia integration.",
  },
  {
    image: jsCert,
    year: "2026",
    org: "Cisco Networking Academy × OpenEDG JavaScript Institute",
    title: "JavaScript Essentials 1",
    description:
      "Learned core JavaScript syntax, data types, control flow, and fundamental programming logic.",
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">

        <SectionReveal className="certifications-heading">

          <div className="certifications-subtitle">
            <span className="subtitle-line"></span>
            <span>CREDENTIALS</span>
            <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
            <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
          </div>

          <h2 className="certifications-title">
            Professional
            <br />
            <span>Certifications</span>
          </h2>

          <p className="certifications-text">
            Professional certifications and training programs that
            strengthened my expertise in networking, web development, and
            programming fundamentals.
          </p>

        </SectionReveal>

        <div className="certifications-grid">

          {certifications.map((cert, index) => (

            <SectionReveal key={cert.title} delay={index * 0.08}>
              <div className="cert-card">

                <div className="cert-image-frame">

                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate from ${cert.org}`}
                    className="cert-image"
                  />

                  <span className="cert-year">{cert.year}</span>

                </div>

                <div className="cert-body">

                  <span className="cert-org">{cert.org}</span>

                  <h3 className="cert-title">{cert.title}</h3>

                  <p className="cert-description">{cert.description}</p>

                </div>

              </div>
            </SectionReveal>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;
