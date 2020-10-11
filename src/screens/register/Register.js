import React from 'react';
import {
    Button,
    TextField,
    Grid,
    Typography,
    useTheme,
    Link
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { postUser } from '../../services/user_service';
import { useForm } from '../../hooks/useForm';
import { isFormValid } from '../../helpers/global_helpers';
import Logo from '../../components/logo/Logo';
import '../login/login.css';

export default function Register({ history }) {
    const theme = useTheme();
    const { enqueueSnackbar } = useSnackbar();

    const [ data, handleInputChange ] = useForm({
        email: {
            value: '',
            valid: true,
            touched: false
        },
        username: {
            value: '',
            valid: true,
            touched: false
        },
        password: {
            value: '',
            valid: true,
            touched: false
        }
    });

    const handleSubmit = e => {
        e.preventDefault();

        if( isFormValid(data) ) {

            const user = {
                email: data.email.value,
                password: data.password.value,
                username: data.username.value
            }

            postUser(user)
                .then(resp => {
                    console.log(resp)
                    
                    if( !resp.ok ) {
                        switch( resp.error_code ) {
                            case 100:
                                enqueueSnackbar('El correo ya está en uso.', { variant: 'error' });
                                break;
                            case 106:
                                enqueueSnackbar('Hubo un problema con el servidor.', { variant: 'error' });
                                break;
                            default:
                                enqueueSnackbar('Error.', { variant: 'error' });
                                break;
                        }
                    } else {
                        enqueueSnackbar('Cuenta creada correctamente. Por favor inicia sesión.', { variant: 'success' });
                        history.push('/login');
                    }
                })
        } else {
            enqueueSnackbar('Introduce correctamente tus credenciales.', { variant: 'error' });
        }
    }

    return (
        <div className="root">
            <div className="login-box">
                <Logo />
                <Typography variant="h5" component="h1" color="primary">
                    Crear Cuenta
                </Typography>
                <form className="form-container" onSubmit={handleSubmit} noValidate style={{ marginTop: 25 }}>
                    <TextField
                        error = { !data.email.valid }
                        helperText = { !data.email.valid ? "correo no valido" : ""}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo electrónico"
                        name="email"
                        autoFocus
                        autoComplete = "email"
                        value= { data.email.value }
                        onChange= {handleInputChange}
                    />
                    <TextField
                        error = { !data.username.valid }
                        helperText = { !data.username.valid ? "Minimo 4 caracteres" : ""}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Nombre de usuario"
                        name="username"
                        autoComplete = "username"
                        value= { data.username.value }
                        onChange= {handleInputChange}
                    />
                    <TextField
                        error = { !data.password.valid }
                        helperText = { !data.password.valid ? "Minimo 7 caracteres" : ""}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        value= { data.password.value }
                        onChange= {handleInputChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{
                            margin: theme.spacing(2, 0 ,1) 
                        }}
                    >
                        CONTINUAR
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/login" >
                                ¿Ya tienes cuenta? Inicia sesión
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}