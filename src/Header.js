import React from 'react';
import "./Header.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar } from '@material-ui/core';

function Header({spotify}) {
    return (
        <div className="header">
            <div className="header__left">
                <SearchRoundedIcon/>
                <input placeholder="Search for songs,artists and podcasts" type="text"/>
            </div>
            <div className="header__right">
            <Avatar src="" alt="Vinit Gupta" />
                <h4>Vinit Gupta</h4>
            </div>
        </div>
    )
}

export default Header
