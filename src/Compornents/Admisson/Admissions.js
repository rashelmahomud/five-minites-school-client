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

            {
                admissions.map(admission => <Admission key={admission._id} admission={admission}></Admission>)
            }


        </div>
    );
};

export default Admissions;