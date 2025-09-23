import React from 'react';
import RotatingText from './RotatingText';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-left">
                            {/* AI Project Showcase Cards */}
                            <div className="project-showcase">
                                {/* Day 1 Project */}
                                <div className="project-card project-card-1">
                                    <div className="project-header">
                                        <div className="day-badge day-1">Day 1</div>
                                        <div className="project-title">AI Habit Tracker</div>
                                    </div>
                                    <div className="project-description">Build a complete AI-powered habit tracking web app</div>
                                    <div className="project-mockup">
                                        <div className="mockup-screen">
                                            <div className="mockup-header">
                                                <div className="mockup-dots">
                                                    <span></span><span></span><span></span>
                                                </div>
                                                <div className="mockup-title">HabitAI</div>
                                            </div>
                                            <div className="mockup-content">
                                                <div className="feature-item">
                                                    <div className="feature-name">AI Analysis</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                                <div className="feature-item">
                                                    <div className="feature-name">Smart Suggestions</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                                <div className="feature-item">
                                                    <div className="feature-name">Progress Tracking</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-tech">OpenAI API + React</div>
                                    <div className="project-status completed">✅ Completed</div>
                                </div>

                                {/* Day 15 Project */}
                                <div className="project-card project-card-2">
                                    <div className="project-header">
                                        <div className="day-badge day-15">Day 15</div>
                                        <div className="project-title">Smart Email Assistant</div>
                                    </div>
                                    <div className="project-description">Create an AI email assistant that suggests responses</div>
                                    <div className="project-mockup">
                                        <div className="mockup-screen">
                                            <div className="mockup-header">
                                                <div className="mockup-dots">
                                                    <span></span><span></span><span></span>
                                                </div>
                                                <div className="mockup-title">EmailAI</div>
                                            </div>
                                            <div className="mockup-content">
                                                <div className="feature-item">
                                                    <div className="feature-name">Email Analysis</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                                <div className="feature-item">
                                                    <div className="feature-name">Response Suggestions</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                                <div className="feature-item">
                                                    <div className="feature-name">Auto-Categorization</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-tech">Claude API + Node.js</div>
                                    <div className="project-status in-progress">🔄 In Progress</div>
                                </div>

                                {/* Day 30 Project */}
                                <div className="project-card project-card-3">
                                    <div className="project-header">
                                        <div className="day-badge day-30">Day 30</div>
                                        <div className="project-title">AI Code Reviewer</div>
                                    </div>
                                    <div className="project-description">Develop an AI tool that reviews code and suggests improvements</div>
                                    <div className="project-mockup">
                                        <div className="mockup-screen">
                                            <div className="mockup-header">
                                                <div className="mockup-dots">
                                                    <span></span><span></span><span></span>
                                                </div>
                                                <div className="mockup-title">CodeAI</div>
                                            </div>
                                            <div className="mockup-content">
                                                <div className="feature-item">
                                                    <div className="feature-name">Code Analysis</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                                <div className="feature-item">
                                                    <div className="feature-name">Quality Scoring</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                                <div className="feature-item">
                                                    <div className="feature-name">Improvement Tips</div>
                                                    <div className="feature-status">✓</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-tech">GPT-4 + Python</div>
                                    <div className="project-status goal">🎯 Goal</div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-right">
                            <h1 className="hero-title">
                                <div className="hero-title-line-1">Become a Better AI</div>
                                <div className="hero-title-line-2">
                                    <RotatingText
                                        texts={['Developer', 'Builder', 'Prototyper']}
                                        mainClassName="rotating-text-purple-bg"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </div>
                                <div className="hero-title-line-3">in 30 Days</div>
                            </h1>
                            <p className="hero-subtitle">
                                Daily AI is a series of <mark>AI Challenges</mark> and <mark>Surprise Rewards</mark> sent out every day.
                            </p>
                            <button type="button" className="submit-button" onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}>Start the Challenge for Free</button>
                            <p className="disclaimer">No Spam. No Affiliates. No Data Sharing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chevron Down */}
            <div className="chevron-down" onClick={() => document.querySelector('.stats-section').scrollIntoView({ behavior: 'smooth' })}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </>
    );
};

export default Hero;