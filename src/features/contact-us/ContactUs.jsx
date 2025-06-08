import React from "react";

const ContactUs = () => {
  return (
    <section className="max-w-md mx-auto my-12 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-2">Contact Us</h2>
      <p className="text-center text-gray-600 mb-6">
        Have questions or need to book a consultation? Send us a message.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#0ea106] text-white p-3 rounded-md hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
