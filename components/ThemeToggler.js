import React, { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';
import style from '../styles/Home.module.css';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div onClick={toggleTheme} className={style.themeIconContainer}>
            <BsFillSunFill
                className={`${style.themeIcon} ${
                    theme === 'light' ? style.hideIcon : style.showIcon
                }`}
            />
            <BsFillMoonFill
                className={`${style.themeIcon} ${
                    theme === 'dark' ? style.hideIcon : style.showIcon
                }`}
            />
        </div>
    );
};

export default ThemeToggler;
