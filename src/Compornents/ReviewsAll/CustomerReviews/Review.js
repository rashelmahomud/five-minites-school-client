import React from 'react';

const Review = ({ review }) => {

    const { name, img, description, address } = review;

    return (
        <div>

            <div className="card w-96  bg-base-300 shadow-xl p-5">
                <figure className="px-10 pt-10 w-36">
                    <img src={img} alt="Shoes" className="rounded-xl rounded-full mx-3 " />
                    <p className='w-full text-sm'><i className="fa-solid fa-house p-2 text-primary"></i>{address}</p>
                </figure>
                <div className="card-body">

                    <p>{description}</p>

                </div>
                <div className="rating rating-xs justify-end">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>


        </div>
    );
};

export default Review;