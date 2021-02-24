import React,{useContext} from 'react';
import { Component } from 'react';
import {Rout,Redirect} from 'react-router-dom';
import {Store} from '../../store';

const iScan=({component:Component,...rest})=>{
    const {state}=useContext(Store);
    return <Route {...rest} render={props=>state.auth.isAuthenticated===true ? (<Component{...props}/>):(<Redirect to='/hompage'/>)}/>
}
export default iScan;