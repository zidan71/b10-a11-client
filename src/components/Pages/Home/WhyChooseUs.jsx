import React from "react";
import { FaUserTie, FaShieldAlt, FaChalkboardTeacher, FaClock } from "react-icons/fa";

const features = [
  { icon: <FaUserTie size={40} className="text-blue-500" />, title: "Expert Tutors", desc: "Highly qualified tutors from around the world." },
  { icon: <FaShieldAlt size={40} className="text-green-500" />, title: "Secure Payments", desc: "Safe and easy payment options for hassle-free booking." },
  { icon: <FaChalkboardTeacher size={40} className="text-purple-500" />, title: "Diverse Subjects", desc: "Tutors available for multiple subjects and languages." },
  { icon: <FaClock size={40} className="text-orange-500" />, title: "Flexible Scheduling", desc: "Book sessions at your preferred time with ease." },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
