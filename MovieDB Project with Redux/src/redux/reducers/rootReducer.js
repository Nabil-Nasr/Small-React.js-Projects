import { combineReducers } from "redux";
import moviesDataReducer from "./moviesDataReducer";
import searchQueryReducer from "./searchQueryReducer";

const rootReducer = combineReducers({
  moviesData:moviesDataReducer,
  searchQuery:searchQueryReducer
})

export default rootReducer
