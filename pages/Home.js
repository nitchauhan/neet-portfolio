import style from '../styles/Home.module.css';
import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${style.main}`}>
            <div onClick={toggleTheme}>
                <div className={style.themeIconContainer}>
                    <FaSun
                        className={`${style.themeIcon} ${
                            theme === 'light' ? style.hideIcon : style.showIcon
                        }`}
                    />
                    <FaMoon
                        className={`${style.themeIcon} ${
                            theme === 'dark' ? style.hideIcon : style.showIcon
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
