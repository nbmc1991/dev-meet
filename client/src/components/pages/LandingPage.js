// import {Typography,
//         Grid,
//         Button,
//         Paper,
//         BottomNavigationAction,
//         Container} from '@material-ui/core';
// import {Restore,Favorite,LocationOn} from '@material-ui/icons';
// import React,{useContext} from 'react';
// import {Store} from '../../store';//this will be filled with functions for capturing client data
// import {Link} from 'react-router-dom';
// import 'fontsource-roboto';
// import {black,blue,white,pink} from '@material-ui/core/colors';
// // import logo from 'logo.svg'


// const LandingPage=props=>{
//     // const {state}=useContext(Store)//(store) was temporarily removed from the useContext()
//     // console.log({state,props});

//     return(
//         <div>{/**a target for styling maybe? */}           
//             <Container maxWidth='sm' style={{
//                 position:'relative',
//                 height:'80vh',
//                 display:'flex',
//                 alignItems:'center',
//                 justifyContent:'center',
//                 flexDirection:'column'
//             }}>
//                 <Grid container>
//                     {/* <Grid item xs={12} direction='row'justify='flex-start'alignItems='flex-end'> */}
//                         <Typography variant='h5'><b>Meet</b> the <b>Dev</b> of your dreams...</Typography>
//                     {/* </Grid> */}
//                     {/* <Grid item xs={12} direction='row'justify='center'alignItems='center'> */}
//                         <Link to='/register'><Button variant='contained'color='primary' >click bait</Button></Link>
//                     {/* </Grid> */}
//                 </Grid>
//             </Container>
//             <Container maxWidth='sm' style={{height:'20vh'}}>
//                 <Grid container>
//                     <Grid item sm={12} display='row'justifyContent='center'alignItems='center'>
//                         <Paper variant='outlined'elevation={3} square>Paper</Paper>                        
//                         <Paper variant='outlined'elevation={3} square>Paper</Paper>                        
//                         <Paper variant='outlined'elevation={3} square>Paper</Paper>                        
//                     </Grid>
//                 </Grid>
//             </Container>
//                     {/* <Paper variant='outlined'elevation={3} square/>
//                     <Paper variant='outlined'elevation={3} square/> */}
//         </div>  
//     )
// };
// export default LandingPage;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            <b>Meet</b> the <b>Dev</b> of your dreams...
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Meet the Dev of your dreams...
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              You're in the perfect place to build lasting connections & stellar applications
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Signup
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          something will go here
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}