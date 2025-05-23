import React, { useEffect, useState } from 'react';
import '../styles/register.css';
import { api } from '../utils/api';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/authSlice';
import { setJwtToken } from '../helpers/setJwtToken';

const Register = () => {
    const [maxDate, setMaxDate] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        // Set the max date as today's date (in yyyy-mm-dd format)
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setMaxDate(formattedDate);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const dobTimestamp = new Date(data.dob).getTime() / 1000; // in seconds
        if (data.password !== data.confirmPassword) {
            alert('Password and confirm password does not match');
        }
        else {
            console.log('Form Data:', data);
            try {
                const registerResponse = await api.post('/register', {
                    "firstname": data.firstname,
                    "lastname": data.lastname,
                    "email": data.email,
                    "phoneNumber": data.phone,
                    "password": data.password,
                    "gender": data.gender,
                    "dob": dobTimestamp,
                });
                console.log('====================================');
                console.log(registerResponse);
                console.log('====================================');

                if (registerResponse.status === 200) {
                    // Registration successful, navigate to home
                    console.log(registerResponse?.data);
                    console.log('====================================');
                    console.log(registerResponse?.data?.token);
                    console.log('====================================');
                    dispatch(setLogin(true));
                    setJwtToken(registerResponse?.data?.token);
                    navigate('/');
                }

                // const apicheck = await api.get('/health');
                // console.log('====================================');
                // console.log(apicheck);
                // console.log('====================================');
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status === 400) {
                    navigate('/login');
                    alert('Email already registered. Please log in.');
                } else {
                    console.error('Unexpected error:', error.response);
                    alert('Something went wrong. Please try again later.');
                }
            }
        }
    };

    return (
        <div className='registerContainer'>
            <div className="form">
                <p className="title">Registration</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name</span>
                            <input type="text" name="firstname" placeholder="Enter your first name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name</span>
                            <input type="text" name='lastname' placeholder="Enter your last name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="email" name='email' placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="tel" name='phone' placeholder="Enter your phone number" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" name='password' placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" name='confirmPassword' placeholder="Confirm your password" required />
                        </div>

                        <div className="gender-details">
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label>
                                    <input type="radio" name="gender" value="male" required />
                                    <span className="dot"></span> <p className='genderText'>Male</p>
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="female" required />
                                    <span className="dot"></span> <p className='genderText'>Female</p>
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="other" required />
                                    <span className="dot"></span> <p className='genderText'>Other</p>
                                </label>
                            </div>
                        </div>

                        <div className="age-container">
                            <label>Date Of Birth</label>
                            <input type="date" name='dob' max={maxDate} required />
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
