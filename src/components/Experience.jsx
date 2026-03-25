//Experience.jsx

import { experience } from "../data/resume";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>Experience</div>
      {experience.map((entry) => (
        <div key={entry.org} className={styles.entry}>
          <div className={styles.entryHeader}>
            <div className={styles.entryOrg}>
              {entry.org}
              {entry.projected && (
                <span className={styles.projectedTag}>Projected</span>
              )}
            </div>
          </div>
          <div className={styles.entryRole}>{entry.role}</div>
          <ul className={styles.bullets}>
            {entry.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <br />
          <div className={styles.entryDates}>{entry.dates}</div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
