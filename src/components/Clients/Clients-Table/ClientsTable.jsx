import React from "react";
import {useEffect} from "react";
import "./ClientsTable.scss";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


import {getClientsList} from "../../../redux/clients/actions";
import {useSelector, useDispatch} from "react-redux";

const ClientsTable = ()=>{
    const clientList = useSelector((state)=>{
        return state.clientList
    })
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getClientsList())
    },[])
    return (
        <div className="clients-table">
            <TableHeader/>
            <TableBody clientList={clientList}/>
        </div>
    );
}

export default ClientsTable;
