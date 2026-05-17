import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ width = 89 }: { width: number }) => {
    const [progrssWidth, setProgressWidth] = useState<number>(0);

    useEffect(() => {
        setProgressWidth(width);
    }, [width]);

    return (
        <div className={styles.progressBar}>
            <div className={styles.progressBar__fill} style={{ width: `${progrssWidth}%` }} role="progressbar"></div>
        </div>
    );
};

export default ProgressBar;
