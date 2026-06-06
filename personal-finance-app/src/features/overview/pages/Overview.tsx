import clsx from "clsx";
import styles from "./Overview.module.css";
import OverviewSummaryCard from "../components/OverviewSummaryCard";

const Overview = () => {
  return (
    <section className={styles.overview__wrapper}>
      <p className={clsx(styles.overview__title, "text-preset-1")}>Overview</p>
      <div className={styles.overview__summary}>
        <OverviewSummaryCard
          theme="dark"
          title="Current Balance"
          content="$1200.00"
        />
        <OverviewSummaryCard theme="light" title="Income" content="$1200.00" />
        <OverviewSummaryCard
          theme="light"
          title="Expenses"
          content="$1200.00"
        />
      </div>
      <div className={styles.overview__content}></div>
    </section>
  );
};

export default Overview;
