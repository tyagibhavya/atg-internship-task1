import React from 'react'
import { Posts } from '../../Posts/Posts';
import { Sidebar } from '../../Sidebar/Sidebar';
import { Toolbar } from '../../Toolbar/Toolbar';
import './Home.css';

export const Home = () => {
    return (
        <div className='home'>
            <Toolbar />
            <div className="box">
                <Posts />
                <Sidebar />
            </div>
        </div>
    );
};
