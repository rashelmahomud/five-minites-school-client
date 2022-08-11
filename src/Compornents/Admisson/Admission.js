import React from 'react';

const Admission = ({ admission }) => {
    console.log(admission);
    const { instructorb,name, img } = admission;
    return (
        <div>

            <div class="card card-side bg-base-200 shadow-xl hover:scale-110 hover:shadow-xl duration-500">
                <figure><img className='lg:w-48 w-28 h-20  lg:h-32 object-cover' src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <p class="card-title">{name}</p>
                    <h2>{instructorb}</h2>

                </div>
            </div>

        </div>
    );
};

export default Admission;