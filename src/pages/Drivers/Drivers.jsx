import styles from "./drivers.module.css";
import { useEffect } from "react";

import {CiSearch} from "react-icons/ci"

import {useData} from "../../contexts/DataContext";
import { DriverCard } from "../../components/DriverCard/DriverCard";
import {Header} from "../../components/Header/Header";

export const Drivers = () => {
  const {state,dispatch,getDrivers}=useData();
  const {drivers}=state;

  useEffect(()=>{getDrivers()},[]);

  return (
    <div className={styles[`driver-container`]}>
      <Header />
      <header className={styles.header}>
        <span className={styles.searchBar}>
        <CiSearch className={styles.icon}/>
        <input className={styles.input} type="search" placeholder="Search Driver"/>
        </span>
        <button className={styles.button}>ADD DRIVER</button>
      </header>
      <ul className={styles[`list-container`]}>
      {drivers?.map(item=>(
        <li key={item.id} className={styles[`list-item-container`]}>
          <DriverCard driver={item} />
        </li>
      ))}
      </ul>
    </div>
  );
};
