import React from 'react';
import { FaVideo } from "react-icons/fa";
import Lottie from "lottie-react";
import image from "./../../../../public/newScene.json"
const Training = () => {
    return (
        <div>
             <div className='grid md:grid-cols-2 mx-auto my-10'>
                <div className=' mx-auto  px-2 py-10'>
                    <FaVideo className='w-16 h-16 text-blue-500'/>
                    <h1 className='font-semibold uppercase text-4xl text-left'>We Provide all Training video technologies fo practice at Home</h1>
                </div>
                <div className=' mx-auto w-96'>
                    <Lottie animationData={image}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Training;