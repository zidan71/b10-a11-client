import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import ThemeToggle from "../ThemeToggle";
import { motion } from "framer-motion";
import img from "../../assets/121.jpg"; 
import img1 from "../../assets/satisified-muslim-college-student-with-notepad-papers.jpg"; 
import img2 from "../../assets/modern-muslim-woman-hijab-office-room.jpg"; 
import img3 from "../../assets/front-view-mother-helping-kid-with-homework.jpg"; 

const links = (
  <>
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/findTutors"}>Find tutors</NavLink>
    </li>
    <li>
      <NavLink to={"/addTutorials"}>Add Tutorials</NavLink>
    </li>
    <li>
      <NavLink to={"/myTutorials"}>My Tutorials</NavLink>
    </li>
    <li>
      <NavLink to={"/myBookedTutors"}>My booked tutors</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const [scrolling, setScrolling] = useState(false);
  const [currentText, setCurrentText] = useState("Welcome to TutorHive!");
  const [backgroundImage, setBackgroundImage] = useState(img);

  const texts = [
    { text: "Welcome to TutorHive!", img: img },
    { text: "Find the best tutors here.", img: img1 },
    { text: "Start your learning journey.", img: img2 },
    { text: "Join our tutor community!", img: img3 },
  ];

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = texts.findIndex(item => item.text === prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        setBackgroundImage(texts[nextIndex].img); // Change background image with text
        return texts[nextIndex].text;
      });
    }, 3000);

    return () => clearInterval(textChangeInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      toast.success("Successfully logged out");
      logOut();
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-gray-900 bg-opacity-90 shadow-lg" : "bg-transparent"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">TutorHive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />

          {users?.email ? (
            <div className="flex items-center">
              <img
                className="w-10 h-10 object-cover mr-2 rounded-full cursor-pointer"
                src={users?.photoURL}
                alt={users?.displayName || "User Profile"}
                title={users?.displayName}
              />
              <button onClick={handleLogout} className="btn btn-warning">
                Log-out
              </button>
            </div>
          ) : (
            <Link to={"/login"} className="btn btn-error">
              Login
            </Link>
          )}
        </div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center"
        key={currentText} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {currentText}
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
      >
        <Link to="/findTutors" className="btn btn-primary text-white">
          Find Tutor
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
