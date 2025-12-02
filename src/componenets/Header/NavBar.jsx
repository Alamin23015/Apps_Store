import React from 'react';
import logoImg from '../../assets/logo.png'
import gitImg from '../../assets/gitHub.svg'
import homeImg from '../../assets/home.svg'
import appImg from '../../assets/app.svg'
import installImg from '../../assets/install.svg'
import { NavLink, Link } from 'react-router-dom';
const NavBar = ({ startLoading }) => {


    const openGitProfile = () => {
        window.open('https://github.com/Alamin23015');
    };






    const links = <>

        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex items-center gap-2 m-2 hover:border-b-2 hover:border-violet-600 ${isActive ? 'border-b-2 border-violet-600' : ''}`
                }
                onClick={startLoading}
            >
                <img src={homeImg} alt="Home" className='w-5 h-5' />
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/apps"
                className={({ isActive }) =>
                    `flex items-center gap-2 m-2 hover:border-b-2 hover:border-violet-600 ${isActive ? 'border-b-2 border-violet-600' : ''}`
                }
                onClick={startLoading}
            >
                <img src={appImg} alt="App" className='w-5 h-5' />
                App
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/installation"
                className={({ isActive }) =>
                    `flex items-center gap-2 m-2 hover:border-b-2 hover:border-violet-600 ${isActive ? 'border-b-2 border-violet-600' : ''}`
                }
                onClick={startLoading}
            >
                <img src={installImg} alt="Installation" className='w-5 h-5' />
                Installation
            </NavLink>
        </li>
    </>
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm px-5">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-500">
                            {links}
                        </ul>
                    </div>
                    <div className='mx-5 '>
                        <Link
                            to="/"
                            onClick={startLoading}
                            className='flex items-center justify-around gap-2'
                        >
                            <img className='h-12' src={logoImg} alt="" />
                            <h1 className='text-xl font-semibold text-violet-600'>HERO.IO</h1>
                        </Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1 text-gray-500">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">

                    <button onClick={openGitProfile} className='btn btn-primary rounded-xl border-none bg-gradient-to-r from-indigo-500 to-blue-500'>
                        <img src={gitImg} alt="" className='h-5 ' />
                        Contribute
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;