import React from 'react';
import logo from "../images/logo.png";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

const Navbar = (props)=>{

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    // className="flex justify-between items-center w-11/12 max-w-{1160px} py-4 mx-10 max-auto"
    return(
        <div className='flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto'>
            <Link to="/">
                <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
            </Link>
            <nav>
                <ul className='flex gap-x-6 text-neutral-100 '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>   
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex items-center gap-x-4'>
                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-neutral-800 text-neutral-100 py-[8px] px-[12px] rounded-[8px] border border-neutral-700">Login</button>
                    </Link>
                }
                {
                    !isLoggedIn && 
                    <Link to="/Singup">
                        <button className="bg-neutral-800 text-neutral-100 py-[8px] px-[12px] rounded-[8px] border border-neutral-700">Singup</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/">
                        <button className="bg-neutral-800 text-neutral-100 py-[8px] px-[12px] rounded-[8px] border border-neutral-700" onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>Log Out</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/DeshBoard">
                        <button className="bg-neutral-800 text-white py-[8px] px-[12px] rounded-[8px] border border-neutral-700">DeshBoard</button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;