import { actionTypes } from "../utils/constants";

export const initialState = {
  drivers: [],
  cabs: [],
  searchDrivers:"",
};

const { GET_ALL_DRIVERS, SEARCH_DRIVERS } = actionTypes;

export const dataReducer = (state, { type, payload }) => {
  switch (type) {

    case GET_ALL_DRIVERS:
      return {...state,drivers:payload};

    case SEARCH_DRIVERS:
      return {...state, searchDrivers:payload}  

    default:
      return state;
  }
};
