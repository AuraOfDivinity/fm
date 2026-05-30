import { Outlet } from "@tanstack/react-router";
import styles from "./AuthIndexCompoent.module.css";

const AuthIndexComponent = () => {
  return (
    <div className={styles.authIndex__wrapper}>
      <div className={styles.authIndex__image}></div>
      <div className={styles.authIndex__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthIndexComponent;
