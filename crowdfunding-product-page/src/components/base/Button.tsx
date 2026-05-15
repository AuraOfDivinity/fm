import styles from './Button.module.css';

import { ReactNode, ComponentPropsWithoutRef } from 'react';

type TButtonProps = ComponentPropsWithoutRef<'button'> & {
    color: 'green' | 'black';
    size: 's' | 'l';
    children?: ReactNode;
    disabled?: boolean;
};

const Button = ({ color = 'green', size = 's', children, disabled = false, ...rest }: TButtonProps) => {
    return (
        <button
            {...rest}
            className={`
            ${styles.button} 
            ${disabled ? styles['button--disabled'] : styles['button--active']}
            ${size === 's' ? styles['button--small'] : styles['button--large']}
            ${color === 'green' ? styles['button--green'] : styles['button--black']}
            text-preset-8-bold
        `}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
