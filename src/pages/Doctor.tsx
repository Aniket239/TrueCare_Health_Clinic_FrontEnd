import React, { useEffect, useState } from 'react';
import '../styles/doctor.css';  // Ensure you have a corresponding CSS file for styling
import { useParams } from 'react-router';
import { api } from '../utils/api';

const Doctor = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        getDoctor();
    }, [])

    const getDoctor = async () =>{
        try {
            const doctorResponse = await api.get(`doctor/${doctorId}`);
            console.log('====================================');
            console.log(doctorResponse?.data);
            console.log('====================================');
            setDoctor(doctorResponse?.data?.data);
        } catch (error) {
            console.error(error.response);
            
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted', formData);
        setFormSubmitted(true); // Simulating the success of form submission
    };

    return (
        <div className="doctor-container">
            {/* Header Section */}
            <header className="doctor-header">
                <div className="doctor-image-container">
                    <img
                        src={doctor?.profile_image}  // Replace with actual doctor image URL
                        alt="Doctor"
                        className="doctor-image"
                    />
                </div>
                <div className="doctor-info">
                    <h1>{doctor?.name}</h1>
                    <p className="department">Department of {doctor?.department?.name}</p>
                </div>
            </header>

            {/* About Section */}
            <section className="doctor-about-section">
                <h2>About {doctor?.name}</h2>
                <p>{doctor?.about}</p>
            </section>

            {/* Doctor Credentials Section */}
            <section className="credentials-section">
                <h2>Credentials & Qualifications</h2>
                <div className="credentials-container">
                    <div className="credential-card">
                        <h3>Certified in {doctor?.department?.name}</h3>
                    </div>
                    <div className="credential-card">
                        <h3>{doctor?.experience}+ Years Experience</h3>
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section className="enquiry-form-section">
                {!formSubmitted &&
                    <img className='enquiry-form-image' src='https://img.freepik.com/free-vector/medical-checkup-concept-illustration_114360-25989.jpg?t=st=1743350718~exp=1743354318~hmac=ca76482417b3fff954f7d44ae34a61016ad366aadc4ce7c24b95f98c75a8156d&w=740' />
                }
                {formSubmitted ? (
                    <div className="form-submitted-message">
                        <h3>Appointment Successfully Booked!</h3>
                        <p>Thank you for booking an appointment with Dr. John Doe. We will contact you shortly.</p>
                        <img className='enquiry-form-image' src='https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-29696.jpg?t=st=1743351201~exp=1743354801~hmac=48d10db8400307d041b61010517759e824a3b26d54058506f998d5a59f365c4a&w=740' />
                    </div>
                ) : (
                    <form className="enquiry-form" onSubmit={handleSubmit}>
                        <h2>Book an Appointment</h2>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <button className='submitButton' type="submit">Submit</button>
                    </form>
                )}
            </section>
        </div>
    );
};

export default Doctor;
