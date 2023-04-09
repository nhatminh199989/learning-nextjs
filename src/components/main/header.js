import Link from 'next/link'
import { Navbar, Dropdown } from "flowbite-react";
import AuthForm from '@/components/Login/AuthForm';
import useToggle from '@/hooks/useToggle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/auth/authSlice';

export default function Header() {
    const [showLoginForm, toggleLoginForm] = useToggle(false);
    const user = useSelector(state => state.auth.user);
    const dispath = useDispatch();

    const userLogout = () => {
        dispath(logout());
    }

    return (
        <>  
            { showLoginForm && <AuthForm closeForm={toggleLoginForm}/>}
            <div className='container mx-auto'>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="https://flowbite.com/">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Flowbite
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />                    
                    <Navbar.Collapse>      
                        {
                            !user ?
                            (
                                <div className="cursor-pointer" onClick={() => toggleLoginForm()}>
                                    Đăng nhập
                                </div>
                            )
                            : 
                            (<>
                                <div className="cursor-pointer">
                                    {user.username}
                                </div>
                                <div className="cursor-pointer" onClick={userLogout}>
                                    Đăng xuất
                                </div>
                            </>
                            )
                        }                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}