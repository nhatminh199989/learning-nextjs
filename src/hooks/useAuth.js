import { useEffect } from "react";
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/authSlice";

export default function useAuthJwt() {
    const dispatch = useDispatch();
    const token = Cookies.get('access_token');

    useEffect(() => {
        try {
            if (token) {
                const data = parseJwt(token);
                const userData = { 
                    user: {
                        username: data?.username,
                        email: data?.email,
                    },    
                };
                dispatch(login(userData));
            }
        } catch (e) {
            console.log(e);
        }       
    }, [dispatch]);
}
function parseJwt(token) {
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
}