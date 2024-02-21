import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import RichpanelIcon from './RichpanelIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

export default function Iconbar() {

    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    const getIconStyle = (iconName) => {
        return selectedIcon === iconName ? { color: '#01509a' } : { color: 'white' };
    };
    const getButtonStyle = (iconName) => {
        return selectedIcon === iconName ? { backgroundColor: 'white' } : { backgroundColor: '#01509a' };
    };



    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '4rem',
                backgroundColor: '#01509a',
                padding: 0,

            }}>
                <CssBaseline />
                <RichpanelIcon />

                <List>
                    <Box sx={{ height:'3rem',pt: 0.5 }} onClick={() => handleClick('inbox')} style={getButtonStyle('inbox')}> 
                        <ListItemButton >
                            <ListItemIcon style={getIconStyle('inbox')}>
                                <InboxIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </Box>
                    <Divider />
                    <Box sx={{ height:'3rem',pt: 0.5 }} onClick={() => handleClick('equalizer')} style={getButtonStyle('equalizer')}> 
                        <ListItemButton >
                            <ListItemIcon style={getIconStyle('equalizer')}>
                                <EqualizerIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </Box>
                    <Divider />
                    <Box sx={{ height:'3rem',pt: 0.5 }} onClick={() => handleClick('people')} style={getButtonStyle('people')}>
                        <ListItemButton >
                            <ListItemIcon style={getIconStyle('people')}>
                                <PeopleIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </Box>
                </List>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{position: 'absolute' ,bottom:'2rem' , left: '0.7rem' }}/>
            </Box>
        </>
    );
}