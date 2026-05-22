import styles from "./ATCButton.module.css";
import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";
import decrementIcon from "../../assets/images/icon-decrement-quantity.svg";
import incrementIcon from "../../assets/images/icon-increment-quantity.svg";

type TATCButtonProps = {
  isInCart: boolean;
  quantityInCart?: number;
};

const ATCButton = ({ isInCart, quantityInCart }: TATCButtonProps) => {
  return (
    <div className={styles.ATCButton}>
      {isInCart ? (
        <div className={styles.cartButton__inCartWrapper}>
          <img
            src={decrementIcon}
            alt="decrement count icon"
            className={styles.cartButton__countIcon}
          />
          <p
            className={`${styles.cartButton__quantityText} text-preset-4-bold`}
          >
            {quantityInCart}
          </p>
          <img
            src={incrementIcon}
            alt="increment count icon"
            className={styles.cartButton__countIcon}
          />
        </div>
      ) : (
        <div className={styles.cartButton__defaultCartWrapper}>
          <img src={addToCartIcon} alt="add to cart icon" />
          <p className={`${styles.cartButton__atcText} text-preset-4-bold`}>
            Add to cart
          </p>
        </div>
      )}
    </div>
  );
};

export default ATCButton;
