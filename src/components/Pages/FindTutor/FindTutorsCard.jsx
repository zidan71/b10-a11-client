import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FindTutorsCard = ({ tutor }) => {
  const { name, image, language, review, description } = tutor;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tutor Image */}
      <div className="relative">
        <img src={image} className="w-full h-56 object-cover" alt={name} />

        {/* Hover Effect for Description */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 text-white p-6 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : ''
          }`}
        >
          <p className="text-sm text-center">{description}</p>
        </div>
      </div>

      {/* Tutor Info */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{language} Tutor</p>
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <span className="text-gray-700 font-semibold ml-2">{review} Reviews</span>
        </div>
      </div>

      {/* View Details Button (Always Clickable) */}
      <div className="p-4 ">
        <button className="w-full cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FindTutorsCard;
