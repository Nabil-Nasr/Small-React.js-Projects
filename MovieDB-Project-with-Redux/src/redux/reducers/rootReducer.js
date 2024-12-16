import { combineReducers } from "redux";
import moviesDataReducer from "./moviesDataReducer";

const rootReducer = combineReducers({
  moviesData: moviesDataReducer,
});

export default rootReducer;
