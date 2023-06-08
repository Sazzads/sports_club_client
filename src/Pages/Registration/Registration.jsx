import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const img_BB_token = import.meta.env.VITE_IMGBB_KEY

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const [success, setSuccess] = useState('')
    const { loading, setLoading, signInWithGoogle, createUser, updateUserProfile,logOut } = useContext(AuthContext);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const url = `https://api.imgbb.com/1/upload?key=${img_BB_token}`

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            return toast.error('Password not matched')
        }
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    const { name, email, password, confirmPassword } = data;
                    const data2 = { name, email, password, photo: imgUrl, confirmPassword }
                    console.log(data2);
                    createUser(data2.email, data2.password)
                        .then(result => {
                            const loggedUser = result.user;
                            console.log(loggedUser);
                            updateUserProfile(data2.name, data2.photo)
                                .then(() => {
                                    const savedUser = { name: data2.name, email: data2.email }
                                    fetch('http://localhost:5000/users', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(savedUser)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.insertedId) {
                                                toast.success('registration successful')
                                                logOut()
                                                navigate(from, { replace: true })
                                                
                                            }


                                        })
                                })

                        })

                }
            })
     


    };

    //handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('Registration SuccessFull')
                navigate(from, { replace: true })

            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }


    return (
        <div>
            <h2>{success}</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                        message: 'Password must contain at least one UpperCase letter and one Special Characters',
                                    },
                                })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("confirmPassword", {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                        message: 'Password must contain at least one UpperCase letter and one Special Characters',

                                    },
                                })} type="password" placeholder="Confirm Password" className="input input-bordered" />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("image", { required: true })} type='file' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <h2>Already An Account? Please <Link to='/login'>Login</Link></h2>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
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

export default Registration;