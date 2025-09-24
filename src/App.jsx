import React, { useEffect } from 'react';
import './styles.css';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { initScrollAnimations } from './utils/scrollObserver';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ValuePropositions from './components/ValuePropositions';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
    useEffect(() => {
        initScrollAnimations();
    }, []);

    return (
        <DarkModeProvider>
            <div className="App">
                <Header />
                <Hero />
                <Stats />
                <ValuePropositions />
                <Features />
                <CTA />
                <Footer />
                <BackToTop />
            </div>
        </DarkModeProvider>
    );
}

export default App;
