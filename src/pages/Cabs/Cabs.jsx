import styles from "./cabs.module.css";
import headerStyles from "../Drivers/drivers.module.css";
import { useEffect } from "react";
import {CiSearch} from "react-icons/ci"
import { actionTypes } from "../../utils/constants";
import {useData} from "../../contexts/DataContext";
import { CabCard } from "../../components/CabCard/CabCard";
import {Header} from "../../components/Header/Header";

export const Cabs = () => {
  const {state,dispatch,getDrivers, getAllCabs,searchedCabs}=useData();
  const {drivers, cabs, searchCabs}=state;

  const { SEARCH_CABS } = actionTypes;

  useEffect(()=>{getAllCabs();getDrivers()},[]);
  return (
    <div className={headerStyles[`driver-container`]}>
      <Header />
      <header className={headerStyles.header}>
        <span className={headerStyles.searchBar}>
        <CiSearch className={headerStyles.icon}/>
        <input value={searchCabs} className={headerStyles.input} type="search" placeholder="Search Cab" onChange={(e)=>dispatch({type:SEARCH_CABS,payload:e.target.value})}/>
        </span>
        <button className={headerStyles.button}>ADD CAB</button>
      </header>
      <ul className={styles[`list-container`]}>
      {searchedCabs()?.map(item=>(
        <li key={item.id} className={styles[`list-item-container`]}>
          <CabCard cab={item} />
        </li>
      ))}
      </ul>
    </div>
  );
};
