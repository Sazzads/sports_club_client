import React from 'react';
import pic1 from "../../../assets/picphone.png"
import { FaGooglePlay, FaApple } from 'react-icons/fa';
const DownloadEnjoy = () => {
    return (
        <div className='bg-slate-600 py-1'>
            <div className='grid md:grid-cols-2 mx-auto my-10'>
                <div className='px-10 py-16'>
                    <h1 className='text-4xl mb-3'>Download & Enjoy</h1>
                    <p className='text-xl'>Access your courses anywhere, anytime & prepare
                        with practice tests.</p>
                    <div className='flex gap-5 mt-5'>
                        <div className=' hover:bg-blue-200 p-3 border-2 border-black px-5'>
                            <div className='flex gap-1'>
                                <div ><FaApple className='h-10 w-10'></FaApple></div>
                                <div>
                                    <h6>App Store</h6>
                                    <p>Available on the</p>
                                </div>
                            </div>
                        </div>
                        <div className=' hover:bg-blue-200 p-3 border-2 border-black px-5'>
                            <div className='flex gap-1'>
                                <div ><FaGooglePlay className='h-10 w-10'></FaGooglePlay></div>
                                <div>
                                    <h6>Google play</h6>
                                    <p>get in on</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-center'>
                    <div className="mockup-phone ">
                        <div className="camera"></div>
                        <div className="display h-[400px] w-[200px]">
                            <div className="artboard artboard-demo phone-1 ">
                                <img src={pic1} alt="" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadEnjoy;