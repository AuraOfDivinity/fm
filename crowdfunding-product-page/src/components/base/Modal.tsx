import styles from './Modal.module.css';

import { ReactNode } from 'react';

type TModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    renderClose?: boolean;
};

const Modal = ({ open, onClose, children, renderClose = true }: TModalProps) => {
    return (
        open && (
            <div className={`${styles.modal}`}>
                <div className={styles.modal__body}>
                    <div className={styles.modal__head}>
                        {renderClose && (
                            <img
                                src="/images/icon-close-modal.svg"
                                alt="close button"
                                onClick={onClose}
                                className={styles.modal__close}
                            />
                        )}
                    </div>
                    {children}
                </div>
            </div>
        )
    );
};

export default Modal;
