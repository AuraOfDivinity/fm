import { useState } from 'react';
import ModalCard from './ModalCard';
import styles from './ModalRenderer.module.css';
import { PledgeItem } from '../../state/metadata';

import { defaultPledgeState } from '../../state/metadata';

const ModalRenderer = () => {
    const [pledges, setPledges] = useState<PledgeItem[]>(defaultPledgeState.pledges);

    return (
        <div className={styles.modalRenderer}>
            <div className={styles.modalRenderer__text}>
                <div className={`${styles.modalRenderer__heading} text-preset-3`}>Back this project</div>
                <div className={`${styles.modalRenderer__subHeading} text-preset-6-regular`}>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </div>
            </div>
            <div className={styles.modalRenderer__cards}>
                {pledges.map((pledge) => {
                    return (
                        <ModalCard
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
