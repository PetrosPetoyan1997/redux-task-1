import React from "react";
import PropTypes from "prop-types";

import "./BtnType1.scss";
import viewIcon from "../../assets/svg-icons/view-icon.svg";
import createIcon from "../../assets/svg-icons/create-icon.svg";

const BtnType1 = ({btnText, withIcon, classHelper, onClickHandler})=>{
    return (
        <button className={`btn-type-1 ${classHelper}`}
                onClick={()=>onClickHandler()}
        >
            {
                withIcon && <img src={(classHelper.includes('create')) ? createIcon : viewIcon} alt='btn-icon'
                                 className='btn-type-1-icon'
                            />
            }
            <span>
                {btnText}
            </span>
        </button>
    )
}
BtnType1.propTypes = {
    btnText: PropTypes.string.isRequired,
    withIcon: PropTypes.bool,
    onClickHandler: PropTypes.func,
}
export default BtnType1;