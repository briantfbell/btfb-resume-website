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
        Officer. Developer. Analyst of things that don't need analyzing.
      </p>
      <div className={styles.links}>
        <Link to="/resume" className={styles.link}>
          Resume &#8594;
        </Link>
        <Link to="/creative" className={styles.link}>
          Creative &#8594;
        </Link>
      </div>
    </div>
  );
}

export default Home;
