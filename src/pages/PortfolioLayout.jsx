import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Resume.module.css";

function PortfolioLayout() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.divider} />
      <Outlet />
    </div>
  );
}

export default PortfolioLayout;
