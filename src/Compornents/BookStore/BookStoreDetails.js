import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookStoreDetails = () => {

    const { detailsId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {

        fetch('/AcadamicBooks.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])

    const newResult = details.filter(s => s._id == detailsId)
    console.log(newResult);

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={newResult[0]?.img} class="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookStoreDetails;