import styles from './Modal.module.css';

import { ReactNode } from 'react';

type TModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Modal = ({ open, onClose, children }: TModalProps) => {
    return (
        open && (
            <div className={`${styles.modal}`}>
                <div className={styles.modal__body}>
                    <div className={styles.modal__head}>
                        <img src="/public/images/icon-close-modal.svg" alt="close button" onClick={onClose} />
                    </div>
                    {children}
                </div>
            </div>
        )
    );
};

export default Modal;
