import React from 'react';
import AboutMeSection from '../components/AboutMeSection';
import IntroSection from '../components/IntroSection';
import SocialLinksSection from '../components/SocialLinksSection';
import TechStackSection from '../components/TechStackSection';
import ThemeToggler from '../components/ThemeToggler';
import style from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={style.main}>
            <div className={style.navbar}>
                <ThemeToggler />
            </div>

            <div className={`${style.detailsSection} container`}>
                <IntroSection />
                <SocialLinksSection />
                <AboutMeSection />
                <TechStackSection />
            </div>
        </div>
    );
};

export default Home;
