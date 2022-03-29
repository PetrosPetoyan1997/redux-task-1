import React from "react";

import "./TableHeader.scss";

const TableHeader = ()=>{
    return (
        <div className="table-header table-row">
           <div className='table-col'>Client ID</div>
           <div className='table-col'>Code Key</div>
           <div className='table-col'>Name</div>
           <div className='table-col'>Legal Name</div>
           <div className='table-col'>PL</div>
           <div className='table-col'>Psr...</div>
           <div className='table-col'>Psr Name</div>
           <div className='table-col'>Address</div>
           <div className='table-col'>Edit</div>
        </div>
    );
}

export default TableHeader;
