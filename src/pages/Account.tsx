import React, { useEffect, useState } from 'react';
import '../styles/account.css';
import { api } from '../utils/api';

type User = {
    dob: number;
    email: string;
    firstname: string;
    gender: string;
    id: number;
    lastname: string;
    password: string;
    phoneNumber: string;
};

const Account = () => {
    const [maxDate, setMaxDate] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchUserData();
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setMaxDate(formattedDate);
    }, []);

    const fetchUserData = async () => {
        try {
            const userResponse = await api.get('user'); // assumes Authorization header is included automatically via axios interceptor
            setUser(userResponse?.data);
        } catch (error: any) {
            console.error(error?.response);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser((prev) => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        try {
            const response = await api.put('/user', user); // assumes token is sent automatically
            if (response.data.success) {
                alert("User updated successfully.");
            } else {
                alert("Failed to update user.");
            }
        } catch (error: any) {
            alert("Error updating user: " + (error?.response?.data?.message || "Unknown error"));
        }
    };

    if (!user) return <div className="loading">Loading account details...</div>;

    return (
        <div className="account-page">
            <h2>Account Details</h2>
            <form className="account-form" onSubmit={handleSubmit}>
                <div className="form-row single">
                    <label>Email (read-only)</label>
                    <input type="email" name="email" value={user.email} readOnly />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstname" value={user.firstname} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastname" value={user.lastname} onChange={handleChange} required/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" name='dob' max={maxDate} value={new Date(user.dob * 1000).toISOString().split('T')[0]}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (!value) {
                                    // Optional: set dob to null or a default
                                    return;
                                }
                                const timestamp = new Date(value).getTime();
                                if (!isNaN(timestamp)) {
                                    const date = timestamp / 1000;
                                    setUser((prev) => (prev ? { ...prev, dob: date } : prev));
                                }
                            }}
                            required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Gender</label>
                        <select name="gender" value={user.gender} onChange={handleChange} required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange} required/>
                    </div>
                </div>

                <div className="form-row single">
                    <button type="submit" className="save-button">Save Changes</button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

export default Account;
