import clsx from "clsx";
import styles from "./OverviewTransactions.module.css";
import { useState } from "react";
import EmmaRichardson from "../../../assets/avatars/emma-richardson.jpg";
import SavoryBitesBistro from "../../../assets/avatars/savory-bites-bistro.jpg";
import DanielCarter from "../../../assets/avatars/daniel-carter.jpg";
import SunPark from "../../../assets/avatars/sun-park.jpg";
import UrbanServicesHub from "../../../assets/avatars/urban-services-hub.jpg";

type TTransActionData = {
  name: string;
  iconPath: string;
  type: "debit" | "credit";
  amount: number;
  date: string;
};

// To be removed at integration
const transactionData: TTransActionData[] = [
  {
    name: "Emma Richardson",
    iconPath: EmmaRichardson,
    type: "debit",
    date: "19 Aug 2024",
    amount: 75.5,
  },
  {
    name: "Savory Bites Bistro",
    iconPath: SavoryBitesBistro,
    type: "credit",
    date: "19 Aug 2024",
    amount: 55.5,
  },
  {
    name: "Daniel Carter",
    iconPath: DanielCarter,
    type: "credit",
    date: "18 Aug 2024",
    amount: 42.3,
  },
  {
    name: "Sun Park",
    iconPath: SunPark,
    type: "debit",
    date: "17 Aug 2024",
    amount: 120.0,
  },
  {
    name: "Urban Services Hub",
    iconPath: UrbanServicesHub,
    type: "credit",
    date: "19 Aug 2024",
    amount: 65.0,
  },
];

const OverviewTransactions = () => {
  const [tData] = useState<TTransActionData[]>(transactionData);

  return (
    <section className={styles.transactions__wrapper}>
      {tData.map((item) => {
        return (
          <div className={styles.transaction__item}>
            <div className={styles.transaction__profile}>
              <img
                className={styles.transaction__profileIcon}
                src={item.iconPath}
                alt="profile logo"
              />
              <p
                className={clsx(
                  styles.transaction__profileName,
                  "text-preset-4-bold",
                )}
              >
                {item.name}
              </p>
            </div>
            <div className={styles.transaction__value}>
              <p
                className={clsx(
                  "text-preset-4-bold",
                  item.type === "credit"
                    ? [styles.transaction__creditText]
                    : [styles.transaction__debitText],
                )}
              >
                {item.type === "debit"
                  ? `+$${item.amount.toFixed(2)}`
                  : `-$${item.amount.toFixed(2)}`}
              </p>
              <p
                className={clsx(
                  styles.transaction__date,
                  "text-preset-5-regular",
                )}
              >
                {item.date}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default OverviewTransactions;
