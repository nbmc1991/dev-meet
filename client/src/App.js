import React from 'react';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrimarySearchAppBar from './components/AppBar';
import SimplePaper from './pages/LandingPage';

function App() {
  return(
    <div>
      <PrimarySearchAppBar/>
      <SimplePaper/>
    </div>
  );
}

export default App;
