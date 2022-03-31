import React, {useState} from "react";
import "./auth.scss";
import {
    useNavigate,
} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {authenticateUser, signIn} from "../../redux/auth/actions";

function Auth() {
    console.log(localStorage.getItem('isSignedIn'))

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userAlreadyExist = useSelector((state)=>state.userAuthenticateStatus.userAlreadyExist)
    const [createAccount, setCreateAccount] = useState()
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handlerSubmit = async (evt)=>{
        evt.preventDefault()
       // localStorage.setItem('isAuthenticated', '1');
        if(createAccount){
             await dispatch(authenticateUser(userData))
            navigate("/clients")

        }else{
            await dispatch(signIn(userData))
            navigate("/clients")
        }

    }
    const changeComponentToCreate = ()=>{
        setCreateAccount(!createAccount)
    }
    const handlerChange = (evt)=>{
        setUserData(
        {
                ...userData,
                [evt.target.name]: evt.target.value
            }
        )
    }
    return (
        <div className="auth">
            <div>
                <label>{createAccount ? 'Email for authentication': 'Email for login'}</label>
                <input type='text' value={userData.email} name={'email'} onChange={(evt)=>handlerChange(evt)}/>
                <br/>
                <br/>
                <label>{createAccount ? 'Password for authentication': 'Password for login'}</label>
                <input type='text' value={userData.password} name={'password'} onChange={(evt)=>handlerChange(evt)}/>
                <br/>
                <br/>
                <div className='btn-box'>
                    <button onClick={(evt)=>handlerSubmit(evt)}>{createAccount? 'Authentication' : 'Login'}</button>
                </div>
                <br/>
                <p>Create account if you do not have</p>
                <button onClick={()=>changeComponentToCreate()}>Authentication</button> {"  "}
                <button onClick={()=>changeComponentToCreate()}>Login</button>
            </div>
        </div>
    );
}

export default Auth;
