import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JobExam = () => {
    const products = useSelector(state => state.allProducts.products);
    const randerList = products.map(product => {
        const { _id, name, img } = product;

        return (
            <div className="card card-compact w-80 mx-auto  bg-base-300 shadow-xl" key={_id}>
                <Link to={`/jobdetails/${_id}`}>
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{name}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-secondary">SEE DETAILS</button>
                        </div>
                    </div>
                </Link>
            </div>


        );
    })

    return (
        <>{randerList}</>
    );
};

export default JobExam;



