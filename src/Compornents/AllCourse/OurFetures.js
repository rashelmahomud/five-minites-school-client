import React from 'react';
import "./OurFetures.css";

const OurFetures = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='lg:text-5xl md:text-3xl text-2xl text-center font-bold'>Discover Your Needs With Us</h1>
                <h1 className='lg:text-3xl text-2xl text-center '>Choose your topic from our vast library to get started</h1>
            </div>
            <div>
                <div className='grid grild-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 justify-center'>

                    <div class="card lg:w-96 w-80 mx-auto bg-base-200 shadow-xl  m-3 hover:border hover:border-primary">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-book-open text-sky-500"></i>
                                <h1 className='text-2xl'>Book Stor</h1>
                            </div>

                        </div>
                    </div>
                    <div class="card lg:w-96 bg-base-200 w-80 mx-auto shadow-xl m-3 hover:border hover:border-secondary">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-graduation-cap text-green-500"></i>
                                <h1 className='text-2xl'>Admission</h1>
                            </div>

                        </div>
                    </div>
                    <div class="card lg:w-96 bg-base-200 w-80 mx-auto shadow-xl m-3 hover:border hover:border-orange-500">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-briefcase text-purple-500"></i>
                                <h1 className='text-2xl'>Job Exam</h1>
                            </div>

                        </div>
                    </div>
                    <div class="card lg:w-96 bg-base-200 w-80 mx-auto shadow-xl m-3 hover:border hover:border-blue-500">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-arrow-trend-up text-orange-500"></i>
                                <h1 className='text-2xl'>Courses</h1>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 text-center lg:m-10'>
                    <div className='lg:p-10 p-5 m-5'>
                        <i class="text-4xl fa-solid fa-briefcase text-purple-500"></i>
                        <h1 className=''>An Easy Study Aproach</h1>
                    </div>
                    <div className='lg:p-10 p-5 m-5'>
                        <i class="text-4xl fa-solid fa-school-flag text-orange-500"></i>
                        <h1 className=''>An Accredited School</h1>
                    </div>
                    <div className='lg:p-10 p-5 m-5'>
                        <i class="text-4xl fa-solid fa-comment-dollar text-accent"></i>
                        <h1 className=''>An Easy Payment Credit</h1>
                    </div>
                    <div className='lg:p-10 p-5 m-5'>
                        <i class="text-4xl fa-solid fa-brain text-secondary"></i>
                        <h1 className='l'>An Skill Development Platform</h1>
                    </div>
                    <div className='lg:p-10 p-5 m-5 pointer'>
                        <i class="text-4xl fa-solid fa-leaf text-primary"></i>
                        <h1 className=''>An Amazing Study Environment</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFetures;