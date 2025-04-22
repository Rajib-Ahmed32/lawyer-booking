import React from "react";
import { Link } from "react-router-dom";

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="border bg-white border-[#D1D5DB] py-8 rounded-lg w-full lg:w-[48%] flex flex-col items-center md:flex-row justify-center md:items-start gap-10 md:gap-12">
      <div className="bg-gray-300 h-40 w-40 rounded"></div>
      <div className="flex flex-col justify-between">
        <div className="flex gap-2 mb-2">
          <button className="bg-[#09982F1A] text-[#09982F] text-xs px-3 py-1 rounded-full">
            {lawyer.status}
          </button>
          <button className="bg-[#176AE51A] text-[#176AE5] text-xs px-3 py-1 rounded-full">
            {lawyer.experience}
          </button>
        </div>
        <h3 className="font-extrabold text-2xl my-2">{lawyer.name}</h3>
        <p className="text-lg text-[#0F0F0F99]">{lawyer.specialty}</p>
        <p className="text-[#0F0F0FB3] text-sm mb-2">
          &reg; License No: {lawyer.license}
        </p>
        <Link
          to={`/lawyer/${lawyer.id}`}
          className="mt-3 bg-[#176AE533] text-[#176AE5] w-full py-1.5 rounded-full text-sm text-center transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;
