import React from 'react'
import './Post.css';

export const Post = ({ header, type, heading, content, name }) => {
    return (
        <div className="post">
            <img src={require(`../../../data/Posts/${header}.png`)} alt="" />
            <div className="tag">
                <p>{type}</p>
            </div>
            <div className="heading">
                <p>{heading}</p>
                <div className="dropdown" style={{ float: "right" }}>
                    <button className="dropbtn"><img src={require('../../../data/dot.png')} alt="" /></button>
                    <div className="dropdown-content">
                        <a href="#">Edit</a>
                        <a href="#">Report</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
            </div>

            <h2>{content}</h2>
            <div className="extra">
                <img src={require(`../../../data/Posts/${name}.png`)} alt="" />
                <p>{name}</p>
                <div className="views"><img src={require('../../../data/Posts/Group.png')} alt="" /></div>
                <div className="share">
                    <button>
                        <img src={require('../../../data/Posts/share.png')} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};
