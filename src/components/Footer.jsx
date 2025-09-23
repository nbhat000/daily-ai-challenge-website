import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">About Us</h3>
                        <p className="footer-description">Answers to common questions about Daily AI, how it works, and more.</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Sponsorship</h3>
                        <p className="footer-description">Learn how we can help your brand reach a niche AI developer audience.</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Be Featured</h3>
                        <p className="footer-description">Have an AI project you'd like to share with the world? Share and we might feature it.</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Follow Along</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon">𝕏</a>
                            <a href="#" className="social-icon">f</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Daily AI. All Rights Reserved. Owned by <strong><a href="https://www.linkedin.com/in/nikhilgbhat/" target="_blank" rel="noopener noreferrer">Nikhil Bhat</a></strong></p>
                    <p><a href="https://www.termsfeed.com/terms-service-generator/" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="https://www.freeprivacypolicy.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;