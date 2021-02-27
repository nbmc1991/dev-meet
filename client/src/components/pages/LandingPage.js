import {Container,Typography,Grid,Button,Paper,BottomNavigationAction,BottomNavigation} from '@material-ui/core';
import {RestoreIcon,FavoriteIcon,LocationOn} from '@material-ui/icons';
import React,{useContext} from 'react';
// import {Store} from '../../store';//this will be filled with functions for capturing client data
import {Link} from 'react-router-dom';
import 'fontsource-roboto';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// export default function SimpleContainer(){
//     const {state}=useContext(Store);//client info made ready as needed/user data?
//     // console.log({state,props});
//     return(
//         <React.Fragment>
//             <CssBaseline/>
//             <Container maxWidth='sm'>
//                 <Typography component='div' style={{backgroundColor:'#pink',height:'100vh' }}/>               
//             </Container>
//         </React.Fragment>
//     )
// };

const LandingPage=props=>{
    const {state}=useContext()//(store) was temporarily removed from the useContext()
    console.log({state,props});

    return(
        <div className='container valign-wrapper' style={{height:'75vh'}}>
            <div className='row'>
                <div className='col s12 center-align'>
                    <Container maxWidth='sm'>
                        <Paper>
                            <Typography>
                                <b>Meet</b> the <b>Dev</b> of your dreams...
                            </Typography>
                        </Paper>                                   
                    </Container>
                    <p className='flow-text grey-text text-darken-1'>
                        The perfect place for to build lasting connections + stellar applications
                    </p>
                    <br/>
                    <div className="col s6">
                        <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                        width: '140px',
                        borderRadius: '3px',
                        letterSpacing: '1.5px',
                        }}>
                        Register
                        </Link>
                    </div>
                    <div>
                    {/* 
                        <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
                        width: '140px',
                        borderRadius: '3px',
                        letterSpacing: '1.5px',
                        }}>
                        Login
                        </Link> */}
                        <Button style={{fontSize:19}}variant='filled'color='secondar'>Login</Button>{/**model after app stack for routing off of button */}
                    </div>
                </div>
            </div>
        </div>
        // <Container maxWidth='sm'>
        //     <Grid item xs={12} spacing={3} justify='flex-start'>
        //         <Paper elevation={3}>
        //             <Typography>
        //                 da Vjncj dissonance
        //             </Typography>
        //         </Paper>
        //         <BottomNavigation value={3}
        //         showLabels>
        //             <BottomNavigationAction label='Recents'icon={<RestoreIcon/>}/>
        //             <BottomNavigationAction label='Favorites'icon={<FavoriteIcon/>}/>{/**this link can lead to a store() that renders the users last 5 likes */}
        //         </BottomNavigation>                
        //     </Grid>
        // </Container>
    )
};
export default LandingPage;