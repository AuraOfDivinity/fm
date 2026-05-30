import styles from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={styles.login__wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
