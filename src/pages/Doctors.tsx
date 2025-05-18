import React, { useEffect, useState } from 'react'
import { api } from '../utils/api';
import { NavLink } from 'react-router';
import { convertToAmPm } from '../helpers/convertTime';

function Doctors() {
    const [doctors, setDoctors] = useState<any>(null);
    useEffect(() => {
        getDoctors();
    }, [])

    const getDoctors = async () => {
        try {
            const doctorsResponse = await api('doctors');
            console.log('====================================');
            console.log(doctorsResponse?.data);
            console.log('====================================');
            setDoctors(doctorsResponse?.data?.data);
        } catch (error: any) {
            console.error(error?.response);
        }
    }
    return (
        <div className='doctorsContainer'>
            {doctors ?
                <div className="department-doctor-list">
                    {doctors.map((doctor: any, index: number) => (
                        // <NavLink className="link" to={`doctor/${doctor.id}`} end>
                        <NavLink className="link" to={`/doctor/${doctor?.doctor_id}`} key={index} end>
                            <div key={index} className="department-doctor-card">
                                <div className="department-doctor-card-image">
                                    <img src={doctor?.profile_image} alt={doctor?.name} />
                                </div>
                                <div className="department-doctor-card-info">
                                    <h3>{doctor?.name}</h3>
                                    <p className='doctor-specialization'>{doctor?.department?.name}</p>
                                    <p className='doctor-timings'>{convertToAmPm(doctor?.start_time)} - {convertToAmPm(doctor?.end_time)}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
                :
                <div className="department-doctor-card-info">
                    <h3>No doctors available for this department</h3>
                </div>
            }
        </div>
    )
}

export default Doctors
