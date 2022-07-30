import React from 'react';

const OurFetures = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='lg:text-5xl md:text-3xl text-2xl text-center font-bold'>Discover Your Needs With Us</h1>
                <h1 className='lg:text-3xl text-2xl text-center '>Choose your topic from our vast library to get started</h1>
            </div>
            <div>
                <div className='grid grild-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 bg-[#F7F8FA] justify-center'>

                    <div class="card w-96 bg-base-100 shadow-xl  m-3">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-book-open text-sky-500"></i>
                                <h1 className='text-2xl'>Book Stor</h1>
                            </div>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl m-3">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-graduation-cap text-green-500"></i>
                                <h1 className='text-2xl'>Admission</h1>
                            </div>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl m-3">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-briefcase text-purple-500"></i>
                                <h1 className='text-2xl'>Job Exam</h1>
                            </div>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl m-3">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <i class="text-4xl fa-solid fa-arrow-trend-up text-orange-500"></i>
                                <h1 className='text-2xl'>Courses</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurFetures;