import types from "../types";




// we don't need async keyword below but it for testing the addition of redux-thunk middleware 
export const setMoviesData =  payload=>async dispatch=>{
  dispatch({type:types.setMoviesData,payload})
}

// an action function without async doesn't need to return async function with dispatch parameter
export const setSearchQuery = payload =>({type:types.setSearchQuery,payload})
