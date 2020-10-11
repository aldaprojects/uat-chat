import React, { useEffect, useRef, useState } from 'react';

import { 
    List, 
    Paper, 
    Typography, 
    useTheme 
} from '@material-ui/core';

import './messages.css';

import { getMessages } from '../../services/socket';

const Messages = () => {

    const theme = useTheme();

    const chatRef = useRef();
    const [messages, setMessages] = useState([]);

    const { _id: user_id } = JSON.parse(localStorage.getItem('user'));
    
    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [ messages ])

    getMessages(mgs => {
        setMessages(mgs);
    });


    return (
        <List
            ref={ chatRef }
            className="chat-box">
            {
                messages.map(({ _id: id, message, from }) => (
                    <div 
                    key = { id }
                    style={{
                        display: "flex",
                        justifyContent: user_id === from.id ? "flex-end" : "flex-start"
                    }}>
                        <Paper elevation={3} style={{
                            maxWidth: 500,
                            minWidth: 100,
                            backgroundColor: user_id === from.id ? theme.palette.secondary.dark : theme.palette.grey[800],
                            padding: "10px 10px 0",
                            marginBottom: 10,
                            borderRadius: 15,
                        }}>
                            {
                                from.id !== user_id
                                && 
                                <Typography variant="body1" color="primary">
                                    { from.username }
                                </Typography>
                            }
                            <Typography variant="body2" gutterBottom>
                                { message }
                            </Typography>
                        </Paper>
                    </div>
                ))}
        </List>
    );
}

export default Messages;
