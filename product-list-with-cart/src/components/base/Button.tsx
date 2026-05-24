import { type ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type TButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
};

const Button = ({ children, ...rest }: TButtonProps) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
