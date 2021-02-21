import React from 'react';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrimarySearchAppBar from './components/AppBar';

function App() {
  return(
    <div>
      <LandingPage/>
      <PrimarySearchAppBar/>
    </div>
  );
}

export default App;
