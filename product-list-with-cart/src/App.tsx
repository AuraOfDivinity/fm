import styles from "./App.module.css";
import Menu from "./components/Menu.tsx";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.cart}></div>
    </div>
  );
}

export default App;
