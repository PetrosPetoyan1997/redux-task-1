import React from "react";
import {useState} from "react";

import "./LinksList.scss";
import LinkType1 from '../Common/Link';


const
    LinksList = ({linksList})=>{
    const [active, setActive] = useState('Clients')
    return (
        <div className="links-list">
            {
                linksList.map((link)=> (
                    <LinkType1
                        {...link}
                        active={link.linkName === active}
                        iconName={link.withIcon ? 'down-arrow': null}
                        onClickHandler={setActive}
                        key={link.linkName}
                    />
                ))
            }
        </div>
    )
}
export default LinksList;