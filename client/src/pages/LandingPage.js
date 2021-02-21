import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles=makeStyles(theme=>({
    root:{
        display:'flex',
        flexWrap:'wrap',
        '&>*':{
            margin:theme.spacing(1),
            width:theme.spacing(16),
            height:theme.spacing(16),
        },
    },
}));

export default function SimplePaper(){
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <Paper variant='outlined' elevation={0}/>
            <Paper/>
            <Paper elevation={3}/>                
        </div>
    )
}