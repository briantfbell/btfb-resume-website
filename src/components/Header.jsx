import { NavLink } from "react-router-dom";
import { Mail, Phone, Briefcase, MapPin } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>Resume / Portfolio</div>
      <h1 className={styles.name}>
        Brian Thomas Fernandez <span>Bell</span>
      </h1>
      <div className={styles.subtitle}>
        U.S. Army 37A | Psychological Operations Officer
        <span className={styles.subtitleBreak}>
          {" "}
          Software Developer · Transitioning in 2027
        </span>
      </div>

      <div className={styles.badges}>
        <span className={`${styles.badge} ${styles.badgeClearance}`}>
          &#9632; Active TS/SCI Clearance
        </span>
        <span className={`${styles.badge} ${styles.badgeSpanish}`}>
          &#9670; Spanish - Fluent (DLPT 3/3; OPI 3)
        </span>
        <span className={`${styles.badge} ${styles.badgeFrench}`}>
          &#9670; French - Refuse to Speak
        </span>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <Mail size={14} />
          <a href="mailto:briantfbell@gmail.com">briantfbell@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <Phone size={14} />
          <span>(618) 310-6721</span>
        </div>
        <div className={styles.contactItem}>
          <MapPin size={14} />
          <span>Southern Pines, NC</span>
        </div>
        <div className={styles.contactItem}>
          <Briefcase size={14} />
          <a
            href="https://linkedin.com/in/briantfbell"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/briantfbell
          </a>
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={styles.tabsLeft}>
          <NavLink
            to="/summary"
            className={({ isActive }) =>
              isActive ? styles.tabActive : styles.tab
            }
          >
            Professional Summary
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? styles.tabActive : styles.tab
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles.tabActive : styles.tab
            }
          >
            Projects
          </NavLink>
        </div>
        <a
          href="/Bell_Resume_CAO_v3.20.01Q.pdf"
          download
          className={styles.tabDownload}
        >
          &#8595; Resume .PDF
        </a>
      </div>
    </header>
  );
}

export default Header;
