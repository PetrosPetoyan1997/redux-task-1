import "./Layout.scss";

import {
    Routes,
    Route,

} from "react-router-dom";

import Header from "../components/Header/Header";
import ClientsPage from "../pages/Clients-Page/ClientsPage";
import Supervisors from "../pages/Supervisors/Supervisors";
import Users from "../pages/Users/Users";
import Footer from "../components/footer/Footer";


function Layout() {
    return (
           <div className="layout">
                    <Header/>
                    <Routes>
                        <Route path='/clients'  index element={<ClientsPage/>}/>
                        <Route path='/supervisors' element={<Supervisors/>}/>
                        <Route path='/users' element={<Users/>}/>
                    </Routes>
                    <Footer/>
           </div>
    );
}

export default Layout;
