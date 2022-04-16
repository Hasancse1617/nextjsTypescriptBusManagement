import { Dispatch } from "react";
import { REMOVE_LOGIN_LOADER, SET_LOGIN_ERRORS, SET_LOGIN_LOADER, SET_TOKEN } from "../types/AuthType"
import axiosInstance from "../../helper/axiosInstance";
import cookie from "js-cookie";

export const AuthLogin = (state:object) =>{
    return async (dispatch: Dispatch<object>) =>{
        try {
            dispatch({type: SET_LOGIN_LOADER});
            const { data } = await axiosInstance.post(`/login`, state);
            dispatch({type: REMOVE_LOGIN_LOADER});
            localStorage.setItem("myToken", data.token);
            // cookie.set("myToken", data.token, {expires: 1});
            dispatch({type: SET_TOKEN, payload: data.token});
            
        } catch (error:any) {
            dispatch({type: REMOVE_LOGIN_LOADER});
            // dispatch({type: SET_LOGIN_ERRORS, payload: error.response.data.errors});
        }
    }
}