import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../utils/api';
import { setLogin } from '../redux/slices/authSlice';
import { setJwtToken } from '../helpers/setJwtToken';

export const Navbar = () => {
    const loggedIn = useSelector((state: any) => state.auth.loggedIn);
    const [menuOpen, setMenuOpen] = useState(false);
    const [departments, setDepartments] = useState<any>(null); 
    const dispatch = useDispatch();
    useEffect(() => {
        getDepartments();
        getUser();
    }, [])

    const getDepartments = async () =>{
        try {
            const departmentsData = await api.get('departments');
            console.log('====================================');
            console.log(departmentsData?.data);
            console.log('====================================');
            setDepartments(departmentsData?.data?.data)
        } catch (error) {
            console.error(error.response);
        }
    }

    const getUser = async () => {
        try {
            const userResponse = await api.get('user');
            console.log('====================================');
            console.log(userResponse);
            console.log('====================================');
            dispatch(setLogin(true));
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            dispatch(setLogin(false));
            setJwtToken('');
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
                                {departments && departments.map((department:any)=>{
                                    return(
                                        <li><NavLink to={`/department/${department?.slug}`}>{department?.name}</NavLink></li>
                                    )
                                })}
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
