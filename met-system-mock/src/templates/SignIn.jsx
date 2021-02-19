import React, { useState } from 'react'
import logo from '../assets/img/logo.png'
import { TextInput, PrimaryButton } from '../components/UIkit'
import LockIcon from '@material-ui/icons/Lock';
import ErrorIcon from '@material-ui/icons/Error';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const SignIn = () => {
  const [usercode, setUsercode] = useState('ユーザコード');
  return (
    <div className='text-center'>
      <div><img src={logo} alt="" /></div>
      <TextInput
        fullWidth={false}
        label=''
        margin="dense"
        multiline={false}
        required={true}
        rows={1}
        value={usercode}
        type={'text'}
        onChange='' />
      <div><LockIcon fontSize="small" /><a>ユーザCD/パスワードをお忘れの方はこちら</a></div>
      <PrimaryButton label='ログイン' onClick='' />
      <div style={{width: '308px', height: '200px', backgroundColor: '#E4EEEF', margin: '0 auto'}}>
        <ErrorIcon />
        <Divider style={{color: '#666666', height: '3px'}}/>
        <p>お知らせ</p>
        <List component="nav" aria-label="main mailbox folders">   
          <ListItemText primary="Inbox" />        
          <ListItemText primary="Drafts" />
          <ListItemText primary="Drafts" />
          
      </List>
      <div style={{float: 'right'}}><p>過去のお知らせを見る <DoubleArrowIcon /></p></div>
      </div>
    </div>
  )
}

export default SignIn
