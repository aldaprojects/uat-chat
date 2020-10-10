import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';

import Chat from '../screens/chat/Chat';
import Login from '../screens/login/Login';
import Register from '../screens/register/Register';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={ Login }/>
                <Route path="/chat" component={ Chat }/>
                <Route path="/register" component={ Register }/>
                <Redirect to="/chat" />
            </Switch>
        </Router>
    );
}

export default AppRouter;
