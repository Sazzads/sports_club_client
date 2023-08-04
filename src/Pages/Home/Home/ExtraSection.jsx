import React from 'react';
import pic from '../../../assets/contractUs.png'

const ExtraSection = () => {
    return (
        <div>

            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className='bg-base-200  text-center text-5xl my-10 font-semibold'>Contact Us</h1>
                        <img src={pic} className="max-w-sm rounded-lg shadow-2xl transition duration-300 ease-in-out hover:scale-110" />
                    </div>

                    <div className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExtraSection;