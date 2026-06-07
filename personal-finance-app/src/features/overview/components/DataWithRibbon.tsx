import clsx from "clsx";
import styles from "./DataWithRibbon.module.css";
import type { CSSProperties } from "react";

type TDataWithRibbonProps = {
  ribbonColor: string;
  text: string;
  amount: string;
};

const ribbonColorMap = (color: string): string => {
  return `var(--color-${color})`;
};

const DataWithRibbon = ({
  ribbonColor = "var(--color-red)",
  text,
  amount,
}: TDataWithRibbonProps) => {
  return (
    <div
      className={styles.data__wrapper}
      style={{ "--ribbon-color": ribbonColorMap(ribbonColor) } as CSSProperties}
    >
      <p className={clsx(styles.data__text, "text-preset-5-regular")}>{text}</p>
      <p className={clsx(styles.data__amount, "text-preset-4-bold")}>
        {amount}
      </p>
    </div>
  );
};

export default DataWithRibbon;
