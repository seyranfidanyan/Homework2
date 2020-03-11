import React from 'react';
import './Logo.css';

const Logo = ({ lable, iconUrl, url }) => {

    return (
        <div className='Logo'>
            <label>{lable}</label>
            <a href={url}>
                <img src={iconUrl}></img>
            </a>
        </div>
    );
}

export default Logo;