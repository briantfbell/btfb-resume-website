import { Outlet, NavLink } from "react-router-dom";
import styles from "./Creative.module.css";
import { Home } from "lucide-react";

function CreativeLayout() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroEyebrow}>brianTFbell</div>
        <h1 className={styles.heroHeading}>
          Serious analysis for unserious subjects.
          <br/>
        </h1>
        <h1 className={styles.heroHeadingTwo}>
          <em>Applying rigorous methodology to things that don't deserve it.</em>
        </h1>
        <p className={styles.heroBio}>
          I look at things people interact with casually and take them <em>embarrassingly seriously.</em> Pop culture, fast food economics, and
          whatever cultural artifact I can't stop treating like a dissertation
          subject - then I publish the findings anyway.
        </p>
        <nav className={styles.creativeNav}>
          <NavLink
            to="/creative"
            end
            className={({ isActive }) =>
              `${styles.creativeNavBtn} ${styles.creativeNavHome} ${isActive ? styles.creativeNavBtnActive : ""}`
            }
          >
            <Home size={14} />
          </NavLink>
          <NavLink
            to="/creative/work"
            className={({ isActive }) =>
              `${styles.creativeNavBtn} ${isActive ? styles.creativeNavBtnActive : ""}`
            }
          >
            The Work
          </NavLink>
          <NavLink
            to="/creative/ask"
            className={({ isActive }) =>
              `${styles.creativeNavBtn} ${isActive ? styles.creativeNavBtnActive : ""}`
            }
          >
            The Ask
          </NavLink>
          <NavLink
            to="/creative/plan"
            className={({ isActive }) =>
              `${styles.creativeNavBtn} ${isActive ? styles.creativeNavBtnActive : ""}`
            }
          >
            The Plan
          </NavLink>
          <NavLink
            to="/creative/other"
            className={({ isActive }) =>
              `${styles.creativeNavBtn} ${isActive ? styles.creativeNavBtnActive : ""}`
            }
          >
            Other Work
          </NavLink>
        </nav>
      </div>

      <div className={styles.divider} />
      <Outlet />
    </div>
  );
}

export default CreativeLayout;
