import styles from './Header.module.css'
import Navbar from './Navbar'

const Header = () => {
    return(
    <>
        <div className={styles.header}>
            <img src='/images/image-hero-desktop.jpg' alt='header-background' className={styles.header__image}/>
            <div className={styles.header__navbar}>
                <Navbar/>
            </div>
        </div>
    </>)
}

export default Header