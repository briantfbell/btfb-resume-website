import { NavLink } from "react-router-dom";
import { Mail, Phone, Briefcase, MapPin, Globe } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>Resume / Portfolio</div>
      <h1 className={styles.name}>
        Brian Thomas Fernandez <span>Bell</span>
      </h1>
      <div className={styles.subtitle}>
        <span>U.S. Army 37A - Psychological Operations Officer</span>
        <span>|</span>
        <span>Systems Engineer </span>
        <span>|</span>
        <span>Strategic Communicator</span>
        <span>|</span>
        <span>Builder & Creative</span>
        <span>|</span>
        <span>Solutions Architect</span>
      </div>

      <div className={styles.badges}>
        <span className={`${styles.badge} ${styles.badgeClearance}`}>
          &#9670; Active TS/SCI Clearance
        </span>
        <span className={`${styles.badge} ${styles.badgeUIUC}`}>
          &#9670; University of Illinois
        </span>
        <span className={`${styles.badge} ${styles.badgeSpanish}`}>
          &#9670; Spanish - Professionally Fluent
        </span>
        <span className={`${styles.badge} ${styles.badgeSOFVet}`}>
          &#9670; Special Operations Veteran
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
          <Briefcase size={14} />
          <a
            href="https://linkedin.com/in/briantfbell"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/briantfbell
          </a>
        </div>
        <div className={styles.contactItem}>
          <MapPin size={14} />
          <span>Southern Pines, NC</span>
        </div>
        <div className={styles.contactItem}>
          <Globe size={14} />
          <span>Open to Relocation</span>
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
            Proffesional Summary
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
            Project Portfolio
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
