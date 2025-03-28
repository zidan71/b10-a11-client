import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddTutorials = () => {

    const navigate = useNavigate()
    const {users} = useContext(AuthContext)
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const form = e.target
   const name = form.name.value;
   const email = form. email.value;

 
   const language = form.language.value;
   const price = form.price.value;
   const description = form.description.value;
   const intReview = form.review.value;
   const review = parseInt(intReview)
   const image = form.image.value;

   const tutorialData = {name,image,email,language,price,description,review}


    console.log("Submitted Tutorial Data:", tutorialData);

    axios.post('http://localhost:5000/tutors',tutorialData,{withCredentials:true})
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire("Added", "Your Information Added Successfully", "success");
        navigate('/myTutorials')
     }
    })
    .catch(err=> {
      toast.error('your token is either destroyed or you donot have it')
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
              defaultValue={users?.displayName}
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
              defaultValue={users?.email}
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
              value={0}
            />
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">Submit Tutorial</button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
