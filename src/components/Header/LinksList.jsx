import React from "react";
import {useState} from "react";

import "./LinksList.scss";
import Link from '../Common/Link';


const
    LinksList = ({linksList})=>{
    const [active, setActive] = useState('Clients')
    return (
        <div className="links-list">
            {
                linksList.map((link)=> (
                    <Link
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