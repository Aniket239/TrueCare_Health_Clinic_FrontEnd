import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { api } from '../utils/api';

export const Navbar = () => {
    const loggedIn = useSelector((state: any) => state.auth.loggedIn);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () =>{
        try {
            const userResponse = api.get('user');
            console.log('====================================');
            console.log(userResponse);
            console.log('====================================');
        } catch (error) {
            
        }
    }
    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav">
            <div className="navbar-container">
                <div className="nav-left">
                    <NavLink to="/">
                        <img src="../src/assets/logo.jpg" alt="Logo" className="logo" />
                    </NavLink>
                </div>

                <div className={`nav-center ${menuOpen ? 'menu-active' : ''}`}>
                    <ul className="nav-menu">
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li className="dropdown">
                            <NavLink to="/departments" className="dropdown-toggle" end>
                                Departments <i className="fa-solid fa-chevron-down"></i>
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/department/cardiology" end>Cardiology</NavLink></li>
                                <li><NavLink to="/department/psychology" end>Psychology</NavLink></li>
                                <li><NavLink to="/department/dental" end>Dental Care</NavLink></li>
                                <li><NavLink to="/department/ent" end>ENT</NavLink></li>
                                <li><NavLink to="/department/dermatology" end>Dermatology</NavLink></li>
                                <li><NavLink to="/department/general medicine" end>General Medicine</NavLink></li>
                                <li><NavLink to="/department/neurology" end>Neurology</NavLink></li>
                                <li><NavLink to="/department/gynaecology" end>Gynaecology</NavLink></li>
                                <li><NavLink to="/department/urology" end>Urology</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/" end>Doctors</NavLink></li>
                        <li><NavLink to="/" end>About</NavLink></li>
                    </ul>
                </div>

                <div className="nav-right">
                    {loggedIn ? (
                        <NavLink to="/account" end>
                            <img className="account-icon" src="src/assets/account.png" alt="Account" />
                        </NavLink>
                    ) : (
                        <NavLink to="/login" className="login-link">Login</NavLink>
                    )}
                    <button className="appointment-btn">Make an Appointment</button>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};
