import * as types from "./types";

function clientList(state = [], action) {
    switch (action.type) {
        case types.GET_CLIENTS_LIST:
            return Object.values(action.payload)
        case types.ADD_CLIENT:
            return [...state, action.payload]
        case types.DELETE_CLIENT:
            return state.filter((client)=>client.id !== action.payload.id)
        case types.UPDATE_CLIENT:
            return (state.map((client)=>{
                if(client.id === action.payload.id){
                    return action.payload;
                }else{
                    return client;
                }
            }))
        case types.SEARCH_CLIENT:
            /*return [action.payload]*/
            return;
        default:
            return state
    }
}
export default clientList;