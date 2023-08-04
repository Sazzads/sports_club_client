import React from 'react';
import Carousel from './Carousel ';
import ExtraSection from './ExtraSection';

import PopularInstructor from './PopularInstructor';
import PopularClass from './PopularClass';
import LearnFromBest from './LearnFromBest';
import Training from './Training';
import DownloadEnjoy from './DownloadEnjoy';
import Feedback from './Feedback';
import NewsEvents from './NewsEvents';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <PopularClass></PopularClass>
            <LearnFromBest></LearnFromBest>
            <PopularInstructor></PopularInstructor>
            <Training></Training>
            <DownloadEnjoy></DownloadEnjoy>
            <Feedback></Feedback>
            <NewsEvents></NewsEvents>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;