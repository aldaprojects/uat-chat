import React from 'react';

import logo from '../../assets/logo.png';

import './logo.css';

const Logo = () => {
    return (
        <div className="imgWrap">
            <div className="shadow"> </div>
            <img
                src={logo}
                style={{ height: 95, marginBottom: 15 }}
                alt="uat logo"
                className="logo" />
        </div>
    );
}

export default Logo;
