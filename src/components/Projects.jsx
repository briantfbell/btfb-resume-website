import styles from "./Projects.module.css";
import { projects } from "../data/projects";

const getTagClass = (tag) => {
  switch (tag.toLowerCase()) {
    case "react":
      return styles.tagReact;
    case "javascript":
      return styles.tagJavaScript;
    case "css animation":
      return styles.tagCSS;
    case "node.js":
      return styles.tagNode;
    case "express":
      return styles.tagExpress;
    case "postgresql":
      return styles.tagPostgreSQL;
    case "ui/ux":
      return styles.tagUIUX;
    case "game mechanics":
      return styles.tagGameMechanics;
    case "military":
      return styles.tagMilitary;
    default:
      return styles.tagDefault;
  }
};

function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Projects</div>

      {projects?.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.text}>
              <div className={styles.projectName}>{project.name}</div> <br />
              <div className={styles.projectDesc}>{project.description}</div>
              <br />
              <div className={styles.tags}>
                {project.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`${styles.tag} ${getTagClass(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <br />
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectLink}
                >
                  View Project
                </a>
              ) : (
                <div className={styles.projectStatus}>{project.status}</div>
              )}
            </div>

            {project.images && (
              <div className={styles.preview}>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} preview ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
