import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      className="projects section container"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="eyebrow">02 / SELECTED PROJECTS</p>
        <h2 id="projects-title">Projects, with purpose.</h2>
        <p>
          Here are some of the projects I've worked on, from school builds to
          real-world experience.
        </p>
      </div>
      <div className="project-rows">
        {projects.map((project, index) => (
          <article
            className={`project-row ${project.image ? "" : "project-row-text"}`}
            key={project.title}
          >
            {project.image ? (
              <figure className="project-preview">
                {project.demo ? (
                  <a
                    className="screenshot-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}: ${project.demoLabel || "View demo"}`}
                  >
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <figcaption>{project.image.caption}</figcaption>
              </figure>
            ) : null}
            <div className="project-body">
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} / {project.category}
              </p>
              <h3>{project.title}</h3>
              <p className="project-purpose">{project.description}</p>
              {project.contribution ? (
                <div className="contribution">
                  <h4>My contribution</h4>
                  <p>{project.contribution}</p>
                </div>
              ) : null}
              {project.technologies.length > 0 ? (
                <ul
                  className="tags"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              ) : null}
              {project.demo || project.source ? (
                <div className="project-links">
                  {project.demo ? (
                    <a
                      className="text-link"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.demoLabel || "View demo"}{" "}
                      <span aria-hidden="true">&#x2197;</span>
                    </a>
                  ) : null}
                  {project.source ? (
                    <a
                      className="text-link"
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code <span aria-hidden="true">&#x2197;</span>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
