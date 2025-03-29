import React from 'react';
import '../styles/departmentsSection.css'; // Import the external CSS file

// Sample departments data (10 departments)
const departmentsData = [
    {
        name: 'Cardiology',
        description: 'Expert care for heart conditions, from preventive to complex surgeries.',
        image: 'https://img.freepik.com/free-vector/high-blood-pressure-abstract-concept-illustration_335657-4603.jpg?t=st=1742923020~exp=1742926620~hmac=20db9b005775617d0c12d6281a305b6e6bbfc896f9b55c4c43ba3d3dffb5cccc&w=740',
    },
    {
        name: 'Dermatology',
        description: 'Specialized in treating skin conditions, cosmetic dermatology, and more.',
        image: 'https://img.freepik.com/free-vector/acne-treatment-concept-illustration_114360-9177.jpg?t=st=1742923131~exp=1742926731~hmac=1ba2cf8acb1f32bc063f79738f223a95cb4067f3f76ea029e5fc9438d819cc10&w=740',
    },
    {
        name: 'Pediatrics',
        description: 'Comprehensive healthcare for children, including vaccinations and emergency care.',
        image: 'https://img.freepik.com/free-vector/pediatrician-concept-illustration_114360-8805.jpg?t=st=1742923186~exp=1742926786~hmac=62cfabaa08147a47fb4afa5a753135f008bf49a78b7906c159e065098e605ff2&w=740',
    },
    {
        name: 'Orthopedics',
        description: 'Advanced care for bone, joint, and muscle disorders, with a focus on recovery.',
        image: 'https://img.freepik.com/free-vector/radiography-concept-illustration_114360-3403.jpg?t=st=1742923212~exp=1742926812~hmac=4a707b4b48716f9be0f4a854e3fd9e3c84b3ae4798a1744a75221bd7b118fc94&w=740',
    },
    {
        name: 'Neurology',
        description: 'Expert treatment for brain, spine, and nervous system conditions.',
        image: 'https://img.freepik.com/free-vector/doctors-doing-medical-research-human-brain-testing-blood-samples_74855-10610.jpg?t=st=1742923669~exp=1742927269~hmac=6f55b2c435168071ded46a571da668c1563c084bb3b49d7c2b35f4a7021a4471&w=996',
    },
    {
        name: 'Oncology',
        description: 'Comprehensive cancer care, including treatment and support for patients.',
        image: 'https://img.freepik.com/free-vector/breast-cancer-abstract-concept-illustration_335657-5015.jpg?t=st=1742923279~exp=1742926879~hmac=69e13c29c886066c4bef5a33ce98574d3a8dcd37fb4a5544dead4bd8e8ec455b&w=740',
    },
    {
        name: 'Gastroenterology',
        description: 'Specialized care for digestive system issues, from routine checkups to treatments.',
        image: 'https://img.freepik.com/free-vector/stomach-concept-illustration_114360-26298.jpg?t=st=1742923345~exp=1742926945~hmac=0690713fc2b22d1b480a43c28949948533dbd524e5f39e3f44bb93fddb52af2f&w=740',
    },
    {
        name: 'Endocrinology',
        description: 'Expert care for hormonal disorders and metabolic conditions.',
        image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-thyroid-illustration_23-2149279950.jpg?t=st=1742923781~exp=1742927381~hmac=d867371f46fe7850c793f278c6bce56f15cc3007f4f7339bca5f93ea7afbb19d&w=740',
    },
    {
        name: 'Urology',
        description: 'Comprehensive care for urinary tract and male reproductive health.',
        image: 'https://img.freepik.com/free-vector/gradient-urology-illustration_52683-98624.jpg?t=st=1742923890~exp=1742927490~hmac=6d34ce8376bf7a61d6912f89b77cc234a3bf0c75e6656736c858c106aa4f76e5&w=996',
    },
    {
        name: 'Ophthalmology',
        description: 'Expert vision care, including treatments for eye diseases and surgery.',
        image: 'https://img.freepik.com/free-vector/ophthalmologist-concept-illustration_114360-6411.jpg?t=st=1742923476~exp=1742927076~hmac=79fa552312beb0d7ab27a53c4699d399308411e61c5aafaeeff034f53eab6a4c&w=740',
    },
];

const DepartmentsSection = () => {
    return (
        <section className="departments-section">
            <h2 className="section-heading">Our Departments</h2>
            <div className="departments-grid">
                {departmentsData.map((department, index) => (
                    <div className="department-card" key={index}>
                        <div className="department-image-wrapper">
                            <img
                                src={department.image}
                                alt={department.name}
                                className="department-image"
                            />
                        </div>
                        <div className="department-info">
                            <h3 className="department-name">{department.name}</h3>
                            <p className="department-description">{department.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DepartmentsSection;
