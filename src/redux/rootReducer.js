import {combineReducers} from "redux";
import clientList from "./clients/reducer.js";
import filterList from "./filter/reducer";

const rootReducer = combineReducers({
    clientList,
    filterList
})

export default rootReducer;