import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyTutorials = () => {


    const [tutors,setTutors] = useState([]);

    axios.get('https://assignment-11-server-pied-nu.vercel.app/tutors',{withCredentials:true})
    .then(res => setTutors(res.data))



    const handleDelete = (id) =>  {
        (id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",  
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-pied-nu.vercel.app/tutors/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    (data)
                    Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
                    setTutors(tutors.filter(e => e._id !== id));

                });
            }
        });
           
    }
    

    return (
        <div className='mb-10 mt-10'>
            <h1>Tutors Added : {tutors.length} </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>

                            <th>Price</th>
                            <th>Language</th>
                            <th>Description</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
            
                        {
                            tutors.map((tutor) => (
                                
                                <tr className=" ">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="">
                                                <img
                                                    src={tutor.image}
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                                
                                            </div>
                                            <div>
                                                <div className="font-semibold ">{tutor.name}</div>
                                                <div className="text-sm ">{tutor.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6  py-4 ">${tutor.price}</td>
                                    <td className="px-6  py-4 ">{tutor.language}</td>
                                    <td className="px-6  py-4 ">{tutor.description}</td>
                                    <td className="px-6  py-4 ">{tutor.review}</td>
                                    <td className="px-6  py-4 flex gap-4">
                                        <Link to={`/update/${tutor._id}`}>
                                            <button className="bg-gradient-to-r cursor-pointer from-teal-500 to-cyan-500  px-4 py-2 rounded-md hover:from-cyan-500 hover:to-teal-500 transition duration-300">
                                                Update
                                            </button>
                                        </Link>

                                        <button onClick={() => handleDelete(tutor._id)} className="bg-gradient-to-r cursor-pointer from-red-500 to-orange-500  px-4 py-2 rounded-md hover:from-orange-500 hover:to-red-500 transition duration-300">
                                         

                                            Delete
                                        </button>

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