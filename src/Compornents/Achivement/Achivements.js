import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import img from '../../Ascert/img/ac.png';

const Achivements = () => {
    const [count, setCount] = useState(0);

    useEffect( () => {
        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 100000);

        return () => {
            clearInterval(interval);
        }
    } ,[])

    return (
        <div>
            <h1 className='text-center text-4xl mt-20'>OUR ACHIVEMENT</h1>

            <div className="hero bg-base-100">
                
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <img src={img} />
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-20'>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i className="fa-solid fa-chalkboard-user text-5xl text-secondary"></i>
                            <p className='text-4xl'><CountUp start={0} end={250} duration={5} />+ <br /><span className='text-2xl'>Teachers</span></p>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i className="fa-solid fa-graduation-cap text-5xl text-primary"></i>
                            <p className='text-4xl'><CountUp start={0} end={10000} duration={5} />K+ <br /> <span className='text-2xl'>Student</span></p>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i className="fa-solid fa-users text-5xl text-orange-500"></i>
                            <p className='text-4xl'><CountUp start={100} end={10000} duration={5}></CountUp>M+ <br /> <span className='text-2xl'>Users</span></p>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-10'>
                            <i className="fa-solid fa-video text-5xl text-green-500"></i>
                            <p className='text-4xl'><CountUp start={0} end={5000} duration={5}></CountUp>k+ <br /> <span className='text-2xl'>Videos</span></p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivements;