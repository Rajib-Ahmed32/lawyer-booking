import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ChartSection from "./ChartSection";
import AppointmentCard from "./AppointmentCard";
import EmptyState from "./EmptyState";

const AppointmentManager = () => {
    const colorCache = {};

    const getColor = (name) => {
      if (!colorCache[name]) {
        const hue = Math.floor(Math.random() * 360);
        colorCache[name] = `hsl(${hue}, 70%, 60%)`; // pastel style
      }
      return colorCache[name];
    };
    
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

  const chartData = appointments.map((lawyer) => ({
    name: lawyer.name,
    fee: isNaN(Number(lawyer.fee.replace(/[^0-9.-]+/g, "")))
      ? 0
      : parseFloat(lawyer.fee.replace(/[^0-9.-]+/g, "")),
  }));

 
  const WaveBar = ({ x, y, width, height, payload }) => {
    const fill = getColor(payload.name); // unique color per name
    if (height <= 0) return null;
  
    const wavePath = `
      M${x},${y + height}
      C${x + width * 0.25},${y + height - 30}
       ${x + width * 0.25},${y + 10}
       ${x + width / 2},${y}
      C${x + width * 0.75},${y + 10}
       ${x + width * 0.75},${y + height - 30}
       ${x + width},${y + height}
      Z
    `;
  
    return <path d={wavePath} fill={fill} />;
  };
  

  return (
    <div className="max-w-5xl mx-auto mt-10 py-4 bg-white rounded">
      {chartData.length > 0 && (
        <ChartSection chartData={chartData} WaveBar={WaveBar} />
      )}

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
