import React from 'react';
import {Link} from 'react-router-dom';
//api calls to material-ui library

const Navbar=props=>{
    return(
        <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link to="/" className="col s5 brand-logo center black-text" style={{ fontFamily: 'monospace' }}>
            <i className="material-icons">code</i> DevMeet
          </Link>
        </div>
      </nav>
    </div>
    )
}
export default Navbar;