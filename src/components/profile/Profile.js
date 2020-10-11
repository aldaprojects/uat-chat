import React from 'react';

import './profile.css';
import InputEdit from './inputedit/InputEdit';

const Profile = ({ user }) => {

    const { username, email, password } = user;
    
    return (
        <>
            <div className="avatar-container">
                <img className="avatar" src="https://picsum.photos/230" alt="avatar" />
            </div>
            <div className="form">
                <InputEdit 
                    title="Nombre de usuario"
                    value = { username }
                    type = "username"
                />
                <InputEdit 
                    title="Correo"
                    value = { email }
                    type = "email"
                />
                <InputEdit 
                    title="Contraseña"
                    value = { password }
                    type = "password"
                />
            </div>
        </>
    );
}

export default Profile;
