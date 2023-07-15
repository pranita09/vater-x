import { CabModal } from "../../components";
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div>
      <CabModal />
      <h1 className={styles.header}>Login Page</h1>
    </div>
  );
};
