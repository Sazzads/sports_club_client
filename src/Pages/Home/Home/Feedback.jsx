import React from 'react';
import { motion } from 'framer-motion';
import {  FaStar, FaStarHalf, FaUser } from 'react-icons/fa';

const Feedback = () => {
    return (
        <div>
            <motion.div
                className="box"
                whileHover={{ scale: [null, 0.9, 1.4] }}
                transition={{ duration: 0.3 }}>
                <h2 className="text-center font-semibold uppercase text-5xl my-8">What our students Say</h2>
            </motion.div>
            <div className='grid md:grid-cols-3 gap-8 mx-auto my-10'>
                <div className='p-5 bg-slate-50 hover:bg-blue-200'>
                    <div className='flex gap-2'>
                        <div className="w-10 rounded-full">
                            <FaUser className='w-10 h-10'></FaUser>
                        </div>
                        <div>
                            <h6>Cricketer</h6>
                            <p className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        </div>
                    </div>
                    <p className='text-justify mt-3'>We get great feedback for our cricket activities from parents
                        and celebrity cricket coaches but best of all from the children themselves.</p>
                </div>

                <div className='p-5 bg-slate-50 hover:bg-blue-200'>
                    <div className='flex gap-2'>
                        <div className="w-10 rounded-full">
                            <FaUser className='w-10 h-10'></FaUser>
                        </div>
                        <div>
                            <h6>Footballer</h6>
                            <p className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        </div>
                    </div>
                    <p className='text-justify mt-3'>We get great feedback for our cricket activities from parents
                        and celebrity cricket coaches but best of all from the children themselves.</p>
                </div>

                <div className='p-5 bg-slate-50 hover:bg-blue-200'>
                    <div className='flex gap-2'>
                        <div className="w-10 rounded-full">
                            <FaUser className='w-10 h-10'></FaUser>
                        </div>
                        <div>
                            <h6>Basketballer</h6>
                            <p className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></p>
                        </div>
                    </div>
                    <p className='text-justify mt-3'>We get great feedback for our cricket activities from parents
                        and celebrity cricket coaches but best of all from the children themselves.</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;