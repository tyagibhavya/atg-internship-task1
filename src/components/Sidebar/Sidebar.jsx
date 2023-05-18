import React from 'react'
import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="location-bar">
                <img src={require('../../data/location.png')} alt="" />
                <input type="text" placeholder='Noida, India' />
                <img src={require('../../data/edit.png')} alt="" />
            </div>
            <div className="notification">
                <img src={require('../../data/info.png')} alt="" />
                <p>Your location will help us serve better and extend a personalised experience.</p>
            </div>
            <div className="suggestions">
                <div className="items">
                    <img src={require('../../data/groups/leisure.png')} alt="" />
                    <p>Leisure</p>
                    <button>Follow</button>
                </div>
                <div className="items">
                    <img src={require('../../data/groups/activism.png')} alt="" />
                    <p>Activism</p>
                    <button>Follow</button>
                </div>
                <div className="items">
                    <img src={require('../../data/groups/mba.png')} alt="" />
                    <p>MBA</p>
                    <button>Follow</button>
                </div>
                <div className="items">
                    <img src={require('../../data/groups/philosophy.png')} alt="" />
                    <p>Philosophy</p>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    );
};
