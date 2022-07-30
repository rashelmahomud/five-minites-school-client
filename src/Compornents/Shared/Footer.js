import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Ascert/logo/logo2.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content mt-10">
                <div>

                    <Link to="/" ><span class="footer-title"><img className='w-20' src={logo} alt="" /></span></Link>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Job</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <div class="p-4 bg-black text-neutral-content">

                <p className='text-center'>2022 - {year} Copyright © Five Minite School.<br />All rights reserved.</p>

            </div>
        </div>
    );
};

export default Footer;