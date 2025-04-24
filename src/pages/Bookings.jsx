import React, { useEffect } from 'react';
import AppointmentManager from '../features/booking-container/AppointmentManager';

const Bookings = () => {
  useEffect(() => {
    document.title = 'Booking';  
  }, []);  

  return (
    <div>
      <AppointmentManager />
    </div>
  );
};

export default Bookings;
