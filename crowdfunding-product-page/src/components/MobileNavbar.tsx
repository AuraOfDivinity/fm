import { usePledgeState } from '../hooks/usePledgeContext';
import { usePledgeDispatch } from '../hooks/usePledgeDispatch';
import { ActionType } from '../state/pledgeReducer';
import styles from './MobileNavbar.module.css';

const MobileNavbar = () => {
    const dispatch = usePledgeDispatch();
    const state = usePledgeState();

    const { isMobileNavbarOpen } = state;

    const handleIconClick = () => {
        dispatch({
            type: ActionType.ToggleMobileNavbar,
        });
    };

    return (
        <div className={styles.mobileNavbar__gradientWrapper}>
            <div className={styles.mobileNavbar}>
                <img src="/images/logo.svg" alt="mobile navbar logo" />
                {!isMobileNavbarOpen && (
                    <img
                        src="/images/icon-hamburger.svg"
                        alt="mobile hamburger icon"
                        onClick={handleIconClick}
                        className={styles.mobileNavbar__icon}
                    />
                )}
                {isMobileNavbarOpen && (
                    <img
                        src="/images/icon-close-menu.svg"
                        alt="mobile close meu icon"
                        onClick={handleIconClick}
                        className={styles.mobileNavbar__icon}
                    />
                )}
            </div>
            <div
                className={`${!isMobileNavbarOpen ? styles.mobileNavbar__content : styles['mobileNavbar__content--active']}`}
            >
                <div className={`${styles.mobileNavbar__navItem} text-preset-5-medium`}>About</div>
                <div className={`${styles.mobileNavbar__navItem} text-preset-5-medium`}>Discover</div>
                <div className={`${styles.mobileNavbar__navItem} text-preset-5-medium`}>Get Started</div>
            </div>
        </div>
    );
};

export default MobileNavbar;
