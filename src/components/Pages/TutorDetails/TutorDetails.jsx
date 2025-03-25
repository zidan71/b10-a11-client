import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaChalkboardTeacher, FaDollarSign, FaGlobe } from 'react-icons/fa';

const TutorDetails = () => {
    const tutor = useLoaderData();
    const { name, image, language, description, price, review } = tutor;

    return (
        <div className="max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
            {/* Tutor Image */}
            <div className="w-full md:w-1/2">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Tutor Information */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-500 mt-1 flex items-center">
                        <FaChalkboardTeacher className="mr-2 text-blue-500" /> {language} Tutor
                    </p>
                    <p className="text-gray-600 mt-4">{description}</p>
                </div>

                {/* Price & Review */}
                <div className="mt-6 flex justify-between items-center">
                    <p className="text-lg font-semibold text-green-600 flex items-center">
                        <FaDollarSign className="mr-2" /> ${price} / hr
                    </p>
                    <p className="flex items-center text-gray-700">
                        <FaStar className="text-yellow-500 mr-1" /> {review} Reviews
                    </p>
                </div>

                {/* Book Now Button */}
                <button className="mt-6 w-full cursor-pointer bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default TutorDetails;
