import React from "react";
import PropTypes from "prop-types";

import "./InputWithLabel.scss";


const Select = ({labelName, inputValue, name, onChange})=>{
    return (
        <div className="input-row">
            <span className="row-label"><span className="label-required-sign">*</span> {labelName}:</span>
            <select value={inputValue} onChange={(evt)=>onChange(evt, name)} className="rows-input">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
        </div>
    );
}
Select.propTypes = {
    labelName: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default Select;
