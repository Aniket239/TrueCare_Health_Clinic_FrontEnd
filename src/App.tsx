import React from 'react'
import './styles/GlobalStyle.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Departments from './pages/Departments';
import Department from './pages/Department';
import Doctor from './pages/Doctor';

const App = () => {
  console.log('text ===============================');

  return (
    <div className='root'>
      <Navbar />
      <div className='bodyContainer'>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="departments" element={<Departments />} />
          <Route path="department/:departmentName" element={<Department />} />
          <Route path="doctor/:doctorId" element={<Doctor />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App