import {Typography,
        Grid,
        Button,
        Paper,
        BottomNavigationAction,
        Container} from '@material-ui/core';

import {Restore,Favorite,LocationOn} from '@material-ui/icons';
import React,{useContext} from 'react';
import {Store} from '../../store';//this will be filled with functions for capturing client data
import {Link} from 'react-router-dom';
import 'fontsource-roboto';
import {black,blue,white,pink} from '@material-ui/core/colors';
// import logo from 'logo.svg'


const LandingPage=props=>{
    // const {state}=useContext(Store)//(store) was temporarily removed from the useContext()
    // console.log({state,props});

    return(
        <div>            
            <Container maxWidth='sm'>
                <Grid container>
                    <Grid item xs={12} direction='row'justify='flex-start'alignItems='flex-end'>
                        <Typography variant='h5'><b>Meet</b> the <b>Dev</b> of your dreams...</Typography>
                    </Grid>
                    <Grid item xs={12} direction='row'justify='center'alignItems='center'>
                        <Link to='/register'><Button variant='contained'color='primary' >click bait</Button></Link>
                    </Grid>
                </Grid>
            </Container>
        </div>  
    )
};
export default LandingPage;
