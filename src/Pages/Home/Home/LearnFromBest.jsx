import React from 'react';
import { motion } from 'framer-motion';
import { FaFootballBall, FaBaseballBall, FaBasketballBall, FaGamepad, FaFutbol, FaGolfBall } from "react-icons/fa";
const LearnFromBest = () => {
    return (
        <div className='my-16'>
            <div className='w-2/3 mx-auto '>
                <motion.div
                    className="box"
                    whileHover={{ scale: [null, 0.9, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <h2 className="text-center font-semibold uppercase text-5xl my-8">Learn From the Best</h2>
                </motion.div>
                <h1 className='text-center'>Our online courses are developed in collaboration with industry professionals and are relevant to industry demands.
                    You will obtain a certified completion certificate recognized by industry experts after finishing an Online course. </h1>
            </div>
            <div className='grid md:grid-cols-6 gap-4 mx-auto my-10'>
                <div className=' mx-auto'><FaFootballBall className='w-20 h-20 text-gray-400 hover:text-red-300 transition duration-300 ease-in-out hover:scale-110'></FaFootballBall></div>
                <div className=' mx-auto'><FaBaseballBall className='w-20 h-20 text-gray-400 hover:text-red-300 transition duration-300 ease-in-out hover:scale-110'></FaBaseballBall></div>
                <div className=' mx-auto'><FaBasketballBall className='w-20 h-20 text-gray-400 hover:text-red-300 transition duration-300 ease-in-out hover:scale-110'></FaBasketballBall></div>
                <div className=' mx-auto'><FaGamepad className='w-20 h-20 text-gray-400 hover:text-red-300 transition duration-300 ease-in-out hover:scale-110'></FaGamepad></div>
                <div className=' mx-auto'><FaFutbol className='w-20 h-20 text-gray-400 hover:text-red-300 transition duration-300 ease-in-out hover:scale-110'></FaFutbol></div>
                <div className=' mx-auto'><FaGolfBall className='w-20 h-20 text-gray-400 hover:text-red-300 transition duration-300 ease-in-out hover:scale-110'></FaGolfBall></div>
            </div>

        </div>
    );
};

export default LearnFromBest;