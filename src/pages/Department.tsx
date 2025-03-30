import React from 'react'
import { NavLink, useParams } from "react-router";
import '../styles/department.css';  // Include corresponding styles

const doctorsData = {
  cardiology: [
    { id: 1, name: "Dr. Subir Chatterjee", specialization: "Cardiologist", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 2, name: "Dr. Priyanka Ghosh", specialization: "Cardiology Specialist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 3, name: "Dr. Arunava Banerjee", specialization: "Heart Surgeon", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 4, name: "Dr. Debasish Mukherjee", specialization: "Cardiologist", image: "https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780268.jpg?t=st=1743323882~exp=1743327482~hmac=4c35284dc7755bacc88a447d8ca56014b29dd84f884e06056bf03fc55b1f8a35&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 5, name: "Dr. Sharmila Roy", specialization: "Cardiologist", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
  ],
  psychology: [
    { id: 6, name: "Dr. Rina Das", specialization: "Psychologist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 7, name: "Dr. Somnath Sen", specialization: "Psychiatrist", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T08:30:00Z", endTime: "2025-03-30T10:30:00Z" },
    { id: 8, name: "Dr. Swarnali Mitra", specialization: "Therapist", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T09:00:00Z", endTime: "2025-03-30T11:00:00Z" },
    { id: 9, name: "Dr. Kaushik Saha", specialization: "Clinical Psychologist", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 10, name: "Dr. Madhusree Ghosh", specialization: "Child Psychologist", image: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66965.jpg?t=st=1743324058~exp=1743327658~hmac=663697a562eb38b958258f55b6526e2713cb51632efa3aeb90e1b104779a2e69&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
  ],
  dental: [
    { id: 11, name: "Dr. Tanushree Choudhury", specialization: "Dentist", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 12, name: "Dr. Rajib Dutta", specialization: "Orthodontist", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 13, name: "Dr. Soumya Ghosh", specialization: "Dentist", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 14, name: "Dr. Nilima Banerjee", specialization: "Pediatric Dentist", image: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66965.jpg?t=st=1743324058~exp=1743327658~hmac=663697a562eb38b958258f55b6526e2713cb51632efa3aeb90e1b104779a2e69&w=996", startTime: "2025-03-30T08:30:00Z", endTime: "2025-03-30T10:30:00Z" },
    { id: 15, name: "Dr. Moumita Ray", specialization: "Periodontist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
  ],
  ent: [
    { id: 16, name: "Dr. Anirban Roy", specialization: "ENT Specialist", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 17, name: "Dr. Kalyani Das", specialization: "ENT Surgeon", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 18, name: "Dr. Arindam Saha", specialization: "ENT Consultant", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 19, name: "Dr. Sharmistha Ghosh", specialization: "Audiologist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T08:30:00Z", endTime: "2025-03-30T10:30:00Z" },
    { id: 20, name: "Dr. Amitava Roy", specialization: "ENT Specialist", image: "https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780268.jpg?t=st=1743323882~exp=1743327482~hmac=4c35284dc7755bacc88a447d8ca56014b29dd84f884e06056bf03fc55b1f8a35&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
  ],
  dermatology: [
    { id: 21, name: "Dr. Shubhojit Mitra", specialization: "Dermatologist", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 22, name: "Dr. Ananya Das", specialization: "Cosmetic Dermatologist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 23, name: "Dr. Rukmini Saha", specialization: "Dermatology Specialist", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 24, name: "Dr. Suman Mukherjee", specialization: "Dermatologist", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 25, name: "Dr. Priyanka Ghosh", specialization: "Pediatric Dermatologist", image: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66965.jpg?t=st=1743324058~exp=1743327658~hmac=663697a562eb38b958258f55b6526e2713cb51632efa3aeb90e1b104779a2e69&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
  ],
  "general medicine": [
    { id: 26, name: "Dr. Bikash Chatterjee", specialization: "General Practitioner", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 27, name: "Dr. Ananya Basu", specialization: "Family Medicine", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 28, name: "Dr. Arindam Roy", specialization: "Internal Medicine", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 29, name: "Dr. Sushmita Saha", specialization: "General Medicine", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 30, name: "Dr. Partha Ghosh", specialization: "General Medicine", image: "https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780268.jpg?t=st=1743323882~exp=1743327482~hmac=4c35284dc7755bacc88a447d8ca56014b29dd84f884e06056bf03fc55b1f8a35&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
  ],
  neurology: [
    { id: 31, name: "Dr. Kaushik Sen", specialization: "Neurologist", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 32, name: "Dr. Subhashis Banerjee", specialization: "Neurologist", image: "https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780268.jpg?t=st=1743323882~exp=1743327482~hmac=4c35284dc7755bacc88a447d8ca56014b29dd84f884e06056bf03fc55b1f8a35&w=996", startTime: "2025-03-30T08:30:00Z", endTime: "2025-03-30T10:30:00Z" },
    { id: 33, name: "Dr. Somnath Dey", specialization: "Neuro Surgeon", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T09:00:00Z", endTime: "2025-03-30T11:00:00Z" },
    { id: 34, name: "Dr. Rituparna Ghosh", specialization: "Neurology Specialist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
    { id: 35, name: "Dr. Sayan Chatterjee", specialization: "Neurophysiologist", image: "https://img.freepik.com/free-photo/doctors-day-cute-young-handsome-man-lab-coat-glasses-writing-notebook_140725-162888.jpg?t=st=1743324113~exp=1743327713~hmac=d8c4cca5027b033b169df28956e3d6d560959a2c3c0351c8cc601e0438540e01&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
  ],
  gynaecology: [
    { id: 36, name: "Dr. Pradipta Ghosh", specialization: "Obstetrician & Gynaecologist", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 37, name: "Dr. Subhra Banerjee", specialization: "Obstetrician", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 38, name: "Dr. Pritha Roy", specialization: "Gynaecologist", image: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66965.jpg?t=st=1743324058~exp=1743327658~hmac=663697a562eb38b958258f55b6526e2713cb51632efa3aeb90e1b104779a2e69&w=996", startTime: "2025-03-30T08:30:00Z", endTime: "2025-03-30T10:30:00Z" },
    { id: 39, name: "Dr. Surabhi Das", specialization: "Obstetrician & Gynaecologist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 40, name: "Dr. Mitali Saha", specialization: "Gynaecologist", image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?t=st=1743323969~exp=1743327569~hmac=2395b1613c4d7d252fce5460acb619d5f02496b2f51f54510978212d8d477117&w=740", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
  ],
  urology: [
    { id: 41, name: "Dr. Ranjan Banerjee", specialization: "Urologist", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1743323763~exp=1743327363~hmac=e47991f9fe3e99ccb17971fd26e891ba0cf3b5848798b4e1024a614d4e57a23e&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 42, name: "Dr. Partha Mukherjee", specialization: "Urologic Surgeon", image: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?t=st=1743323416~exp=1743327016~hmac=b8a64c75745537e8affc31409fef66db77246641c7ebc250e263a373cd3fde1c&w=740", startTime: "2025-03-30T08:30:00Z", endTime: "2025-03-30T10:30:00Z" },
    { id: 43, name: "Dr. Manas Dey", specialization: "Urologist", image: "https://img.freepik.com/free-photo/nurse-portrait-hospital_23-2150780268.jpg?t=st=1743323882~exp=1743327482~hmac=4c35284dc7755bacc88a447d8ca56014b29dd84f884e06056bf03fc55b1f8a35&w=996", startTime: "2025-03-30T09:00:00Z", endTime: "2025-03-30T11:00:00Z" },
    { id: 44, name: "Dr. Arka Saha", specialization: "Urologist", image: "https://img.freepik.com/free-photo/doctors-day-cute-young-handsome-man-lab-coat-glasses-writing-notebook_140725-162888.jpg?t=st=1743324113~exp=1743327713~hmac=d8c4cca5027b033b169df28956e3d6d560959a2c3c0351c8cc601e0438540e01&w=996", startTime: "2025-03-30T08:00:00Z", endTime: "2025-03-30T10:00:00Z" },
    { id: 45, name: "Dr. Sudipta Sen", specialization: "Urologist", image: "https://img.freepik.com/free-photo/young-woman-doctor-with-stethoscope-hospital_1303-20691.jpg?t=st=1743323521~exp=1743327121~hmac=fe12fe1610ccd0fbdbab4afc791b538f3c5c1f3103edf11c596af29b28e84aed&w=996", startTime: "2025-03-30T10:00:00Z", endTime: "2025-03-30T12:00:00Z" },
  ],
};


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
      <div className="hero-section">
        <div className="hero-text">
          <h1>{departmentName && (departmentName === 'ent' ? departmentName?.toUpperCase() : departmentName?.charAt(0).toUpperCase() + departmentName.slice(1))}</h1>
          <p>Your health is our priority. Explore our specialized department.</p>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="department-doctor-list">
        {departmentDoctors.map((doctor: any, index: number) => (
          // <NavLink className="link" to={`doctor/${doctor.id}`} end>
          <NavLink className="link" to={`/doctor/${doctor.id}`} end>
            <div key={index} className="department-doctor-card">
              <div className="department-doctor-card-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="department-doctor-card-info">
                <h3>{doctor.name}</h3>
                <p className='doctor-specialization'>{doctor.specialization}</p>
                <p className='doctor-timings'>{new Date(doctor.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()} - {new Date(doctor.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Department;
