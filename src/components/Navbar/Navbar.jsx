import React from 'react';
import './Navbar.css';

export const Navbar = ({ handleLoginClick, isLogin }) => {
    const handleClick = () => {
        handleLoginClick();
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={require('../../data/logo.png')} alt="logo" />
            </div>
            <div className="search-bar">
                <img src={require('../../data/searchicon.png')} alt="search-icon" />
                <input type="text" placeholder='Search for your favurite groups in ATG'></input>
            </div>
            {(!isLogin) ? (
                <div className="signin">
                    <p1>Create account.</p1>
                    <p2>It's free</p2>
                    <img onClick={handleClick} src={require('../../data/dropmenu.png')} alt="drop-menu" />
                </div>
            ) : (
                <div className='user'>
                    <img src={require(`../../data/Posts/Sarah West.png`)} alt="" />
                    <p>Demo User</p>
                    <img onClick={handleClick} src={require('../../data/dropmenu.png')} alt="drop-menu" />
                </div>
            )}
            <div className="mobile">
                <img onClick={handleClick} src={require('../../data/Mobile/signup.png')} alt="" />
            </div>
        </div>
    );
}
