import React, { useEffect, useState } from 'react';
import '../styles/register.css';

const Register = () => {
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        // Set the max date as today's date (in yyyy-mm-dd format)
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setMaxDate(formattedDate);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className='registerContainer'>
            <div className="form">
                <p className="title">Registration</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" placeholder="Enter your first name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" placeholder="Enter your last name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="tel" placeholder="Enter your phone number" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" placeholder="Confirm your password" required />
                        </div>

                        <div className="gender-details">
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label>
                                    <input type="radio" name="gender" required />
                                    <span className="dot"></span> <p className='genderText'>Male</p>
                                </label>
                                <label>
                                    <input type="radio" name="gender" required />
                                    <span className="dot"></span> <p className='genderText'>Female</p>
                                </label>
                                <label>
                                    <input type="radio" name="gender" required />
                                    <span className="dot"></span> <p className='genderText'>Other</p>
                                </label>
                            </div>
                        </div>

                        <div className="age-container">
                            <label>Age</label>
                            <input type="date" max={maxDate} required />
                        </div>
                    </div>

                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
