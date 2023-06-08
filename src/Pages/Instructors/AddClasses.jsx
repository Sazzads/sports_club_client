import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
const img_BB_token = import.meta.env.VITE_IMGBB_KEY
const AddClasses = () => {
    const { user } = useContext(AuthContext);
    const { email, displayName } = user
    // console.log(email,displayName);
    // console.log(user?.email, user?.displayName);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const url = `https://api.imgbb.com/1/upload?key=${img_BB_token}`
    const onSubmit = data => {
        defaultValues: {
            email: { email }
            name: { displayName }
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
                    const { name, email, className, image, price, seat } = data;
                    const addClass = { name, email, className, image: imgUrl, price: parseFloat(price), seat: parseInt(seat) }
                    console.log(addClass);
                }
            })
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex'>
                    <div className="form-control w-full mr-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class name</span>
                        </label>
                        <input type="text" {...register("className")} placeholder="Class name" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full " />
                    </div>
                </div>

                <div className="flex">
                    <div className="form-control w-full  mr-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input {...register("name")} defaultValue={displayName} type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" {...register("email")} defaultValue={email} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="flex">
                    <div className="form-control w-full  mr-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input {...register("seat")} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <input className='btn my-4 ' type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClasses;