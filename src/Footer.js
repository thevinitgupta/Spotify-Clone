import React, { useEffect, useState } from 'react';
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import { useDataLayerValue } from './DataLayer';

function Footer() {
    const [{currentSongUrl,item},dispatch] = useDataLayerValue();
    const [audio] = useState(new Audio(currentSongUrl));
    const [isPlaying,setIsPlaying] = useState(false);
    
    
    useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
      },
      [isPlaying,audio]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setIsPlaying(false));
      dispatch({
          type : "SET_SONG",
          currentSongUrl : null
      })
      return () => {
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }, [audio,dispatch]);
    return (
        <div className="footer">
            <div className="footer__left">
            {item?.album?.images[0].url &&<img src={item?.album?.images[0].url} className="footer__albumLogo" alt="song-cover"/>}
            <div>
            <h4>{item?.name.substring(0,25).concat("...")}</h4>
            <p>{item?.artists.map(artist => artist.name).join(", ")}</p>
            </div>
            
            </div>
            <div className="footer__center">
            <div className="footer__center__controls">
            <ShuffleOutlinedIcon className="footer__green"/>

              <SkipPreviousRoundedIcon className="footer__icon" id="previous_audio"/>
              {isPlaying && currentSongUrl!==null ? <PauseCircleOutlineIcon fontSize="large" onClick={()=>setIsPlaying(false)} className="footer__icon" /> :<PlayCircleOutlineOutlinedIcon fontSize="large" onClick={()=>setIsPlaying(true)}  className="footer__icon" id="play"/>}
              
              <SkipNextRoundedIcon className="footer__icon" id="next_audio"/>
              <RepeatRoundedIcon className="footer__green"/>
            </div>
              <div className="footer__center__playback">
                  <audio src={currentSongUrl} type="audio/mp3" id="song__player" autoPlay={true} controls={false}>Song Format Not Supported</audio>
              </div>
            </div>
            <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayRoundedIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownRoundedIcon/>
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer
