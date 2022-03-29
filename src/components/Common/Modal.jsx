import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";
import closeIcon from "../../assets/svg-icons/close-icon.svg";

const Modal = ({children, modalToggle})=>{
    const closeModal = (evt)=>{
        const targetClassName = evt.target.className
        if(targetClassName === 'overlay' || targetClassName === 'close-modal' || targetClassName === 'close-icon'){
            modalToggle()
        }
    }
    return ReactDOM.createPortal(
            <div className="modal" onClick={(evt)=>closeModal(evt)}>
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className="close-modal">
                        <img src={closeIcon} alt="close icon" className="close-icon"/>
                    </div>
                    <div className="content-dynamic-part">
                        {children}
                    </div>
                </div>
            </div>, document.getElementById('root')
    );
}

export default Modal;
