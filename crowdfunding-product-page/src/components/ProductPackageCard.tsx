import Button from './base/Button';
import styles from './ProductPackageCard.module.css';

type TProductPackageProps = {
    packageName: string;
    pledgeAmount: string;
    description: string;
    seatsLeft: string;
    disabled?: boolean;
    toggleModal?: () => void;
};

const ProductPackageCard = ({
    packageName,
    pledgeAmount,
    description,
    seatsLeft,
    disabled = false,
    toggleModal,
}: TProductPackageProps) => {
    return (
        <div
            className={`${styles['productPackage__card']} ${disabled ? styles['productPackage__card--disabled'] : ''}`}
        >
            <div className={styles.productPackage__heading}>
                <div className={`${styles.productPackage__title} text-preset-5-bold`}>{packageName}</div>
                <div
                    className={`${styles.productPackage__amount} text-preset-7-medium`}
                >{`Pledge ${pledgeAmount} or more`}</div>
            </div>
            <div className={`${styles.productPackage__description} text-preset-6-regular`}>{description}</div>
            <div className={styles.productPackage__footer}>
                <div className={styles.productPackage__seatWrapper}>
                    <span className={`${styles.productPackage__seatNumber} text-preset-1`}>{seatsLeft}</span>
                    <span className={`${styles.productPackage__seatCount} text-preset-7-regular`}>left</span>
                </div>
                {!disabled ? (
                    <Button color="green" size="s" onClick={toggleModal}>
                        Select Reward
                    </Button>
                ) : (
                    <Button color="black" size="s">
                        Out of stock
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductPackageCard;
