import React from 'react';

const JobExam = ({ exam }) => {
    const { img, name } = exam;

    return (
        <div className="card card-compact w-80 mx-auto  bg-base-300 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-secondary">SEE DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default JobExam;