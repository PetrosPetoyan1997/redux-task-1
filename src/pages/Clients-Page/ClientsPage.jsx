import React from "react";
import "./ClientsPage.scss";
import ActionsGroup from "../../components/Clients/Page-Actions-Row/ActionsGroup";
import ClientsTable from "../../components/Clients/Clients-Table/ClientsTable";


const ClientsPage = ()=>{
    return (
        <div className="clients-page">
            <div className="container">
                <h2 className="page-title">Client List</h2>
                <ActionsGroup/>
                <ClientsTable/>
            </div>
        </div>
    );
}

export default ClientsPage;
