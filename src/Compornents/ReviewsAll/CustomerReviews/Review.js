import React from 'react';

const Review = ({ review }) => {

    const { name, img, description, address } = review;

    return (
        <div>

            <img src={img} />


        </div>
    );
};

export default Review;