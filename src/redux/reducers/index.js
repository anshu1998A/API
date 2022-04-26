import userStatus from "./userStatus";
import { combineReducers } from "redux";
import dataDetails from './detailsReducer'
import actions from "../actions";
import types from "../types";

const rootReducer = combineReducers(
    {
        userStatus,
        dataDetails,
    }
)
const appReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX) {
        state = undefined;
    }
    return rootReducer(state, action)
}
export default appReducer;