import React, { useState } from 'react';

import { InputBase, Paper, useTheme } from '@material-ui/core';

import './messagebox.css'

import { sendMessage } from '../../services/socket';

const MessageBox = () => {

    const theme = useTheme();
    const user = JSON.parse(localStorage.getItem('user'));

    const [message, setMessage] = useState('');

    const handleInputChange = ({ target }) => {
        setMessage(target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        sendMessage({
            message,
            from: {
                id: user._id,
                username: user.username
            },
            date: Date()
        }, console.log);
        setMessage('');
    }

    return (
        <form className="messageBox" onSubmit={handleSubmit}>
            <Paper style={{
                backgroundColor: theme.palette.grey[800],
                height: "auto",
                borderRadius: 30,
                padding: 10,
            }}>
                <InputBase
                    name="message"
                    autoComplete="off"
                    value={ message }
                    onChange={handleInputChange}
                    placeholder="Escribe un mensaje" style={{
                        width: "100%"
                    }} />
            </Paper>
        </form>
    );
}

export default MessageBox;
