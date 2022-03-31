import React, {useEffect} from "react";

import Layout from "./layout/Layout";
import Auth from "./components/auth/Auth";
import {
    Routes,
    Route,
    Navigate, /*useLocation*/

} from "react-router-dom";
import {useSelector} from "react-redux";
function Wrapper({children}){
    const userSignedIn = useSelector((state)=>state.userAuthenticateStatus.isSignedIn)
    return userSignedIn === true ? children : <Navigate to={'/auth'} replace/>
}
function App() {
    /*const location = useLocation()*/
  return (
        <div className="App">
            <Routes>

                <Route path='/*' element={
                    <Wrapper to={'/auth'}>
                        <Layout/>
                    </Wrapper>
                }/>

                <Route path='/auth' element={
                    <Auth/>
                }/>
                <Route path={'*'} element={<div>Page no found</div>}/>
            </Routes>
        {/*  <Layout/>*/}
        </div>
  );
}

export default App;
