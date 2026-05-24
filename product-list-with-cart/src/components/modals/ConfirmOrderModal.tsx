import Button from "../base/Button";
import styles from "./ConfirmOrderModal.module.css";
import OrderConfirmedIcon from "../../assets/images/icon-order-confirmed.svg";
import { useCartState } from "../../hooks/useCartState";
import { useMemo } from "react";
import CartItemWithThumbnail from "../CartItemWithThumbnail";
import { useCartDispatch } from "../../hooks/useCartDispatch";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

type TConfirmOrderModalProps = {
  handleComplete: () => void;
};

const ConfirmOrderModal = ({ handleComplete }: TConfirmOrderModalProps) => {
  const { productData } = useCartState();
  const dispatch = useCartDispatch();

  const productsInCart = useMemo(() => {
    return productData.filter((p) => p.cartQuantity > 0);
  }, [productData]);

  const total = useMemo(() => {
    let t = 0;
    productData
      .filter((product) => product.cartQuantity > 0)
      .map((p) => (t += p.price * p.cartQuantity));
    return t;
  }, [productData]);

  const handleStartNewOrderClick = () => {
    dispatch({
      type: "RESET",
    });
    handleComplete();
  };

  return (
    <div className={styles.completionModal}>
      <section className={styles.completionModal__title}>
        <img
          src={OrderConfirmedIcon}
          alt="order cofirmed"
          width={48}
          height={48}
        />
        <p className={`${styles.completionModal__confirmedText} text-preset-1`}>
          Order Confirmed
        </p>
        <p
          className={`${styles.completionModal__confirmedSubText} text-preset-5`}
        >
          We hope you enjoy your food!
        </p>
      </section>
      <section className={styles.completionModal__content}>
        <div className={styles.completionModal__items}>
          {productsInCart.map((product) => {
            return (
              <CartItemWithThumbnail
                logo={resolveImageUrl(product.image.thumbnail)}
                quantity={product.cartQuantity}
                title={product.name}
                unitPrice={product.price}
              />
            );
          })}
        </div>
        <div className={styles.completionModal__orderTotal}>
          <p
            className={`${styles.completionModal__totalString} text-preset-4-regular`}
          >
            Order Total
          </p>
          <p
            className={`${styles.completionModal__totalAmount} text-preset-2`}
          >{`$${total.toFixed(2)}`}</p>
        </div>
      </section>
      <Button onClick={handleStartNewOrderClick}>Start New Order</Button>
    </div>
  );
};

export default ConfirmOrderModal;
