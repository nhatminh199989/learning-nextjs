import { useState } from "react";
import Cookies from 'js-cookie'

export default function useAuth() {
    Cookies.set('token', '11111111122222222');
    const user_token = Cookies.get('token');
    return user_token;
}