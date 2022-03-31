import * as types from "./types";
import appDb from '../../firebase-db/db';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";


const auth = getAuth(appDb)

export function authenticateUser(payload){
     return async function(dispatch){
        await createUserWithEmailAndPassword(auth, payload.email, payload.password).then((e)=>{
                dispatch({type: types.USER_AUTHENTICATION, payload:{userAlreadyExist: false}})
                dispatch({type: types.SIGNE_IN})
                localStorage.setItem('isSignedIn', '1');
        }).catch(()=>{
                 alert('user already exist')
        })
     }
}
export function signIn(payload){
    return async function(dispatch){
        await signInWithEmailAndPassword(auth, payload.email, payload.password).then((e)=>{
            dispatch({type: types.SIGNE_IN})
            localStorage.setItem('isSignedIn', '1');
        }).catch((err)=>{
            alert('create account, you do not have')
        })
    }
}
export function signOutUser(){
    return function(dispatch){
        signOut(auth).then((e)=>{
            dispatch({type: types.SIGNE_OUT_USER})
            localStorage.removeItem('isSignedIn');
        })
    }
}