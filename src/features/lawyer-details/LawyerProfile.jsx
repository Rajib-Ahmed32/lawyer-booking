import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lawyersData } from '../../Data/lawyersData';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProfileHeader from './ProfileHeader';
import LawyerInfo from './LawyerInfo';
import AppointmentSection from './AppointmentSection';

const LawyerProfile = () => {
  const { id } = useParams();
  const lawyer = lawyersData.find((l) => l.id === parseInt(id));
  const navigate = useNavigate();

  if (!lawyer) return <p>Lawyer not found</p>;

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

  return (
    <div className="max-w-6xl mx-auto p-4 pt-8">
      <ProfileHeader />
      <LawyerInfo lawyer={lawyer} />
      <AppointmentSection onBook={handleBooking} />
    </div>
  );
};

export default LawyerProfile;
