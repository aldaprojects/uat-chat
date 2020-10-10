import React from 'react';

import { 
    AppBar, 
    Button, 
    IconButton, 
    Toolbar, 
    Typography, 
    useTheme 
} from '@material-ui/core';

import { 
    Group, 
    MoreVert, 
    School 
} from '@material-ui/icons';

import UserProfile from '../../components/profile/Profile';
import MessageBox from '../../components/messagebox/MessageBox';
import Messages from '../../components/messages/Messages';

import './chat.css';

const Chat = () => {

    const theme = useTheme();

    return (
        <div className="container">
            <div className="col1" style={{ backgroundColor: theme.palette.background.paper }} >
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton edge="start" style={{
                            marginRight: 1
                        }} color="inherit" >
                            <School />
                        </IconButton>
                        <Typography variant="h6" style={{
                            flexGrow: 1
                        }}>
                            UAT CHAT
                            </Typography>
                        <IconButton edge="end" color="inherit"> <MoreVert /> </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="leftBox" >
                    <UserProfile />
                </div>
            </div>
            <div className="col2" style={{ backgroundColor: theme.palette.background.paper }} >
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton edge="start" style={{
                            marginRight: 1
                        }} color="inherit" aria-label="menu">
                            <Group />
                        </IconButton>
                        <Typography variant="h6" style={{
                            flexGrow: 1
                        }}>
                            Taller de React
                        </Typography>

                        <Button color="inherit">Cerrar Sesión</Button>
                    </Toolbar>
                </AppBar>
                <div className="rightBox">
                    <Messages />
                    <MessageBox />
                </div>
            </div>
        </div>
    );
}

export default Chat;
