import React from "react";

import "./TableBody.scss";

import TableRow from "./TableRow";

const ClientsTable = ({clientList})=>{
    return (
            <div className="table-body">
                {
                    clientList.map((clientData)=>(
                        <TableRow
                            key={clientData.id}
                            client={clientData}
                        />
                    ))
                }
                {
                    !clientList.length && <p className='body-empty-note'>List is empty</p>
                }
            </div>
    );
}

export default ClientsTable;
