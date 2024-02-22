import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SegmentIcon from '@mui/icons-material/Segment';

export default function ConversationList() {


    return (
        <>
        <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
        <SegmentIcon sx={{color: 'grey' }}/>
          <Typography variant="h6" component="div" sx={{ml:'1rem', flexGrow: 1 , color: 'black' }}>
            <strong>Conversations</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?eai=AXFFhFEaW0o3hmMXoXSMKLS97lHPFXYYfDvJoi6ztD-FjB-eMR9jXVsdw4hSAJwqlU3hNRMhUUFm&psid=7220773248043036&width=1024&ext=1711185609&hash=AfpvFH1HG_hzrDW2c0aLIXVoA6k5giz5uJDvlKyuRPXkkQ" />
                </ListItemAvatar>
                <ListItemText
                    primary="Keshav Sharma"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — Hey , I would like to know about ..."}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />

        </List>
    </>);
}