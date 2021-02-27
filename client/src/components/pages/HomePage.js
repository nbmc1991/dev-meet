import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import {Store} from '../../store';
import {logoutUser} from '../../store/actions/authActions'
import API from '../../utils/apiHelper';
//will need to import browser/user data
//will import components for conditional rendering
//will import from internal API


const HomePage=props=>{
    console.log('da vjncj dissonance');
    const {state,dispatch}=useContext(Store);
    const user=state.auth.user;

    useEffect(()=>{
        if(!state.auth.isAuthenticated)
            props.history.push('/login');
        API.getUser()
        .then(res=>console.log({res}))
        .catch(err=>console.log({err}))
    },[state,props]);

    const onLogoutClick=e=>{
        e.preventDefault();
        logoutUser(props.history)(dispatch);
    };
    return(
    //     <div className="container valign-wrapper" style={{ height: '75vh' }}>
    //   <div className="row">
    //     <div className="col s12 center-align">
    //       <h4>
    //         <b>Hey there,</b>{/* {user.name.split(' ')[0]} */}
    //         <p className="flow-text grey-text text-darken-1">
    //           HomePage wireframe:{' '} <span style={{ fontFamily: 'monospace' }}>🖼</span> a perfect picture...
    //         </p>
    //       </h4>

    //       <button
    //         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //         style={
    //           {
    //             width: '150px',
    //             borderRadius: '3px',
    //             letterSpacing: '1.5px',
    //             marginTop: '1rem',
    //           }
    //         }>
    //         {/*onClick={onLogoutClick}*/}
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // )
    <Container maxWidth='sm'>      
      <Paper>
        I luv this shit
        <br/>
        <Button variant='outlined' >
          'in the click of a bttn'
        </Button>
      </Paper>      
    </Container>      
  )  
}
export default HomePage;