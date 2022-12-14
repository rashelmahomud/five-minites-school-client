import React from 'react';
import logo from "../../Ascert/logo/logo2.png"
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading';

const Navbar = ({ handleThemeChange, theme }) => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    if(loading){
        return <Loading></Loading>
    }

    const navbermenu = <>


        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/bookstore">Book Store</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/chat">Chat</Link></li>

        <li>{user ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
        <li>{user ? <Link to="/admin">Admin</Link> : ""}</li>

        {/* <li> { user ? <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button> : <Link to="/login">login</Link>}</li> */}


    </>


    return (
        <div className="navbar border-b sticky top-0 w-full z-50 lg:px-10  bg-slate-100 bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">

                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">

                        {navbermenu}

                    </ul>
                </div>
                <Link to="/"><img className='w-36' src={logo} alt='' /></Link>
                {/* <a className="normal-case text-xl"></a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">

                    {navbermenu}

                </ul>
            </div>
            <label for="my-drawer-2" tabindex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            {/* notifications add  */}

            <div className="dropdown">
                <label tabindex="0" className="btn m-1">

                    <i className="fa-solid fa-bell absolute"></i>
                    {
                        user ? (<span className="text-xs bg-red-600 rounded-full w-3 h-3 z-0 mb-3 ml-2 flex justify-center ">2</span>
                        ) : ("")
                    }

                </label>
                <div tabindex="0" className="dropdown-content card card-compact  p-2 shadow bg-primary text-primary-content">
                    <div className="card-body">
                        <h3 className="card-title">WelCome!</h3>
                        <p className='font-bold'>{user?.displayName}</p>
                        <p>Thank you for Visiting This Website.</p>
                    </div>
                </div>
            </div>


            {/* theme icon started here  */}
            <button

                onClick={handleThemeChange}
                className="rounded-full lg:mx-2 font-bold pr-2">

                {theme ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}

            </button>

            {/* theme icon Ends here  */}


            {user ? (<div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />

                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <p>{user.displayName}</p>
                        <li><a>Settings</a></li>
                        <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>
                    </ul>
                </div>
            </div>) : (<button className="btn btn-outline btn-accent"><Link to="/login">login</Link></button>)}



        </div>

    );
};

export default Navbar;