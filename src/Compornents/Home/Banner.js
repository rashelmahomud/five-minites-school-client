import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen banner-img">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Five Minite School</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-outline btn-success">Success</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;