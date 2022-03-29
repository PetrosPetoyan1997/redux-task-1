import React from "react";
import PropTypes from "prop-types";

import "./CheckboxWithLabel.scss";

const CheckboxWithLabel = ({labelName, value, isChecked, position, onChange})=>{
    return (
            <div className="checkbox-wrapper">
                    <input type='checkbox'
                           className='checkbox'
                           id={labelName}
                           value={value}
                           checked={isChecked}
                           onChange={(evt)=>onChange(evt,position)}
                    />
                    <label className='checkbox-label' htmlFor={labelName}>{labelName}</label>
            </div>
    )
}
CheckboxWithLabel.propTypes = {
    labelName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    position: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default CheckboxWithLabel;