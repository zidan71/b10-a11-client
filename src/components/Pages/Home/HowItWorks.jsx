import React from "react";
import { FaSearch, FaCalendarCheck, FaCreditCard, FaChalkboardTeacher } from "react-icons/fa";

const steps = [
  { icon: <FaSearch size={40} className="text-blue-500" />, title: "Find a Tutor", desc: "Browse tutors by subject, country, or language." },
  { icon: <FaCalendarCheck size={40} className="text-green-500" />, title: "Book a Session", desc: "Select a date and time that fits your schedule." },
  { icon: <FaCreditCard size={40} className="text-purple-500" />, title: "Make Payment", desc: "Securely pay for your session with ease." },
  { icon: <FaChalkboardTeacher size={40} className="text-orange-500" />, title: "Start Learning", desc: "Join the session and improve your skills!" },
];

const HowItWorks = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 bg-gray-100 text-black mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How It Works?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
            {step.icon}
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
