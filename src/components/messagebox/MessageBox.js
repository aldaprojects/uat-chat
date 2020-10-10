import React from 'react';

import { InputBase, Paper, useTheme } from '@material-ui/core';

import './messagebox.css'

const MessageBox = () => {

    const theme = useTheme();
    // theme.palette.grey[800]
    return (
        <div className="messageBox">
            <Paper style={{
                backgroundColor: theme.palette.grey[800],
                height: "auto",
                borderRadius: 30,
                padding: 10,
            }}>
                <InputBase
                    placeholder="Escribe un mensaje" style={{
                        width: "100%"
                    }} />
            </Paper>
        </div>
    );
}

export default MessageBox;
