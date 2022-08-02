import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }


    return (

        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                {/* <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                </div> */}
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body text-center">
                        <h2 className='text-4xl my-10'>Login</h2>

                        <button onClick={() => signInWithGoogle()} class="btn btn-outline"><i class="fa-brands fa-google text-orange-600 text-3xl"></i>Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;