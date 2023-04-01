import Link from 'next/link'
import { Navbar } from "flowbite-react";

export default function Header() {
    return (
        <>  
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
                        <Link
                            href="/example-1"
                        >
                            Example-1
                        </Link>
                        <Navbar.Link href="/navbars">
                            About
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Services
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Pricing
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Contact
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}