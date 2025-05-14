import React from 'react';
import '../styles/login.css'
import { NavLink, useNavigate } from 'react-router';
import { api } from '../utils/api';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/authSlice';
import { setJwtToken } from '../helpers/setJwtToken';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        try {
            const loginResponse = await api.post('login', {
                email: data.email,
                password: data.password,
            });

            console.log(loginResponse?.data); // Handle successful response
            alert('Login succcessful')
            dispatch(setLogin(true));
            setJwtToken(loginResponse?.data?.token);
            navigate('/');
        } catch (error) {
            if (error.status === 401) {
                alert('Invalid username or password');
                // navigate('/register');
            }
            else {
                console.error('Unexpected error:', error);
                alert('Something went wrong. Please try again later.');
            }
        }

        // Add your login submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="loginContainer">
            <div className="login-form">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
                    <input type="email" name='email' placeholder="Enter your email" required />
                    <input type="password" name='password' placeholder="Enter your password" required />
                    <input type="submit" className="button" value="Login" />
                </form>
                <div className="signupContainer">
                    <p className="signupPredefinedText">
                        Don't have an account?{' '}
                    </p>
                    <NavLink to={'/register'} end>Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
