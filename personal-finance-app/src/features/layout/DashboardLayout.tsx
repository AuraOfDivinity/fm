import { Outlet } from "@tanstack/react-router";
import styles from "./DashboardLayout.module.css";
import Sidenav from "./components/Sidenav";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard__wrapper}>
      <div className={styles.dashboard__sidenav}>
        <Sidenav />
      </div>
      <div className={styles.dashboard__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
