import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
 return (
  <div className="header">
   <IconButton>
    <PersonIcon fontSize="large" className="header_icon" />
   </IconButton>

   <img className="header_logo" src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />


   <IconButton>
    <ForumIcon fontSize="large" className="header_icon" />
   </IconButton>
  </div>
 )
}

export default Header
