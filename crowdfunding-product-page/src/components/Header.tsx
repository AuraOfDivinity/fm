import styles from './Header.module.css';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <img src="/images/image-hero-desktop.jpg" alt="header-background" className={styles.header__image} />
                <img
                    src="/images/image-hero-desktop.jpg"
                    alt="header-background"
                    className={styles.header__imageMobile}
                />
                <div className={styles.header__navbar}>
                    <Navbar />
                </div>
                <MobileNavbar />
            </div>
        </>
    );
};

export default Header;
