import React from 'react';

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2 className="features-title">
                    Learn to <span className="accent-text">Improve Your Skills</span> & <span className="accent-text">Build Your Portfolio</span>
                </h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon">📧</div>
                        <h3 className="feature-title">Get Challenges</h3>
                        <p className="feature-description">You'll get a unique AI development challenge for 30 days (sent Monday - Friday)</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">📢</div>
                        <h3 className="feature-title">Share Your Work</h3>
                        <p className="feature-description">Interpret and then create your own AI solution to share on GitHub or Twitter with #dailyai</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">🎉</div>
                        <h3 className="feature-title">Earn Rewards</h3>
                        <p className="feature-description">Randomly earn rewards such as premium AI resources, course discount codes, and more!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
