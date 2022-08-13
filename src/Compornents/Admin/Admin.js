import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    <li><Link to="/admin">Worker</Link></li>
                    <li><Link to="/admin/user">User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Admin;