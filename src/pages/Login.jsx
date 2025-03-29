import React from 'react';
import '../styles/login.css'
import { NavLink } from 'react-router';
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="loginContainer">
            <div className="login-form">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter your email" required />
                    <input type="password" placeholder="Enter your password" required />
                    <input type="submit" className="button" value="Login" />
                </form>
                <div className="signupContainer">
                    <p className="signupPredefinedText">
                        Don't have an account?{' '}
                        {/* <a href="/register" className="signup-link">Signup</a> */}
                    </p>
                    <NavLink to={'/register'} end>Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
