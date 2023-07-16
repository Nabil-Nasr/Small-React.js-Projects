import types from "../types";

const searchQueryReducer = (prevState="",action)=>{
  if(action.type === types.setSearchQuery){
    return action.payload
  }
  return prevState
}

export default searchQueryReducer;