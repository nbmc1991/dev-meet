import React from 'react';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './header.css'
import {IconButton,Grid} from '@material-ui/core'
import CompareIcon from '@material-ui/icons/Compare';


const Header=props=>{
    return(
      <div className="header">
          <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
            <img className="header__logo" src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-korean-love-symbol-png-image_5147489.jpg" alt="logo"/>  
            <ForumIcon fontSize="large" className="header__icon"/>
          </IconButton>
        <Grid container direction='row'justify='flex-end'alignItems='center'className='header_icon'>
          <div src={'../../src/logo.svg'}/>
        </Grid>
      </div>
    )
}
export default Header;