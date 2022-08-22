import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link to="/admin">Worker</Link></li>
                    <li><Link to="/admin/user">User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Admin;