import React,{useEffect,useRef,useContext} from 'react';
import {Link} from 'react-dom';
// import {Store} from '../../store';
// import {loginUser,setErrors} from '../../store/actions/authActions';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const Login=props=>{
    // const {state,dispatch}=useContext(Store);
    // const errors=state.error;
    // const emailRef=useRef();
    // const passwordRef=useRef();

    // useEffect(()=>{
    //     if(state.auth.isAuthenticated)
    //         props.history.push('/homepage')
    // },[state,props]);

    // const onSubmit=ux=>{
    //     ux.preventDefault()
    //     dispatch(setErrors({response:{data:{}}}));
    //     const userData={
    //         email:emailRef.current.value,
    //         password:passwordRef.current.value,
    //     };
    //     loginUser(userData,props.history)(dispatch);
    // }
    return(
        <Container>            
            <Paper>
                <Typography>
                    muscular distrophy
                </Typography>
            </Paper>
        </Container>
    )
}
export default Login;