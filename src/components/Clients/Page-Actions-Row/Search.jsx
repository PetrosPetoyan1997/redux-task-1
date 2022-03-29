import React from "react";

import "./Search.scss";
import searchIcon from '../../../assets/svg-icons/search-icon.svg';
import searchButton from '../../../assets/svg-icons/search-button-icon.svg';

import {searchClient} from "../../../redux/clients/actions";
import {useDispatch} from "react-redux";

const Search = ()=>{
    const dispatch = useDispatch()
    const onChangeHandler = (evt)=>{
        dispatch(searchClient({value: evt.target.value}))
    }
    return (
        <div className="search" onChange={(evt)=>onChangeHandler(evt)}>
            <img src={searchIcon} className="search-icon" alt="search-icon"/>
            <input type='text' placeholder="Search..." className="search-input"/>
            <div className='search-button-icon'>
                <img src={searchButton} alt="search-button-icon" />
            </div>
        </div>
    );
}

export default Search;
