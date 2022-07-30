import React, { useEffect, useState } from 'react';
import SpecialCourses from './SpecialCourses';

const SpecialCourse = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('special.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1 className='text-center text-4xl my-10'>SPECIAL COURSES</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-10'>
                {
                    services.map(service => <SpecialCourses service={service} key={service._id}></SpecialCourses>)
                }
            </div>
        </div>
    );
};

export default SpecialCourse;