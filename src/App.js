import React from 'react';

import AppRouter from './routes/AppRouter';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { deepOrange, orange } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

const HeroesApp = () => {

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: deepOrange,
            secondary: orange,
            background: {
                paper: '#212121',
                default: '#111111'
            }
        }
    })

    return (
        <MuiThemeProvider theme = { theme }>
            <CssBaseline />
            <AppRouter />
        </MuiThemeProvider>
    );
}

export default HeroesApp;
