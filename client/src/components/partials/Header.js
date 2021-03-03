import React from 'react';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
import IconButton from '@material-ui/core/IconButton';

//api calls to material-ui library

const Header=props=>{
    return(
        <div className="header">
          <IconButton>
          <PersonIcon fontSize="large" className="header__icon"/>
          <img className="header__logo" src="https://www.bestdesigns.co/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png" alt="logo"/>      
          <ForumIcon fontSize="large" className="header__icon"/>
     
      </IconButton>
    </div>
    )
}
export default Header;