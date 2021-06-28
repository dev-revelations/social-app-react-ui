import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthActions";
import axios from "axios";

export const loginCall = async (userCreds, dispatch) => {
    dispatch(LoginStart());
    try {
        const res = await axios.post("auth/login", userCreds);
        dispatch(LoginSuccess(res.data));
    } catch (err) {
        dispatch(LoginFailure(err));
    }
};