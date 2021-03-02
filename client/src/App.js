import React,{useContext,useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {Store} from './store';
import {setCurrentUser,logoutUser} from './store/actions/authActions'
import HeaderLP from './components/partials/HeaderLP';
import LandingPage from './components/pages/LandingPage'
import HomePage from './components/pages/HomePage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import SecureScan from './components/fireWall/SecureScan';
import {Container,Grid} from '@material-ui/core';
import setAuthToken from './utils/setAuthToken';
// import logo from './logo.svg'

// 
const App=()=>{
  const {dispatch}=useContext(Store);

  useEffect(()=>{
    if(localStorage.jwtToken){
      const token=localStorage.jwtToken;
      const decoded=jwt_decode(token);
      const currentTime=Date.now()/1000;

      setAuthToken(token);
      dispatch(setCurrentUser(decoded));

      if(decoded.exp<currentTime){
        dispatch(logoutUser());
        window.location.href='./login';{/**provide an unexpected outcome */}
      }
    }
  },[dispatch]);

  return(
    <BrowserRouter>
      <HeaderLP/>
      <Route exact path='/' component={LandingPage}/>        
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Switch>
        <SecureScan exact path='/hompage' component={HomePage}/>
      </Switch>    
    </BrowserRouter>
  );
}
export default App;

{/**path='/:userProfile|the homepage is to have user specific data rendered upon successful SecureScan */}
{/**consider the kind of page user is to land on after logging in or signing up for account */}