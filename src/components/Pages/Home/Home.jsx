import React from 'react';
import Banner from './Banner';
import StatsSection from './StatesSection';
import CategoriesSection from './CategoriesSection';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <CategoriesSection></CategoriesSection>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;