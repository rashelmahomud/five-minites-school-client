import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productAction';
import JobExam from './JobExam';

const JobExams = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get('http://localhost:5000/jobexam')
            .catch((err) => {
                console.log('err', err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    // useEffect(() => {
    //     fetch('jobexam.json')
    //         .then(res => res.json())
    //         .then(data => setExams(data))
    // }, [])


    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Job Exam Preparation</h1>
                <h2 className='text-2xl mt-2'>Which job are you preparing for?</h2>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:my-20 my-5 lg:mx-10 mx-2 gap-5'>
                {/* {
                    products.map(product => <JobExam product={product} key={product._id}></JobExam>)
                } */}

                <JobExam></JobExam>
            </div>
        </div>
    );
};

export default JobExams;