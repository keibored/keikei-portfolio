import Certifications from "../Certifications/Certifications";

const skills = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend & Data",
    items: ["Express", "Node.js", "PHP", "Laravel", "MySQL", "SQL", "Supabase"],
  },
  { name: "Tools", items: ["GitHub"] },
  { name: "Other Languages", items: ["Java", "Python"] },
];

export default function About() {
  return (
    <section
      className="education section"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <div className="section-heading background-heading">
          <p className="eyebrow">03 / BACKGROUND</p>
          <h2 id="education-title">Education &amp; Skills</h2>
        </div>
        <section className="background-row" aria-labelledby="education-label">
          <h3 id="education-label" className="background-label">Education</h3>
          <div className="background-content education-details">
            <h4>Bachelor of Science in Computer Science</h4>
            <p className="education-university">Tarlac State University</p>
            {/* Original education date range; no graduation claim is inferred. */}
            <p className="education-dates">2023–2026</p>
            <p className="education-distinction">Consistent Dean's Lister</p>
          </div>
        </section>
        <section className="background-row" aria-labelledby="skills-label">
          <h3 id="skills-label" className="background-label">Technical Skills</h3>
          <div className="background-content skill-groups">
            {skills.map((group) => (
              <div className="skill-group" key={group.name}>
                <h4>{group.name}</h4>
                <ul className="skill-list" aria-label={`${group.name} skills`}>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Certifications />
      </div>
    </section>
  );
}
