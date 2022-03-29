import React from "react";
import {useState} from "react";

import "./ActionsGroup.scss";

import Search from "./Search";
import DownloadFile from "./DownloadFile";

import BtnType1 from "../../Common/BtnType1";
import CreateClientForm from "../../Common/CreateClientForm";
import Filter from "../../Common/Filter";
import Modal from "../../Common/Modal";

const ActionsGroup = ()=>{
    const [showModal, setShowModal] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const modalToggle = ()=>{
        setShowModal(!showModal)
    }
    const filterToggle = ()=>{
        setShowFilter(!showFilter)
    }
    return (
        <div className="actions-group">
            <div className='group-left'>
                <Search/>
            </div>
            <div className="group-right">
                <DownloadFile/>
                <BtnType1
                    onClickHandler={modalToggle}
                    btnText={'Create New Client'}
                    withIcon={true}
                    classHelper={'-create-client-btn -save-btn'}
                />
                {
                    showModal && <Modal modalToggle={modalToggle}>
                                    <CreateClientForm closeModal={modalToggle}/>
                                 </Modal>
                }

                <div className='view-filter'>
                    <BtnType1 onClickHandler={filterToggle} btnText={'View'} withIcon={true} classHelper={'-view-btn'}/>
                    { showFilter && <Filter cancelHandler={filterToggle} />}
                </div>
            </div>
        </div>
    );
}

export default ActionsGroup;
