import React, {useEffect} from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import "./CreateClientForm.scss";
import InputWithLabel from "../Clients/Page-Actions-Row/InputWithLabel";
import BtnType1 from "./BtnType1";
import {addClient, updateClient} from "../../redux/clients/actions";

import {useSelector, useDispatch} from "react-redux";

const CreateClientForm = ({useComponentForEdit, idForEdit, closeModal})=>{
    const clientListStore = useSelector((state)=>{
        return state.clientList
    })
    const dispatch = useDispatch()
    const [clientData, setClientData] = useState({
        codeKey: '',
        name: '',
        legalName: '',
        pl: '',
        psr: '',
        psrName: '',
        address: '',
    })
    useEffect(()=>{
        if(useComponentForEdit){
            clientListStore.forEach((client)=>{
                if(client.id === idForEdit){
                    setClientData(client)
                }
             })
        }
    },[])
    const onChangeHandler = (e,fieldInObj)=>{
        setClientData({
            ...clientData,
            [fieldInObj] : e.target.value
        })
    }
    const submitHandler = ()=>{
        let generateId = Math.floor(Math.random() * 140)
        //if one of inputs is empty, do not send form
        for(let i in clientData){
            if(clientData[i] === ''){
                alert('Fill all inputs')
                return;
            }
        }
        const payload = {
            id: useComponentForEdit ? idForEdit: generateId,
            ...clientData
        }
        if(useComponentForEdit){
            dispatch(updateClient(payload))
        }else{
            dispatch(addClient(payload))
        }
        closeModal()
    }
    return (
        <div className="client-create-form">
            <div className="form-header">
                <span>Create New Client</span>
            </div>
            <form className="form-inputs">
                <InputWithLabel labelName={'Code Key'} name="codeKey" inputValue={clientData.codeKey} onChange={onChangeHandler}/>
                <InputWithLabel labelName={'Name'} name="name" inputValue={clientData.name} onChange={onChangeHandler}/>
                <InputWithLabel labelName={'Legal Name'} name="legalName" inputValue={clientData.legalName} onChange={onChangeHandler}/>
                <InputWithLabel labelName={'PL'} name="pl" inputValue={clientData.pl} onChange={onChangeHandler}/>
                <InputWithLabel labelName={'Psr'} name="psr" inputValue={clientData.psr} onChange={onChangeHandler}/>
                <InputWithLabel labelName={'Psr Name'} name="psrName" inputValue={clientData.psrName} onChange={onChangeHandler}/>
                <InputWithLabel labelName={'Address'} name="address" inputValue={clientData.address} onChange={onChangeHandler}/>
            </form>
            <div className="form-footer">
                <BtnType1
                    btnText={'Save'}
                    classHelper={'-save-btn'}
                    onClickHandler={submitHandler}
                />
            </div>
        </div>

    );
}
CreateClientForm.propTypes = {
    useComponentForEdit: PropTypes.bool,
    idForEdit: PropTypes.number,
    closeModal: PropTypes.func
}

export default CreateClientForm;
