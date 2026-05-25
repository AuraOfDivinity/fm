import { forwardRef } from "react";
import styles from "./Modal.module.css";

type TModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
};

const Modal = forwardRef<HTMLDivElement, TModalProps>(({ children }, ref) => {
  return (
    <div ref={ref} className={styles.modal__wrapper}>
      <div className={styles.modal__content}>{children}</div>
    </div>
  );
});

export default Modal;
