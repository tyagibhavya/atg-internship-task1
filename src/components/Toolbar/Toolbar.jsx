import React from 'react'
import './Toolbar.css';

export const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="options">
                <p>All Posts(32)</p>
            </div>
            <div className="options">
                <p>Article</p>
            </div>
            <div className="options">
                <p>Event</p>
            </div>
            <div className="options">
                <p>Education</p>
            </div>
            <div className="options">
                <p>Job</p>
            </div>
            <div className="mobile">
                <div className="tool-dd" style={{ float: "right" }}>
                    <button className="dropbtn"><p>All Posts(32)</p></button>
                    <div className="tool-dd-content">
                        <a href="#">Edit</a>
                        <a href="#">Report</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
