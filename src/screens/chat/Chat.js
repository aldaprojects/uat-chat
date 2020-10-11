import React, { useEffect, useLayoutEffect, useState } from 'react';

import { 
    AppBar, 
    Button, 
    IconButton, 
    Toolbar, 
    Typography, 
    useTheme 
} from '@material-ui/core';

import { 
    AccountCircle,
    ArrowBack,
    Group, 
    School 
} from '@material-ui/icons';

import UserProfile from '../../components/profile/Profile';
import MessageBox from '../../components/messagebox/MessageBox';
import Messages from '../../components/messages/Messages';

import './chat.css';
import UsersList from '../../components/users-list/UsersList';

import { joinRoom, offMessage } from '../../services/socket';

const Chat = ({ history }) => {

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        joinRoom( user._id, (resp) => {
            console.log(resp)
        });
        return () => {
            offMessage();
        }

    }, [ user._id ])

    const [ showUsersList, setshowUsersList ] = useState(true);

    const handleClick = () => {
        setshowUsersList( !showUsersList );
    }
    
    const theme = useTheme();

    const handleLogout = () => {
        localStorage.setItem('user', JSON.stringify({
            logged: false
        }));
        history.replace('/login');
    }

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
                        <IconButton 
                            edge="end" 
                            color="inherit"
                            onClick={handleClick}
                        > 
                            {
                                showUsersList
                                ? <AccountCircle /> 
                                : <ArrowBack />
                            }
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="leftBox" >
                    {
                        showUsersList
                        ? <UsersList />
                        : <UserProfile user = { user } /> 
                    }
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

                        <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
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
