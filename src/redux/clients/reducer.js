import {ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT, SEARCH_CLIENT, GET_CLIENTS_LIST} from "./types";

function clientList(state = [], action) {
    switch (action.type) {
        case GET_CLIENTS_LIST:
            return Object.values(action.payload)
        case ADD_CLIENT:
            return [...state, action.payload]
        case DELETE_CLIENT:
            return state.filter((client)=>client.id !== action.payload.id)
        case UPDATE_CLIENT:
            return (state.map((client)=>{
                if(client.id === action.payload.id){
                    return action.payload;
                }else{
                    return client;
                }
            }))
        case SEARCH_CLIENT:
            /*return [action.payload]*/
            return;
        default:
            return state
    }
}
export default clientList;