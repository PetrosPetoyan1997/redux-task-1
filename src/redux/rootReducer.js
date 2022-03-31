import {combineReducers} from "redux";
import clientList from "./clients/reducer.js";
import filterList from "./filter/reducer";
import userAuthenticateStatus from "./auth/reducer";

const rootReducer = combineReducers({
    clientList,
    filterList,
    userAuthenticateStatus
})

export default rootReducer;