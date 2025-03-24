import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyTutorials = () => {

    const tutors = useLoaderData()

    return (
        <div>
            <h1>Tutors Added : {tutors.length} </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tutors.map((tutor) => (
                                <tr className="hover:bg-gray-50  transition duration-200">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={tutor.photo}
                                                    alt={tutor.photo}
                                                    
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{tutor.name}</div>
                                                <div className="text-sm text-gray-500">{tutor.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">${tutor.price}</td>
                                    <td className="px-6 py-4 text-gray-900">{tutor.language}</td>
                                    <td className="px-6 py-4">
                                        <Link to=''>
                                            <button className="bg-gradient-to-r cursor-pointer from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-md hover:from-cyan-500 hover:to-teal-500 transition duration-300">
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyTutorials;