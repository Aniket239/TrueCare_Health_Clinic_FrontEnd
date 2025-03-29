import React from 'react';
import '../styles/doctorSection.css'; // Import the external CSS file

// Sample doctors data
const doctorsData = [
    {
        name: 'Dr. Emily Roberts',
        specialty: 'Cardiologist',
        image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1742922249~exp=1742925849~hmac=8e2aacddf3a53a576a0288b2b0e427953b2f4dafe7d4d79466eda8cca9465370&w=996',
        description: 'Dr. Roberts has over 10 years of experience in treating heart-related conditions with a focus on preventive care.',
    },
    {
        name: 'Dr. John Smith',
        specialty: 'Dermatologist',
        image: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1742922213~exp=1742925813~hmac=a7578e42271e95fae5f55a9c2027b930c718bc6cc5b5917f74121c298e00bd7c&w=900',
        description: 'Dr. Smith is known for his expertise in skin care, helping patients with various skin conditions and cosmetic procedures.',
    },
    {
        name: 'Dr. Sarah Johnson',
        specialty: 'Pediatrician',
        image: 'https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?t=st=1742922273~exp=1742925873~hmac=03e45c1c84d6a8905ee20b7869942b7a34805ffca8f143aa02577795d0dc8829&w=996',
        description: 'Dr. Johnson provides compassionate care for children, specializing in preventive healthcare and pediatric emergencies.',
    },
    {
        name: 'Dr. Michael Lee',
        specialty: 'Orthopedic Surgeon',
        image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?t=st=1742922350~exp=1742925950~hmac=a4358910f569044afb30f89a182601a5c94eb78f76292154f3fbf75502ee7aef&w=996',
        description: 'Dr. Lee is a skilled orthopedic surgeon focusing on joint health, sports injuries, and complex surgeries.',
    },
];

const DoctorsSection = () => {
    return (
        <section className="doctors-section">
            <h2 className="section-heading">Meet Our Doctors</h2>
            <div className="doctors-grid">
                {doctorsData.map((doctor, index) => (
                    <div className="doctor-card" key={index}>
                        <div className="image-wrapper">
                            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                        </div>
                        <div className="doctor-info">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <p className="doctor-description">{doctor.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DoctorsSection;
