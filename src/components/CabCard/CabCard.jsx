import styles from "./cabCard.module.css";
import {BiSolidColor } from "react-icons/bi";
import {HiDotsHorizontal,} from "react-icons/hi";

import {useData} from "../../contexts/DataContext";

export const CabCard = ({cab}) => {
  const {state,dispatch}=useData();
  const {drivers,}=state;

  return (
    <div className={styles[`cab-card-container`]}>
      <header className={styles.header}>
        <img className={styles.img} alt="car image" src="https://www.shutterstock.com/shutterstock/photos/1748114237/display_1500/stock-photo-bodrum-turkey-suzuki-swift-parked-in-city-park-near-atms-1748114237.jpg" width={160} height={160} />
        <main className={styles[`cab-information-header`]}>
        <strong>{cab?.name}</strong>
        <small>{cab?.model_number}</small>
        <span><BiSolidColor style={{color:cab?.color}}/> {cab?.color}</span>
        </main>
        <HiDotsHorizontal className={styles.icon}/>
      </header>
      <select className={styles.dropdown}>
        <option disabled selected>Assign Driver</option>
        {drivers.map(({name,id})=>(
          <option value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
};
