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
import {Store } from '../../store';
import {registerUser, setErrors} from '../../store/actions/authActions';
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
  btn: {
      color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
 
}));

const Register = props => {
    const { state, dispatch } = useContext(Store);
    const errors = state.error;
    const nameRef = useRef();
    const languageRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    // const password2Ref = useRef();
  
    useEffect(() => {
      if (state.auth.isAuthenticated)
        props.history.push('/homepage');
    }, [ state, props ]);
  
    const onSubmit = e => {
      e.preventDefault();
  
      dispatch(setErrors({ response: { data: {} } }));
  
      const userData = {
        name: nameRef.current.value,
        language: languageRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        // password2: password2Ref.current.value,
      };
  
      registerUser(userData, props.history)(dispatch);
    };

// export default function Register() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" >
    <CssBaseline />
     <div className={classes.paper}>
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            {/* <i className="material-icons left">keyboard_backspace</i> Back to home */}
          </Link>
          <div className="col s12" >
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link href="/Login">Login</Link>
            </p>
          </div>
          <form noValidate className={classes.form} onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input ref={nameRef} error={errors.name} name="name" type="text"
                     className={classnames('', { invalid: errors.name })} />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input ref={languageRef} error={errors.language} name="language" type="language"
                     className={classnames('', { invalid: errors.language })} />
              <label htmlFor="language">Favorite Coding Language</label>
              <span className="red-text">{errors.language}</span>
            </div>     
            <div className="input-field col s12">
              <input ref={emailRef} error={errors.email} name="email" type="email"
                     className={classnames('', { invalid: errors.email })} />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input ref={passwordRef} error={errors.password} name="password" type="password"
                     className={classnames('', { invalid: errors.password })} />
              <label htmlFor="password">Password</label>
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
            </div>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
            <button
                  className={"btn btn-large waves-effect waves-light hoverable blue accent-3"}
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                  }}
                  type="submit">
                  Register
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Container>
  );
}
export default Register;
