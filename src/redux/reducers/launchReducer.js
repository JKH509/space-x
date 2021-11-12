// import { GET_LAUNCHES_REQUEST, TOGGLE_SORT, FILTER_YEAR, RESET_FILTER } from '../constants/consts';
import * as actionTypes from "../constants/consts";
// import { date, getYear } from '../utils';

// const initialState = {
//   launches: [],
//   isAscending: true,
//   activeYear: '',
// };

export const getLaunchesReducer = (state = { launches: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_LAUNCHES_REQUEST:
      return {
        loading: true,
        launches: [],
      };
    case actionTypes.GET_LAUNCHES_SUCCESS:
      return {
        launches: action.payload,
        loading: false,
      };
    case actionTypes.GET_LAUNCHES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}; 

export const getLaunchDetailsReducer = (state = { launch: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_LAUNCH_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_LAUNCH_DETAILS_SUCCESS:
      return {
        loading: false,
        launch: action.payload,
      };
    case actionTypes.GET_LAUNCH_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_LAUNCH_DETAILS_RESET:
      return {
        launch: {},
      };
    default:
      return state;
  }
};


