import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="testimonials-title">Here's What You'll Get in 30 Days</h2>
                <div className="value-props-grid">
                    <div className="value-prop-card">
                        <div className="value-prop-icon">📱</div>
                        <h3 className="value-prop-title">Portfolio Projects</h3>
                        <p className="value-prop-description">Each challenge creates something real that you can share and showcase in your portfolio.</p>
                    </div>
                    <div className="value-prop-card">
                        <div className="value-prop-icon">📅</div>
                        <h3 className="value-prop-title">Daily Practice</h3>
                        <p className="value-prop-description">30 bite-sized challenges designed to fit in under 1 hour per day.</p>
                    </div>
                    <div className="value-prop-card">
                        <div className="value-prop-icon">💻</div>
                        <h3 className="value-prop-title">Learn By Doing</h3>
                        <p className="value-prop-description">Skip the theory and learn by building, testing, and shipping real projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
