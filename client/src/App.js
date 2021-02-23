import React,{useContext,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SimpleContainer from './components/pages/LandingPage';
import {Store} from './store';
import PrimarySearchAppBar from '@material-ui/core/AppBar'
import Navbar from './components/partials/NavBar'

const App=()=>{
  // const {dispatch}=useContext();//(store) should fill this spot

  useEffect(()=>{
    if(localStorage.jwtToken){
      const token=localStorage.jwtToken;
      // const decoded=jwt_decode(token);
      const currentTime=Date.now()/1000;
    }
  },[]);//'dispatch' fills the array

  return(
    <Router>
      <div className='App'>
        <Navbar/>
        {/* <PrimarySearchAppBar/>tentative */}
        <Route exact path='/' component={SimpleContainer}/>              
        <Switch>
          {/* <PrivateRoute exact path='profilepage' component={ProfilePage}/> */}
        </Switch>
      </div>      
    </Router>
  );
}
export default App;