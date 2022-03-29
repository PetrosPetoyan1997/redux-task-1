import React from "react";
import PropTypes from "prop-types";

import "./InputWithLabel.scss";


const InputWithLabel = ({labelName, inputValue, name, onChange})=>{
    return (
        <div className="input-row">
            <span className="row-label"><span className="label-required-sign">*</span> {labelName}:</span>
            <input type="text"
                   className="rows-input"
                   onChange={(evt)=>onChange(evt, name)}
                   value={inputValue}
            />
        </div>
    );
}
InputWithLabel.propTypes = {
    labelName: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default InputWithLabel;
