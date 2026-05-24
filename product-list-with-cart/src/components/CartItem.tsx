import { useCartDispatch } from "../hooks/useCartDispatch";
import RemoveItemIcon from "../assets/images/icon-remove-item.svg";
import styles from "./CartItem.module.css";

type TCartItemProps = {
  name: string;
  quantity: number;
  unitPrice: number;
  id: number;
};

const CartItem = ({ name, quantity, unitPrice, id }: TCartItemProps) => {
  const dispatch = useCartDispatch();

  const cartItemRemoveOnClick = () => {
    dispatch({
      type: "REMOVEALLBYID",
      id,
    });
  };

  return (
    <section className={styles.cartItem}>
      <div className={styles.cartItem__content}>
        <div className={`${styles.cartItem__itemName} text-preset-4-regular`}>
          {name}
        </div>
        <div className={styles.cartItem__pricingDetails}>
          <p
            className={`${styles.cartItem__itemQuantity} text-preset-4-regular`}
          >
            {quantity}
          </p>
          <p className={`${styles.cartItem__unitPrice} text-preset-4-regular`}>
            ${`${unitPrice.toFixed(2)}`}
          </p>
          <p className={`${styles.cartItem__totalPrice} text-preset-4-regular`}>
            ${`${(unitPrice * quantity).toFixed(2)}`}
          </p>
        </div>
      </div>
      <img
        src={RemoveItemIcon}
        className={styles.cartItem__removeIcon}
        onClick={cartItemRemoveOnClick}
      />
    </section>
  );
};

export default CartItem;
