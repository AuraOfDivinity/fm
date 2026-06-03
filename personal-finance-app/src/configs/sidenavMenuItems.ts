export type TSideNavMenuItem = {
  iconName: string;
  text: string;
  url: string;
};

export const menuItems: TSideNavMenuItem[] = [
  {
    iconName: "overview",
    text: "Overview",
    url: "/dashboard/overview",
  },
  {
    iconName: "transactions",
    text: "Transactions",
    url: "/dashboard/transactions",
  },
  {
    iconName: "budget",
    text: "Budgets",
    url: "/dashboard/budgets",
  },
  {
    iconName: "pot",
    text: "Pots",
    url: "/dashboard/pots",
  },
  {
    iconName: "recurring-bill",
    text: "Recurring Bills",
    url: "/dashboard/recurring-bill",
  },
];
