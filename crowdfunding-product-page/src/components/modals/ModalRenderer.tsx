import ModalCard from './ModalCard';
import styles from './ModalRenderer.module.css';

import { usePledgeState } from '../../hooks/usePledgeContext';

const ModalRenderer = () => {
    const state = usePledgeState();

    return (
        <div className={styles.modalRenderer}>
            <div className={styles.modalRenderer__text}>
                <div className={`${styles.modalRenderer__heading} text-preset-3`}>Back this project</div>
                <div className={`${styles.modalRenderer__subHeading} text-preset-6-regular`}>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </div>
            </div>
            <div className={styles.modalRenderer__cards}>
                {state.pledges.map((pledge) => {
                    return (
                        <ModalCard
                            key={pledge.id}
                            id={pledge.id}
                            title={pledge.title}
                            subTitle={pledge.subTitle}
                            description={pledge.description}
                            state={pledge.state}
                            seatCount={pledge.seatCount}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ModalRenderer;
