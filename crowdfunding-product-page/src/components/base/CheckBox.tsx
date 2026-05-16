import { ComponentPropsWithoutRef } from 'react';
import styles from './CheckBox.module.css';

type TCheckboxButtonProps = ComponentPropsWithoutRef<'input'>;

const CheckBox = ({ ...rest }: TCheckboxButtonProps) => {
    return <input {...rest} type="checkbox" className={styles.radioButton} />;
};

export default CheckBox;
