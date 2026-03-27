import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "./resume/Resume.module.css";
import layoutStyles from "./PortfolioLayout.module.css";

function PortfolioLayout() {
  return (
    <div className={layoutStyles.layout}>
      <div className={styles.page}>
        <Header />
        <div className={styles.divider} />
        <Outlet />
      </div>
    </div>
  );
}

export default PortfolioLayout;
