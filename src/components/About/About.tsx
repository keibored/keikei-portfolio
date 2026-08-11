import "./About.css";
import portrait from "../../assets/images/hero/portrait.png";
import wahPayrollPreview from "../../assets/images/projects/WAHPayroll-preview.png";
import SectionReveal from "../effects/SectionReveal";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiLaravel,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

const journeyItems = [
  {
    category: "Education",
    date: "2023 – 2026",
    title: "Tarlac State University",
    subtitle: "Bachelor of Science in Computer Science",
  },
  {
    category: "Experience",
    date: "Summer 2026",
    title: "Wireless Access for Health, Inc.",
    role: "Developer",
    description: (
      <>
        Worked as a developer during the summer of 2026, contributing to
        improvements for Wireless Access for Health, Inc.'s{" "}
        <a
          href="https://payroll.wah.ph/login"
          target="_blank"
          rel="noopener noreferrer"
          className="timeline-link"
        >
          WAH Payroll System
        </a>
        .
      </>
    ),
    bullets: [
      "Improved features and functionality of the WAH Payroll System.",
      "Worked on the web application's attendance and payroll-related functionality.",
      "Contributed to frontend development using React.js and TypeScript.",
      "Worked with PHP Laravel and MySQL on the application's backend and database.",
      "Improved existing web application features based on project requirements.",
      "Collaborated with the development team during implementation and integration.",
    ],
    tech: ["React.js", "TypeScript", "PHP Laravel", "MySQL"],
    showcase: {
      image: wahPayrollPreview,
      imageAlt:
        "WAHPayroll sign-in screen — Wireless Access for Health workforce and payroll management platform",
      organization: "Wireless Access for Health",
      title: "WAHPayroll System",
      description:
        "An attendance and payroll management system I contributed to during my internship at Wireless Access for Health.",
      contribution:
        "My primary task focused on improving the attendance workflow, particularly the time-in and time-out functionality.",
      tech: ["React.js", "TypeScript", "PHP Laravel", "MySQL"],
      url: "https://payroll.wah.ph/login",
    },
  },
];

const techCategories = [
  {
    label: "Frontend",
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: <FaPhp />, name: "PHP" },
      { icon: <SiLaravel />, name: "Laravel" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ],
  },
  {
    label: "Database",
    items: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <SiSupabase />, name: "Supabase" },
    ],
  },
  {
    label: "Programming",
    items: [
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
    ],
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Heading */}

        <SectionReveal className="about-heading">

          <div className="about-subtitle">
            <span className="subtitle-line"></span>
            <span>A LITTLE ABOUT ME</span>
            <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
            <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
          </div>

          <h2 className="about-title">
            Built with
            <br />
            <span>curiosity.</span>
          </h2>

          <p className="about-intro">
            I enjoy building thoughtful digital experiences where
            functionality meets elegant design.
          </p>

        </SectionReveal>

        {/* Card */}

        <div className="about-card">

          {/* Profile */}

          <div className="about-photo">

            <div className="photo-frame">

              <img
                src={portrait}
                alt="Keisha Dumpit"
                className="about-image"
              />

            </div>

            <h3>Keisha Dumpit</h3>

            <p>Bachelor of Science in Computer Science</p>

            <span>Aspiring Full Stack Developer</span>

          </div>

          {/* Tech stack */}

          <div className="about-techstack">

            <div className="techstack-label">
              <span className="subtitle-line"></span>
              <span>TECH STACK</span>
              <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
              <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
            </div>

            {techCategories.map((category) => (
              <div className="tech-category" key={category.label}>

                <h4 className="tech-category-label">{category.label}</h4>

                <div className="tech-grid">
                  {category.items.map((tech) => (
                    <div className="tech-chip" key={tech.name}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Experience & Education */}

        <SectionReveal className="journey-heading">

          <div className="about-subtitle">
            <span className="subtitle-line"></span>
            <span>EXPERIENCE & EDUCATION</span>
            <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
            <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
          </div>

          <h2 className="journey-title">My Journey</h2>

          <p className="journey-intro">
            My academic background and hands-on experience in software
            development.
          </p>

        </SectionReveal>

        <div className="timeline">

          <div className="timeline-line"></div>

          {journeyItems.map((item, index) => (
            <SectionReveal
              className="timeline-item"
              key={item.title}
              delay={index * 0.15}
            >
              <span className="timeline-marker"></span>

              <div className="timeline-card">

                <div className="timeline-meta">
                  <span className="timeline-category">{item.category}</span>
                  <span className="timeline-date">{item.date}</span>
                </div>

                <h3 className="timeline-title">{item.title}</h3>

                {item.subtitle && (
                  <p className="timeline-subtitle">{item.subtitle}</p>
                )}

                {item.role && (
                  <p className="timeline-role">{item.role}</p>
                )}

                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}

                {item.bullets && (
                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {item.tech && (
                  <div className="timeline-tech">
                    {item.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}

                {item.showcase && (
                  <div className="timeline-showcase">

                    <a
                      className="timeline-showcase-preview"
                      href={item.showcase.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="view"
                      aria-label={`Open the ${item.showcase.title} sign-in page`}
                    >
                      <img
                        src={item.showcase.image}
                        alt={item.showcase.imageAlt}
                        className="timeline-showcase-img"
                      />
                    </a>

                    <div className="timeline-showcase-body">

                      <span className="timeline-showcase-org">
                        {item.showcase.organization}
                      </span>

                      <h4 className="timeline-showcase-title">
                        {item.showcase.title}
                      </h4>

                      <p className="timeline-showcase-description">
                        {item.showcase.description}
                      </p>

                      <p className="timeline-showcase-contribution">
                        <strong>My contribution:</strong>{" "}
                        {item.showcase.contribution}
                      </p>

                      <div className="timeline-showcase-tech">
                        {item.showcase.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <a
                        className="timeline-showcase-btn"
                        href={item.showcase.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="view"
                      >
                        View Project →
                      </a>

                    </div>

                  </div>
                )}

              </div>
            </SectionReveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;
