import React,{useEffect,useRef,useContext} from 'react';
import {Link} from 'react-dom';
import {Store} from '../../store';
import {loginUser,setErrors} from '../../store/actions/authActions';
import classnames from 'classnames';

const Login=props=>{
    const {state,dispatch}=useContext(Store);
    const errors=state.error;
    const emailRef=useRef();
    const passwordRef=useRef();

    useEffect(()=>{
        if(state.auth.isAuthenticated)
            props.history.push('/homepage')
    })
}
export default Login;