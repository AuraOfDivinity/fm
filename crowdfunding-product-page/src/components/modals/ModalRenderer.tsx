import ModalCard, { ModalState } from './ModalCard';
import styles from './ModalRenderer.module.css';

const ModalRenderer = () => {
    return (
        <div className={styles.modalRenderer}>
            <div className={styles.modalRenderer__text}>
                <div className={`${styles.modalRenderer__heading} text-preset-3`}>Back this project</div>
                <div className={`${styles.modalRenderer__subHeading} text-preset-6-regular`}>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </div>
            </div>
            <div className={styles.modalRenderer__cards}>
                <ModalCard
                    title="Pledge with no reward"
                    description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                    state={ModalState.Default}
                />
                <ModalCard
                    title="Black Edition Stand"
                    subTitle="Pledge $75 or more"
                    description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                    seatCount={64}
                    state={ModalState.Default}
                />
                <ModalCard
                    title="Black Edition Stand"
                    subTitle="Pledge $75 or more"
                    description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                    seatCount={64}
                    state={ModalState.Inactive}
                />
                <ModalCard
                    title="Black Edition Stand"
                    subTitle="Pledge $75 or more"
                    description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                    seatCount={64}
                    state={ModalState.Inactive}
                />
            </div>
        </div>
    );
};

export default ModalRenderer;
