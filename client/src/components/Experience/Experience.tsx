import { FaBriefcase } from "react-icons/fa";
export default function Experience() {
  return (
    <section
      className="experience section container"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="eyebrow">01 / EXPERIENCE</p>
        <h2 id="experience-title">What I've worked on.</h2>
        <p>
          Real-world experience that strengthened my development skills and
          taught me how to build for actual users.
        </p>
      </div>
      <article className="experience-row">
        <div className="experience-meta">
          <span className="section-icon" aria-hidden="true">
            <FaBriefcase />
          </span>
          <div>
            <h3>Developer Intern</h3>
            <p className="organization">Wireless Access for Health, Inc.</p>
            <p>162-hour internship</p>
            <p className="experience-date">Summer 2026</p>
          </div>
        </div>
        <div className="experience-body">
          <ul className="contribution-list">
            <li>
              Developed attendance workflows and validation for WAH Payroll.
            </li>
            <li>
              Contributed to facility management and certificate generation in
              WAHEMS.
            </li>
            <li>Worked with React, Express, and MySQL.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
