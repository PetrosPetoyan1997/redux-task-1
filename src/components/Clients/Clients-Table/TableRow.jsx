import React, {useContext, useState} from "react";
import "./TableRow.scss";
import editIcon from "../../../assets/svg-icons/edit-icon.svg";
import deleteIcon from "../../../assets/svg-icons/delete-icon.svg";
import CreateClientForm from "../../Common/CreateClientForm";
import Modal from "../../Common/Modal";

import {StoreContext} from "../../../index";
import {deleteClient} from "../../../redux/clients/actions";

const TableRow = ({client})=>{
    const [showModal, setShowModal] = useState(false)
    const clientStore = useContext(StoreContext)
    const handlerEdit = ()=>{
        setShowModal(!showModal)
    }
    const handlerDelete = ()=>{
        clientStore.dispatch(deleteClient({id: client.id}))
    }
    return (
        <div className="table-row">
                <div className="table-col"><span>{client.id}</span></div>
                <div className="table-col"><span>{client.codeKey}</span></div>
                <div className="table-col"><span>{client.name}</span></div>
                <div className="table-col"> <span>{client.legalName}</span> </div>
                <div className="table-col"><span>{client.pl}</span></div>
                <div className="table-col"><span>{client.psr}</span></div>
                <div className="table-col"><span>{client.psrName}</span></div>
                <div className="table-col"><span>{client.address}</span></div>

                <div className="table-col actions">
                    <div className="actions-body">
                        <div className="actions-edit" onClick={()=>handlerEdit()}>
                            <img src={editIcon} alt="edit icon"/>
                        </div>
                        <div className="actions-delete" onClick={()=>handlerDelete()}>
                            <img src={deleteIcon} alt="delete icon"/>
                        </div>
                    </div>
                </div>
                {
                    showModal && <Modal modalToggle={setShowModal}>
                                     <CreateClientForm
                                         useComponentForEdit={true}
                                         closeModal={setShowModal}
                                         idForEdit={client.id}
                                     />
                                 </Modal>
                }
            </div>
    );
}

export default TableRow;
