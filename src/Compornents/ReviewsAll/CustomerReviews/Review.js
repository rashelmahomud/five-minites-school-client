import React from 'react';

const Review = ({ review }) => {

    const { name, img, description, address } = review;

    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl p-5">
                <figure class="px-10 pt-10 w-36">
                    <img src={img} alt="Shoes" class="rounded-xl rounded-full mx-3 " />
                    <p className='w-full text-sm'><i class="fa-solid fa-house p-2 text-primary"></i>{address}</p>
                </figure>
                <div class="card-body">

                    <p>{description}</p>

                </div>
                <div class="rating rating-xs justify-end">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                </div>
            </div>


        </div>
    );
};

export default Review;