import React,{useContext,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {Store} from './store';
import {setCurrentUser,logoutUser} from './'
import Header from './components/partials/Header';
import LandingPage from './components/pages/LandingPage'
import HomePage from './components/pages/HomePage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import SecureScan from './components/fireWall/SecureScan';
import {Container} from '@material-ui/core';

const App=()=>{
  const {dispatch}=useContext(Store);

  useEffect(()=>{
    if(localStorage.jwtToken){
      const token=localStorage.jwtToken;
      const decoded=jwt_decode(token);
      const currentTime=Date.now()/1000;
    }
  },[dispatch]);

  return(
    <BrowserRouter forceRefresh={true}>
      <Container maxWidth='sm'>
        <Header className='textCentering'/>{/**tentative */}
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Switch>
          <SecureScan exact path='/hompage' component={HomePage}/>
        </Switch>
      </Container>      
    </BrowserRouter>
  );
}
export default App;

{/**path='/:userProfile|the homepage is to have user specific data rendered upon successful SecureScan */}
          {/**consider the kind of page user is to land on after logging in or signing up for account */}