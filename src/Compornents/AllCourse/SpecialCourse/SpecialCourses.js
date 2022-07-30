import React from 'react';
import { useNavigate } from 'react-router-dom';
const SpecialCourses = (props) => {
    console.log(props.service);
    const { img, name, price, description } = props.service;

    const navigate = useNavigate();
    const specialCourseDetailsHandel = id => {
        navigate(`specialDetials/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}$</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => specialCourseDetailsHandel(props.service._id) } class="btn btn-outline btn-accent">COURSES DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialCourses;