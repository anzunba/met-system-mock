import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Group, Team, Battery} from '../components/Dashboard'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
const Dashboard = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Paper style={{width: '240px'}} className='text-center'><Group /></Paper>
      <Paper style={{width: '100%', backgroundColor: 'blue'}} className='text-center'><Team /></Paper>
    </div>
  )
}

export default Dashboard
