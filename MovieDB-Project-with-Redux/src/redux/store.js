import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";



// function handMadeReduxThunkMiddleware (storeAPI) {
//   return function wrapDispatch (next) {
//     return async function handleAction (action) {
//       console.log(`storeAPI: `, storeAPI.getState(), `\nnext: ${next}\naction: `, await action);
//       return next(await action);
//     };
//   };
// }


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;