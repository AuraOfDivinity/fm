import styles from "./Card.module.css";

type TCardProps = {
  title: string;
  description: string;
  img_url: string;
  border_color: "cyan" | "red" | "blue" | "orange";
};

const Card = ({ title, description, img_url, border_color }: TCardProps) => {
  const border_color_string = `border-${border_color}`;
  return (
    <article className={`${styles.card} ${styles[border_color_string]}`}>
      <div className={styles.card__header}>
        <p className={`${styles.card__title} text-preset-3`}>{title}</p>
        <p className={`${styles.card__description} text-preset-5`}>
          {description}
        </p>
      </div>
      <div className={styles.card__content}>
        <img src={img_url} alt={`${title} card image`} />
      </div>
    </article>
  );
};

export default Card;
