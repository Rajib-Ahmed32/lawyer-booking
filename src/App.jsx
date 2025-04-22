import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import './App.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Bookings from './pages/Bookings';
import LawyerProfile from './features/lawyer-details/LawyerProfile';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;
