import styles from "./header.module.css";

import { useNavigate } from "react-router";

export const Header = () => {
  const navigate=useNavigate();
  return (
    <nav className={styles.nav}>
      <strong className={styles.logo} onClick={()=>navigate("/home")}>VATER-X</strong>
      <span className={styles[`user-profile-container`]}>
        <small>Admin</small>
        <img alt="admin" src="https://eclatsuperior.com/wp-content/uploads/2021/04/man3.jpg" width={50} height={50} />
      </span>
    </nav>
  );
};
