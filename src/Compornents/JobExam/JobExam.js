import React from 'react';

const JobExam = ({ exam }) => {
    const { img, name } = exam;

    return (
        <div class="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">{name}</h2>
                <div class="card-actions justify-end">
                    <button class="btn btn-outline btn-secondary">SEE DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default JobExam;