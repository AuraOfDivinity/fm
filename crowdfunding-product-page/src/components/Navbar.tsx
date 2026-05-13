import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.navbar__logo} src='/images/logo.svg' alt='navbar logo'/> 
      <ul className={`${styles.navbar__list} text-preset-9-medium`}>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="/about">About</a>
        </li>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="/contact">Discover</a>
        </li>
        <li className={styles.navbar__item}>
          <a className={styles.navbar__link} href="/press">Get Started</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar