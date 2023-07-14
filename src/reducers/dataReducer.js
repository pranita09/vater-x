import { actionTypes } from "../utils/constants";

export const initialState = {
  drivers: [],
  cabs: [],
};

const { ADD_DRIVER,GET_ALL_DRIVERS } = actionTypes;

export const dataReducer = (state, { type, payload }) => {
  switch (type) {

    case GET_ALL_DRIVERS:
      return {...state,drivers:payload};

    default:
      return state;
  }
};
