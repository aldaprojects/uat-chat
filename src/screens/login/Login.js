import React from 'react';

import {
    Button,
    TextField,
    Grid,
    Typography,
    Link,
    useTheme
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import { isFormValid } from '../../helpers/global_helpers';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/user_service';

import './login.css';
import Logo from '../../components/logo/Logo';
import { useSnackbar } from 'notistack';

const Login = ({ history }) => {
    const { enqueueSnackbar } = useSnackbar();

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

    const handleSubmit = e => {
        e.preventDefault();

        console.log(data)

        if( isFormValid(data) ) {

            const user = {
                email: data.email.value,
                password: data.password.value
            }

            login(user)
            .then(resp => {

                console.log(resp)
                
                if( !resp.ok ) {
                    switch( resp.error_code ) {
                        case 109:
                            enqueueSnackbar('Credenciales incorrectas.', { variant: 'error'} );
                            break;
                        case 106:
                            enqueueSnackbar('Hubo un problema con el servidor.', { variant: 'error'} );
                            break;
                        case 107:
                            enqueueSnackbar('No existe una cuenta con esas credenciales.', { variant: 'error'} );
                            break;
                        default:
                            enqueueSnackbar('Error.', { variant: 'error'} );
                            break;
                    }
                } else {
                    localStorage.setItem('user', JSON.stringify({
                        ...resp.body,
                        password: data.password.value,
                        logged: true
                    }));
                    history.replace('/chat');
                }
            })
        } else {
            enqueueSnackbar('Introduce correctamente tus credenciales.', { variant: 'error'} );
        }
    }

    return (
        <div className="root">
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