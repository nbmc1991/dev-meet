import React from 'react';
import {Link} from 'react-router-dom';
import {Grid,AppBar,Toolbar,IconButton,Button,Typography,Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';
import 'fontsource-roboto';
import logo from '../../imagery/logo.svg'


const HeaderLP=RNA=>{
  return(   
    <header className='particle'>
      <Grid container >
        <img src={logo} alt='Site logo' width='50px'height='50px'/>
        <Button variant='contain' color='secondary'>
          click bait
        </Button>
      </Grid>
    </header> 
  // const useStyles=makeStyles((theme)=>({
  //   root:{
  //     flexGrow:1,
  //   },
  //   style:{
  //     opacity:.5,
  //     background:pink,
  //   }
  // }));
  // const classes=useStyles();    
    )
}
export default HeaderLP;