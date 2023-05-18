import React from 'react'
import './Posts.css';
import { Post } from './Post/Post';

export const Posts = () => {
    return (
        <div className="posts">
            <Post
                header={"Sarthak Kamra header"}
                type={"✍️ Article"}
                heading={"What if famous brands had regular fonts? Meet RegulaBrands!"}
                content={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
                name={"Sarthak Kamra"}
            />
            <Post
                header={"Sarah West header"}
                type={"🔬️ Education"}
                heading={"Tax Benefits for Investment under National Pension Scheme launched by Government"}
                content={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
                name={"Sarah West"}
            />
            <Post
                header={"Ronal Jones header"}
                type={"🗓️ Meetup"}
                heading={"Finance & Investment Elite Social Mixer @Lujiazui"}
                content={"Visit Website"}
                name={"Ronal Jones"}
            />
        </div>
    );
};
