import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src="/daily-ai-logo-small.png" alt="Daily AI Challenge Logo" className="logo-image" />
                        Daily AI Challenge
                    </div>
                    <div className="header-right">
                        {/* Dark mode toggle hidden for now */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
