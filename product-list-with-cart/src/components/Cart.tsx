import styles from "./Cart.module.css";
import CartBannerLogo from "../assets/images/icon-carbon-neutral.svg";
import { useCartState } from "../hooks/useCartState";
import { useMemo, useState } from "react";
import CartItem from "./CartItem";
import Button from "./base/Button";
import Modal from "./base/Modal";
import { useOutsideClickHandler } from "../hooks/useOutsideClickHandler";
import ConfirmOrderModal from "./modals/ConfirmOrderModal";

const Cart = () => {
  const [isConfirmModalVisible, setIsConfirmModalVisible] =
    useState<boolean>(false);

  const state = useCartState();
  const { productData } = state;

  const quantity = useMemo(() => {
    let count = 0;
    productData
      .filter((product) => product.cartQuantity > 0)
      .map((p) => (count += p.cartQuantity));
    return count;
  }, [productData]);

  const total = useMemo(() => {
    let t = 0;
    productData
      .filter((product) => product.cartQuantity > 0)
      .map((p) => (t += p.price * p.cartQuantity));
    return t;
  }, [productData]);

  const itemsInCart = useMemo(
    () => productData.filter((p) => p.cartQuantity > 0),
    [productData],
  );

  const handleConfirmOrderClick = () => {
    setIsConfirmModalVisible((isVisible) => !isVisible);
  };

  const modalRef = useOutsideClickHandler(() => {
    handleConfirmOrderClick();
  });

  return (
    <section className={styles.cart__wrapper}>
      <div
        className={`${styles.cart__title} text-preset-2`}
      >{`Your Cart (${quantity})`}</div>
      <div className={styles.cart__itemsWrapper}>
        {itemsInCart.map((item) => {
          return (
            <CartItem
              name={item.name}
              id={item.id}
              unitPrice={item.price}
              quantity={item.cartQuantity}
            />
          );
        })}
      </div>
      <div className={styles.cart__totalWrapper}>
        <p className={`${styles.cart__totalText} text-preset-4-regular`}>
          Order Total
        </p>
        <p className={`${styles.cart__totalAmount} text-preset-2`}>
          ${`${total.toFixed(2)}`}
        </p>
      </div>
      <div className={styles.cart__banner}>
        <img src={CartBannerLogo} alt="cart banner logo" />
        <p className={`${styles.cart__bannerText} text-preset-4-regular`}>
          This is a <span style={{ fontWeight: 700 }}>carbon neutral</span>{" "}
          delivery
        </p>
      </div>
      <Button onClick={handleConfirmOrderClick}>Confirm Order</Button>
      {isConfirmModalVisible && (
        <Modal ref={modalRef} handleClose={handleConfirmOrderClick}>
          <ConfirmOrderModal handleComplete={handleConfirmOrderClick} />
        </Modal>
      )}
    </section>
  );
};

export default Cart;
