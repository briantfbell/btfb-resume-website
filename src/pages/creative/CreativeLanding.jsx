import { NavLink } from "react-router-dom";
import styles from "./Creative.module.css";

function CreativeLanding() {
  return (
    <div className={styles.landing}>
      <p className={styles.landingCopy}>
        638K views. Two videos a year. A day job that ends in 2027. This is what
        the channel looks like with one hand tied behind my back.
      </p>
    </div>
  );
}

export default CreativeLanding;
