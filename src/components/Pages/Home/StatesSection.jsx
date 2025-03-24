import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaStar, FaGlobe, FaUsers } from "react-icons/fa";

const statsData = [
  { icon: <FaUserGraduate size={50} className="text-blue-500" />, value: 1200, label: "Tutors" },
  { icon: <FaStar size={50} className="text-yellow-500" />, value: 8500, label: "Reviews" },
  { icon: <FaGlobe size={50} className="text-green-500" />, value: 35, label: "Languages" },
  { icon: <FaUsers size={50} className="text-purple-500" />, value: 50000, label: "Users" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-400">Platform Stats</h2>
      <div className="grid text-black grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            {stat.icon}
            <p className="text-3xl font-bold mt-4">
              {inView ? <CountUp start={0} end={stat.value} duration={2} separator="," /> : "0"}
            </p>
            <p className="text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
