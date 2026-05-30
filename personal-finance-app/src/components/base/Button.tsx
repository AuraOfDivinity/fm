import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type TButtonProps = ComponentPropsWithoutRef<"button"> & {
  buttonStyles?: string;
};

const Button = ({ buttonStyles, children, ...rest }: TButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button__wrapper,
        "text-preset-4-bold",
        buttonStyles,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
