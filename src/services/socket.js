import io from 'socket.io-client';

import { URL } from '../env/env';

const socket = io(URL, {
    transports: ['websocket'], 
    upgrade: false
});

const joinRoom = (id, cb) => {
    socket.emit('joinRoom', id, cb);
}

const getUsersOnline = cb => {
    console.log('Obteniendo')
    setUpdate();
    socket.on('users-online', cb);
}

const sendMessage = (message, cb) => {
    socket.emit('new-message', message, cb);
}

const getMessages = cb => {
    socket.on('messages', cb)
}

const setUpdate = () => {
    socket.emit('update');
}

const offUsersList = () => {
    console.log('Removiendo listeners')
    socket.off('users-online');
}

const offMessage = () => {
    socket.off('messages');
}

export {
    joinRoom,
    getUsersOnline,
    sendMessage,
    getMessages,
    setUpdate,
    offUsersList,
    offMessage
}

