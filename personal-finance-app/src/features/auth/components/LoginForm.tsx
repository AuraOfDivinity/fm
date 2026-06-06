import clsx from "clsx";
import Button from "../../../shared/ui/Button/Button";
import styles from "./LoginForm.module.css";
import Input from "../../../shared/ui/Input/Input";
import { Link } from "@tanstack/react-router";

const LoginForm = () => {
  return (
    <section
      className={clsx(styles.login__wrapper, "animate-slide-up")}
      style={{ "--animation-duration": "640ms" } as React.CSSProperties}
    >
      <div className={clsx(styles.login__header, "text-preset-1")}>Login</div>
      <div className={styles.login__formFieldWrapper}>
        <Input labelText="Email" />
        <Input labelText="Password" />
      </div>
      <Button>Login</Button>
      <div className={clsx(styles.login__footer, "text-preset-4-regular")}>
        Need to create an account?
        <div className={clsx(styles.register__link, "text-preset-4-bold")}>
          <Link to="/auth/register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
