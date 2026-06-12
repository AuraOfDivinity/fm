import clsx from "clsx";
import styles from "./OverviewBills.module.css";
import { useState } from "react";

type TBillItem = {
  color: string;
  text: string;
  amount: number;
};

const billItemsDef: TBillItem[] = [
  {
    color: "green",
    text: "Paid Bills",
    amount: 190.0,
  },
  {
    color: "yellow",
    text: "Total Upcomming",
    amount: 194.98,
  },
  {
    color: "cyan",
    text: "Due Soon",
    amount: 59.98,
  },
];

const BillItem = ({ color, text, amount }: TBillItem) => {
  return (
    <div
      className={clsx(styles.item__wrapper, styles[`item__border-${color}`])}
    >
      <p className={clsx(styles.item__name, "text-preset-4-regular")}>{text}</p>
      <p
        className={clsx(styles.item__amount, "text-preset-4-bold")}
      >{`$${amount.toFixed(2)}`}</p>
    </div>
  );
};

const OverviewBills = () => {
  const [billItems] = useState<TBillItem[]>(billItemsDef);

  return (
    <div className={styles.bills__wrapper}>
      {billItems.map((bill: TBillItem) => {
        return (
          <BillItem
            color={bill.color}
            amount={bill.amount}
            text={bill.text}
            key={bill.text}
          />
        );
      })}
    </div>
  );
};

export default OverviewBills;
