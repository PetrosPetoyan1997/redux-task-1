import "./Header.scss";

import React from "react";
import {useState} from "react";
import LinkType1 from "../Common/Link";
import LinksList from "./LinksList";
import {signOutUser} from "../../redux/auth/actions";
import {useDispatch} from "react-redux";

const Header = ()=>{
    const dispatch = useDispatch();
    const [linksList] = useState([
        {linkName: 'Clients', linkUrl: '/clients'},
        {linkName: 'Supervisors', linkUrl: '/supervisors'},
        {linkName: 'Psr', linkUrl: '/a'},
        {linkName: 'Users', linkUrl: '/users'},
        {linkName: 'Questions', linkUrl: '/b'},
        {linkName: 'Answers', linkUrl: '/c'},
        {linkName: 'Routes', linkUrl: '/d'},
        {linkName: 'Report By', linkUrl: '/x', withIcon: true},
        {linkName: 'CPR', linkUrl: '/l', withIcon: true},
    ])
    const logOutHandler = ()=>{
        dispatch(signOutUser())
    }
    return (
        <div className="header">
            <div className="container">
                <div className="header-body">
                    <h1 className="header-title">
                        Platform Name
                    </h1>
                    <LinksList linksList={linksList}/>
                    <div className='header-admin'>
                        <LinkType1
                            linkName={'Admin'}
                            withIcon={true}
                            iconName={'down-arrow'}
                            linkUrl={null}
                            onClickHandler={()=>{}}
                        />
                        <div>
                            <button onClick={()=>logOutHandler()}>Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;