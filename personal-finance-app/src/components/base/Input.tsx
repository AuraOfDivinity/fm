import type { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

type TInputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  helperText?: string;
  icon?: string;
  labelText?: string;
  labelStyles?: string;
  inputStyles?: string;
  helperStyles?: string;
};

const Input = ({
  labelText,
  helperText,
  helperStyles,
  labelStyles,
  inputStyles,
}: TInputProps) => {
  return (
    <div className={clsx(styles.input__wrapper)}>
      {labelText && (
        <div
          className={clsx(
            styles.input__label,
            labelStyles,
            "text-preset-5-bold",
          )}
        >
          {labelText}
        </div>
      )}
      <input
        name={labelText}
        className={clsx(styles.input__element, inputStyles)}
        placeholder={labelText}
      />
      {helperText && (
        <div
          className={clsx(
            styles.input__helper,
            helperStyles,
            "text-preset-5-regular",
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
