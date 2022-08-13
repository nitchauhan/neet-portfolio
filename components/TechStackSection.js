import style from '../styles/Home.module.css';
import MyData from '../data/myDetails';
import React from 'react';

const TechStackSection = () => {
    return (
        <section className={`${style.techStackSectionContainer} ${style.sectionContainer}`}>
            <div className={style.detailsHeading}>Tech Stack</div>

            <div className={style.techStackDetails}>
                {MyData.techStack.map((techStack, index) => {
                    return (
                        <div key={index} className={style.techStackItem}>
                            {techStack}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechStackSection;
