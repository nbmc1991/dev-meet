import {
    Typography,
    Grid,
    Button,
    Paper,
    BottomNavigationAction,
    Container
} from '@material-ui/core';

import { Restore, Favorite, LocationOn } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Store } from '../../store';//this will be filled with functions for capturing client data
import { Link } from 'react-router-dom';
import 'fontsource-roboto';
import { black, blue, white, pink } from '@material-ui/core/colors';
// import logo from 'logo.svg'


const LandingPage = props => {
    // const {state}=useContext(Store)//(store) was temporarily removed from the useContext()
    // console.log({state,props});

    return (
        <div className='opacityStyle'>
            <Container maxWidth='sm' style={{
                position: 'relative',
                height: '70vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                {/* <Grid container>
                    <Grid item xs={12} direction='row'justify='flex-start'alignItems='flex-end'>
                        <Typography variant='h5'><b>Meet</b> the <b>Dev</b> of your dreams...</Typography>
                    </Grid>
                    <Grid item xs={12} direction='row'justify='center'alignItems='center'>
                        <Link to='/register'><Button variant='contained'color='primary' >click bait</Button></Link>
                    </Grid>
                </Grid> */}
                <Typography variant='h5'><b>Meet</b> the <b>Dev</b> of your dreams...</Typography>
                <Link to='/register'><Button variant='contained' color='primary' >click bait</Button></Link>
            </Container>
            <Container maxWidth='sm' style={{ height: '30vh' }}>
                {/**cards will go here to match wireframe */}
                cards here
            </Container>
        </div>
    )
};
export default LandingPage;
