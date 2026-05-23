import styles from "./ATCButton.module.css";
import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";
import decrementIcon from "../../assets/images/icon-decrement-quantity.svg";
import incrementIcon from "../../assets/images/icon-increment-quantity.svg";
import { useCartDispatch } from "../../hooks/useCartDispatch";

type TATCButtonProps = {
  isInCart: boolean;
  quantityInCart: number;
  id: number;
};

const ATCButton = ({ isInCart, quantityInCart, id }: TATCButtonProps) => {
  const dispatch = useCartDispatch();

  const handleAddToCartClick = () => {
    dispatch({
      type: "ADD",
      id,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <div className={styles.ATCButton}>
      {isInCart ? (
        <div className={styles.cartButton__inCartWrapper}>
          <img
            src={decrementIcon}
            alt="decrement count icon"
            className={styles.cartButton__countIcon}
            onClick={handleRemoveFromCart}
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
            onClick={handleAddToCartClick}
          />
        </div>
      ) : (
        <div
          className={styles.cartButton__defaultCartWrapper}
          onClick={handleAddToCartClick}
        >
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
