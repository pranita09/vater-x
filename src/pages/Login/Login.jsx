import styles from "./login.module.css";

export const Login = () => {
  return (
    <div className={styles[`container`]}>
      <h1 className={styles.header}>VATER-X</h1>
      <div className={styles[`login-container`]}>
        <main className={styles.main}>
        <label className={styles.label}>Login</label>
        <input className={styles.input} placeholder="Email"></input>
        <input className={styles.input} type="password" placeholder="Password"></input>
        <button className={styles.button}>LOGIN</button>
        <button className={styles.button}>Login as Guest</button>
        </main>
      </div>
    </div>
  );
};
