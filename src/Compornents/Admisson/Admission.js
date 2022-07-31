import React from 'react';

const Admission = ({ admission }) => {
    console.log(admission);
    const { name, img, description } = admission;
    return (
        <div>

            <div class="card card-side bg-base-100 shadow-xl hover:scale-110 hover:shadow-xl duration-500">
                <figure><img src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <p class="card-title">{description}</p>
                    <h2>{name}</h2>

                </div>
            </div>

        </div>
    );
};

export default Admission;