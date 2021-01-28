import React from 'react'
import "./SongRow.css"

function SongRow({track,item}) {
    let dateAdded = new Date(item["added_at"]);
    //dateAdded = dateAdded.substring(0,dateAdded.length)
    dateAdded = dateAdded.toString().substring(4,15);
    return (
        <div className="songRow">
        <div className="songRow__left" >
        <div className="songRow__album">
        <img src={track.album.images[0].url} alt=""/>
        </div>
        
        <div className="songRow__info">
        <div className="songRow__info__trackInfo">
        <h1>{track.name}</h1> 
        <p>
            {track.artists.map(artist => artist.name).join(", ")}
        </p>
        </div>
        </div>
        </div>
        
        <div className="songRow__albumName">
            <a className="songRow__albumLink" href={track.album.href}>{track.album.name}</a>
        </div>
        <div className="songRow__dateAdded">
            <p>{dateAdded}</p>
        </div> 
        </div>
    )
}

export default SongRow
