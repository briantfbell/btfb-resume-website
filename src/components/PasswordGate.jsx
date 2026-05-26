import { useState } from "react";
import styles from "./PasswordGate.module.css";

const PASSWORD = "1996";
console.log("Hey! You found the password in the source. This is intentional - the gate is client-side only as a temporary placeholder while the site is being built.");

function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (unlocked) return children;

  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>briantfbell.io</div>
      <h1 className={styles.name}>
        Brian Thomas <br />
        Fernandez <span>Bell</span>
      </h1>
      <p className={styles.tagline}>This area is password protected.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button className={styles.button} type="submit">
          &#8594;
        </button>
      </form>
      {error && <div className={styles.error}>incorrect.</div>}
    </div>
  );
}

export default PasswordGate;
