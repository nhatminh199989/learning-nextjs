import { useState, useEffect } from "react";
import Image from "next/image";

export default function RegisterForm({
    switchForm,
}) {
    const [registerUsername, setRegUsername] = useState(""); 
    const [registerEmail, setRegEmail] = useState(""); 
    const [registerPassword, setRegPassword] = useState(""); 
    const [registerRepassword, setRegRepassword] = useState(""); 
    const [regError, setRegError] = useState([])

    const submitRegisterForm = async () => {
        const res = await UserService.registerUser({
            "user": {
                "username": registerUsername,
                "email": registerEmail,
                "password": registerRepassword,
            }
        });
        console.log("Create account: ", res)
    }

    useEffect(() => {
        if (registerPassword != registerRepassword)  {
            const errMes = "Password and repassword is incorrect";
            if (!regError.includes(errMes)) {
                const appendError = [...regError, errMes]
                setRegError(appendError);
            }
            return;
        }  
        setRegError([]);
    }, [registerPassword, registerRepassword]);

    return (
        <>
            <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full flex items-center justify-center relative cursor-pointer">
                    <Image width={24} height={24} src={'/svg/back-icon.svg'} 
                        alt="back-icon"
                        onClick={() => switchForm(1)}
                        className="absolute left-0 cursor-pointer"/>                   
                    <p className="text-center font-bold text-lg sm:text-2xl">REGISTER FORM</p>
                </div>
                <div>
                    <label>Username:</label>
                    <input name="user_name" className="w-full rounded-lg"
                        value={registerUsername}
                        onChange={(e) => setRegUsername(e.target.value)}
                        type="text" placeholder="Username"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input name="user_name" className="w-full rounded-lg"
                        value={registerEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        type="text" placeholder="Email"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input name="password" className="w-full rounded-lg" 
                        value={registerPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        type="password" placeholder="Password"/>
                </div>
                <div>
                    <label>Re-password:</label>
                    <input className="w-full rounded-lg"
                        value={registerRepassword} 
                        onChange={(e) => setRegRepassword(e.target.value)}
                        type="password" placeholder="Re-password"/>
                </div>
                { regError.map((e, index) => (
                    <p key={index} className="text-red-600 text-sm">{e}</p>
                ))}
                <div className="grid grid-cols-1">
                    <button 
                        onClick={() => submitRegisterForm()}
                        className="rounded-lg bg-blue-400 text-white p-2">
                        Submit
                    </button>
                </div>
            </div>
        </>
    ) 
}