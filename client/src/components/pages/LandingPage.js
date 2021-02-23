import React,{useContext} from 'react';
import {Store} from '../../store';//this will be filled with functions for capturing client data
import {Link} from 'react-router-dom';
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
    const {state}=useContext(store);
    console.log({state,props});

    return(
        <div className='container valign-wrapper' style={{height:'75vh'}}>
            <div>
                <div>
                    <h4>
                        
                    </h4>
                </div>
            </div>

        </div>
    )
}