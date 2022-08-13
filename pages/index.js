import React from 'react';
import Home from './Home';
import ThemeProvider from '../context/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    );
};

export default App;
