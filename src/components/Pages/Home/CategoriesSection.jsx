import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Sample language data
const languages = [
  { id: 1, name: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { id: 2, name: "Spanish", flag: "https://flagcdn.com/w40/es.png" },
  { id: 3, name: "French", flag: "https://flagcdn.com/w40/fr.png" },
  { id: 4, name: "German", flag: "https://flagcdn.com/w40/de.png" },
  { id: 5, name: "Chinese", flag: "https://flagcdn.com/w40/cn.png" },
  { id: 6, name: "Japanese", flag: "https://flagcdn.com/w40/jp.png" },
  { id: 7, name: "Italian", flag: "https://flagcdn.com/w40/it.png" },
  { id: 8, name: "Portuguese", flag: "https://flagcdn.com/w40/br.png" },
  { id: 9, name: "Arabic", flag: "https://flagcdn.com/w40/sa.png" },
];

const LanguagesSection = () => {
  return (
    <div className="w-full text-black max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Find Tutors by Language
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((language) => (
          <Link
            to={`/findTutors/${language.name}`}
            key={language.id}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <img src={language.flag} alt={language.name} className="w-12 h-8 rounded-md" />
              <p className="text-lg font-semibold">{language.name} Tutor</p>
            </div>
            <FaArrowRight className="text-gray-500" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
