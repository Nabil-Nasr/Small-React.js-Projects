import types from "../types";

const moviesDataReducer = (prevState = {}, action) => {
  if (action.type === types.setMoviesData) {
    return action.payload;
  }
  return prevState;
};

export default moviesDataReducer;