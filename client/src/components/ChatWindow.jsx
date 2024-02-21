import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Container, Grid } from '@mui/material';
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";



export default function ChatWindow() {

    const date = format(new Date(), 'MMM dd, h:mm a');

    return (
        <>
            <Grid container >
                <Grid item lg={12} xl={12} sm={12}>
                    <CssBaseline />
                    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ ml: '1rem', flexGrow: 1, color: 'black' }}>
                                <strong>Name</strong>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item lg={12} xl={12} sm={12} >
                    <Box sx={{
                        overflowY: 'scroll', width: '41.2rem', height: '80vh', backgroundColor: '#f4f6f8', pt:'2rem',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none'
                    }}>
                        <ChatBox sx={{ Zindex: '5' }}>

                            {Array.from({ length: 10 }, (_, i) => (
                                <React.Fragment key={i}>

                                    <Box sx={{ display: 'flex', width: '100%', ml:'1rem' }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <MessageBox
                                        position='left'
                                        type='text'
                                        text="Hi there !"
                                    />
                                    </Box>
                                    <Typography sx={{ ml: '5rem' }} variant='caption'>{date}</Typography>
                                    
                                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', mr: '1rem' }}>
                                    <MessageBox
                                        position="right"
                                        type="text"
                                        text="Click to join the meeting"
                                    />
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </Box>
                                    <Typography sx={{ ml: '32rem' }} variant='caption'> {date}</Typography>

                                </React.Fragment>
                            ))}



                        </ChatBox>
                    </Box>
                </Grid>
                <Grid item lg={12} xl={12} sm={12}>
                    <Container fixed >
                        {/* <Box sx={{ display: 'flex', flexDirection: 'row', width: '45rem', height: '11vh', backgroundColor: 'blue', position: 'absolute', bottom: '0rem' }}> */}
                        <TextField
                            id="outlined-basic"
                            label="Type a message"
                            variant="outlined"
                            sx={{ width: '38rem', height: '5rem', position: 'absolute', bottom: '1rem' }}
                        />
                        {/* </Box> */}
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

