import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppointmentCard from "./AppointmentCard";
import EmptyState from "./EmptyState";

const AppointmentManager = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleCancel = (id) => {
    const updated = appointments.filter((l) => l.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
    toast.error("Appointment successfully cancelled.");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 py-4 bg-white rounded">
      {appointments.length > 0 ? (
        appointments.map((lawyer) => (
          <AppointmentCard key={lawyer.id} lawyer={lawyer} handleCancel={handleCancel} />
        ))
      ) : (
        <EmptyState handleGoToHome={handleGoToHome} />
      )}
    </div>
  );
};

export default AppointmentManager;
