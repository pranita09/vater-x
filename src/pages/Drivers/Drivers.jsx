import styles from "./drivers.module.css";
import { useEffect } from "react";

import {CiSearch} from "react-icons/ci"

import { actionTypes } from "../../utils/constants";
import {useData} from "../../contexts/DataContext";
import { DriverCard } from "../../components/DriverCard/DriverCard";
import {Header} from "../../components/Header/Header";

export const Drivers = () => {
  const {state,dispatch,getDrivers, searchedDrivers}=useData();
  const {drivers, searchDrivers}=state;

  const { SEARCH_DRIVERS } = actionTypes;

  useEffect(()=>{getDrivers()},[]);

  return (
    <div className={styles[`driver-container`]}>
      <Header />
      <header className={styles.header}>
        <span className={styles.searchBar}>
        <CiSearch className={styles.icon}/>
        <input value={searchDrivers} className={styles.input} type="search" placeholder="Search Driver" onChange={(e)=>dispatch({type:SEARCH_DRIVERS,payload:e.target.value})}/>
        </span>
        <button className={styles.button}>ADD DRIVER</button>
      </header>
      <ul className={styles[`list-container`]}>
      {searchedDrivers()?.map(item=>(
        <li key={item.id} className={styles[`list-item-container`]}>
          <DriverCard driver={item} />
        </li>
      ))}
      </ul>
    </div>
  );
};
