import styles from "./Sidebar.module.css";
import { competencyGroups, education } from "../data/resume";

const getCompetencyClass = (item) => {
  const text = item.toLowerCase();

  if (text.includes("react")) return styles.skillReact;
  if (text.includes("javascript")) return styles.skillJavaScript;
  if (text.includes("css")) return styles.skillCSS;
  if (text.includes("node")) return styles.skillNode;
  if (text.includes("express")) return styles.skillExpress;
  if (text.includes("postgresql") || text.includes("sql"))
    return styles.skillPostgreSQL;
  if (text.includes("git")) return styles.skillGit;

  return styles.skillDefault;
};

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Core Competencies</div>

        <div className={styles.competencyGroups}>
          {competencyGroups.map((group) => (
            <div key={group.title} className={styles.competencyGroup}>
              <div className={styles.groupTitle}>{group.title}</div>

              <div className={styles.competencyList}>
                {group.items.map((item) => (
                  <div
                    key={item}
                    className={`${styles.competencyItem} ${styles.skillDefault}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>Education</div>
        {education.map((edu) => (
          <div key={edu.school + edu.dates} className={styles.eduEntry}>
            <div className={styles.eduSchool}>{edu.school}</div>
            <div className={styles.eduDegree}>{edu.degree}</div>
            <div className={styles.eduDates}></div>
            {edu.honor && <div className={styles.eduHonor}>◆ {edu.honor}</div>}
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>Targeting</div>
        <div className={styles.targetingText}>
          <p>
            Defense tech roles in <strong>Product Management</strong> and{" "}
            <strong>Solutions/Mission Operations Engineering</strong>.
          </p>
          <p className={styles.targetingMeta}>
            Available: Late 2027 · Open to relocation
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
