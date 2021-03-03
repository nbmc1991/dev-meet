import{ useEffect, useRef, useContext } from 'react';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Store } from '../../store';
import { loginUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DevMeet.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
//   body: {
//       color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   }
 
}));

const Login = props => {
    const { state, dispatch } = useContext(Store);
    const errors = state.error;
    const emailRef = useRef();
    const passwordRef = useRef();
  
    useEffect(() => {
      if (state.auth.isAuthenticated)
        props.history.push('/homepage');
    }, [ state, props ]);
  
    const onSubmit = e => {
      e.preventDefault();
  
      dispatch(setErrors({ response: { data: {} } }));
  
      const userData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
  
      loginUser(userData, props.history)(dispatch);
    };
    const classes = useStyles();

  
    return (
        <Container component="main" maxWidth="xs" >
    <CssBaseline />
      <div className={classes.paper}>
        <div className="row" >
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
            </Link>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
            <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link href="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={onSubmit}>
              <div className="input-field col s12">
                <input ref={emailRef} error={errors.incorrect} name="email" type="email"
                       className={classnames('', { invalid: errors.incorrect })} />
  
                <label htmlFor="email">Email</label>
  
                <span className="red-text">{errors.incorrect}</span>
              </div>
  
              <div className="input-field col s12">
                <input ref={passwordRef} error={errors.incorrect} name="password" type="password"
                       className={classnames('', { invalid: errors.incorrect })} />
                <label htmlFor="password">Password</label>
              </div>
  
              <div className="col s12">
                <span className="red-text">{errors.message}</span>
              </div>
  
              <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                <button
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                  }}
                  type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </Container>
    );
  };
  
  export default Login;
  