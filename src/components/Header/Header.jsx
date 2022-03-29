import "./Header.scss";

import React from "react";
import {useState} from "react";
import Link from "../Common/Link";
import LinksList from "./LinksList";

const Header = ()=>{
    const [linksList] = useState([
        {linkName: 'Clients', linkUrl: '/'},
        {linkName: 'Supervisors', linkUrl: '/'},
        {linkName: 'Psr', linkUrl: '/'},
        {linkName: 'Users', linkUrl: '/'},
        {linkName: 'Questions', linkUrl: '/'},
        {linkName: 'Answers', linkUrl: '/'},
        {linkName: 'Routes', linkUrl: '/'},
        {linkName: 'Report By', linkUrl: '/', withIcon: true},
        {linkName: 'CPR', linkUrl: '/', withIcon: true},
    ])
    return (
        <div className="header">
            <div className="container">
                <div className="header-body">
                    <h1 className="header-title">
                        Platform Name
                    </h1>
                    <LinksList linksList={linksList}/>
                    <div className='header-admin'>
                        <Link
                            linkName={'Admin'}
                            withIcon={true}
                            iconName={'down-arrow'}
                            linkUrl={null}
                            onClickHandler={()=>{}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;