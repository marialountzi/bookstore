import { combineReducers } from "redux";
import rootReducer from "./rootReducer";

const createRootReducer = () =>
  combineReducers({
    rootReducer,
  });

export default createRootReducer;
