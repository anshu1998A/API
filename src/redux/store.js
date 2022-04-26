import { applyMiddleware, createStore } from "redux";
import appReducer from "./reducers";
import thunk from 'redux-thunk'

 const middleWare = [thunk]


export default createStore(appReducer, applyMiddleware(...middleWare));