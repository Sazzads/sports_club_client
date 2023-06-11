import React from 'react';
import Carousel from './Carousel ';
import ExtraSection from './ExtraSection';
import { motion } from "framer-motion"
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            
            {/* <div className='p-10 text-center bg-red-400'>
                <motion.div
                    className="box"
                    whileHover={{ scale: [null, 0.9, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    jahnsdfbnawefbn
                </motion.div>
            </div> */}

            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;