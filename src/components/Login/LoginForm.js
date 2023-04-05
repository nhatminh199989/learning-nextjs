import { useDispatch } from "react-redux"
import { useState } from "react";
import { login } from "@/store/auth/authSlice";

export default function LoginForm({
    switchForm,
}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        const params = {
            user: {
                email: username,
                password: password,
            }
        };
        dispatch(login(params));
    }
    
    return (
        <>
            <div className="w-full h-full flex flex-col gap-2">
                <p className="text-center font-bold text-lg sm:text-2xl">LOGIN FORM</p>
                <div>
                    <label>Username:</label>
                    <input name="user_name" className="w-full rounded-lg" 
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        type="text" placeholder="Username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input className="w-full rounded-lg" 
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder="Password"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button className="rounded-lg bg-blue-400 text-white p-2" onClick={() => switchForm(2)}>Register</button>
                    <button className="rounded-lg bg-amber-500 text-white p-2" onClick={() => submitForm()}>Login</button>
                </div>
            </div>
        </>
    )
}