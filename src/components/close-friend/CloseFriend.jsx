import React from "react";
import "./close-friend.css";

export default function CloseFriend({ friend }) {

    return (
        <li className="sidebarFriend">
            <img src={friend.profilePicture} alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFirendName">{friend.username}</span>
        </li>
    );
}