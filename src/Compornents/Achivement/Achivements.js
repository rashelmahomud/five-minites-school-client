import React from 'react';

import img from '../../Ascert/img/ac.png';

const Achivements = () => {
    return (
        <div>
            <h1 className='text-center text-4xl mt-20'>OUR ACHIVEMENT</h1>

            <div class="hero bg-base-100">
                
                <div class="hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <img src={img} />
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-20'>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i class="fa-solid fa-chalkboard-user text-5xl text-secondary"></i>
                            <p className='text-4xl'>250+ <br /><span className='text-2xl'>Teachers</span></p>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i class="fa-solid fa-graduation-cap text-5xl text-primary"></i>
                            <p className='text-4xl'>1.5M+ <br /> <span className='text-2xl'>Student</span></p>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i class="fa-solid fa-users text-5xl text-orange-500"></i>
                            <p className='text-4xl'>1.8M+ <br /> <span className='text-2xl'>Users</span></p>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i class="fa-solid fa-video text-5xl text-green-500"></i>
                            <p className='text-4xl'>5k+ <br /> <span className='text-2xl'>Videos</span></p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivements;