import styles from './PledgeInput.module.css';

const PledgeInput = ({ placeholderAmount = 25, id }: { placeholderAmount: number; id: number }) => {
    return (
        <div className={styles.pledgeInput__wrapper}>
            <p className={`${styles.pledgeInput__dollar} text-preset-8-bold`}>$</p>
            <input
                placeholder={placeholderAmount.toString()}
                type="number"
                className={`${styles.pledgeInput__input} text-preset-8-bold`}
            />
        </div>
    );
};

export default PledgeInput;
