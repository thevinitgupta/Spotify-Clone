import React from 'react';
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
            <img src="https://images.genius.com/98a085cac59abe2515b7ef666237515c.748x740x1.jpg" className="footer__albumLogo" alt="song-cover"/>
            <div>
            <h4>Mine</h4>
            <p>Bazzi</p>
            </div>
            
            </div>
            <div className="footer__center">
              <ShuffleOutlinedIcon className="footer__green"/>
              <SkipPreviousRoundedIcon className="footer__icon"/>
              <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon"/>
              <SkipNextRoundedIcon className="footer__icon"/>
              <RepeatRoundedIcon className="footer__green"/>
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
