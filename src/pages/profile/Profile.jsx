import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {

    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="/assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Behzad Gh</h4>
                            <span className="profileInfoDesc">Hello My Friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    );
}