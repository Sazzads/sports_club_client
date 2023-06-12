import React from 'react';
import Carousel from './Carousel ';
import ExtraSection from './ExtraSection';

import PopularInstructor from './PopularInstructor';
import PopularClass from './PopularClass';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;