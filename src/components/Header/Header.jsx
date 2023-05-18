import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <img
                className='header-img'
                src={require('../../data/header.png')}
                alt="search-icon"
            />
            <div className="header-titles">
                <span className="heading1">Computer Engineering</span>
                <span className="heading2">142,765 Computer Engineers follow this</span>
            </div>
        </div>
    );
};
