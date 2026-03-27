import { Outlet, NavLink } from "react-router-dom";
import styles from "./Creative.module.css";
import { Home } from "lucide-react";

function CreativeLayout() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroEyebrow}>brianTFbell</div>
        <h1 className={styles.heroHeading}>
          I take things people interact with casually
          <br />
          and take them <em>embarrassingly seriously.</em>
        </h1>
        <p className={styles.heroBio}>
          U.S. Army Special Operations officer. Software developer. YouTube
          person. I make videos about pop culture, game theory, and whatever I
          can't stop thinking about - then I quantify them until the joke
          becomes a thesis.
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
