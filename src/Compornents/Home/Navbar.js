import React from 'react';
import logo from "../../Ascert/logo/logo2.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navbermenu = <>


        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/bookstore">Book Store</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        
        <li><Link to="/login">login</Link></li>

    </>


    return (
        <div class="navbar border-b sticky top-0 w-full z-50 lg:px-10  bg-slate-100 bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div class="navbar-start">
                <div class="dropdown">

                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">

                        {navbermenu}

                    </ul>
                </div>
                <Link to="/"><img className='w-36' src={logo} alt='' /></Link>
                {/* <a class="normal-case text-xl"></a> */}
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-bold">

                    {navbermenu}

                </ul>
            </div>
            <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>


                
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>


        </div>

    );
};

export default Navbar;