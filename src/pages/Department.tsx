import React from 'react'
import { useParams } from "react-router";
import '../styles/department.css';  // Include corresponding styles

const doctorsData = {
  cardiology: [
    { name: "Dr. John Doe", specialization: "Cardiologist", image: "/images/doctor1.jpg" },
    { name: "Dr. Jane Smith", specialization: "Cardiology Specialist", image: "/images/doctor2.jpg" },
    { name: "Dr. Sarah Miller", specialization: "Heart Surgeon", image: "/images/doctor3.jpg" },
    { name: "Dr. David Clark", specialization: "Cardiologist", image: "/images/doctor4.jpg" },
    { name: "Dr. Anna Turner", specialization: "Cardiologist", image: "/images/doctor5.jpg" },
    { name: "Dr. William Harris", specialization: "Electrophysiologist", image: "/images/doctor6.jpg" },
    { name: "Dr. Sophia Lee", specialization: "Heart Disease Specialist", image: "/images/doctor7.jpg" },
    { name: "Dr. Michael King", specialization: "Cardiology Specialist", image: "/images/doctor8.jpg" },
    { name: "Dr. Olivia Taylor", specialization: "Cardiologist", image: "/images/doctor9.jpg" },
    { name: "Dr. Daniel Moore", specialization: "Cardiac Rehabilitation", image: "/images/doctor10.jpg" }
  ],
  psychology: [
    { name: "Dr. Emily Brown", specialization: "Psychologist", image: "/images/doctor3.jpg" },
    { name: "Dr. Robert White", specialization: "Psychiatrist", image: "/images/doctor4.jpg" },
    { name: "Dr. Linda Walker", specialization: "Therapist", image: "/images/doctor11.jpg" },
    { name: "Dr. William Scott", specialization: "Clinical Psychologist", image: "/images/doctor12.jpg" },
    { name: "Dr. Jessica Green", specialization: "Child Psychologist", image: "/images/doctor13.jpg" },
    { name: "Dr. James Taylor", specialization: "Psychiatrist", image: "/images/doctor14.jpg" },
    { name: "Dr. Sarah Miller", specialization: "Counseling Psychologist", image: "/images/doctor15.jpg" },
    { name: "Dr. Andrew Evans", specialization: "Neuropsychologist", image: "/images/doctor16.jpg" },
    { name: "Dr. Nancy Hall", specialization: "Therapist", image: "/images/doctor17.jpg" },
    { name: "Dr. George Lewis", specialization: "Psychologist", image: "/images/doctor18.jpg" }
  ],
  dental: [
    { name: "Dr. Alice Green", specialization: "Dentist", image: "/images/doctor5.jpg" },
    { name: "Dr. Michael Blue", specialization: "Orthodontist", image: "/images/doctor6.jpg" },
    { name: "Dr. David Clark", specialization: "Dentist", image: "/images/doctor19.jpg" },
    { name: "Dr. Sarah Adams", specialization: "Pediatric Dentist", image: "/images/doctor20.jpg" },
    { name: "Dr. Sophia White", specialization: "Periodontist", image: "/images/doctor21.jpg" },
    { name: "Dr. Andrew King", specialization: "Oral Surgeon", image: "/images/doctor22.jpg" },
    { name: "Dr. Elizabeth Baker", specialization: "Cosmetic Dentist", image: "/images/doctor23.jpg" },
    { name: "Dr. Jason Taylor", specialization: "Implant Specialist", image: "/images/doctor24.jpg" },
    { name: "Dr. Maria Davis", specialization: "Dentist", image: "/images/doctor25.jpg" },
    { name: "Dr. James Brown", specialization: "Orthodontist", image: "/images/doctor26.jpg" }
  ],
  ENT: [
    { name: "Dr. Thomas Johnson", specialization: "ENT Specialist", image: "/images/doctor27.jpg" },
    { name: "Dr. Elizabeth Moore", specialization: "ENT Surgeon", image: "/images/doctor28.jpg" },
    { name: "Dr. Michael Wilson", specialization: "ENT Consultant", image: "/images/doctor29.jpg" },
    { name: "Dr. Sarah Davis", specialization: "Audiologist", image: "/images/doctor30.jpg" },
    { name: "Dr. William Roberts", specialization: "ENT Specialist", image: "/images/doctor31.jpg" },
    { name: "Dr. Lisa Lee", specialization: "ENT Surgeon", image: "/images/doctor32.jpg" },
    { name: "Dr. James Harris", specialization: "ENT Specialist", image: "/images/doctor33.jpg" },
    { name: "Dr. Linda Clark", specialization: "Pediatric ENT", image: "/images/doctor34.jpg" },
    { name: "Dr. George Wright", specialization: "Otolaryngologist", image: "/images/doctor35.jpg" },
    { name: "Dr. Nancy Lewis", specialization: "ENT Surgeon", image: "/images/doctor36.jpg" }
  ],
  dermatology: [
    { name: "Dr. Mark Smith", specialization: "Dermatologist", image: "/images/doctor37.jpg" },
    { name: "Dr. Emily Williams", specialization: "Cosmetic Dermatologist", image: "/images/doctor38.jpg" },
    { name: "Dr. Anna Taylor", specialization: "Dermatology Specialist", image: "/images/doctor39.jpg" },
    { name: "Dr. Robert Johnson", specialization: "Dermatologist", image: "/images/doctor40.jpg" },
    { name: "Dr. Olivia Brown", specialization: "Pediatric Dermatologist", image: "/images/doctor41.jpg" },
    { name: "Dr. James Clark", specialization: "Dermatology Surgeon", image: "/images/doctor42.jpg" },
    { name: "Dr. Rachel Adams", specialization: "Skin Specialist", image: "/images/doctor43.jpg" },
    { name: "Dr. Michael White", specialization: "Cosmetic Dermatology", image: "/images/doctor44.jpg" },
    { name: "Dr. Linda Green", specialization: "Dermatology Specialist", image: "/images/doctor45.jpg" },
    { name: "Dr. Daniel Harris", specialization: "Dermatology Consultant", image: "/images/doctor46.jpg" }
  ],
  generalMedicine: [
    { name: "Dr. John Harris", specialization: "General Practitioner", image: "/images/doctor47.jpg" },
    { name: "Dr. Sarah Lewis", specialization: "Family Medicine", image: "/images/doctor48.jpg" },
    { name: "Dr. Daniel Scott", specialization: "Internal Medicine", image: "/images/doctor49.jpg" },
    { name: "Dr. Jessica Taylor", specialization: "General Medicine", image: "/images/doctor50.jpg" },
    { name: "Dr. Michael Johnson", specialization: "General Medicine", image: "/images/doctor51.jpg" },
    { name: "Dr. Olivia Walker", specialization: "Internal Medicine", image: "/images/doctor52.jpg" },
    { name: "Dr. Robert Anderson", specialization: "Family Medicine", image: "/images/doctor53.jpg" },
    { name: "Dr. Linda White", specialization: "General Practitioner", image: "/images/doctor54.jpg" },
    { name: "Dr. James Moore", specialization: "General Medicine", image: "/images/doctor55.jpg" },
    { name: "Dr. Sophia Evans", specialization: "Internal Medicine", image: "/images/doctor56.jpg" }
  ],
  neurology: [
    { name: "Dr. Richard Harris", specialization: "Neurologist", image: "/images/doctor57.jpg" },
    { name: "Dr. Michael Adams", specialization: "Neurologist", image: "/images/doctor58.jpg" },
    { name: "Dr. Sarah Williams", specialization: "Neuro Surgeon", image: "/images/doctor59.jpg" },
    { name: "Dr. Olivia Brown", specialization: "Neurology Specialist", image: "/images/doctor60.jpg" },
    { name: "Dr. Daniel King", specialization: "Neurophysiologist", image: "/images/doctor61.jpg" },
    { name: "Dr. George Scott", specialization: "Neurologist", image: "/images/doctor62.jpg" },
    { name: "Dr. Emily Lee", specialization: "Neurosurgeon", image: "/images/doctor63.jpg" },
    { name: "Dr. David White", specialization: "Neuro-oncologist", image: "/images/doctor64.jpg" },
    { name: "Dr. Sophia Harris", specialization: "Neurologist", image: "/images/doctor65.jpg" },
    { name: "Dr. William Brown", specialization: "Neuropsychologist", image: "/images/doctor66.jpg" }
  ],
  gynaecology: [
    { name: "Dr. Alice Johnson", specialization: "Obstetrician & Gynaecologist", image: "/images/doctor67.jpg" },
    { name: "Dr. Emma Williams", specialization: "Obstetrician", image: "/images/doctor68.jpg" },
    { name: "Dr. Sophia Brown", specialization: "Gynaecologist", image: "/images/doctor69.jpg" },
    { name: "Dr. Olivia Taylor", specialization: "Obstetrician & Gynaecologist", image: "/images/doctor70.jpg" },
    { name: "Dr. Maria Evans", specialization: "Gynaecologist", image: "/images/doctor71.jpg" },
    { name: "Dr. Jessica Clark", specialization: "Reproductive Endocrinologist", image: "/images/doctor72.jpg" },
    { name: "Dr. Hannah Adams", specialization: "Obstetrician", image: "/images/doctor73.jpg" },
    { name: "Dr. Lisa White", specialization: "Maternal-Fetal Medicine Specialist", image: "/images/doctor74.jpg" },
    { name: "Dr. Emily Harris", specialization: "Gynecology Surgeon", image: "/images/doctor75.jpg" },
    { name: "Dr. Sarah Green", specialization: "Gynaecologist", image: "/images/doctor76.jpg" }
  ],
  urology: [
    { name: "Dr. Thomas Miller", specialization: "Urologist", image: "/images/doctor77.jpg" },
    { name: "Dr. Richard Lee", specialization: "Urologic Surgeon", image: "/images/doctor78.jpg" },
    { name: "Dr. Elizabeth Harris", specialization: "Urologist", image: "/images/doctor79.jpg" },
    { name: "Dr. Michael Taylor", specialization: "Urologist", image: "/images/doctor80.jpg" },
    { name: "Dr. Andrew Green", specialization: "Urology Specialist", image: "/images/doctor81.jpg" },
    { name: "Dr. Sophia Scott", specialization: "Pediatric Urologist", image: "/images/doctor82.jpg" },
    { name: "Dr. Daniel Wilson", specialization: "Urology Surgeon", image: "/images/doctor83.jpg" },
    { name: "Dr. Olivia Davis", specialization: "Female Urologist", image: "/images/doctor84.jpg" },
    { name: "Dr. James Clark", specialization: "Urologist", image: "/images/doctor85.jpg" },
    { name: "Dr. Sarah Adams", specialization: "Urology Consultant", image: "/images/doctor86.jpg" }
  ]
}


const Department = () => {
  const { departmentName } = useParams();
  let departmentDoctors
  if (departmentName) {
    departmentDoctors = doctorsData[departmentName];
  }

  if (!departmentDoctors) {
    return <div>Department not found!</div>;
  }

  return (
    <div className="department-container">
      {/* Department Heading */}
      <div className="department-heading">
        <h1>{departmentName && departmentName?.charAt(0).toUpperCase() + departmentName.slice(1)}</h1>
        <p>Meet our expert doctors for {departmentName}</p>
      </div>

      {/* Doctor Cards */}
      <div className="doctor-list">
        {departmentDoctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-card-image">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="doctor-card-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
