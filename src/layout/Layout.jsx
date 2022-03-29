import "./Layout.scss";

import Header from "../components/Header/Header";
import ClientsPage from "../pages/Clients-Page/ClientsPage";
import Footer from "../components/footer/Footer";
function Layout() {
    return (
       <div className="layout">
           <Header/>
           <ClientsPage/>
           <Footer/>
       </div>
    );
}

export default Layout;
