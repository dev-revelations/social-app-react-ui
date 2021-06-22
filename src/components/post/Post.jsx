import React from 'react';
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from '../../dummyData';

export default function Post({ post }) {
    const user = Users.find(u => u.id === post.userId);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user?.profilePicture} alt="Profile Image" className="postProfileImg" />
                        <span className="postUsername">{user?.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="postLikeIcon" />
                        <img src="/assets/heart.png" alt="" className="postLikeIcon" />
                        <span className="postLikeCounter">{post.like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
