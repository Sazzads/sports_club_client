import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loading, setLoading, signInWithGoogle, signIn, } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                // console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success("Successful")
                navigate(from, { replace: true })

            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                                <button className='text-right my-1 text-red-600' type="button" onClick={togglePassword}>
                                    {showPassword ? 'Hide Password' : 'Show Password'}
                                </button>
                            </div>
                            <h2>Don't Have An Account? Please <Link className='text-red-600' to='/register'>Register</Link></h2>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="divider"></div>
                        <div className='my-5 mx-auto'>
                            <button onClick={handleGoogleSignIn} className='btn'>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;