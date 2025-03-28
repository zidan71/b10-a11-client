import React, { useState } from 'react';
import {  FaChalkboardTeacher, FaDollarSign } from 'react-icons/fa';

import Swal from 'sweetalert2';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const MyBookedTutor = () => {

//  const tutors = useLoaderData()  
    const [tutors,setTutors] = useState([])

    axios.get(`http://localhost:5000/bookTutors`,{withCredentials:true})
    .then(res => setTutors(res.data))

    const handleReview = async (tutorId) => {
        try {
            const response = await axios.put(`http://localhost:5000/tutors/review/${tutorId}`);
            console.log('Review done', response.data);
            Swal.fire("Success", "Review Done", "success");

        } catch (error) {
            console.error('Error happened', error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                My Booked Tutors ({tutors.length})
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tutors.map((tutor) => (
                    <div key={tutor._id} className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                        <img src={tutor.image} alt={tutor.name} className="w-full h-56 object-cover" />

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
                            <p className="text-sm text-gray-500 flex items-center">
                                <FaChalkboardTeacher className="mr-2 text-blue-500" /> {tutor.language} Tutor
                            </p>

                            <p className="text-lg font-semibold text-green-600 flex items-center mt-2">
                                <FaDollarSign className="mr-2" /> ${tutor.price} / hr
                            </p>

                            <button
                                onClick={() => handleReview(tutor.tutorId)}
                                className="mt-4 cursor-pointer w-full bg-yellow-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                            >
                                Leave Review
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookedTutor;
