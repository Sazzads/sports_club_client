import React from 'react';
import Carousel from './Carousel ';
import ExtraSection from './ExtraSection';

import PopularInstructor from './PopularInstructor';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>


            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;