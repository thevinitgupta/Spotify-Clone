import React from 'react'
import "./SongRow.css"

function SongRow({track}) {
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
            <p>{track.album.name}</p>
        </div> 
        </div>
    )
}

export default SongRow
