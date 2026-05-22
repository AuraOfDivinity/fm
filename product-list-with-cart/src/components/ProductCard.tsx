import styles from "./ProductCard.module.css";

type TProductCardProps = {
  title: string;
  description: string;
  price: number;
  quantityInCart?: number;
  assetUrl: string;
};

const ProductCard = ({
  title,
  description,
  price,
  assetUrl,
}: TProductCardProps) => {
  return (
    <article className={styles.card}>
      <img src={assetUrl} className={styles.card__image} />
      <div className={styles.card__content}>
        <p className={`${styles.card__title} text-preset-4-regular`}>{title}</p>
        <p className={`${styles.card__description} text-preset-3`}>
          {description}
        </p>
        <p
          className={`${styles.card__price} text-preset-3`}
        >{`$ ${price.toFixed(2)}`}</p>
      </div>
    </article>
  );
};

export default ProductCard;
