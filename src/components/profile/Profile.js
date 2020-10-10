import React from 'react';

import {
    IconButton,
    ListItem,
    TextField,
    Typography,
} from '@material-ui/core';

import { Edit } from '@material-ui/icons';

import './profile.css'

const Profile = () => {

    return (
        <>
            <div className="avatar-container">
                <img className="avatar" src="https://picsum.photos/230" />
            </div>
            <div className="form">
                <Typography variant="body2" color="primary" >
                    Nombre de usuario
                </Typography>
                <ListItem className="item" >
                    <TextField
                        defaultValue="aldairsr1"
                        disabled
                        className="text-field"
                    />
                    <IconButton type="submit" >
                        <Edit />
                    </IconButton>
                </ListItem>

                <Typography className="pt-30" variant="body2" color="primary" >
                    Correo
                </Typography>
                <ListItem className="item" >
                    <TextField
                        defaultValue="a2173330028@alumnos.uat.edu.mx"
                        disabled
                        className="text-field"
                    />
                    <IconButton type="submit" >
                        <Edit />
                    </IconButton>
                </ListItem>

                <Typography className="pt-30" variant="body2" color="primary" >
                    Contraseña
                </Typography>
                <ListItem className="item" >
                    <TextField
                        defaultValue="********"
                        disabled
                        className="text-field"
                    />
                    <IconButton type="submit" >
                        <Edit />
                    </IconButton>
                </ListItem>
            </div>
        </>
    );
}

export default Profile;
