import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';

const BookStoreDetails = () => {

    const { detailsId } = useParams();
    const [user, loading, error] = useAuthState(auth);

    const [details, setDetails] = useState([]);
    useEffect(() => {

        fetch('/AcadamicBooks.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])

    const newResult = details.filter(s => s._id == detailsId)

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

    };

    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='border-2 border-indigo-200 border-b-indigo-500'>
                        <div className='flex lg:p-5 p-2'>
                            <div>
                                <img src={newResult[0]?.img} class="lg:w-80 md:w-80 w-52 rounded-lg shadow-2xl" />
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
                            <button className='w-full' ><a href="#my-modal-2" class="btn btn-outline btn-accent lg:w-full">BUY THIS BOOK</a></button>
                            <div class="modal" id="my-modal-2">
                                <div class="modal-box">
                                    <h3 class="font-bold text-lg text-primary">{user.displayName}</h3>

                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        <div class="form-control w-full max-w-xs">

                                            <input type="text" value={user.displayName} placeholder="Type here"
                                                class="input input-bordered w-full max-w-xs my-2"{...register("book")} />

                                            <input type="text" value={user.email} placeholder="Type here"
                                                class="input input-bordered w-full max-w-xs"{...register("email")} />

                                            <input type="text" value={newResult[0]?.price} $ placeholder="Type here"
                                                class="input input-bordered w-full max-w-xs my-2"{...register("price")} />

                                            <input type="text" placeholder="Phone Number"
                                                class="input input-bordered w-full max-w-xs my-2"{...register("number")} />


                                        </div>

                                        
                                        <button class="btn btn-outline btn-secondary"><input type="submit" /></button>

                                    </form>


                                    <div class="modal-action">
                                        <a href="#" class="btn">X</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>

                        <h1 class="text-2xl font-bold">{newResult[0]?.name}</h1>

                        <div>
                            <h1 className='text-2xl lg:mt-10 mt-5'>Writers</h1>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 p-3'>

                                <div className='flex gap-3 my-5'>
                                    <img className='w-12 rounded-full' src={newResult[0]?.img1} alt='' />
                                    <div>
                                        <h2 className='font-bold'>{newResult[0]?.Writer1}</h2>
                                        <p>{newResult[0]?.acadamic}</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 my-5'>
                                    <img className='w-12 rounded-full' src={newResult[0]?.img2} alt='' />
                                    <div>
                                        <h2 className='font-bold'>{newResult[0]?.Writer2}</h2>
                                        <p>{newResult[0]?.acadamic}</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 my-5'>
                                    <img className='w-12 rounded-full' src={newResult[0]?.img3} alt='' />
                                    <div>
                                        <h2 className='font-bold'>{newResult[0]?.Writer3}</h2>
                                        <p>{newResult[0]?.acadamic}</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 my-5'>
                                    <img className='w-12 rounded-full' src={newResult[0]?.img4} alt='' />
                                    <div>
                                        <h2 className='font-bold'>{newResult[0]?.Writer4}</h2>
                                        <p>{newResult[0]?.acadamic}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className='lg:w-96 '>{newResult[0]?.details}</h1>

                                </div>
                                <div className='my-3'>
                                    <h class="text-2xl">Book Preview</h>
                                </div>

                                <div>
                                    <div class="carousel w-80">
                                        <div id="slide1" class="carousel-item relative w-full">
                                            <img src={newResult[0]?.img} class="w-80 h-40" />
                                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                <a href="#slide4" class="btn btn-outline btn-circle">❮</a>
                                                <a href="#slide2" class="btn btn-outline btn-circle">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide2" class="carousel-item relative w-full">
                                            <img src={newResult[0]?.img2} class="w-80 h-40" />
                                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                <a href="#slide1" class="btn btn-outline btn-circle">❮</a>
                                                <a href="#slide3" class="btn btn-outline btn-circle">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide3" class="carousel-item relative w-full">
                                            <img src={newResult[0]?.img3} class="w-80 h-40" />
                                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                <a href="#slide2" class="btn btn-outline btn-circle">❮</a>
                                                <a href="#slide4" class="btn btn-outline btn-circle">❯</a>
                                            </div>
                                        </div>
                                        <div id="slide4" class="carousel-item relative w-full">
                                            <img src={newResult[0]?.img4} class="w-80 h-40" />
                                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                <a href="#slide3" class="btn btn-outline btn-circle">❮</a>
                                                <a href="#slide1" class="btn btn-outline btn-circle">❯</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default BookStoreDetails;