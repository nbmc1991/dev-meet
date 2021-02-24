import React,{useContext} from 'react';
import { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
// import {Store} from '../../store';

const SecureScan=({component:Component,...rest})=>{
    // const {state}=useContext();//fill useContext() with 'Store'
    // return <Route {...rest} render={props=>state.auth.isAuthenticated===true ? (<Component{...props}/>):(<Redirect to='/hompage'/>)}/>
    console.error('this is engineering');
    console.log('alas, purposeful placement')
}
export default SecureScan;