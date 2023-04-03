import FormLayout from "@/layouts/FormLayout"
import { useEffect, useState } from "react";
import UserService from "@/services/UserService";

export default function LoginForm() {
    const [formType, setFormType] = useState([1]);
    const [registerUsername, setRegUsername] = useState(""); 
    const [registerEmail, setRegEmail] = useState(""); 
    const [registerPassword, setRegPassword] = useState(""); 
    const [registerRepassword, setRegRepassword] = useState(""); 
    const [regError, setRegError] = useState([]); 

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
            <FormLayout>
                <div className="fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full sm:w-[400px] bg-white rounded-lg p-3 sm:p-6">
                    {/* Login form */}
                    { 
                        (formType == 1) &&
                        <div className="w-full h-full flex flex-col gap-2">
                            <p className="text-center font-bold text-lg sm:text-2xl">LOGIN FORM</p>
                            <div>
                                <label for="user_name">Username:</label>
                                <input name="user_name" className="w-full rounded-lg" type="text" placeholder="Username"/>
                            </div>
                            <div>
                                <label for="password">Password:</label>
                                <input className="w-full rounded-lg" type="password" placeholder="Password"/>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <button className="rounded-lg bg-blue-400 text-white p-2" onClick={() => setFormType(2)}>Register</button>
                                <button className="rounded-lg bg-amber-500 text-white p-2">Login</button>
                            </div>
                        </div>
                    }
                    {/* Login form */}

                    {/* Register form */}
                    {
                        (formType == 2) &&
                        <div className="w-full h-full flex flex-col gap-2">
                            <p className="text-center font-bold text-lg sm:text-2xl">REGISTER FORM</p>
                            <div>
                                <label for="user_name">Username:</label>
                                <input name="user_name" className="w-full rounded-lg"
                                    value={registerUsername}
                                    onChange={(e) => setRegUsername(e.target.value)}
                                    type="text" placeholder="Username"/>
                            </div>
                            <div>
                                <label for="user_name">Email:</label>
                                <input name="user_name" className="w-full rounded-lg"
                                    value={registerEmail}
                                    onChange={(e) => setRegEmail(e.target.value)}
                                    type="text" placeholder="Email"/>
                            </div>
                            <div>
                                <label for="password">Password:</label>
                                <input name="password" className="w-full rounded-lg" 
                                    value={registerPassword}
                                    onChange={(e) => setRegPassword(e.target.value)}
                                    type="password" placeholder="Password"/>
                            </div>
                            <div>
                                <label for="password">Re-password:</label>
                                <input className="w-full rounded-lg"
                                    value={registerRepassword} 
                                    onChange={(e) => setRegRepassword(e.target.value)}
                                    type="password" placeholder="Re-password"/>
                            </div>
                            { regError.map((e, index) => (
                                <p key={index} className="text-red-600 text-sm">{e}</p>
                            ))}
                            <div class="grid grid-cols-1">
                                <button 
                                    onClick={() => submitRegisterForm()}
                                    className="rounded-lg bg-blue-400 text-white p-2">
                                    Submit
                                </button>
                            </div>
                        </div>
                    }                    
                    {/* Register form */}
                </div>
            </FormLayout>
        </>
    )
}