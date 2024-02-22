import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Container, Grid } from '@mui/material';
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import TextField from '@mui/material/TextField';
import { format, set } from 'date-fns';
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import ChatData from '../data/ChatData';

function messageComponentleft({ message }) {
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%', ml: '1rem' }}>
                                        <Avatar alt="K" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?eai=AXFFhFEaW0o3hmMXoXSMKLS97lHPFXYYfDvJoi6ztD-FjB-eMR9jXVsdw4hSAJwqlU3hNRMhUUFm&psid=7220773248043036&width=1024&ext=1711185609&hash=AfpvFH1HG_hzrDW2c0aLIXVoA6k5giz5uJDvlKyuRPXkkQ" />
                                        <MessageBox
                                            position='left'
                                            type='text'
                                            text={message}
                                        />
                                    </Box>
        </>
    )
}

function messageComponentright({ message }) {
    return (
        <>
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', mr: '1rem' }}>
                                        <MessageBox
                                            position="right"
                                            type="text"
                                            text={message}
                                        />
                                        <Avatar alt="A" src="/logo.png" />
                                    </Box>
        </>
    )}


export default function ChatWindow() {

    const [chatData, setChatData] = useState([]);
    const { getChatData } = ChatData();
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [senderResponse, setSenderResponse] = useState([]);

    useEffect(() => {
        const loadAndSetChatData = async () => {
            try {
                const response = await getChatData();
                const messages = response.conversations.data[0].messages.data;
                setName(response.conversations.data[0].participants.data[0].name);
                //console.log(messages);
                if (messages && messages.length > chatData.length) {
                    setChatData(messages.reverse());
                }
            } catch (error) {
                console.log(error);
            }
        };

        loadAndSetChatData(); // Initial load

        const intervalId = setInterval(loadAndSetChatData, 3000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [getChatData, chatData]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Handle "Enter" key press here
            // For now, let's just log the input value
            console.log('Enter pressed. Input value:', inputValue);
            senderResponse.push(inputValue);
            e.target.value = '';
            
           // render the messageComponentright with the inputValue
            setSenderResponse(senderResponse);
        }
    };

    let prevLength = chatData.length-1;
    console.log(chatData.length, prevLength);

    const date = format(new Date(), 'MMM dd, h:mm a');

    //const latestMessage = chatData[0].message || '';
    return (
        <>
            <Grid container >
                <Grid item lg={12} xl={12} sm={12}>
                    <CssBaseline />
                    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ ml: '1rem', flexGrow: 1, color: 'black' }}>
                                <strong>{name}</strong>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item lg={12} xl={12} sm={12} >
                    <Box sx={{
                        overflowY: 'scroll', width: '41.2rem', height: '80vh', backgroundColor: '#f4f6f8', pt: '2rem',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none'
                    }}>
                        <ChatBox sx={{ Zindex: '5' }}>


                            {chatData && chatData.map((message , index) => (
                                index > 12 && (
                                <React.Fragment key={index}>
                                    {React.createElement(messageComponentleft, { message: chatData[index].message })}
                                    {prevLength = chatData.length}
                                    <Typography sx={{ ml: '5rem' }} variant='caption'>{date}</Typography>


                                </React.Fragment>
                                )
                            ))} 
                            {senderResponse && senderResponse.map((message, index) => (
                            <React.Fragment key={index}>
                            {React.createElement(messageComponentright, { message: {message} })}
                            <Typography sx={{ ml: '32rem' }} variant='caption'> {date}</Typography>
                            </React.Fragment>
                            
                            ))
                            }
                            
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
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                        />
                        {/* </Box> */}
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

