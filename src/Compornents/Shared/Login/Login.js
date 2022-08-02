import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";




const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data)

    };

    return (

        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                {/* <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                </div> */}
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body text-center">
                        <h2 className='text-4xl my-10'>Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>



                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="your email"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email Is Required"
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'Provider Valide Email'
                                        }
                                    })}
                                />

                                <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pettern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    
                                </label>
                            </div>
                            {/* password for this code  */}
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="your password"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "password Is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must Be six crusteres user for this.'
                                        }
                                    })}
                                />

                                <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'pettern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                    
                                </label>
                            </div>

                            <input type="submit" value="login" className='btn w-full max-w-xs' />
                        </form>
                        <button onClick={() => signInWithGoogle()} class="btn btn-outline"><i class="fa-brands fa-google text-orange-600 text-3xl"></i>Continue With Google</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;