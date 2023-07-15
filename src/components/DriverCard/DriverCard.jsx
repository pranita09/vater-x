import styles from "./driverCard.module.css";
import {HiDotsHorizontal,} from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import {handleCopyToClipboard} from "../../utils/utilFunctions";

export const DriverCard = ({driver}) => {
 
  return (
    <div className={styles[`driver-card-container`]}>

      <header className={styles.header}>
        <img className={styles.img} alt="image" src="https://64.media.tumblr.com/8f738ecdaeb21216a3246f8b0b2512c6/763fa44ee059f802-e5/s400x600/85ccc7cdea62a007c2d7bc78629ee0079f683f64.png" width={68} height={68} />
        <strong className={styles.name}>{driver?.name}</strong>
        <small className={styles.id} onClick={()=>handleCopyToClipboard(driver?.id)}>XXYY{driver?.id.slice(-5)}</small>
        <HiDotsHorizontal className={styles.icon}/>
      </header>

        <main className={styles[`section-container`]}>
        <section className={styles.section}>
          <BsTelephone className={styles.iconTwo}/>
          <span>{driver?.phone_number}</span>
        </section>

        <section className={styles.section}>
          <MdOutlineEmail className={styles.iconTwo}/>
          <span>{driver?.email}</span>
        </section>
        </main>
        <button className={styles.button}>VIEW PROFILE</button>
    </div>
  );
};
