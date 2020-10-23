import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>Album and song details</p>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="option" />
        <SkipPreviousIcon className="skip" />
        <PlayCircleOutlineIcon fontSize="large" className="play" />
        <SkipNextIcon className="skip" />
        <ReplayIcon className="option" />
      </div>
      <div className="footer_right">
        <p>Volume controls</p>
      </div>
    </div>
  );
}

export default Footer;
