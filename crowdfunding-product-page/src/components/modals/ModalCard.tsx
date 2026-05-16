import { usePledgeDispatch } from '../../hooks/usePledgeDispatch';
import { ActionType } from '../../state/pledgeReducer';
import CheckBox from '../base/CheckBox';
import styles from './ModalCard.module.css';

export enum ModalState {
    Default = 'DEFAULT',
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
}

type TModalCardProps = {
    id: number;
    title: string;
    seatCount?: number;
    subTitle?: string;
    description: string;
    state: ModalState;
};

const ModalCard = ({ id, title, seatCount, subTitle, description, state }: TModalCardProps) => {
    const dispatch = usePledgeDispatch();

    const handleOnChange = () => {
        if (state === ModalState.Active) {
            dispatch({
                type: ActionType.Unselect,
                id,
            });
        } else {
            dispatch({
                type: ActionType.Select,
                id,
            });
        }
    };

    return (
        <div
            className={`${styles.modalCard__wrapper} ${state === ModalState.Inactive && styles.modalCard__disabled} ${state === ModalState.Active && styles.modalCard__active}`}
        >
            <div className={styles.modalCard__innerWrapper}>
                <div className={`${styles.modalCard__radio} `}>
                    <CheckBox checked={state === ModalState.Active} onChange={handleOnChange} />
                </div>
                <div className={styles.modalCard__content}>
                    <div className={`${styles.modalCard__header}`}>
                        <div className={styles.modalCard__titleWrapper}>
                            <div className={`${styles.modalCard__title} text-preset-6-bold`}>{title}</div>
                            <div className={`${styles.modalCard__subTitle} text-preset-6-bold`}>{subTitle}</div>
                        </div>
                        {seatCount && (
                            <div className={`${styles.modalCard__seats}`}>
                                <div className={`${styles.modalCard__seatCount} text-preset-5-bold`}>{seatCount}</div>
                                <div className={`${styles.modalCard__seatLeft}`} text-preset-7-regular>
                                    left
                                </div>
                            </div>
                        )}
                    </div>
                    <p className={`${styles.modalCard__description} text-preset-7-regular`}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;
