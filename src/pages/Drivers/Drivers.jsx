import styles from "./drivers.module.css";
import { useEffect } from "react";

import {useData} from "../../contexts/DataContext";

export const Drivers = () => {
  const {state,dispatch,getDrivers}=useData();
  const {drivers}=state;

  useEffect(()=>{getDrivers()},[]);

  return (
    <div>
      <h1>Drivers Page</h1>
      {drivers?.map(item=>(<h1>{item?.name}</h1>))}
    </div>
  );
};
