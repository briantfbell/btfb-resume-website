import { summary } from "../../data/resume";
import styles from "./Summary.module.css";

function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionLabel}>Professional Summary</div>
      <div className={styles.content}>
        {summary.split("\n\n").map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Summary;
