import Card from "../../../shared/ui/Card/Card";
import styles from "./OverviewPots.module.css";
import PotIcon from "../../../assets/icon-pot.svg";
import clsx from "clsx";
import DataWithRibbon from "./DataWithRibbon";

const PotsContent = () => {
  return (
    <div className={styles.pots__wrapper}>
      <div className={styles.pots__totalSavings}>
        <img src={PotIcon} alt="pot icon" />
        <div className={styles.pots__totalSavingsText}>
          <p
            className={clsx(
              styles.pots__totalSavingsLabel,
              "text-preset-4-regular",
            )}
          >
            Total Saved
          </p>
          <p className={clsx(styles.pots__totalSavingsAmount, "text-preset-1")}>
            $850
          </p>
        </div>
      </div>
      <div className={styles.pots__subPots}>
        <DataWithRibbon ribbonColor="red" amount="$160" text="Entertainment" />
        <DataWithRibbon ribbonColor="cyan" amount="$40" text="Gift" />
        <DataWithRibbon
          ribbonColor="navy"
          amount="$110"
          text="Concert Ticket"
        />
        <DataWithRibbon ribbonColor="yellow" amount="$10" text="New Laptop" />
      </div>
    </div>
  );
};

const OverviewPots = () => {
  return (
    <Card displayTitleSection title="Pots">
      <PotsContent />
    </Card>
  );
};

export default OverviewPots;
