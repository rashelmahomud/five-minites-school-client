import React from 'react';
import logo from "../../Ascert/logo/logo2.png"
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({ handleThemeChange, theme }) => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const navbermenu = <>


        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/bookstore">Book Store</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>

        <li>{user ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
        <li>{user ? <Link to="/admin">Admin</Link> : ""}</li>

        {/* <li> { user ? <button onClick={logout} class="btn btn-active btn-ghost">Sign Out</button> : <Link to="/login">login</Link>}</li> */}


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

            {/* notifications add  */}

            <div class="dropdown">
                <label tabindex="0" class="btn m-1">

                    <i class="fa-solid fa-bell absolute"></i>
                    {
                        user ? (<span class="text-xs bg-red-600 rounded-full w-3 h-3 z-0 mb-3 ml-2 flex justify-center ">1</span>
                        ) : ("")
                    }

                </label>
                <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                    <div class="card-body">
                        <h3 class="card-title">WelCome!</h3>
                        <p className='font-bold'>{user.displayName}</p>
                        <p>Thank you for Visiting This Website.</p>
                    </div>
                </div>
            </div>


            {/* theme icon started here  */}
            <button

                onClick={handleThemeChange}
                className="rounded-full lg:mx-2 font-bold pr-2">

                {theme ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}

            </button>

            {/* theme icon Ends here  */}


            {user ? (<div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src={user.photoURL} />

                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <p>{user.displayName}</p>
                        <li><a>Settings</a></li>
                        <button onClick={logout} class="btn btn-active btn-ghost">Sign Out</button>
                    </ul>
                </div>
            </div>) : (<button class="btn btn-outline btn-accent"><Link to="/login">login</Link></button>)}



        </div>

    );
};

export default Navbar;