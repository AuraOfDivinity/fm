import clsx from "clsx";
import Button from "../../../shared/ui/Button/Button";
import styles from "./RegisterForm.module.css";
import Input from "../../../shared/ui/Input/Input";
import { Link } from "@tanstack/react-router";

const RegisterForm = () => {
  return (
    <section
      className={clsx(styles.register__wrapper, "animate-slide-up")}
      style={{ "--animation-duration": "640ms" } as React.CSSProperties}
    >
      <div className={clsx(styles.register__header, "text-preset-1")}>
        Sign Up
      </div>
      <div className={styles.register__formFieldWrapper}>
        <Input labelText="Name" />
        <Input labelText="Email" />
        <Input
          labelText="Password"
          helperText="Password must be at least 8 characters"
        />
      </div>
      <Button>Register</Button>
      <div className={clsx(styles.register__footer, "text-preset-4-regular")}>
        Already have an account?{" "}
        <div className={clsx(styles.register__link, "text-preset-4-bold")}>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
