import React,{useContext} from 'react';
import { Component } from 'react';//what benefit does it have to make this a class based function?
import {Route,Redirect} from 'react-router-dom';
import {Store} from '../../store';

//may YOU please explain '...rest' syntax & Component
const SecureScan=({component:Component,...rest})=>{
    const {state}=useContext(Store);
        return <Route {...rest} render={props=>state.auth.isAuthenticated===true ? (<Component{...props}/>):(<Redirect to='/hompage'/>)}/>    
}
export default SecureScan;//I can use this function within a <HashRouter>, use to 'getUserConfirmation'... I suppose, I can use this component for authentication?