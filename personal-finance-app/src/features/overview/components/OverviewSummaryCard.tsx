import clsx from "clsx";
import styles from "./OverviewSummaryCard.module.css";

type TSummaryCardProps = {
  theme: "dark" | "light";
  title: string;
  content: string;
};

const OverviewSummaryCard = ({ theme, title, content }: TSummaryCardProps) => {
  return (
    <div
      className={clsx(styles.summary__wrapper, {
        [styles.dark]: theme === "dark",
      })}
    >
      <p className={clsx(styles.summary__title, "text-preset-4-regular")}>
        {title}
      </p>
      <p className={clsx(styles.summary__content, "text-preset-1")}>
        {content}
      </p>
    </div>
  );
};

export default OverviewSummaryCard;
