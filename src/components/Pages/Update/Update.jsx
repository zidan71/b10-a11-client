import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {

    const { users } = useContext(AuthContext)

    const update = useLoaderData()

    const {_id,review} = update;
    (_id)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const review = form.review.value;
        const image = form.image.value;

        const tutorialData = { name, image, email, language, price, description, review }



        ("Submitted Tutorial Data:", tutorialData);

        fetch(`https://assignment-11-server-pied-nu.vercel.app/tutors/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tutorialData)
        })
            .then(res => res.json())
            .then(data => {
                (data)
                if (data.modifiedCount) {
                    ('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                        
                    });
                    navigate(-1)
                }
            })

    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">Add a New Tutorial</h2>
                <form onSubmit={handleSubmit} className="space-y-4 text-white">
                    {/* Name */}
                    <div>
                        <label className="block font-medium text-black">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={users?.displayName}
                            placeholder="Enter your name"
                            className="input input-bordered w-full text-white placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium text-black">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={users?.email}
                            placeholder="Enter your email"
                            className="input input-bordered w-full text-white placeholder-gray-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-black">Upload Tutorial Image</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={users?.photoURL}
                            placeholder=" image url"
                            className="file-input  file-input-bordered w-full text-white"
                            required
                        />
                    </div>

                    {/* Language */}
                    <div>
                        <label className="block font-medium text-black">Language</label>
                        <input
                            type="text"
                            name="language"
                            placeholder="Enter tutorial language (e.g., English, Spanish)"
                            className="input input-bordered w-full text-white placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block font-medium text-black">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price in USD"
                            className="input input-bordered w-full text-white placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium text-black">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter a brief description of the tutorial"
                            className="textarea textarea-bordered w-full text-white placeholder-gray-500"
                            required
                        ></textarea>
                    </div>

                    {/* Review (Hidden - Default: 0) */}
                    <label className="block font-medium text-black">Rating</label>

          <input
              type="number"
              name="review"
              placeholder="Enter the rating"
              className="input input-bordered w-full text-white placeholder-gray-500"
              required
              value={review}
            />

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;