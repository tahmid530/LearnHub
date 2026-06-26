import React from 'react';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import WhyLearnHub from './WhyLearnHub/WhyLearnHub';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Stats></Stats>
            <FeaturedCourses></FeaturedCourses>
            <WhyLearnHub></WhyLearnHub>
        </div>
    );
};

export default Home;