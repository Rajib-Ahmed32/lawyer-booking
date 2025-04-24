import React from 'react';
import heroImage from '../../assets/banner-img-1.png'; 

const Hero = () => {
  return (
    <section 
      className="relative w-full px-3 max-w-6xl mx-auto bg-cover bg-center h-[500px] flex justify-center items-center text-white md:rounded-2xl overflow-hidden" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
    <div className="relative z-10 text-center max-w-[800px] p-5">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold mb-5 leading-snug">
          It avoids subjective claims or exaggeration that might raise red flags legally
        </h1>
        <p className="md:text-lg font-medium opacity-90 leading-relaxed">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>
    </section>
  );
};

export default Hero;