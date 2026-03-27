import Experience from "../../components/Experience";
import Sidebar from "../../components/Sidebar";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <div className={styles.grid}>
      <main>
        <Experience />
      </main>
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
}

export default Resume;
