import { actionTypes } from "../utils/constants";

export const initialState = {
  drivers: [],
  cabs: [],
};

const { ADD_DRIVER } = actionTypes;

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
