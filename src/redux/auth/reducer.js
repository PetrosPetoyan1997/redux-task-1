import * as types from "./types";


const initialState = {
    isAuthenticated: false,
    isSignedIn: !!+localStorage.getItem('isSignedIn'),
}

function userAuthenticateStatus(state = initialState, action) {
    switch (action.type) {

        case types.SIGNE_IN:
            return {
                ...state,
                isSignedIn: true
            }
        case types.USER_AUTHENTICATION:
            return {
                ...state,
                userAlreadyExist: action.payload.userAlreadyExist
            }
        case types.SIGNE_OUT_USER:
            return {
                ...state,
                isSignedIn: false
            }
        default:
            return state
    }
}
export default userAuthenticateStatus;