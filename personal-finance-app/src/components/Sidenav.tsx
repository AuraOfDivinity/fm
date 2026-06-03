import clsx from "clsx";
import { useSidebarStore } from "../store/useSidebarStore";
import SideNavLogoLarge from "../assets/logo-large.svg";
import SideNavLogoSmall from "../assets/logo-small.svg";
import { menuItems } from "../configs/sidenavMenuItems";
import styles from "./Sidenav.module.css";
import SidenavMenuItem from "./SidenavMenuItem";

const Sidenav = () => {
  const { isExpanded, toggle } = useSidebarStore();

  return (
    <div
      onClick={() => toggle()}
      className={clsx(styles.sideNav__wrapper, isExpanded && styles.isExpanded)}
    >
      {/* How can we better animate this? */}
      <div className={clsx(styles.sideNav__logo)}>
        {isExpanded ? (
          <img src={SideNavLogoLarge} alt="logo-large" />
        ) : (
          <img src={SideNavLogoSmall} alt="logo-large" />
        )}
      </div>
      <div className={styles.sideNav__menuContent}>
        {menuItems.map((item) => {
          return (
            <SidenavMenuItem
              url={item.url}
              iconName={item.iconName}
              text={item.text}
              key={item.text}
            />
          );
        })}
      </div>
      <div className={styles.sideNav__footer}></div>
    </div>
  );
};

export default Sidenav;
