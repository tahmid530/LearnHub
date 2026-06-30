import React from 'react';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import WhyLearnHub from './WhyLearnHub/WhyLearnHub';
import LearningProcess from './LearningProcess/LearningProcess';
import StudentTestimonials from './StudentTestimonials/StudentTestimonials';
import FAQ from './FAQ/FAQ';
import CTA from './CTA/CTA';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Stats></Stats>
            <FeaturedCourses></FeaturedCourses>
            <WhyLearnHub></WhyLearnHub>
            <LearningProcess></LearningProcess>
            <StudentTestimonials></StudentTestimonials>
            <FAQ></FAQ>
            <CTA></CTA>
        </div>
    );
};

export default Home;