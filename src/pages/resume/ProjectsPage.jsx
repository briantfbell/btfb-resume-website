import styles from "../../components/Projects.module.css";
import { projects } from "../../data/projectsData";

const getChipClass = (chip) => {
  switch (chip?.toLowerCase()) {
    case "product manager":
      return styles.chipPM;
    case "solo project":
      return styles.chipSolo;
    case "collaborative effort":
      return styles.chipCollab;
    default:
      return styles.chipDefault;
  }
};

const getTagClass = (tag) => {
  switch (tag.toLowerCase()) {
    // FrontEnd
    case "react":
      return styles.tagReact;
    case "javascript":
      return styles.tagJavaScript;
    case "css animation":
      return styles.tagCSS;
    // BackEnd
    case "node.js":
      return styles.tagNode;
    case "express":
      return styles.tagExpress;
    case "postgresql":
      return styles.tagPostgreSQL;
    //Other
    case "vibe-coded":
      return styles.tagVibes;
    case "ui/ux":
      return styles.tagUIUX;
    case "game mechanics":
      return styles.tagGameMechanics;
    case "military":
      return styles.tagMilitary;
    //Default / No Tag Decorations
    default:
      return styles.tagDefault;
  }
};

function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Projects</div>
      <div className={styles.projectsGrid}>
        {projects?.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.projectName}>{project.name}</div>
              <div className={styles.chips}>
                {project.chips?.map((chip, i) => (
                  <span
                    key={i}
                    className={`${styles.chip} ${getChipClass(chip)}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.text}>
                <div className={styles.projectDesc}>{project.description}</div>
                <br />
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

              {project.video ? (
                <div className={styles.preview}>
                  <iframe
                    src={project.video}
                    title={`${project.name} preview`}
                    allowFullScreen
                    className={styles.projectVideo}
                  />
                </div>
              ) : project.images ? (
                <div className={styles.preview}>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.name} preview ${i + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
