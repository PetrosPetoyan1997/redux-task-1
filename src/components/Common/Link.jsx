import React from "react";
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import "./Link.scss";

import {
    Link
} from "react-router-dom";

const LinkType1 = ({ linkName, linkUrl, active, withIcon, iconName, iconPosition, onClickHandler })=>{
    const [importedIcon, setImportedIcon]  = useState('down-arrow')
    const helperOnClickHandler = (evt)=> {
        //evt.preventDefault();
        onClickHandler(linkName)
    }
    useEffect(()=>{
        //refactor dynamic import svg
        if(withIcon){
            import(`../../assets/svg-icons/${iconName}.svg`)
                .then((module) => {
                    setImportedIcon(module.default)
                })
        }
    },[withIcon, iconName])
    return (
        <Link
            to={linkUrl ? linkUrl: ''}
            className={`link ${active ? '-active' : ''}`}
            onClick={(evt)=>helperOnClickHandler(evt)}
        >
            {linkName}
            {
                (withIcon) ? <img src={importedIcon}
                                  className={`link-icon ${iconPosition}`}
                                  alt={iconName} />
                           : null
            }
        </Link>
    )
}
LinkType1.propTypes = {
    linkName: PropTypes.string.isRequired,
    linkUrl: PropTypes.string,
    active: PropTypes.bool,
    withIcon: PropTypes.bool,
    iconName: PropTypes.string,
    iconPosition: PropTypes.string,
    onClick: PropTypes.func,
}

export default LinkType1;