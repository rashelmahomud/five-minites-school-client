import React, { useEffect, useState } from 'react';
import JobExam from './JobExam';

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
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:my-20 my-5 lg:mx-10 mx-2 gap-5'>
                {
                    exams.map(exam => <JobExam exam={exam} key={exam._id}></JobExam>)
                }
            </div>
        </div>
    );
};

export default JobExams;