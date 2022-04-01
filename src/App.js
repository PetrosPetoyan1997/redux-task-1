import React, {useEffect} from "react";

import Layout from "./layout/Layout";
import Auth from "./components/auth/Auth";
import {
    Routes,
    Route,
    Navigate, /*useLocation*/

} from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedLink({children,to, condition}){
    const userSignedIn = useSelector((state)=>state.userAuthenticateStatus.isSignedIn)
    return userSignedIn === condition ? children : <Navigate to={to} replace/>
}

function App() {
    /*const location = useLocation()*/
  return (
        <div className="App">
            <Routes>
                <Route path='/*' element={
                    <ProtectedLink to={'/auth'} condition={true}>
                        <Layout/>
                    </ProtectedLink>
                }/>

                <Route path='/auth' element={
                    <ProtectedLink to={'/clients'} condition={false}>
                        <Auth/>
                    </ProtectedLink>
                }/>
                <Route path={'*'} element={<div>Page no found</div>}/>
            </Routes>
        </div>
  );
}

export default App;
