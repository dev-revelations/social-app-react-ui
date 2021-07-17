import axios from "axios";
import React, { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const hancleClick = async (e) => {
        e.preventDefault();
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        };

        try {
            await axios.post('auth/register', user);
            history.push('/login');
        } catch (err) {
            console.log(err);
        }

    };

    const checkIfPasswordMatch = (e) => {
        let message = '';
        if (password.current.value !== passwordAgain.current.value) {
            message = "Passwords don't match!";
        }
        password.current.setCustomValidity(message);
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={hancleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required type="email" ref={email} className="loginInput" />
                        <input placeholder="Password" onChange={checkIfPasswordMatch} required minLength="6" type="password" ref={password} type="password" className="loginInput" />
                        <input placeholder="Password Again" onChange={checkIfPasswordMatch} required type="password" ref={passwordAgain} type="password" className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton" onClick={()=>history.push('/login')}>Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}