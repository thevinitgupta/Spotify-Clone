import React from 'react';
import "./Header.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar } from '@material-ui/core';
import {useDataLayerValue} from "./DataLayer";

function Header({spotify}) {
    const [{user},dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchRoundedIcon/>
                <input placeholder="Search for songs,artists and podcasts" type="text"/>
            </div>
            <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
