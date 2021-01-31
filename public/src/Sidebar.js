import React from 'react';
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';
import {useDataLayerValue} from "./DataLayer";

function Sidebar({index}) {
    const [{playlists},dispatch] = useDataLayerValue();
    return (
        <div className="sidebar" style={{zIndex : index}} >
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"></img>
            <SidebarOption title="Home" Icon={HomeSharpIcon}/>
            <SidebarOption title="Search" Icon={SearchRoundedIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicRoundedIcon}/>
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/> 
            ))}
            {/* <SidebarOption title="Top 2020"/>
            <SidebarOption title="Love Shots"/>
            <SidebarOption title="Bollywood Mush"/> */}
        </div>
    )
}

export default Sidebar
