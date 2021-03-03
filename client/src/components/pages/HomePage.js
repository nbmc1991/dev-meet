import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import API from '../../utils/apiHelper';
import TinderCards from './TinderCards';

const HomePage = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
          <TinderCards />
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              Swipe Right for <span style={{ fontFamily: 'monospace' }}>LIKE</span>, Swipe left for {' '} <span style={{ fontFamily: 'monospace' }}>NOPE</span> 
            </p>
          </h4>

          <Button
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            style={
              {
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }
            }
            onClick={onLogoutClick}>
            Logout
          </Button>
           
        </div>
      </div>
    </div>
  );
};

export default HomePage;