import React from 'react';
import { motion } from 'framer-motion';
import pic1 from "../../../assets/event/pic1.jpg"
import pic2 from "../../../assets/event/pic2.jpg"
import pic3 from "../../../assets/event/pic3.jpg"
import pic4 from "../../../assets/event/pic4.jpg"
import pic5 from "../../../assets/event/pic5.jpg"
import pic6 from "../../../assets/event/pic6.jpg"
const NewsEvents = () => {

    return (
        <div className='my-10'>
            <motion.div
                className="box"
                whileHover={{ scale: [null, 0.9, 1.4] }}
                transition={{ duration: 0.3 }}>
                <h2 className="text-center font-semibold uppercase text-5xl my-8">Latest News And Events</h2>
            </motion.div>
            <div>
                <div className='grid md:grid-cols-2 gap-8 mx-auto my-10'>
                    <div>
                        <div>
                            <div className="carousel w-full">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src={pic3} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src={pic2} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img src={pic1} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img src={pic6} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a>
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid md:grid-cols-2 gap-7  mx-auto'>
                            <div className='mx-auto '>

                                <img src={pic4} className="w-100 h-100 transition duration-300 ease-in-out hover:scale-110" alt="Tailwind CSS  " />

                            </div>
                            <div className='mx-auto   '>

                                <img src={pic5} className="w-100 h-100 transition duration-300 ease-in-out hover:scale-110" alt="Tailwind CSS  " />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsEvents;


