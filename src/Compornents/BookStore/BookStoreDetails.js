import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
                                    <i class="fa-solid fa-book-medical text-4xl text-blue-500"></i>
                                    <p>Pages <br /> <span className=''>{newResult[0]?.pages}</span></p>
                                </div>
                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-walkie-talkie text-4xl text-sky-500"></i>
                                    <p>Formate <br /> <span className=''>{newResult[0]?.format}</span></p>
                                </div>
                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-file-lines text-4xl text-orange-500"></i>
                                    <p>File Size <br /> <span className=''>{newResult[0]?.file}</span></p>
                                </div>
                                <div className='flex p-5 gap-5 font-bold'>
                                    <i class="fa-solid fa-file-invoice text-4xl text-green-500"></i>
                                    <p>interactive <br /> <span className=''>{newResult[0]?.interactive}</span></p>
                                </div>

                            </div>


                        </div>
                        <div>
                            <div className='flex lg:space-x-52 space-x-20 px-10'>
                                <button class="btn btn-active btn-link text-black">PROMO CODE</button>
                                <p className='text-2xl font-bold '>{newResult[0]?.price}$</p>
                            </div>
                            <button class="btn btn-outline btn-accent lg:w-full">BUY THIS BOOK</button>

                        </div>

                    </div>

                    <div>

                        <h1 class="text-2xl font-bold">BOOK NAME: {newResult[0]?.name}</h1>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookStoreDetails;