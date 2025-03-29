import React from 'react';
import '../styles/about.css'; // Import the external CSS file

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img
                        src="https://img.freepik.com/free-photo/clinical-reception-with-waiting-room-facility-lobby-registration-counter-used-patients-with-medical-appointments-empty-reception-desk-health-center-checkup-visits_482257-51247.jpg?t=st=1742924186~exp=1742927786~hmac=8b39b71b1a40ace4e8e360d84eda1905b6e2f2d948046ca7a896ef13612f1037&w=996"
                        alt="True Care Health Clinic"
                        className="clinic-image"
                    />
                </div>
                <div className="about-text">
                    <h2 className="about-heading">True Care Health Clinic</h2>
                    <p className="about-description">
                        At True Care Health Clinic, we are committed to providing high-quality healthcare with a
                        personalized approach. Our team of experienced doctors, nurses, and medical professionals
                        work together to ensure that every patient receives the best care possible. We pride ourselves
                        on our compassionate and dedicated approach to health, making sure that every individual is treated
                        with respect and care.
                    </p>
                    <p className="about-mission">
                        <strong>Our Mission:</strong> To provide accessible, expert, and compassionate healthcare for
                        individuals and families. We are dedicated to promoting health and wellness in our community.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
