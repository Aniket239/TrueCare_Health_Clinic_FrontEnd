import React, { useEffect, useState } from 'react';
import '../styles/departmentsSection.css'; // Import the external CSS file
import { NavLink } from 'react-router';
import { api } from '../utils/api';

// Sample departments data (10 departments)
const departmentsData = [
    {
        name: 'Cardiology',
        description: 'Expert care for heart conditions, from preventive to complex surgeries.',
        image: 'https://img.freepik.com/free-vector/high-blood-pressure-abstract-concept-illustration_335657-4603.jpg?t=st=1742923020~exp=1742926620~hmac=20db9b005775617d0c12d6281a305b6e6bbfc896f9b55c4c43ba3d3dffb5cccc&w=740',
    },
    {
        name: 'Psychology',
        description: 'Comprehensive mental health support and therapy for individuals of all ages.',
        image: 'https://img.freepik.com/free-vector/psychology-abstract-concept-illustration_335657-4605.jpg?t=st=1742923120~exp=1742926720~hmac=d456ab61c8e932ac9f6f28a426a88339d98a7a421fcf58e5c9f2d36bc36e9248&w=740',
    },
    {
        name: 'Dental Care',
        description: 'Professional dental services including cleanings, treatments, and cosmetic procedures.',
        image: 'https://img.freepik.com/free-vector/dentist-man-examining-patient-teeth_1308-94382.jpg?t=st=1743328737~exp=1743332337~hmac=85f022d879c6806d5adedb2bf74b71c6c741da3c1eae4f5fb3e253eedfd32d35&w=826',
    },
    {
        name: 'ENT',
        description: 'Care for ear, nose, and throat conditions, including hearing problems and sinus issues.',
        image: 'https://img.freepik.com/free-vector/gradient-rhinoplasty-illustration_52683-82841.jpg?t=st=1743328677~exp=1743332277~hmac=50991f6165f7237c15828192272b635715047340310c1e13315b19294a4a7f9a&w=996'
    },
    {
        name: 'Dermatology',
        description: 'Specialized in treating skin conditions, cosmetic dermatology, and more.',
        image: 'https://img.freepik.com/free-vector/acne-treatment-concept-illustration_114360-9177.jpg?t=st=1742923131~exp=1742926731~hmac=1ba2cf8acb1f32bc063f79738f223a95cb4067f3f76ea029e5fc9438d819cc10&w=740',
    },
    {
        name: 'General Medicine',
        description: 'Comprehensive primary care for common illnesses, preventive health, and diagnostics.',
        image: 'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?t=st=1743328795~exp=1743332395~hmac=e03742211e5db4fae9f3a952bf619a02eecc0d5eb8cd17fb9b1999c5b5481239&w=996',
    },
    {
        name: 'Neurology',
        description: 'Expert treatment for brain, spine, and nervous system conditions.',
        image: 'https://img.freepik.com/free-vector/doctors-doing-medical-research-human-brain-testing-blood-samples_74855-10610.jpg?t=st=1742923669~exp=1742927269~hmac=6f55b2c435168071ded46a571da668c1563c084bb3b49d7c2b35f4a7021a4471&w=996',
    },
    {
        name: 'Gynaecology',
        description: 'Specialized care for women’s health, including reproductive and hormonal treatments.',
        image: 'https://img.freepik.com/free-vector/hand-drawn-menopause-illustration_23-2149355429.jpg?t=st=1743328849~exp=1743332449~hmac=75fb0b8369bdac12bd3fefecd3380adb348e429b67a75c60295f5501043582be&w=740',
    },
    {
        name: 'Urology',
        description: 'Comprehensive care for urinary tract and male reproductive health.',
        image: 'https://img.freepik.com/free-vector/gradient-urology-illustration_52683-98624.jpg?t=st=1742923890~exp=1742927490~hmac=6d34ce8376bf7a61d6912f89b77cc234a3bf0c75e6656736c858c106aa4f76e5&w=996',
    },
];

const DepartmentsSection = () => {
    const [departments, setDepartments] = useState<any>(null);
    useEffect(() => {
        getDepartments();
    }, [])
    
    const getDepartments = async () => {
        try {
            const departmentsData = await api.get('departments');
            console.log('====================================');
            console.log(departmentsData?.data);
            setDepartments(departmentsData?.data?.data);
            console.log('====================================');
        } catch (error) {
            console.error(error.response);
        }
    
    }
    
    return (
        <section className="departments-section">
            <h2 className="section-heading">Our Departments</h2>
            <div className="departments-grid">
                {departments && departments.map((department, index) => (
                    <div className="department-card" key={index}>
                        <NavLink className="department-card-link" to={`department/${department?.slug}`} end>
                            <div className="department-image-wrapper">
                                <img
                                    src={department?.departmentPicture}
                                    alt={department?.name}
                                    className="department-image"
                                />
                            </div>
                            <div className="department-info">
                                <h3 className="department-name">{department?.name}</h3>
                                <p className="department-description">{department?.description}</p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default DepartmentsSection;
