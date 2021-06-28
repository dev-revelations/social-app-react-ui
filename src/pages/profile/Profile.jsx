import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/user/${params.username}`);
            setUser(res.data);
        };

        fetchUser();
    }, [params.username]);

    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}${user.coverPicture || 'person/noCover.png'}`} alt="" className="profileCoverImg" />
                            <img src={`${PF}${user.profilePicture || 'person/noAvatar.png'}`} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={user.username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
}