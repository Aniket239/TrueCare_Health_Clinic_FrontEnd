import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../styles/landingPage.css';

const BannerCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Healthcare Services"
                />
                <Carousel.Caption>
                    <h3>Comprehensive Healthcare at Your Service</h3>
                    <p>Providing expert care with compassion, every step of the way. Your health is our top priority.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Healthcare Professionals"
                />
                <Carousel.Caption>
                    <h3>Expert Doctors, Compassionate Care</h3>
                    <p>Our team of experienced professionals is dedicated to ensuring your well-being and providing personalized treatments.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Healthy Lifestyle"
                />
                <Carousel.Caption>
                    <h3>Your Path to Better Health Starts Here</h3>
                    <p>With state-of-the-art facilities and patient-centered care, we’re committed to helping you achieve optimal health.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;
