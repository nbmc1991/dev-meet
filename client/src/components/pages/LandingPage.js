import {Typography,Grid,Button,Paper,BottomNavigationAction,BottomNavigation} from '@material-ui/core';
import {Restore,Favorite,LocationOn} from '@material-ui/icons';
import React,{useContext} from 'react';
import {Store} from '../../store';//this will be filled with functions for capturing client data
import {Link} from 'react-router-dom';
import 'fontsource-roboto';
// import FavoriteIcon from '@material-ui/icons/Favorite'

const LandingPage=props=>{
    const {state}=useContext(Store)//(store) was temporarily removed from the useContext()
    console.log({state,props});

    return(
        // <div className='container valign-wrapper' style={{height:'75vh'}}>
        //     <div className='row'>
        //         <div className='col s12 center-align'>
        // <Grid container direction='column' justify='center' alignItems='center'>
        //     <Grid item>
        //     <Paper>
        //         <Typography>
        //             <b>Meet</b> the <b>Dev</b> of your dreams...
        //         </Typography>
        //     </Paper>
        //     </Grid>                                               
        // </Grid>
        //             <p className='flow-text grey-text text-darken-1'>
        //                 The perfect place for to build lasting connections + stellar applications
        //             </p>
        //             <br/>
        //             <div className="col s6">
        //                 <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
        //                 width: '140px',
        //                 borderRadius: '3px',
        //                 letterSpacing: '1.5px',
        //                 }}>
        //                 Register
        //                 </Link>
        //             </div>
        //             <div>
        //             {/* 
        //                 <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
        //                 width: '140px',
        //                 borderRadius: '3px',
        //                 letterSpacing: '1.5px',
        //                 }}>
        //                 Login
        //                 </Link> */}
        //                 <Button style={{fontSize:19}}variant='filled'color='secondar'>Login</Button>{/**model after app stack for routing off of button */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Grid container direction='column' justify='center' alignItems='center' style={{height:'75vh'}}>
            <Grid item spacing={3}>
                <Paper elevation={3}>
                    <Typography>
                        da Vjncj dissonance
                    </Typography>
                </Paper>
                <BottomNavigation value={3}
                showLabels>
                    <BottomNavigationAction label='Recents'icon={<Restore/>}/>
                    <BottomNavigationAction label='Favorites'icon={<Favorite/>}/>{/**this link can lead to a store() that renders the users last 5 likes */}
                </BottomNavigation>                
            </Grid>
        </Grid>
    )
};
export default LandingPage;
//add Link within Buttons by adding in 'Component prop & to='