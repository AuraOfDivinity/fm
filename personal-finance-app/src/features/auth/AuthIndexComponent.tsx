import { Outlet } from "@tanstack/react-router";
import styles from "./AuthIndexCompoent.module.css";
import AuthSidePanelImage from "../../assets/illustration-authentication.svg";
import LogoLarge from "../../assets/logo-large.svg";
import clsx from "clsx";

const AuthIndexComponent = () => {
  return (
    <div className={styles.authIndex__wrapper}>
      <div className={styles.authIndex__image}>
        <img
          className={styles.authIndex__main}
          src={AuthSidePanelImage}
          alt="auth side panel image"
        />
        <img
          src={LogoLarge}
          alt="logo large"
          className={styles.authIndex__logo}
        />
        <div className={styles.authIndex__text}>
          <div className={clsx(styles.authIndex__heading, "text-preset-1")}>
            Keep track of your money and save for your future
          </div>
          <div
            className={clsx(
              styles.authIndex__subHeading,
              "text-preset-4-regular",
            )}
          >
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </div>
        </div>
      </div>
      <div className={styles.authIndex__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthIndexComponent;
