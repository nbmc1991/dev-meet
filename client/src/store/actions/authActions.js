import axios from 'axios';
import setAuthToken from '../../setAuthToken';//jwt-decode comes into play
import jwt_decode from 'jwt-decode';//bit coin mining
import {Get_ERRORS,SET_CURRENT_USER,USER_LOADING} from './types';

export const setCurrentUser=decoded=>{
    return{
        type:SET_CURRENT_USER,
        payload:decoded,
    }
};
export const setUserLoading=()=>{
    return{
        type:USER_LOADING
    }
};
export const setErrors=err=>{
    return{
        type:Get_ERRORS,
        payload:err.response.data,
    }
};
export const registerUser=(userData,history)=>dispatch=>{
    dispatch(setErrors({response:{data:{}}}));
    axios.post('/api/auth/register',userData).then(res=>history.push('/login')).catch(err=>dispatch(setErrors(err)))
};
export const loginUser=(userData,history)=>dispatch=>{
    dispatch(setErrors({response:{data:{}}}));

    axios.post('api/auth/login',userData).then(res=>{
        const {token}=res.data;
    })

    localStorage.setItem('jwtToken',token);
    setAuthToken(Token);
    
    const decoded=jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    history.push('/');
    
}