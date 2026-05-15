import { ComponentPropsWithoutRef } from 'react';
import styles from './RadioButton.module.css';

type TRadioButtonProps = ComponentPropsWithoutRef<'input'>;

const RadioButton = ({ ...rest }: TRadioButtonProps) => {
    return <input {...rest} type="radio" className={styles.radioButton} />;
};

export default RadioButton;
