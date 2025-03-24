import React from "react";

const AddTutorials = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(e.target); // Extract form data
    const tutorialData = Object.fromEntries(formData.entries()); // Convert FormData to object

    tutorialData.review = "0";

    console.log("Submitted Tutorial Data:", tutorialData);


    fetch('http://localhost:5000/tutors',{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(tutorialData)

    })
    .then(res => res.json())
    .then(data => console.log(data))

};

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Add a New Tutorial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium text-black">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-black placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-black">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-black placeholder-gray-500"
              required
            />
          </div>

          {/* Tutorial Image */}
          <div>
            <label className="block font-medium text-black">Upload Tutorial Image</label>
            <input
              type="text"
              name="image"
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
              className="input input-bordered w-full text-black placeholder-gray-500"
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
              className="input input-bordered w-full text-black placeholder-gray-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-black">Description</label>
            <textarea
              name="description"
              placeholder="Enter a brief description of the tutorial"
              className="textarea textarea-bordered w-full text-black placeholder-gray-500"
              required
            ></textarea>
          </div>

          {/* Review (Hidden - Default: 0) */}
          <input type="hidden" name="review" value="0" />

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">Submit Tutorial</button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
