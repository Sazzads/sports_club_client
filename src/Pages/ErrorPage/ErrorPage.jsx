import React from 'react';
import pic from '../../assets/error.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center '>
            <div>
                <motion.div
                    className="box"
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 180, 300, 360, 360],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    <img src={pic} alt="" />
                </motion.div>
            <Link className='btn btn-warning' to='/'>Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;