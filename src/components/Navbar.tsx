import React, { useState } from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="nav-left">
                <img src="../src/assets/logo.jpg" alt="Logo" className="logo" />
            </div>

            <ul className={`nav-menu ${menuOpen ? 'menu-active' : ''}`}>
                <li><NavLink to={'/'} end>HOME</NavLink></li>
                <li className="dropdown">
                    <NavLink to="/departments" className="dropdown-toggle" end>DEPARTMENTS <i className="fa-solid fa-chevron-down"></i></NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/department/cardiology" end>Cardiology</NavLink></li>
                        <li><NavLink to="/department/psychology" end>Psychology</NavLink></li>
                        <li><NavLink to="/department/dental" end>Dental Care</NavLink></li>
                        <li><NavLink to="/department/ENT" end>ENT</NavLink></li>
                        <li><NavLink to="/department/dermatology" end>Dermatology</NavLink></li>
                        <li><NavLink to="/department/generalMedicine" end>General Medicine</NavLink></li>
                        <li><NavLink to="/department/neurology" end>Neurology</NavLink></li>
                        <li><NavLink to="/department/gynaecology" end>Gynaecology</NavLink></li>
                        <li><NavLink to="/department/urology" end>Urology</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/" end>DOCTORS</NavLink></li>
                <li><NavLink to="/" end>ABOUT</NavLink></li>
            </ul>

            <div className="nav-right">
                <div className="profile">
                    <NavLink to={'/login'} end>Login</NavLink>
                </div>
                <button className="appointment-btn">Make an Appointment</button>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </div>
        </nav>
    );
};
