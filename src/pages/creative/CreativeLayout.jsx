import { Outlet, NavLink } from "react-router-dom";
import { Mail, Home } from "lucide-react";
import styles from "./Creative.module.css";

function CreativeLayout() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroEyebrow}>brianTFbell</div>
        <h1 className={styles.heroHeading}>
          Cultural Anthropology:{" "}
          <span className={styles.heroHeadingTwo}>
            Serious analysis for unserious subjects.
          </span>
        </h1>
        <p className={styles.heroBio}>
          I look at things people interact with casually and take them{" "}
          <em>embarrassingly seriously.</em> Whatever the subject may be:
          anything that is, or was, in the zeitgeist becomes an artifact I can't
          stop treating like a dissertation subject. I deep dive, have some
          self-doubt, then publish the findings anyway.
        </p>
        <nav className={styles.creativeNav}>
          <div className={styles.creativeNavButtons}>
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
          </div>

          <div className={styles.creativeNavSocials}>
            <a
              href="https://www.youtube.com/@briantfbell"
              target="_blank"
              rel="noreferrer"
              className={styles.creativeNavSocialLink}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@briantfbell"
              target="_blank"
              rel="noreferrer"
              className={styles.creativeNavSocialLink}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>

            <a
              href="mailto:briantfbellyt@gmail.com"
              className={styles.creativeNavSocialLink}
            >
              <Mail size={35} />
            </a>
          </div>
        </nav>
      </div>

      <div className={styles.divider} />
      <Outlet />
    </div>
  );
}

export default CreativeLayout;
