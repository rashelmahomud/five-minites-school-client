import React, { useEffect, useState } from 'react';
import Admission from './Admission';

const Admissions = () => {
    const [admissions, setAdmissions] = useState([]);

    useEffect(() => {
        fetch('admission.json')
            .then(res => res.json())
            .then(data => setAdmissions(data))
    }, [])

    return (
        <div>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-bold'>Admission Preparation</h1>
                <h1 className='font-bold text-2xl mt-2'>Prepare for your dreams university</h1>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mx-10' >
                {
                    admissions.map(admission => <Admission key={admission._id} admission={admission}></Admission>)
                }

            </div>

            <a className='flex justify-center' href='https://www.fiverr.com/rashel1998?up_rollout=true'><button className="btn btn-outline btn-secondary my-10">EXPLOR ALL PROGRAM</button></a>

        </div>
    );
};

export default Admissions;