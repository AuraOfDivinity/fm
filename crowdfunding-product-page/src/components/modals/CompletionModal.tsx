import { usePledgeDispatch } from '../../hooks/usePledgeDispatch';
import { ActionType } from '../../state/pledgeReducer';
import Button from '../base/Button';
import styles from './CompletionModal.module.css';

const CompletionModal = () => {
    const dispatch = usePledgeDispatch();

    const handleConfirm = () => {
        dispatch({
            type: ActionType.ToggleModal,
        });

        dispatch({
            type: ActionType.ResetModal,
        });
    };

    return (
        <div className={styles.completionModal}>
            <img src="/images/icon-check.svg" alt="check icon" />
            <div className={styles.completionModal__content}>
                <div className={`${styles.completionModal__title} text-preset-3`}>Thanks for your support!</div>
                <div className={`${styles.completionModal__description} text-preset-6-regular`}>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You
                    will get an email once our campaign is completed.
                </div>
            </div>
            <Button color="green" size="s" onClick={handleConfirm}>
                Confirm
            </Button>
        </div>
    );
};

export default CompletionModal;
