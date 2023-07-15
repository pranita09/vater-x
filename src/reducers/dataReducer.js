import { actionTypes } from "../utils/constants";

export const initialState = {
  drivers: [],
  cabs: [],
  searchDrivers:"",
  searchCabs:"",
};


const { GET_ALL_DRIVERS, SEARCH_DRIVERS, GET_ALL_CABS, SEARCH_CABS } = actionTypes;


export const dataReducer = (state, { type, payload }) => {
  switch (type) {

    case GET_ALL_DRIVERS:
      return {...state,drivers:payload};

    case SEARCH_DRIVERS:
      return {...state, searchDrivers:payload};
    
    case GET_ALL_CABS:
      return {...state,cabs:payload}
      
    case SEARCH_CABS:
      return {...state,searchCabs:payload};

    default:
      return state;
  }
};
