import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import lawyerIcon from "../../assets/success-doctor.png";
import review from "../../assets/success-review.png";
import patients from "../../assets/success-patients.png";
import staff from "../../assets/success-staffs.png";

const stats = [
  {
    icon: lawyerIcon,
    count: 199,
    label: 'Total Lawyers',
  },
  {
    icon: review,
    count: 467,
    label: 'Client Reviews',
  },
  {
    icon: patients,
    count: 1900,
    label: 'Cases Initiated',
  },
  {
    icon: staff,
    count: 300,
    label: 'Staff Members',
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-16 bg-white border-t border-gray-200">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-4xl font-bold text-[#0F0F0F] mb-3">
          We Provide Best Law Services
        </h2>
        <p className="text-[#0F0F0F] max-w-4xl mx-auto text-base">
          Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
          >
            <div className="flex items-center mb-3">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {inView ? <CountUp end={stat.count} duration={4} /> : '0'}+
            </div>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
