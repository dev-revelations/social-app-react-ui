import React, { useState, useEffect } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username ?
                await axios.get(`/posts/profile/${username}`) :
                await axios.get("posts/timeline/60cab0d5bfa12a1280be3a66");
            setPosts(res.data);
        };

        fetchPosts();

    }, [username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
}