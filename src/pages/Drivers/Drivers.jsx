import styles from "./drivers.module.css";
import { useEffect } from "react";

import {useData} from "../../contexts/DataContext";
import { DriverCard } from "../../components/DriverCard/DriverCard";
import {Header} from "../../components/Header/Header";

export const Drivers = () => {
  const {state,dispatch,getDrivers}=useData();
  const {drivers}=state;

  useEffect(()=>{getDrivers()},[]);

  return (
    <div>
      <Header />
      <h1>Drivers Page</h1>
      <ul>
      {drivers?.map(item=>(
        <li key={item.id}>
          <DriverCard driver={item} />
        </li>
      ))}
      </ul>
    </div>
  );
};
