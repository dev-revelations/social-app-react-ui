import React from 'react';
import "./sidebar.css";
import { RssFeed, Message, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidbarWrapper">
                <ul className="sidbarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Message className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="Friend Image" className="sidebarFriendImage" />
                        <span className="sidebarFirendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}