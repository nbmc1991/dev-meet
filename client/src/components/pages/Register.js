import React,{useContext,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
// import {Store} from '../../store';
// import {registerUser,SetErrors} from '../../store/actions/authActions';
import classnames from 'classnames';
import Container, { Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

const Register=props=>{
    const {state,dispatch}=useContext(Store);
    const errors=state.error;
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const password2Ref=useRef();

    useEffect(()=>{
        if(state.auth.isAuthenticated)
            props.history.push('/homepage');
    },[state,props]);

    const onSubmit=ux=>{
        ux.preventDefault();
        dispatch(setErrors({response:{data:{} }}));

        const userData={
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            password2:password2Ref.current.value,
        };
        registerUser(userData,props.history)(dispatch);
    }
    return(
        <Container>
            <Paper>
                <Typography>
                    da Vjncj Dissonance
                </Typography>
            </Paper>
        </Container>
    )
}