import React from 'react';
import ThemeToggler from '../components/ThemeToggler';
import style from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={`${style.main}`}>
            <div className={style.navbar}>
                <ThemeToggler />
            </div>
        </div>
    );
};

export default Home;
