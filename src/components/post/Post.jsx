import React, { useState, useEffect } from 'react';
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    const [user, setUser] = useState({});
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };


    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/id/${post.userId}`);
            setUser(res.data);
        };

        fetchUser();
    }, [post.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user?.username}`}>
                            <img src={user?.profilePicture ? PF + user?.profilePicture : PF + "person/noAvatar.png"} alt="Profile" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">{user?.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" onClick={likeHandler} className="postLikeIcon" />
                        <img src={`${PF}heart.png`} alt="" onClick={likeHandler} className="postLikeIcon" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
