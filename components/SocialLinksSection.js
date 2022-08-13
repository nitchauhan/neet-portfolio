import style from '../styles/Home.module.css';
import MyData from '../data/myDetails';
import React from 'react';

const SocialLinksSection = () => {
    return (
        <section className={`${style.socialLinksSectionContainer} ${style.sectionContainer}`}>
            {MyData.socialLinks.map((socialLink, index) => {
                return (
                    <a
                        href={socialLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className={style.socialLink}
                    >
                        {socialLink.title}
                    </a>
                );
            })}
        </section>
    );
};

export default SocialLinksSection;
