import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';

import Chat from '../screens/chat/Chat';
import Login from '../screens/login/Login';
import Register from '../screens/register/Register';

const isLogged = () => {
    const { logged } = JSON.parse(localStorage.getItem('user')) || { logged: false };
    return logged;
}


const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route path="/chat" component={(props) => (
                    isLogged()
                        ? <Chat { ...props } />
                        : <Redirect to="/login" />
                )} />
                <Route path="/login" component={(props) => (
                    !isLogged()
                        ? <Login { ...props } />
                        : <Redirect to="/chat" />
                )} />
                <Route path="/register" component={(props) => (
                    !isLogged()
                        ? <Register { ...props } />
                        : <Redirect to="/chat" />
                )} />
                <Redirect to="/chat" />
            </Switch>
        </Router>
    );
}

export default AppRouter;
