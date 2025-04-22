import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lawyersData } from '../../Data/lawyersData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProfileHeader from './ProfileHeader';
import LawyerInfo from './LawyerInfo';
import AppointmentSection from './AppointmentSection';
import GlobalLoader from '../loading/GlobalLoader';

const LawyerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isAvailableToday, setIsAvailableToday] = useState(false);

useEffect(() => {
  const timeout = setTimeout(() => {
    const found = lawyersData.find((l) => l.id === parseInt(id));
    setLawyer(found);
    setLoading(false);

    if (found) {
      const today = new Date().toLocaleString('en-US', { weekday: 'long' });
      setIsAvailableToday(found.availability.includes(today));
    }
  }, 200);

  return () => clearTimeout(timeout);
}, [id]);

  
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async loading, like API
    const timeout = setTimeout(() => {
      const found = lawyersData.find((l) => l.id === parseInt(id));
      setLawyer(found);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [id]);

  const handleBooking = () => {
    const existing = JSON.parse(localStorage.getItem('appointments')) || [];
    const alreadyBooked = existing.find((l) => l.id === lawyer.id);

    if (alreadyBooked) {
      toast.warning('You have already booked this lawyer.');
      return;
    }

    const updatedAppointments = [...existing, lawyer];
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    toast.success('Your appointment has been successfully booked.');
    navigate('/bookings');
  };

  if (loading) return <GlobalLoader />;
  if (!lawyer) return <p className="text-center text-red-500">Lawyer not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 pt-8">
      <ProfileHeader />
      <LawyerInfo lawyer={lawyer} />
      <AppointmentSection onBook={handleBooking} isAvailableToday={isAvailableToday} />
    </div>
  );
};

export default LawyerProfile;
