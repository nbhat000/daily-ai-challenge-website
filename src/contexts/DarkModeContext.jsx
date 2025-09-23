import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        // Force dark mode - no toggle button
        return true;
    });

    useEffect(() => {
        // Apply dark mode class to body
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        // Save to localStorage
        localStorage.setItem('darkMode', isDark.toString());
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
