import React, { useState, useEffect } from "react";
import { lawyersData } from "../../Data/lawyersData";
import LawyerCard from "./LawyerCard";
import GlobalLoader from "../loading/GlobalLoader"; 

const Lawyers = () => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true); 
  const visibleLawyers = showAll ? lawyersData : lawyersData.slice(0, 6);

  
  useEffect(() => {
    setLoading(false); 
  }, []); 

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {loading ? (
        <GlobalLoader /> 
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Our Best Lawyers</h2>
          <p className="text-[#0F0F0FCC] text-center my-5 px-7 md:px-12">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience. Whether it's a routine
            checkup or urgent consultation, book appointments in minutes and receive
            quality care you can trust.
          </p>
          <div className="flex flex-wrap gap-8">
            {visibleLawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
          {!showAll && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="bg-[#0EA106] text-white text-bold px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                Show All Lawyers
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Lawyers;
