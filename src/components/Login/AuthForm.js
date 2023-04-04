import FormLayout from "@/layouts/FormLayout"
import { useEffect, useState } from "react";
import UserService from "@/services/UserService";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function AuthForm() {
    const [formType, setFormType] = useState(1);

    return (
        <>
            <FormLayout>
                <div className="fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full sm:w-[400px] bg-white rounded-lg p-3 sm:p-6">
                    { 
                        (formType == 1) && <LoginForm switchForm={setFormType}/>
                    }

                    {
                        (formType == 2) && <RegisterForm switchForm={setFormType}/>
                    }                    
                </div>
            </FormLayout>
        </>
    )
}