import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";
import IconCaretRight from "../../../assets/icon-caret-right.svg";

type TCardProps = {
  children?: ReactNode;
  displayTitleSection: boolean;
  title?: string;
  actionText?: string;
  actionClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

const Card = ({
  title,
  displayTitleSection = true,
  actionText = "See Details",
  children,
  actionClick,
  ...rest
}: TCardProps) => {
  return (
    <div className={styles.card__wrapper} {...rest}>
      {displayTitleSection && (
        <div className={styles.card__title}>
          <p className={clsx(styles.card__titleText, "text-preset-2")}>
            {title}
          </p>
          <div className={styles.card__actionWrapper} onClick={actionClick}>
            <p
              className={clsx(styles.card__actionText, "text-preset-4-regular")}
            >
              {actionText}
            </p>
            <img
              src={IconCaretRight}
              alt="more details icon"
              width={12}
              height={12}
            />
          </div>
        </div>
      )}
      <div className={styles.card__content}>{children}</div>
    </div>
  );
};

export default Card;
