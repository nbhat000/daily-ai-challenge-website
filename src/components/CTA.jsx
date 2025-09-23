import React from 'react';

const CTA = () => {
    return (
        <section id="signup" className="cta-section">
            <div className="container">
                <h2 className="cta-title">Become a Better AI Developer</h2>
                <p className="cta-subtitle">
                    Daily AI is a series of daily design challenges, design inspiration and neat surprise rewards.
                    Oh, and it's 100% free. Pretty cool, huh?
                </p>
                <form className="email-form">
                    <input type="email" placeholder="Enter your email" className="email-input" />
                    <button type="submit" className="submit-button">Get Started</button>
                </form>
                <p className="disclaimer">No Spam. No Affiliate Links. No data sharing.</p>
            </div>
        </section>
    );
};

export default CTA;
