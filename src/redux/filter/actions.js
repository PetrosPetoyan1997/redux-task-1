import {GET_FILTER_LIST, UPDATE_CHECKED_VALUE} from "./types";

export function getFilterList(payload){
    return {type: GET_FILTER_LIST, payload}
}

export function updateCheckedValue(payload){
    return {type: UPDATE_CHECKED_VALUE, payload}
}


