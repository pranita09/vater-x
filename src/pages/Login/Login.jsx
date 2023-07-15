import { DriverModal } from "../../components";
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div>
      <DriverModal />
      <h1 className={styles.header}>Login Page</h1>
    </div>
  );
};
