import React,{useContext,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import {Store} from './store';
import Navbar from './components/partials/NavBar';
import LandingPage from './components/pages/LandingPage'
import HomePage from './components/pages/HomePage';
import Login from './components/pages/Login';
// import iScan from './components/iScan/iScan'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'//should provide an extremely finished look & feel

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
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Switch>
          <Route exact path='/register' component={HomePage}/>
        </Switch>
      </div>      
    </Router>
  );
}
export default App;