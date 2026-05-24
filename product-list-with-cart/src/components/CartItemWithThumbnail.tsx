import styles from "./CartItemWithThumbnail.module.css";

type TCartItemwithThumbnailProps = {
  logo: string;
  title: string;
  quantity: number;
  unitPrice: number;
};

const CartItemWithThumbnail = ({
  logo,
  title,
  quantity,
  unitPrice,
}: TCartItemwithThumbnailProps) => {
  return (
    <div className={styles.thumbnailCard}>
      <div className={styles.thumbnailCard__content}>
        <img
          src={logo}
          alt={`${title} logo`}
          width={48}
          height={48}
          className={styles.thumbnailCard__image}
        />
        <div className={styles.thumbnailCard__pricingSummary}>
          <p className={`${styles.thumbnailCard__title} text-preset-4-bold`}>
            {title}
          </p>
          <div className={styles.thumbnailCard__unitDetailsWrapper}>
            <p
              className={`${styles.thumbnailCard__quantity} text-preset-4-bold`}
            >
              x{quantity}
            </p>
            <p
              className={`${styles.thumbnailCard__unitPrice} text-preset-4-regular`}
            >{`@${unitPrice.toFixed(2)}`}</p>
          </div>
        </div>
      </div>
      <div className={`${styles.thumbnailCard__total} text-preset-3`}>
        {`$${(unitPrice * quantity).toFixed(2)}`}
      </div>
    </div>
  );
};

export default CartItemWithThumbnail;
