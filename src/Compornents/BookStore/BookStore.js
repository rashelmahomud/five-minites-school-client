import React from 'react';
import { useNavigate } from 'react-router-dom';


const BookStore = ({ book }) => {

    const { _id,price, name, description, img } = book;

    const navigate = useNavigate();

    const handelDetails = id => {
        console.log('hello'+ id);
        navigate(`/bookStoreDetails/${id}`);

    }


    return (
        <div className="card shadow-xl my-5 bg-base-300">
            <figure><img className='w-48 rounded-lg text-center' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: {price}$</p>
                <button onClick={()=> handelDetails(_id)} className="btn btn-outline btn-success">DETAILS</button>
            </div>
        </div>
    );
};

export default BookStore;