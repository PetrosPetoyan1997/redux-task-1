import * as types from "./types";
import appDb from '../../firebase-db/db';
import { getDatabase, ref, set, get, remove} from 'firebase/database';
const db = getDatabase(appDb)



export function getClientsList(){
    return function(dispatch){
        get(ref(db, 'clientData/clientsList')).then((snapshot)=>{
            let payload = {}
            payload = snapshot.val()
            dispatch({type: types.GET_CLIENTS_LIST, payload:{...payload}})
        })
    }
}
export function addClient(payload){
    return function(dispatch){
        set(ref(db, `clientData/clientsList/${payload.id}`), payload).then(()=>{
            dispatch({type: types.ADD_CLIENT, payload})
        })
    }
}
export function deleteClient(payload){
    return function(dispatch){
        remove(ref(db, `clientData/clientsList/${payload.id}`)).then((snapshot)=>{
            dispatch({type: types.DELETE_CLIENT, payload})
        })
    }
}
export function updateClient(payload){
    return function(dispatch){
        set(ref(db, `clientData/clientsList/${payload.id}`), payload).then(()=>{
            dispatch({type: types.UPDATE_CLIENT, payload})
        })
    }
}
export function searchClient(payload){
    return function(dispatch){
        /*dispatch({type: SEARCH_CLIENT, payload})  */
    }
}

