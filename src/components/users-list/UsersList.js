import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography, useTheme } from '@material-ui/core';
import React from 'react';

import './userslist.css';

const people = [
    {
        on: true,
        name: 'aldairsr1'
    },
    {
        on: true,
        name: 'asdasdasd'
    },
    {
        on: true,
        name: 'fefefefef'
    },
    {
        on: false,
        name: 'fasdasdasd'
    },
    {
        on: false,
        name: 'qweqweqweqwe'
    },
    {
        on: false,
        name: 'asd1231231'
    },
    {
        on: false,
        name: 'fefef23231'
    },
    {
        on: false,
        name: 'ff3f3f5gh423'
    },
    {
        on: false,
        name: 'hjzrhef32'
    },
    {
        on: false,
        name: 'uyty5i453'
    },
    {
        on: false,
        name: 'aldairsr1'
    },
    {
        on: false,
        name: '23423416efgsdg'
    },
    {
        on: false,
        name: '235423'
    },
    {
        on: false,
        name: 'gfgrhrh'
    },
    {
        on: false,
        name: '3h35h35h35h3'
    },
    {
        on: false,
        name: '3h35h23rsdasd'
    },
    {
        on: false,
        name: 'adasdasd'
    },
    {
        on: false,
        name: 'asdasd12'
    },
]

const UsersList = () => {

    const theme = useTheme();

    return (
        <>
            <List disablePadding className="list">
                <ul className="p-0" >
                    <ListSubheader style={{backgroundColor: theme.palette.grey[900]}} >
                            Conectados
                    </ListSubheader>
                    {
                        people.map((item) => (
                            item.on &&
                            <ListItem button className="list-item" >
                                <ListItemAvatar>
                                    <div className="parent">
                                        <Avatar />
                                        <div className="child"></div>
                                    </div>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} />
                            </ListItem>

                        ))
                    }
                </ul>
                <ul className="p-0" >
                    <ListSubheader style={{backgroundColor: theme.palette.grey[900]}} >
                        Desconectados
                    </ListSubheader>
                    {
                        people.map((item) => (
                            !item.on &&
                            <ListItem className="list-item">
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText primary={item.name} />
                            </ListItem>

                        ))
                    }
                </ul>
            </List>
        </>
    );
}

export default UsersList;
