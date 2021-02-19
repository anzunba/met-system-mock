import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import fire from '../../assets/img/fire.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    // <div className={classes.root}>
    //     <div><img src={fire} alt=""/></div>
    //     <div><p>xx塗装工業株式会社</p>
    //     <p>吉村 友明</p></div>
    //     <div style={{width: '150px'}}><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /></div>

      
    // </div>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <img src={fire} alt=""/>
        </ListItemAvatar>
        <ListItemText
                        align='center'

          primary="xx塗装工業株式会社"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
                color="textPrimary"
              >吉村 友明
              </Typography>
              
              <div style={{width: '150px'}}><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /><Chip label="ラベル" /></div>
      
            </React.Fragment>
          }
        />
        
      </ListItem></List>
  );
}
