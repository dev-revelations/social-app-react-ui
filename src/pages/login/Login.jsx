import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleLoginClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value
        },
            dispatch);
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
                    <form className="loginBox" onSubmit={handleLoginClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            className="loginInput"
                            ref={email}
                            required
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="loginInput"
                            ref={password}
                            required
                            minLength="6"
                        />
                        <button className="loginButton" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress size="32px" color="white" />
                            ) :
                                "Log In"
                            }
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton" disabled={isFetching}>Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}