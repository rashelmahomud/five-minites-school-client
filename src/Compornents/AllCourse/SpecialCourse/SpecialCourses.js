import React from 'react';

const SpecialCourses = (props) => {
    console.log(props.service);
    const { img, name, price, description } = props.service;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}$</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-outline btn-accent">COURSES DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialCourses;