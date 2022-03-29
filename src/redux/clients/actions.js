import {ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT, SEARCH_CLIENT, GET_CLIENTS_LIST} from "./types";
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


/*const initialState  = [
    {
        codeKey: '787878787',
        name: 'մարկետ 1',
        legalName: 'Պետոյան Կարապետ Արամի',
        pl: 'P',
        psr: '97',
        psrName: 'Պետոյան Պետրոս Արամի',
        address: 'ք․ Երևան Նոր Նորք 1զ․ ջուղայի 2շ․ բն9',
        id: Math.floor(Math.random() * 100),
    },
    {
        codeKey: '787878787',
        name: 'մարկետ 1',
        legalName: 'Պետոյան Կարապետ Արամի',
        pl: 'P',
        psr: '97',
        psrName: 'Պետոյան Պետրոս Արամի',
        address: 'ք․ Երևան Նոր Նորք 1զ․ ջուղայի 2շ․ բն9',
        id: Math.floor(Math.random() * 100),
    },
    {
        codeKey: '787878787',
        name: 'հանրախանութ',
        legalName: 'Պետոյան Կարապետ Արամի',
        pl: 'P',
        psr: '97',
        psrName: 'Պետոյան Պետրոս Արամի',
        address: 'ք․ Երևան Նոր Նորք 1զ․ ջուղայի 2շ․ բն9',
        id: Math.floor(Math.random() * 100),
    },
    {
        codeKey: '787878787',
        name: 'մարկետ 1',
        legalName: 'Պետոյան Կարապետ Արամի',
        pl: 'P',
        psr: '97',
        psrName: 'Պետոյան Պետրոս Արամի',
        address: 'ք․ Երևան Նոր Նորք 1զ․ ջուղայի 2շ․ բն9',
        id: Math.floor(Math.random() * 100),
    },
    {
        codeKey: '787878787',
        name: 'մարկետ 1',
        legalName: 'Պետոյան Կարապետ Արամի',
        pl: 'P',
        psr: '97',
        psrName: 'Պետոյան Պետրոս Արամի',
        address: 'ք․ Երևան Նոր Նորք 1զ․ ջուղայի 2շ․ բն9',
        id: Math.floor(Math.random() * 100),
    },
    {
        codeKey: '787878787',
        name: 'մարկետ 1',
        legalName: 'Պետոյան Կարապետ Արամի',
        pl: 'P',
        psr: '97',
        psrName: 'Պետոյան Պետրոս Արամի',
        address: 'ք․ Երևան Նոր Նորք 1զ․ ջուղայի 2շ․ բն9',
        id: Math.floor(Math.random() * 100),
    },
]*/
export function getClientsList(){
    return function(dispatch){
        get(ref(db, 'clientData/clientsList')).then((snapshot)=>{
            let payload = {}
            payload = snapshot.val()
            dispatch({type: GET_CLIENTS_LIST, payload:{...payload}})
        })
    }
}
export function addClient(payload){
    return function(dispatch){
        set(ref(db, `clientData/clientsList/${payload.id}`), payload).then(()=>{
            dispatch({type: ADD_CLIENT, payload})
        })
    }
}
export function deleteClient(payload){
    return function(dispatch){
        remove(ref(db, `clientData/clientsList/${payload.id}`)).then((snapshot)=>{
            dispatch({type: DELETE_CLIENT, payload})
        })
    }
}
export function updateClient(payload){
    return function(dispatch){
        set(ref(db, `clientData/clientsList/${payload.id}`), payload).then(()=>{
            dispatch({type: UPDATE_CLIENT, payload})
        })
    }
}
export function searchClient(payload){
    return function(dispatch){
        /*dispatch({type: SEARCH_CLIENT, payload})  */
    }
}

