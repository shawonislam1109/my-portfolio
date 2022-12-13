import React from 'react';
import logo from './logoprot.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <li className='text-xl font-serif text-white'><a href='https://drive.google.com/file/d/1fPuidaS_mkXCuiOFxGWvuGcBTGwtZRE8/view?usp=share_link'>Resume</a></li>
                        <li className='text-xl font-serif text-white'><a href='#project'>Project</a></li>
                        <li className='text-xl font-serif text-white'><a href='#contact'>Contact</a></li>
                        <li className='text-xl font-serif text-white'><a href='#about'>About Me</a></li>
                        <li className='text-xl font-serif text-white'><a href='#blog'>Blog</a></li>
                    </ul>
                </div>
                <img className='w-12 md:w-20 md:h-20 rounded-full h-12 ml-5 md:ml-0' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-xl font-serif text-white'><a href='https://drive.google.com/file/d/1fPuidaS_mkXCuiOFxGWvuGcBTGwtZRE8/view?usp=share_link'>Resume</a></li>
                    <li className='text-xl font-serif text-white'><a href='#project'>Project</a></li>
                    <li className='text-xl font-serif text-white'><a href='#contact'>Contact</a></li>
                    <li className='text-xl font-serif text-white'><a href='#about'>About Me</a></li>
                    <li className='text-xl font-serif text-white'><a href='#blog'>Blog</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;