import styles from "./SidenavMenuItem.module.css";
import OverviewIcon from "../assets/icon-nav-overview.svg";
import TransctionIcon from "../assets/icon-nav-transactions.svg";
import BudgetIcon from "../assets/icon-nav-budgets.svg";
import PotIcon from "../assets/icon-nav-pots.svg";
import RecurringBillIcon from "../assets/icon-nav-recurring-bills.svg";
import clsx from "clsx";
import { useSidebarStore } from "../store/useSidebarStore";

type TSidenavMenuItemProps = {
  url: string;
  text: string;
  iconName: string;
};

// resolve the icon image url
const resolveIconImageUrl = (iconName: string): string => {
  switch (iconName) {
    case "overview":
      return OverviewIcon;
    case "transactions":
      return TransctionIcon;
    case "budget":
      return BudgetIcon;
    case "pot":
      return PotIcon;
    case "recurring-bill":
      return RecurringBillIcon;
    default:
      return OverviewIcon;
  }
};

const SidenavMenuItem = ({ url, text, iconName }: TSidenavMenuItemProps) => {
  const { isExpanded } = useSidebarStore();
  return (
    <div className={styles.navItem__wrapper}>
      <img src={resolveIconImageUrl(iconName)} alt={`${iconName} nav icon`} />
      {isExpanded && (
        <div className={clsx(styles.navItem__text, "text-preset-3")}>
          {text}
        </div>
      )}
    </div>
  );
};

export default SidenavMenuItem;
