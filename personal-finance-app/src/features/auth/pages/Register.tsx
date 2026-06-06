import styles from "./Register.module.css";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className={styles.register__wrapper}>
      <RegisterForm />
    </div>
  );
};

export default Register;
