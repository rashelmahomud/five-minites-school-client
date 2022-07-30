import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SecialCourseDetails = () => {
    const { coursesId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/special.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const newDetails = details.filter(detail => detail._id == coursesId)

    return (
        <div class="card  bg-base-100 shadow-xl justify-content-center my-10 mx-10">
            <figure><img className='py-5' src={newDetails[0]?.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{newDetails[0]?.name}</h2>
                <p>{newDetails[0]?.description}</p>
                <p>Price: {newDetails[0]?.price}$</p>
                <div class="card-actions justify-end">

                    <label for="my-modal-3" class="btn modal-button btn-outline btn-secondary">Buy Now</label>
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="text-lg font-bold">WelCome To Our Coures</h3>
                              
                            <input className='my-3' type="text" placeholder="Your Name: " class="input w-full max-w-xs" /> 
                            <input className='my-3' type="text" placeholder="Email: " class="input w-full max-w-xs" />
                            <input className='my-3  p-3' type="text" placeholder="Phone" class="input w-full max-w-xs" />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default SecialCourseDetails;