import styles from "./App.module.css";
import Menu from "./components/Menu.tsx";
import Cart from "./components/Cart.tsx";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.cart}>
        <Cart />
      </div>
    </div>
  );
}

export default App;
