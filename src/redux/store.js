import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
// import RootReducer from "./reducers/RootReducer";
import RootReducer from './reducers/RootReducer';

const initialState = {};

const middlewares = [thunk];

export const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);