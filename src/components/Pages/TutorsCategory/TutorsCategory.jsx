import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const TutorsCategory = () => {
  const tutors = useLoaderData(); // Get data from loader

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Tutors for {tutors.length > 0 ? tutors[0].language : "this category"}
      </h1>

      {tutors.length === 0 ? (
        <p className="text-center text-gray-500">No tutors available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="bg-white shadow-lg rounded-lg p-6">
              <img src={tutor.image} alt={tutor.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-bold mt-4">{tutor.name}</h3>
              <p className="text-gray-500">{tutor.language} Tutor</p>
            <div className="flex justify-between items-center">
            <p className="text-green-600 font-semibold">${tutor.price} / hr</p>
           <div className="flex items-center gap-3">
           <FaStar className="text-yellow-500"></FaStar>
           <p className="text-yellow-600 font-semibold">  {tutor.review} </p>
           </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorsCategory;
