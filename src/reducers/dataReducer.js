import { actionTypes } from "../utils/constants";

export const initialState = {
  drivers: [],
  cabs: [],
  searchDrivers:"",
  searchCabs:"",
  isLoggedIn:false,
  login:{name:"",password:""},
  isLoading:false,
};


const { GET_ALL_DRIVERS, SEARCH_DRIVERS, GET_ALL_CABS, SEARCH_CABS, AUTHENTICATION, LOGIN_FIELDS, GUEST_LOGIN, TOGGLE_LOADER } = actionTypes;


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
     
    case AUTHENTICATION:
      return {...state,isLoggedIn:payload};
     
    case LOGIN_FIELDS:
      return {...state,login:{...state.login,[payload.inputField]:payload.data}};  

    case GUEST_LOGIN:  
      return {...state,login:{...state.login,name:"Admin"},isLoggedIn:true};
     
    case TOGGLE_LOADER:
      return {...state,isLoading:payload};  

    default:
      return state;
  }
};
