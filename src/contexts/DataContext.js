import { createContext, useContext, useReducer } from "react";
import { dataReducer, initialState } from "../reducers/dataReducer";
import { actionTypes } from "../utils/constants";

import { addDriver, getDriverslistfromAPI, getCabList, deleteCab, deleteDriver, editDriver, editCab, addCab, assignCab } from "../services";
import { toast } from "react-hot-toast";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const { GET_ALL_DRIVERS, GET_ALL_CABS } = actionTypes;

  const getDrivers = async () => {
    try {
      const response = await getDriverslistfromAPI();
      if (response.status === 200) {
        dispatch({ type: GET_ALL_DRIVERS, payload: response.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNewDriver = async (driverDetails) => {
    try {
      const response = await addDriver(driverDetails);
      if (response.status === 200) {
        toast.success("New driver added successfully!");
        getAllCabs()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNewCab = async (cabDetails) => {
    try {
      const response = await addCab(cabDetails);
      if (response.status === 200) {
        toast.success("New driver added successfully!");
        getDrivers()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editSelectedDriver = async (driverId,driverDetails) => {
    try {
      const response = await editDriver(driverId,driverDetails);
      if (response.status === 200) {
        toast.success("driver updated!");
        getDrivers()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editSelectedCab = async (cabId,cabDetails) => {
    try {
      const response = await editCab(cabId,cabDetails);
      if (response.status === 200) {
        toast.success("New driver added successfully!");
        getAllCabs()
      }
    } catch (error) {
      console.log(error);
    }
  };


  const getAllCabs= async () =>
  {
    try {
      const response=await getCabList();
      if(response.status===200)
      {
        dispatch({type:GET_ALL_CABS,payload:response.data.data})
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const deleteSelectedCab= async (driverId) =>
  {
    try {
      const response= await deleteCab(driverId);
      if(response.status===200)
      {
        dispatch({type:GET_ALL_CABS,payload:response.data.data})
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const deleteSelectedDriver= async (driverId) =>
  {
    try {
      const response= await deleteDriver(driverId);
      if(response.status===200)
      {
        dispatch({type:GET_ALL_CABS,payload:response.data.data})
        getDrivers()
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const assignedCab = async(driverId,cabId) => {
    console.log(driverId,cabId)
    try {
      const response= await assignCab(driverId);
      if(response.status===200)
      {
        dispatch({type:GET_ALL_CABS,payload:response.data.data})
        getDrivers()
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  const searchedDrivers=()=>
  {
    const {drivers, searchDrivers}=state;
    return drivers.filter(({name})=>name.toLowerCase().includes(searchDrivers.toLowerCase()));
  }

  const searchedCabs=()=>
  {
    const {cabs,searchCabs}=state;
    return cabs.filter(({name})=>name.toLowerCase().includes(searchCabs.toLowerCase()))
  }

  return (
    <DataContext.Provider value={{ state, dispatch, getDrivers, searchedDrivers, getAllCabs, searchedCabs, addNewDriver,deleteSelectedCab,deleteSelectedDriver,editSelectedDriver,editSelectedCab,addNewCab,assignedCab }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
