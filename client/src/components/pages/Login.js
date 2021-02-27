import React, { useEffect, useRef, useContext, Typography } from 'react';
import { Link } from 'react-dom';
// import {Store} from '../../store';
// import {loginUser,setErrors} from '../../store/actions/authActions';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';//imported for form field ux/ui
import TextField from '@material-ui/core/TextField';//imported for form field ux/ui
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const Login=props=>{
const {state,dispatch}=useContext(Store);
const errors=state.error;
const emailRef=useRef();
const passwordRef=useRef();

useEffect(()=>{
    if(state.auth.isAuthenticated)
        props.history.push('/homepage')
},[state,props]);

const onSubmit=ux=>{
    ux.preventDefault()
    dispatch(setErrors({response:{data:{}}}));
    const userData={
        email:emailRef.current.value,
        password:passwordRef.current.value,
    };
    loginUser(userData,props.history)(dispatch);
}
//     return(
//         <Container>
//              <TextField/>
//         </Container>
//     )
// }
// export default Login;
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));Lo

// export default function Login() {
//     const classes = useStyles();

//     return (
//         <form noValidate autoComplete="off">
//             <Grid
//                 container
//                 direction="column"
//                 justify="center"
//                 alignItems="center"
//             >
//                 <Grid item xs={6}>
//                     <Paper>why is this proving so difficult</Paper>
//                 </Grid>
//             </Grid>
//         </form>
//     );
// }