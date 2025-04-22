import React from "react";

const LawyerInfo = ({ lawyer }) => (
  <div className="bg-white border-1 border-[#D1D5DB] mt-6 p-6 rounded-lg shadow flex flex-col md:flex-row items-center gap-6">
    <div className="bg-gray-300 w-80 md:w-60 h-60 rounded-md flex-shrink-0"></div>
    <div className="flex-1">
      <button className="bg-[#176AE51A] text-[#176AE5] text-xs px-3 py-1 rounded-full">
        {lawyer.experience}
      </button>
      <h3 className="text-3xl font-extrabold text-[#141414] my-3">
        {lawyer.name}
      </h3>
      <div className="flex gap-8 font-semibold text-[#14141499]">
        <p>{lawyer.specialty}</p>
        <p className="">License No: {lawyer.license}</p>
      </div>

      <div className="mt-3 flex gap-8">
        <p className="font-bold mb-1 text-[#141414B3]">Availability</p>
        <div className="flex gap-2 flex-wrap">
          {lawyer.availability.length > 0 ? (
            lawyer.availability.map((day, idx) => (
              <span
                key={idx}
                className="bg-[#FFA0001A] text-[#FFA000] px-3 py-1 rounded-full text-sm"
              >
                {day}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-500">
              No availability listed
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 text-[#141414B3] font-semibold">
        Consultation Fee:{" "}
        <span className="text-[#0EA106] ml-4">
           {lawyer.fee || "Not Available"}
        </span>
      </p>
    </div>
  </div>
);

export default LawyerInfo;
