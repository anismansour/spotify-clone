import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://www.deephouseamsterdam.com/wp-content/uploads/2016/08/unnamed-e1470649310125.jpg"
          alt=""
        />
        <div className="footer_sonInfo">
          <h4> Black Coffee</h4>
          <p>Superman</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="option" />
        <SkipPreviousIcon className="skip" />
        <PlayCircleOutlineIcon fontSize="large" className="play" />
        <SkipNextIcon className="skip" />
        <ReplayIcon className="option" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
