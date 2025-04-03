import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import FindTutorsCard from "./FindTutorsCard";

const FindTutor = () => {
  const [searchText, setSearchText] = useState("");
  const [tutors, setTutors] = useState([]);

  
  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = (query = "") => {
    axios.get(`https://assignment-11-server-pied-nu.vercel.app/tutors?search=${query}`,{withCredentials:true})
      .then((res) => setTutors(res.data))
      .catch((error) => console.error("Error fetching tutors:", error));
  };

  const handleSearch = () => {
    fetchTutors(searchText);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Find Tutors</h1>

      {/* Search Bar */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by language..."
          className="p-3 border border-gray-300 rounded-lg shadow-sm w-80"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          <FaSearch />
        </button>
      </div>

      {/* Tutors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.length > 0 ? (
          tutors.map((tutor) => <FindTutorsCard key={tutor._id} tutor={tutor} />)
        ) : (
          <p className="text-center text-gray-500">No tutors found</p>
        )}
      </div>
    </div>
  );
};

export default FindTutor;
