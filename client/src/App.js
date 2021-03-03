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
<<<<<<< HEAD
// import logo from './logo.svg'
=======
// import TinderCards from 'react-tinder-card';
// import TinderCards from './components/pages/TinderCards';
>>>>>>> 8d6e9e81877ceef97d831f0780be2adae3aef4a8

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
      <Header className='textCentering'/>
      <Container maxWidth='lg'>
        <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
          <SecureScan exact path='/homepage' component={HomePage}/>

        </Switch>
      </Container>
      {/**footer goes here */}    
    </BrowserRouter>
  );
}
export default App;

{/**path='/:userProfile|the homepage is to have user specific data rendered upon successful SecureScan */}
{/**consider the kind of page user is to land on after logging in or signing up for account */}