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
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Doctors from './pages/Doctors';
import Account from './pages/Account';

const App = () => {
  console.log('text ===============================');

  return (
    <Provider store={store}>
      <div className='root'>
        <Navbar />
        <div className='bodyContainer'>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="departments" element={<Departments />} />
            <Route path="department/:departmentSlug" element={<Department />} />
            <Route path="doctor/:doctorId" element={<Doctor />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  )
}

export default App