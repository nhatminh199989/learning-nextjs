import { useState } from "react";
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/auth/authSlice";

export default function useAuthJwt() {
    const token = Cookies.get('auth_token');
    let payload= parseJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
    // console.log("payload:- ", payload);
    const dispatch = useDispatch();
    dispatch(login(payload));
    const storeState = useSelector((state) => state);
    console.log("storeState", storeState);
    const user_token = Cookies.get('token');
    return user_token;
}
function parseJwt(token) {
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
}