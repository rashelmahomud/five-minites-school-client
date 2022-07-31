import React, { useEffect, useState } from 'react';

const JobExams = () => {

    const [exams,setExams] = useState([]);

    useEffect( () => {
        fetch('jobexam.json')
        .then(res => res.json())
        .then(data => setExams(data))
    } ,[])


    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Job Exam Preparation</h1>
                <h2 className='text-2xl mt-2'>Which job are you preparing for?</h2>
            </div>
        </div>
    );
};

export default JobExams;