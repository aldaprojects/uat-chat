import React, { useState } from 'react';

import {
    Button,
    TextField,
    Grid,
    Typography,
    Link,
    Snackbar, useTheme
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import { isFormValid } from '../../helpers/global_helpers';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/user_service';

import './login.css';
import Logo from '../../components/logo/Logo';

const Login = () => {

    const theme = useTheme();
    
    const [ data, handleInputChange ] = useForm({
        email: {
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
    
    const [state, setState] = useState({
        open: false,
        message: ''
    });

    const { open, message } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if( isFormValid(data) ) {

            const user = {
                email: data.email.value,
                username: 'asdasd',
                password: data.password.value,
            }

            login(user)
            .then(resp => {
                console.log(resp)
                
                if( !resp.ok ) {
                    switch( resp.error_code ) {
                        case 109:
                            setState({ open: true, message: 'Credenciales incorrectas.' });
                            break;
                        case 106:
                            setState({ open: true, message: 'Hubo un problema con el servidor.' });
                            break;
                        case 107:
                            setState({ open: true, message: 'No existe una cuenta con esas credenciales.' });
                            break;
                        default:
                            setState({ open: true, message: 'Error.' });
                            break;
                    }
                } else {
                    // TODO: login
                }
            })
        } else {
            setState({ open: true, message: 'Introduce correctamente tus credenciales.' });
        }
    }

    return (
        <div className="root">
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                onClose={handleClose}
                autoHideDuration={4000}
                message={ message }
                variant="success"
            />
            <div className="login-box">
                <Logo />
                <Typography variant="h5" color="primary">
                    Iniciar Sesión
                </Typography>
                <form className="form-container" noValidate onSubmit = { handleSubmit } >
                    <TextField
                        error = { !data.email.valid }
                        helperText = { !data.email.valid ? "correo no valido" : ""}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={data.email.value}
                        onChange={handleInputChange}
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
                        id="password"
                        autoComplete="current-password"
                        value={data.password.value}
                        onChange={handleInputChange}
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
                    <Grid container justify="flex-end" >
                        <Grid item>
                            <Link component={RouterLink} to="/register" >
                                ¿No tienes cuenta? Crea una
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default Login;