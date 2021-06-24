import React from "react";
import "./close-friend.css";

export default function CloseFriend({ friend }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="sidebarFriend">
            <img src={PF + friend.profilePicture} alt="Friend" className="sidebarFriendImage" />
            <span className="sidebarFirendName">{friend.username}</span>
        </li>
    );
}