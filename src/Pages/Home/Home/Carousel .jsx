import React from 'react';
import pic1 from '../../../assets/pic1.jpg';
import pic2 from '../../../assets/pic2.jpg';
import pic3 from '../../../assets/pic3.jpg';
import pic4 from '../../../assets/pic4.jpg';

const Carousel = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-[700px] ">
                <div id="item1" className="carousel-item w-full relative">
                    <img src={pic1} className="w-full" />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-30 bg-black text-white p-4'>
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Unleash Your Passion for Sports with Sports Club</h2>
                            <p>Discover a wide range of sports programs, state-of-the-art facilities, expert coaching, and a supportive environment that will help you excel in your chosen discipline. Whether you're a beginner or a seasoned pro</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src={pic2} className="w-full" />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-30 bg-black text-white p-4'>
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Unleash Your Passion for Sports with Sports Club</h2>
                            <p>Discover a wide range of sports programs, state-of-the-art facilities, expert coaching, and a supportive environment that will help you excel in your chosen discipline. Whether you're a beginner or a seasoned pro</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src={pic3} className="w-full" />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-30 bg-black text-white p-4'>
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Unleash Your Passion for Sports with Sports Club</h2>
                            <p>Discover a wide range of sports programs, state-of-the-art facilities, expert coaching, and a supportive environment that will help you excel in your chosen discipline. Whether you're a beginner or a seasoned pro</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src={pic4} className="w-full" />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-30 bg-black text-white p-4'>
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-xl md:text-6xl'>Unleash Your Passion for Sports with Sports Club</h2>
                            <p>Discover a wide range of sports programs, state-of-the-art facilities, expert coaching, and a supportive environment that will help you excel in your chosen discipline. Whether you're a beginner or a seasoned pro</p>
                            <button className="btn">See More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;