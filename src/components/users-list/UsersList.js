import React, { useEffect, useState } from 'react';

import { 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    ListSubheader,
    useTheme 
} from '@material-ui/core';

import './userslist.css';

import { getUsersOnline, offUsersList } from '../../services/socket';

const UsersList = () => {

    const theme = useTheme();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersOnline(users => {
            setUsers(users);
        });
        return () => {
            offUsersList();
        }
    }, []);


    return (
        <>
            <List disablePadding className="list">
                <ul className="p-0" >
                    <ListSubheader style={{backgroundColor: theme.palette.grey[900]}} >
                            Conectados
                    </ListSubheader>
                    {
                        users.map((item) => (
                            item.connected &&
                            <ListItem
                                key={ item._id } 
                                button className="list-item" >
                                <ListItemAvatar>
                                    <div className="parent">
                                        <Avatar />
                                        <div className="child"></div>
                                    </div>
                                </ListItemAvatar>
                                <ListItemText primary={item.username} />
                            </ListItem>

                        ))
                    }
                </ul>
                <ul className="p-0" >
                    <ListSubheader style={{backgroundColor: theme.palette.grey[900]}} >
                        Desconectados
                    </ListSubheader>
                    {
                        users.map((item) => (
                            !item.connected &&
                            <ListItem
                                key={ item._id } 
                                className="list-item">
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary={item.username} />
                            </ListItem>

                        ))
                    }
                </ul>
            </List>
        </>
    );
}

export default UsersList;
