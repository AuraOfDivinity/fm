import clsx from "clsx";
import styles from "./Overview.module.css";
import OverviewSummaryCard from "../components/OverviewSummaryCard";
import Card from "../../../shared/ui/Card/Card";
import OverviewPots from "../components/OverviewPots";
import type { CSSProperties } from "react";
import OverviewTransactions from "../components/OverviewTransactions";

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
      <div className={styles.overview__content}>
        <div
          className={clsx(styles.overview__pots, "animate-slide-up")}
          style={
            {
              "--animation-duration": "700ms",
            } as CSSProperties
          }
        >
          <OverviewPots />
        </div>
        <div
          className={clsx(styles.overview__budgets, "animate-slide-up")}
          style={
            {
              "--animation-duration": "700ms",
              "--slide-up-delay": "200ms",
            } as CSSProperties
          }
        >
          <Card displayTitleSection title="Budgets"></Card>
        </div>
        <div
          className={clsx(styles.overview__transactions, "animate-slide-up")}
          style={
            {
              "--animation-duration": "700ms",
              "--slide-up-delay": "300ms",
            } as CSSProperties
          }
        >
          <Card displayTitleSection title="Transactions">
            <OverviewTransactions />
          </Card>
        </div>
        <div
          className={clsx(styles.overview__bills, "animate-slide-up")}
          style={
            {
              "--animation-duration": "700ms",
              "--slide-up-delay": "400ms",
            } as CSSProperties
          }
        >
          <Card displayTitleSection title="Recurring Bills"></Card>
        </div>
      </div>
    </section>
  );
};

export default Overview;
