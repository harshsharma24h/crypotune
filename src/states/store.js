import { applyMiddleware, createStore } from "redux";
// import reducer from "./reducers/amountreducers";
import thunk from "redux-thunk";
import reducers from "./reducers";



export const store =createStore(reducers,{},applyMiddleware(thunk))
