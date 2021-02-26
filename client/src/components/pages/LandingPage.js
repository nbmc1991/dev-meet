import { Container, Typography } from '@material-ui/core';
import React,{useContext} from 'react';
// import {Store} from '../../store';//this will be filled with functions for capturing client data
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

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
    // const {state}=useContext()//(store) was temporarily removed from the useContext()
    // console.log({state,props});

    return(
        // <div className='container valign-wrapper' style={{height:'75vh'}}>
        //     <div className='row'>
        //         <div className='col s12 center-align'>
        //             <h4>
        //                 <b>Meet</b> the <b>Dev</b> of your dreams... 
        //             </h4>
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
        //                 <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
        //                 width: '140px',
        //                 borderRadius: '3px',
        //                 letterSpacing: '1.5px',
        //                 }}>
        //                 Login
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <Container lg>
            <Grid display='column' justify='flex-end' alignItems='center'>
                <Typography>lemme see</Typography>
            </Grid>
        </Container>
    )
};
export default LandingPage;