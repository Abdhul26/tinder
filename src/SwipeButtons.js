import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FlashIcon from '@material-ui/icons/FlashAuto';

const SwipeButtons = () => {
 return (
  <div className="swipeButtons">
   <IconButton className="swipeButtons__repeat">
    <ReplayIcon fontSize="medium"/>
   </IconButton>

     <IconButton className="swipeButtons__left">
    <CloseIcon fontSize="medium"/>
   </IconButton>

      <IconButton className="swipeButtons__star">
    <StarRateIcon fontSize="medium"/>
   </IconButton>
   
     <IconButton className="swipeButtons__right">
    <FavoriteIcon fontSize="medium"/>
   </IconButton>
   


     <IconButton className="swipeButtons__lightning">
    <FlashIcon fontSize="medium"/>
   </IconButton>
  </div>
 )
}

export default SwipeButtons
