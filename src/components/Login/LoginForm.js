import { useDispatch } from "react-redux"
import { useState } from "react";
import { loginAsync } from "@/store/auth/authSlice";
import { toast } from 'react-toastify';

export default function LoginForm({
    switchForm,
    closeForm,
}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async () => {
        const params = {
            user: {
                email: username,
                password: password,
            }
        };
        const data = await dispatch(loginAsync(params));
        if (data?.payload?.error) {
            toast.error("Login unsuccess",{ autoClose: 1000 });
            return;
        }
        if (data?.payload?.success) {
            toast.info("Login success",{ autoClose: 1000 });
            closeForm();
        }
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