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
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='border-2 border-indigo-200 border-b-indigo-500'>
                        <div className='flex lg:p-5 p-2'>
                            <div>
                                <img src={newResult[0]?.img} class=" lg:w-80 rounded-lg shadow-2xl" />
                            </div>

                            <div className='py-10'>

                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-book-medical text-4xl"></i>
                                    <p>Pages <br /> <span className=''>{newResult[0]?.pages}</span></p>
                                </div>
                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-walkie-talkie text-4xl"></i>
                                    <p>Pages <br /> <span className=''>{newResult[0]?.pages}</span></p>
                                </div>
                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-file-lines text-4xl"></i>
                                    <p>Pages <br /> <span className=''>{newResult[0]?.pages}</span></p>
                                </div>
                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-file-invoice text-4xl"></i>
                                    <p>Pages <br /> <span className=''>{newResult[0]?.pages}</span></p>
                                </div>

                            </div>


                        </div>
                        <div>
                            <p>hllo</p>

                        </div>

                    </div>

                    <div>
                        <h1 class="text-2xl font-bold">{newResult[0]?.name}</h1>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookStoreDetails;