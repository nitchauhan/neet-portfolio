import style from '../styles/Home.module.css';
import MyData from '../data/myDetails';
import React from 'react';

const AboutMeSection = () => {
    return (
        <section className={`${style.aboutMeSectionContainer} ${style.sectionContainer}`}>
            <div className={style.detailsHeading}>About Me</div>
            <div className={style.aboutMeDetails}>{MyData.aboutMe}</div>
        </section>
    );
};

export default AboutMeSection;
