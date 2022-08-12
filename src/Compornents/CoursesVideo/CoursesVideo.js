import React from 'react';

const CoursesVideo = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl lg:mx-20 lg:p-10">
            <div class="card-body">
                <h2 class="card-title text-4xl">We are simply one click away!</h2>
                <p className='text-2xl'>We are making sure each learner get best knowledge they deserve. We provide easiest formula, notes and guidelines to ensure best education. Enroll yours now.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">JOIN US</button>
                </div>
            </div>

            <div>
                <label for="my-modal"> <figure><img src="https://i.ibb.co/vDPvnv3/Screenshot-5.png" alt="Album" /></figure></label>

                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">
                        <iframe width="400" height="300" src="https://www.youtube.com/embed/nSbQXHzSeO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="modal-action">
                            <label for="my-modal" class="btn">Cencel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoursesVideo;