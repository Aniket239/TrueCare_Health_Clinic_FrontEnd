import React from 'react';
import '../styles/footer.css'; // Make sure to create this file for custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo or Clinic Name */}
                <div className="footer-company-details">
                    <div className='footer-icon-container'>
                        <img className="footer-logo" src="../src/assets/logo.jpg" alt="True Care Health Clinic" />
                    </div>
                    <h2>True Care Health Clinic</h2>
                    <p>Your Health, Our Priority</p>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>📞 (123) 456-7890</li>
                        <li>📧 contact@truecareclinic.com</li>
                        <li>📍 123 Health St., Wellness City</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>
                            <a href="https://facebook.com/TrueCareClinic" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/TrueCareClinic" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/TrueCareClinic" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2025 True Care Clinic. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
