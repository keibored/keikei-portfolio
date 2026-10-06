import ccna from "../../assets/images/certificates/CCNAITNUpdated20260811-21-5vdy2t.pdf";
import html from "../../assets/images/certificates/HTMLEssentialsv120260811-21-t1ep7s.pdf";
import js from "../../assets/images/certificates/JavaScriptEssentials1Update20260810-21-rz31nf.pdf";

const certificates = [
  { name: "CCNA: Introduction to Networks", url: ccna },
  { name: "HTML Essentials", url: html },
  { name: "JavaScript Essentials 1", url: js },
];
export default function Certifications() {
  return (
    <section className="background-row" aria-labelledby="certifications-label">
      <h3 id="certifications-label" className="background-label">Certifications</h3>
      <ul className="background-content certificate-links">
        {certificates.map((cert) => (
          <li key={cert.name}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              {cert.name}
              <span aria-hidden="true">&#x2197;</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
