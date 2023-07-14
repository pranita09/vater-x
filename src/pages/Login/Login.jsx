import { CabDetailsModal } from "../../components";
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div>
      <CabDetailsModal />
      <h1 className={styles.header}>Login Page</h1>
    </div>
  );
};
