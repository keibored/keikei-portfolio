import "./Projects.css";
import SectionReveal from "../effects/SectionReveal";
import CtaSparkles from "../effects/CtaSparkles";
import findYourFurPreview from "../../assets/images/projects/findyourfur-preview.png";

const projects = [
  {
    number: "01",
    title: "Pet Adoption System",
    description:
      "A full-stack web application for managing pets, adopters, and adoption requests.",

    tags: ["Laravel", "React", "MySQL", "TypeScript"],
    url: "https://findyourfur.great-site.net",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <SectionReveal className="projects-heading">

          <div className="projects-subtitle">
            <span className="subtitle-line"></span>
            <span>SELECTED WORK</span>
            <span className="eyebrow-sparkle eyebrow-sparkle--lg" aria-hidden="true"></span>
            <span className="eyebrow-sparkle eyebrow-sparkle--sm" aria-hidden="true"></span>
          </div>

          <h2 className="projects-title">
            Things I've
            <br />
            <span>made.</span>
          </h2>

          <p className="projects-text">
            A collection of projects that showcase my passion
            for creating thoughtful digital experiences.
          </p>

        </SectionReveal>

        {/* Featured */}

        <SectionReveal delay={0.1}>
          <div className="featured-project">

            <a
              className="featured-preview"
              href={projects[0].url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              aria-label="Open the Pet Adoption System live preview"
            >

              <img
                src={findYourFurPreview}
                alt="FindYourFur homepage — Find Your Perfect Furry Friend"
                className="featured-preview-img"
              />

              <span className="featured-badge">
                {projects[0].number} / FEATURED
              </span>

              <span className="featured-visit">
                Visit Project <span className="arrow">→</span>
              </span>

              <span className="featured-view-pill">
                <span className="pill-dot" aria-hidden="true"></span>
                view ♡
              </span>

            </a>

            <div className="featured-body">

              <div className="project-tags">

                {projects[0].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}

              </div>

              <h3>{projects[0].title}</h3>

              <p>{projects[0].description}</p>

              <div className="view-project-wrap cta-sparkle-wrap">

                <CtaSparkles variant="c" />

                <a
                  className="view-project-btn"
                  href={projects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="view"
                >
                  View Project
                </a>

              </div>

            </div>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}

export default Projects;
