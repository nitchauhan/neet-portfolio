import Head from 'next/head';
import React, { Fragment } from 'react';
import AboutMeSection from '../components/AboutMeSection';
import IntroSection from '../components/IntroSection';
import SocialLinksSection from '../components/SocialLinksSection';
import TechStackSection from '../components/TechStackSection';
import ThemeToggler from '../components/ThemeToggler';
import WorkHistorySection from '../components/WorkHistorySection';
import style from '../styles/Home.module.css';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Harsh Patel | Full-Stack Web Developer</title>
            </Head>

            <div className={style.main}>
                <div className={style.navbar}>
                    <ThemeToggler />
                </div>

                <div className={`${style.detailsSection} container`}>
                    <IntroSection />
                    <SocialLinksSection />
                    <AboutMeSection />
                    <TechStackSection />
                    <WorkHistorySection />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
