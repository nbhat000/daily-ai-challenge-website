import React from 'react';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <h2 className="stats-title">
                    Be Part of the First 1,000 AI Builders
                </h2>
                <p className="stats-subtitle">
                    Daily AI Challenge is where developers, designers, and makers sharpen their skills together. Start now and grow with the very first wave.
                </p>
                <div className="community-avatars">
                    <div className="avatar-circle">AB</div>
                    <div className="avatar-circle">CD</div>
                    <div className="avatar-circle">EF</div>
                    <div className="avatar-circle">GH</div>
                    <div className="avatar-circle">IJ</div>
                    <div className="avatar-circle">KL</div>
                    <div className="avatar-circle">MN</div>
                    <div className="avatar-circle">OP</div>
                </div>
                <div className="live-counter">
                    <span className="counter-number">237</span>
                    <span className="counter-text">joined this week</span>
                </div>
            </div>
        </section>
    );
};

export default Stats;
