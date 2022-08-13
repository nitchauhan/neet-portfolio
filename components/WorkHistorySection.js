import style from '../styles/Home.module.css';
import MyData from '../data/myDetails';
import React from 'react';

const WorkHistorySection = () => {
    return (
        <section className={`${style.workHistorySectionContainer} ${style.sectionContainer}`}>
            <div className={style.detailsHeading}>Work History</div>

            <div className={style.workHistoryDetailsContainer}>
                {MyData.workHistory.map((workHistory, index) => {
                    return (
                        <div key={index} className={style.workHistory}>
                            <div className={style.workHistoryDetails}>
                                <div className={style.position}>🚧 {workHistory.position}</div>
                                <p className={style.place}>
                                    {workHistory.company} | {workHistory.place}
                                </p>
                                <p className={style.duration}>{workHistory.duration}</p>
                            </div>

                            <ul className={style.details}>
                                {workHistory.details.map((detail, index) => {
                                    return (
                                        <li key={index} className={style.detail}>
                                            {detail}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorkHistorySection;
