import { combineReducers } from "redux";
import launchesSlice from "../launchesSlice";


const RootReducer = combineReducers({
  launch: launchesSlice,

});

export default RootReducer;
