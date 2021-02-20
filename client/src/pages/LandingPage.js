import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'

const useStyles=makeStyles((them)=>({
    root:{
        flexGrow:1,
    },
    paper:{
        padding:ThemeProvider.spacing(2),
        textAlign:'center',
        color:ThemeProvider.palette.text.secondary,
    },
}));

export default function FullWidthGrid(){
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <Grid container direction='row-reverse' justify='space-around' alignitems='baseline' spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' className={classes.large}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}