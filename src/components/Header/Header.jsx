import styles from "./header.module.css";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <strong className={styles.logo}>VATER-X</strong>
      <span className={styles[`user-profile-container`]}>
        <small>Admin</small>
        <img alt="admin image" src="https://e0.pxfuel.com/wallpapers/181/8/desktop-wallpaper-gintoki-sakata-gintama-funny.jpg" width={50} height={50} />
      </span>
    </nav>
  );
};
