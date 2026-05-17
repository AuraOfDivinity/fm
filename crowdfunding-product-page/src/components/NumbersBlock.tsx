import ProgressBar from './base/ProgressBar';
import styles from './NumbersBlock.module.css';

const InnerSection = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className={styles.innerSection__wrapper}>
            <p className="text-preset-1">{title}</p>
            <p className={`${styles.innerSection__description} text-preset-7-regular`}>{description}</p>
        </div>
    );
};

const NumbersBlock = () => {
    return (
        <div className={styles.numbersBlock}>
            <div className={styles.numberBlock__innerWrapper}>
                <InnerSection title="$89,914" description="of $100,000 backed" />
                <InnerSection title="5,007" description="total backers" />
                <InnerSection title="56" description="days left" />
            </div>
            <ProgressBar width={89} />
        </div>
    );
};

export default NumbersBlock;
