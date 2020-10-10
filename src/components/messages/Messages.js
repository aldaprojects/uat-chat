import React from 'react';

import { 
    List, 
    Paper, 
    Typography, 
    useTheme 
} from '@material-ui/core';

import './messages.css';

const messages = [
    {
        id: 1,
        primary: 'Persona 1',
        secondary: "probando",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Persona 2',
        secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 2,
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Discussion',
        secondary: `que onda, estoy probando la longitud `,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 8,
        primary: 'Summer BBQ',
        secondary: `hey yo tambien estoy probando eso, pero no se quiero ver si todo sale bien`
    },
    {
        id: 2,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 2,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 11,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 11,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 11,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];

const Messages = () => {

    const theme = useTheme();

    return (
        <List
            className="chat-box">
            {
                messages.map(({ id, primary, secondary, person }) => (
                    <div style={{
                        display: "flex",
                        justifyContent: id == 2 ? "flex-end" : "flex-start"
                    }}>
                        <Paper elevation={3} style={{
                            maxWidth: 500,
                            minWidth: 100,
                            backgroundColor: id == 2 ? theme.palette.secondary.dark : theme.palette.grey[800],
                            padding: "10px 10px 0",
                            marginBottom: 10,
                            borderRadius: 15,
                        }}>
                            {
                                id !== 2 
                                && 
                                <Typography variant="body1" color="primary">
                                    { primary }
                                </Typography>
                            }
                            <Typography variant="body2" gutterBottom>
                                {secondary}
                            </Typography>
                        </Paper>
                    </div>
                ))}
        </List>
    );
}

export default Messages;
