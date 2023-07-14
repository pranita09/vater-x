import styles from "./home.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/Header";

export const Home = () => {

  const navigate=useNavigate();
  const [isActive,setIsActive]=useState(false);

  const highLightCard=(id)=> isActive===id?true:false;
  const clickHandler=()=>isActive==="1"?navigate("/drivers"):navigate("/cabs");
  return (
    <div className={styles[`home-container`]}>
      <Header />
      <p className={styles.select}>Select any one from below to continue</p>
      <main className={styles[`cards-container`]}>
        <section className={highLightCard("1")?styles[`highlight-card`]:styles.card} onClick={()=>setIsActive("1")}>
          <img className={styles.img} src="https://e0.pxfuel.com/wallpapers/181/8/desktop-wallpaper-gintoki-sakata-gintama-funny.jpg" alt="driver-image" />
          <strong className={styles.label}>DRIVER</strong>
        </section>
        <section className={highLightCard("2")?styles[`highlight-card`]:styles.card} onClick={()=>setIsActive("2")}>
          <img className={styles.img} src="https://e0.pxfuel.com/wallpapers/181/8/desktop-wallpaper-gintoki-sakata-gintama-funny.jpg" alt="driver-image" />
          <strong className={styles.label}>CAB</strong>
        </section>
      </main>
      {isActive && <button className={styles.button} onClick={clickHandler}>CONTINUE</button>}
    </div>
  );
};
