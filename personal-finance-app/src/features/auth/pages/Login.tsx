import styles from "./Login.module.css";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className={styles.login__wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
