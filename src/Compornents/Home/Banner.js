import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen banner-img">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Five Minite School</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline btn-success">Success</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;