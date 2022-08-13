import React from 'react';

const Loading = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Five Minite School</h1>
            <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                

                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-orange-900">

                </div>

            </div>
        </div>

    );
};

export default Loading;