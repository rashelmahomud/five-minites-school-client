import React from 'react';
import { useNavigate } from 'react-router-dom';
const SpecialCourses = (props) => {
    const { img, name, price, description } = props.service;

    const navigate = useNavigate();
    const specialCourseDetailsHandel = id => {
        navigate(`specialDetials/${id}`)
    }
    return (
        <div>
            <div className="card lg:w-96 w-80 mx-auto bg-base-200 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}$</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => specialCourseDetailsHandel(props.service._id) } className="btn btn-outline btn-accent">COURSES DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialCourses;