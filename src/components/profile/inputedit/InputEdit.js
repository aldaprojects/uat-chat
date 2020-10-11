import React, { useState } from 'react';

import { IconButton, ListItem, TextField, Typography } from '@material-ui/core';
import { Done, Edit } from '@material-ui/icons';

import { useForm } from '../../../hooks/useForm';

import { updateUser } from '../../../services/user_service';
import { useSnackbar } from 'notistack';

import { setUpdate } from '../../../services/socket';

const InputEdit = ({ title, value, type }) => {

    const [isEditing, setIsEditing] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const [ data, handleInputChange ] = useForm({
        value
    });

    const user = JSON.parse(localStorage.getItem('user'));

    const handleClick = () => {

        if ( isEditing ) {

            const payload = {
                ...user,
                [ type ]: data.name?.value || data.value,
                connected: true
            }

            updateUser(payload, user._id)
            .then( resp => {
                console.log(resp)
                if(resp.ok) {
                    localStorage.setItem('user', JSON.stringify(payload));
                    setUpdate();
                } else {
                    enqueueSnackbar('Hubo un error al actualizar el dato.', { variant: 'error' });
                }
            });
        }

        setIsEditing( !isEditing );
    }

    return (
        <>
            <Typography className="pt-30" variant="body2" color="primary" >
                { title }
            </Typography>
            <ListItem className="item" >
                <TextField
                    defaultValue={ data.value }
                    disabled={!isEditing}
                    className="text-field"
                    name="name"
                    onChange={handleInputChange}
                />
                <IconButton
                    onClick={handleClick} 
                    type="submit" >
                    {
                        isEditing
                        ? <Done />
                        : <Edit />
                    }
                </IconButton>
            </ListItem>
        </>
    );
}

export default InputEdit;
