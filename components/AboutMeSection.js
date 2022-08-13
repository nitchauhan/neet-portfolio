import style from '../styles/Home.module.css';
import MyData from '../data/myDetails';
import React from 'react';

const AboutMeSection = () => {
    return (
        <section className={`${style.aboutMeSectionContainer} ${style.sectionContainer}`}>
            <div className={style.detailsHeading}>About Me</div>

            <p className={style.totalExperience}>
                Total experience: {MyData.aboutMe.totalExperience} years
            </p>

            <p className={style.aboutMeDetails}>{MyData.aboutMe.details}</p>
        </section>
    );
};

export default AboutMeSection;
