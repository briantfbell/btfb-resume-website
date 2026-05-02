import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>briantfbell.io</div>
      <h1 className={styles.name}>
        Brian Thomas
        <br />
        Fernandez <span>Bell</span>
      </h1>
      <p className={styles.tagline}>
        Communicator who learned to build. Builder who never stopped communicating.
      </p>
      <div className={styles.links}>
        <Link to="/resume" className={styles.link}>
          Professional Profile &#8594;
        </Link>
        <Link to="/creative" className={styles.link}>
          Creative Endeavors &#8594;
        </Link>
      </div>
    </div>
  );
}

export default Home;
