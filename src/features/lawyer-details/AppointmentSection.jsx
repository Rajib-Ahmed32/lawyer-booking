import React from "react";

const AppointmentSection = ({ onBook }) => (
  <div className="bg-white border-1 border-[#D1D5DB] mt-6 p-6 rounded-lg shadow text-center">
    <h3 className="text-2xl font-bold text-[#141414] mb-4">
      Book an Appointment
    </h3>

    <div className="mb-4 flex items-center justify-between flex-wrap border-y border-dashed border-[#D1D5DB] py-4">
      <div className="text-lg text-[#141414]">Availability</div>
      <div className="text-sm bg-green-100 text-green-600 px-4 py-1 rounded-full mt-2 md:mt-0">
        Lawyer Available Today
      </div>
    </div>
    <div className="bg-[#FFA0001A] my-6 text-[#FFA000] px-4 py-2 rounded-none md:rounded-full w-full lg:w-[80%] md:w-auto text-center md:text-left">
      ⚠️ Due to high patient volume, we are currently accepting appointments for
      today only.
    </div>
    <button
      onClick={onBook}
      className="bg-[#0EA106] text-white font-bold px-4 py-2 w-full rounded-full mt-4 hover:bg-green-700 transition text-sm"
    >
      Book Appointment Now
    </button>
  </div>
);

export default AppointmentSection;
