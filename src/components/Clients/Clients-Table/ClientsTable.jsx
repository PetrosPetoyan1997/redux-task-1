import React from "react";
import {useContext, useEffect, useState} from "react";
import "./ClientsTable.scss";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

import {StoreContext} from "../../../index";
import {getClientsList} from "../../../redux/clients/actions";
const ClientsTable = ()=>{
    const clientStore = useContext(StoreContext)
    const [clientList, setClientList] = useState(clientStore.getState().clientList)
    useEffect(()=>{
        clientStore.subscribe(()=>{
            setClientList(clientStore.getState().clientList)
        })
        clientStore.dispatch(getClientsList())
    },[])
    return (
        <div className="clients-table">
            <TableHeader/>
            <TableBody clientList={clientList}/>
        </div>
    );
}

export default ClientsTable;
