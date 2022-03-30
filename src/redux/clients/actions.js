import * as types from "./types";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCNlNnkMdGbox35Q5_wDmE_0dQdXNw2Ix4",
    databaseURL: 'https://redux-task-5c4f7-default-rtdb.europe-west1.firebasedatabase.app',
    authDomain: "redux-task-5c4f7.firebaseapp.com",
    projectId: "redux-task-5c4f7",
    storageBucket: "redux-task-5c4f7.appspot.com",
    messagingSenderId: "168019229243",
    appId: "1:168019229243:web:373a2d9b18b25a0b313a1e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)



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

